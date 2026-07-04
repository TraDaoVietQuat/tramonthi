import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("========== KIỂM TRA DỮ LIỆU ==========");

  // --- Users ---
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  });
  console.log(`\n--- NGƯỜI DÙNG (${users.length}) ---`);
  const byRole: Record<string, number> = {};
  for (const u of users) byRole[u.role] = (byRole[u.role] ?? 0) + 1;
  console.log("Theo vai trò:", JSON.stringify(byRole));
  for (const u of users) {
    console.log(`  [${u.role}] ${u.name} <${u.email}> — tạo lúc ${u.createdAt.toISOString()}`);
  }

  // --- Courses ---
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: true,
          quizzes: { include: { questions: true } },
        },
      },
      enrollments: true,
    },
    orderBy: [{ grade: "asc" }, { subject: "asc" }],
  });

  console.log(`\n--- KHÓA HỌC (${courses.length}) ---`);
  let totalIssues = 0;

  for (const c of courses) {
    const moduleCount = c.modules.length;
    const lessonCount = c.modules.reduce((s, m) => s + m.lessons.length, 0);
    const quizCount = c.modules.reduce((s, m) => s + m.quizzes.length, 0);
    const questionCount = c.modules.reduce(
      (s, m) => s + m.quizzes.reduce((s2, q) => s2 + q.questions.length, 0),
      0
    );
    console.log(
      `\n[${c.subject}/${c.grade}] ${c.title} (slug: ${c.slug}, published: ${c.published}, enrollments: ${c.enrollments.length})`
    );
    console.log(`   ${moduleCount} module, ${lessonCount} bài, ${quizCount} quiz, ${questionCount} câu hỏi`);

    const issues: string[] = [];
    for (const m of c.modules) {
      if (m.lessons.length === 0) issues.push(`Module "${m.title}" không có bài học nào`);
      if (m.quizzes.length === 0) {
        issues.push(`Module "${m.title}" KHÔNG có quiz`);
      } else {
        for (const q of m.quizzes) {
          if (q.questions.length === 0) issues.push(`Quiz "${q.title}" (module "${m.title}") không có câu hỏi nào`);
          for (const ques of q.questions) {
            let opts: unknown[] = [];
            try {
              opts = JSON.parse(ques.options);
            } catch {
              issues.push(`Câu hỏi lỗi JSON options: "${ques.text.slice(0, 40)}..."`);
              continue;
            }
            if (!Array.isArray(opts) || opts.length < 2) {
              issues.push(`Câu hỏi có ít hơn 2 đáp án: "${ques.text.slice(0, 40)}..."`);
            }
            const ansIdx = Number(ques.answer);
            if (Number.isNaN(ansIdx) || ansIdx < 0 || ansIdx >= opts.length) {
              issues.push(`Câu hỏi có answer index không hợp lệ (${ques.answer}): "${ques.text.slice(0, 40)}..."`);
            }
          }
        }
      }
      for (const l of m.lessons) {
        if (!l.content || l.content.trim().length < 20) {
          issues.push(`Bài học "${l.title}" có nội dung quá ngắn hoặc rỗng`);
        }
      }
    }

    if (issues.length > 0) {
      totalIssues += issues.length;
      console.log(`   ⚠️  ${issues.length} vấn đề:`);
      for (const i of issues) console.log(`      - ${i}`);
    } else {
      console.log("   ✓ Không có vấn đề gì");
    }
  }

  // --- Progress / Attempts / Surveys sanity ---
  const progressCount = await prisma.progress.count();
  const attemptCount = await prisma.attempt.count();
  const surveyCount = await prisma.surveyResponse.count();
  const enrollmentCount = await prisma.enrollment.count();
  console.log(`\n--- HOẠT ĐỘNG HỌC TẬP ---`);
  console.log(`Enrollment: ${enrollmentCount}, Progress: ${progressCount}, Quiz Attempts: ${attemptCount}, Survey: ${surveyCount}`);

  console.log(`\n========== TỔNG KẾT ==========`);
  console.log(`Tổng số khóa học: ${courses.length}`);
  console.log(`Tổng số vấn đề phát hiện: ${totalIssues}`);
  console.log(totalIssues === 0 ? "✅ TOÀN BỘ DỮ LIỆU HỢP LỆ" : "❌ CẦN KIỂM TRA LẠI CÁC VẤN ĐỀ TRÊN");
}

main()
  .catch((e) => {
    console.error("❌ Verify thất bại:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
