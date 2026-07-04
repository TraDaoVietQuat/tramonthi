/**
 * seed-demo.ts — Tạo dữ liệu hoạt động mẫu cho dashboard giảng viên/admin
 * Chạy: npx ts-node --compiler-options {"module":"CommonJS"} prisma/seed-demo.ts
 * Hoặc:  npm run db:demo
 */
import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function daysAgo(days: number) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

async function main() {
  console.log("📊 TramOnThi – Tạo dữ liệu mẫu...\n");

  const pass = await bcrypt.hash("Student@2026", 10);

  // ── 1. Tạo thêm 6 học sinh mẫu ──────────────────────────────────
  const studentSeed = [
    { name: "Trần Thị Lan",     email: "hoc.sinh@tramongthi.edu.vn" },  // đã có sẵn
    { name: "Nguyễn Minh Khoa", email: "khoa.nguyen@student.tramongthi.edu.vn" },
    { name: "Phạm Thị Thu",     email: "thu.pham@student.tramongthi.edu.vn" },
    { name: "Lê Hoàng Nam",     email: "nam.le@student.tramongthi.edu.vn" },
    { name: "Đỗ Văn Hùng",      email: "hung.do@student.tramongthi.edu.vn" },
    { name: "Vũ Thị Hà",        email: "ha.vu@student.tramongthi.edu.vn" },
    { name: "Bùi Quốc Toản",    email: "toan.bui@student.tramongthi.edu.vn" },
  ];

  const students = await Promise.all(
    studentSeed.map((s) =>
      prisma.user.upsert({
        where: { email: s.email },
        update: {},
        create: { name: s.name, email: s.email, passwordHash: pass, role: Role.STUDENT },
      })
    )
  );
  console.log(`✓ ${students.length} học sinh`);

  // ── 2. Lấy 8 khóa học đầu (đã published) ────────────────────────
  const courses = await prisma.course.findMany({
    where: { published: true },
    orderBy: { createdAt: "asc" },
    take: 8,
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: { orderBy: { order: "asc" } },
          quizzes: { include: { questions: true } },
        },
      },
    },
  });

  if (courses.length === 0) {
    console.error("⚠️  Chưa có khóa học. Chạy npm run db:seed trước.");
    return;
  }
  console.log(`✓ Tìm thấy ${courses.length} khóa học`);

  // ── 3. Cấu hình hoạt động mỗi học sinh ─────────────────────────
  type ActivityConfig = {
    courseIdxList: number[];
    completedLessonCount: number;
    quizAttemptCount: number;
    scoreRange: [number, number];
    hasSurveyPre: boolean;
    hasSurveyPost: boolean;
  };

  const activityMap: ActivityConfig[] = [
    { courseIdxList: [0, 3, 4],    completedLessonCount: 12, quizAttemptCount: 4, scoreRange: [72, 95], hasSurveyPre: true,  hasSurveyPost: true  },
    { courseIdxList: [0, 1, 5],    completedLessonCount: 8,  quizAttemptCount: 3, scoreRange: [60, 85], hasSurveyPre: true,  hasSurveyPost: false },
    { courseIdxList: [2, 3, 6],    completedLessonCount: 10, quizAttemptCount: 5, scoreRange: [80, 100],hasSurveyPre: true,  hasSurveyPost: true  },
    { courseIdxList: [1, 4],       completedLessonCount: 5,  quizAttemptCount: 2, scoreRange: [55, 78], hasSurveyPre: true,  hasSurveyPost: false },
    { courseIdxList: [0, 2, 3],    completedLessonCount: 7,  quizAttemptCount: 3, scoreRange: [65, 90], hasSurveyPre: true,  hasSurveyPost: false },
    { courseIdxList: [5, 6, 7],    completedLessonCount: 15, quizAttemptCount: 6, scoreRange: [85, 100],hasSurveyPre: true,  hasSurveyPost: true  },
    { courseIdxList: [0, 1, 2, 4], completedLessonCount: 9,  quizAttemptCount: 4, scoreRange: [70, 88], hasSurveyPre: true,  hasSurveyPost: true  },
  ];

  let totalEnrollments = 0, totalProgress = 0, totalAttempts = 0, totalSurveys = 0;

  for (let si = 0; si < students.length; si++) {
    const student = students[si];
    const cfg = activityMap[si % activityMap.length];

    for (const courseIdx of cfg.courseIdxList) {
      const course = courses[courseIdx % courses.length];
      if (!course) continue;

      // Enrollment
      await prisma.enrollment.upsert({
        where: { userId_courseId: { userId: student.id, courseId: course.id } },
        update: {},
        create: { userId: student.id, courseId: course.id, status: "in_progress" },
      });
      totalEnrollments++;

      // Progress – đánh dấu một số bài đã hoàn thành
      const allLessons = course.modules.flatMap((m) => m.lessons);
      const toComplete = allLessons.slice(0, Math.min(cfg.completedLessonCount, allLessons.length));
      for (let li = 0; li < toComplete.length; li++) {
        const lesson = toComplete[li];
        await prisma.progress.upsert({
          where: { userId_lessonId: { userId: student.id, lessonId: lesson.id } },
          update: {},
          create: {
            userId: student.id,
            lessonId: lesson.id,
            startedAt: daysAgo(randomBetween(7, 14)),
            completedAt: daysAgo(randomBetween(1, 6)),
          },
        });
        totalProgress++;
      }

      // Quiz attempts – dùng đáp án thực tế để tính điểm
      const allQuizzes = course.modules.flatMap((m) => m.quizzes);
      const toAttempt = allQuizzes.slice(0, Math.min(cfg.quizAttemptCount, allQuizzes.length));
      for (const quiz of toAttempt) {
        const existing = await prisma.attempt.findFirst({
          where: { userId: student.id, quizId: quiz.id },
        });
        if (existing) continue;

        if (quiz.questions.length === 0) continue;

        // Sinh điểm ngẫu nhiên trong khoảng cấu hình
        const targetScore = randomBetween(cfg.scoreRange[0], cfg.scoreRange[1]);
        const correctNeeded = Math.round((targetScore / 100) * quiz.questions.length);

        const answers: Record<string, string> = {};
        for (let qi = 0; qi < quiz.questions.length; qi++) {
          const q = quiz.questions[qi];
          if (qi < correctNeeded) {
            // Trả lời đúng
            answers[q.id] = q.answer;
          } else {
            // Trả lời sai (chọn option khác)
            try {
              const opts: string[] = JSON.parse(q.options);
              const wrong = opts.find((o) => o !== q.answer) ?? opts[0];
              answers[q.id] = wrong;
            } catch {
              answers[q.id] = q.answer;
            }
          }
        }

        const correct = quiz.questions.filter((q) => answers[q.id] === q.answer).length;
        const score = (correct / quiz.questions.length) * 100;

        const startAt = daysAgo(randomBetween(2, 10));
        await prisma.attempt.create({
          data: {
            userId: student.id,
            quizId: quiz.id,
            answers: JSON.stringify(answers),
            score: Math.round(score * 10) / 10,
            startedAt: startAt,
            endedAt: new Date(startAt.getTime() + randomBetween(5, 20) * 60 * 1000),
          },
        });
        totalAttempts++;
      }
    }

    // ── Survey Pre-test ──────────────────────────────────────────
    if (cfg.hasSurveyPre) {
      const existingPre = await prisma.surveyResponse.findFirst({
        where: { userId: student.id, type: "pre" },
      });
      if (!existingPre) {
        await prisma.surveyResponse.create({
          data: {
            userId: student.id,
            type: "pre",
            answers: JSON.stringify({
              hocLuc: ["Khá", "Trung bình", "Giỏi", "Trung bình", "Khá", "Giỏi", "Trung bình"][si],
              monYeuThich: ["Toán", "Hóa học", "Tiếng Anh", "Vật Lý", "Toán", "Hóa học", "Tiếng Anh"][si],
              thoiGianTuHoc: ["1-2 giờ", "2-3 giờ", "30-60 phút", "1-2 giờ", "2-3 giờ", "3+ giờ", "1-2 giờ"][si],
              mucTieuThi: ["Đại học Y", "Bách khoa", "Kinh tế", "Ngoại thương", "Sư phạm", "Y dược", "Công nghệ"][si],
              khoKhanHienTai: "Thiếu tài liệu ôn tập phù hợp",
              diemMonChinh: randomBetween(6, 9).toString(),
            }),
            createdAt: daysAgo(randomBetween(10, 20)),
          },
        });
        totalSurveys++;
      }
    }

    // ── Survey Post-test ─────────────────────────────────────────
    if (cfg.hasSurveyPost) {
      const existingPost = await prisma.surveyResponse.findFirst({
        where: { userId: student.id, type: "post" },
      });
      if (!existingPost) {
        await prisma.surveyResponse.create({
          data: {
            userId: student.id,
            type: "post",
            answers: JSON.stringify({
              haiLong: ["Rất hài lòng", "Hài lòng", "Rất hài lòng", "Hài lòng"][si % 4],
              caiThien: "Nắm vững kiến thức hơn, tự tin hơn khi làm bài",
              diemSauKhoaHoc: randomBetween(7, 10).toString(),
              goiY: "Thêm nhiều bài tập thực hành",
            }),
            createdAt: daysAgo(randomBetween(1, 5)),
          },
        });
        totalSurveys++;
      }
    }
  }

  console.log(`✓ ${totalEnrollments} enrollments`);
  console.log(`✓ ${totalProgress} bài học đã hoàn thành`);
  console.log(`✓ ${totalAttempts} lần làm quiz`);
  console.log(`✓ ${totalSurveys} khảo sát`);
  console.log("\n✅ Dữ liệu mẫu đã tạo xong!");
  console.log("\n📋 Tài khoản học sinh mẫu thêm (mật khẩu: Student@2026):");
  for (const s of students.slice(1)) {
    console.log(`   ${s.name.padEnd(20)} ${s.email}`);
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
