import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { CourseData } from "./seed-data/types";
// Lớp 9
import { MATH_9_COURSE } from "./seed-data/math-9";
// Lớp 10
import { ENGLISH_COURSE } from "./seed-data/english";
import { MATH_COURSE } from "./seed-data/math";
import { PHYSICS_COURSE } from "./seed-data/physics";
import { CHEMISTRY_COURSE } from "./seed-data/chemistry";
// Lớp 11
import { ENGLISH_11_COURSE } from "./seed-data/english-11";
import { MATH_11_COURSE } from "./seed-data/math-11";
import { PHYSICS_11_COURSE } from "./seed-data/physics-11";
import { CHEMISTRY_11_COURSE } from "./seed-data/chemistry-11";
import { HISTORY_11_COURSE } from "./seed-data/history-11";
// Lớp 12
import { ENGLISH_12_COURSE } from "./seed-data/english-12";
import { MATH_12_COURSE } from "./seed-data/math-12";
import { PHYSICS_12_COURSE } from "./seed-data/physics-12";
import { CHEMISTRY_12_COURSE } from "./seed-data/chemistry-12";
// Ôn thi ĐH (đề thi THPT QG 2020–2026)
import { EXAM_PREP_MATH_COURSE } from "./seed-data/exam-prep-math";
import { EXAM_PREP_ENGLISH_COURSE } from "./seed-data/exam-prep-english";
import { EXAM_PREP_PHYSICS_COURSE } from "./seed-data/exam-prep-physics";
import { EXAM_PREP_CHEMISTRY_COURSE } from "./seed-data/exam-prep-chemistry";

const prisma = new PrismaClient();

// Thêm môn mới vào đây — chỉ cần import file và push vào mảng
const ALL_COURSES: CourseData[] = [
  // Lớp 9
  MATH_9_COURSE,
  // Lớp 10
  ENGLISH_COURSE,
  MATH_COURSE,
  PHYSICS_COURSE,
  CHEMISTRY_COURSE,
  // Lớp 11
  ENGLISH_11_COURSE,
  MATH_11_COURSE,
  PHYSICS_11_COURSE,
  CHEMISTRY_11_COURSE,
  HISTORY_11_COURSE,
  // Lớp 12
  ENGLISH_12_COURSE,
  MATH_12_COURSE,
  PHYSICS_12_COURSE,
  CHEMISTRY_12_COURSE,
  // Ôn thi ĐH
  EXAM_PREP_MATH_COURSE,
  EXAM_PREP_ENGLISH_COURSE,
  EXAM_PREP_PHYSICS_COURSE,
  EXAM_PREP_CHEMISTRY_COURSE,
];

async function seedCourse(course: CourseData) {
  // Upsert course (tạo mới nếu chưa có, không ghi đè nếu đã có)
  const savedCourse = await prisma.course.upsert({
    where: { slug: course.slug },
    update: {
      title: course.title,
      description: course.description,
      subject: course.subject,
      grade: course.grade,
      published: course.published,
      ...(course.thumbnail ? { thumbnail: course.thumbnail } : {}),
    },
    create: {
      title: course.title,
      slug: course.slug,
      description: course.description,
      subject: course.subject,
      grade: course.grade,
      published: course.published,
      ...(course.thumbnail ? { thumbnail: course.thumbnail } : {}),
    },
  });

  // Xóa modules cũ (cascade xóa Lesson, Quiz, Question luôn)
  await prisma.module.deleteMany({ where: { courseId: savedCourse.id } });

  // Tạo lại modules, lessons, quizzes
  for (const modData of course.modules) {
    const mod = await prisma.module.create({
      data: {
        title: modData.title,
        order: modData.order,
        volume: modData.volume ?? null,
        courseId: savedCourse.id,
      },
    });

    for (const lessonData of modData.lessons) {
      await prisma.lesson.create({
        data: {
          title: lessonData.title,
          content: lessonData.content,
          order: lessonData.order,
          moduleId: mod.id,
        },
      });
    }

    const quiz = await prisma.quiz.create({
      data: {
        title: modData.quiz.title,
        moduleId: mod.id,
      },
    });

    for (const q of modData.quiz.questions) {
      await prisma.question.create({
        data: {
          quizId: quiz.id,
          text: q.text,
          options: q.options,
          answer: q.answer,
        },
      });
    }
  }

  console.log(`  ✓ [${course.subject.toUpperCase()}] ${course.title}`);
}

async function main() {
  console.log("🌱 TramOnThi – Seeding database...\n");

  // --- Tài khoản mẫu ---
  const instructorPassword = await bcrypt.hash("Instructor@2026", 10);
  const studentPassword = await bcrypt.hash("Student@2026", 10);

  await prisma.user.upsert({
    where: { email: "giang.vien@tramongthi.edu.vn" },
    update: {},
    create: {
      name: "TS. Nguyễn Văn Minh",
      email: "giang.vien@tramongthi.edu.vn",
      passwordHash: instructorPassword,
      role: Role.INSTRUCTOR,
    },
  });

  await prisma.user.upsert({
    where: { email: "hoc.sinh@tramongthi.edu.vn" },
    update: {},
    create: {
      name: "Trần Thị Lan",
      email: "hoc.sinh@tramongthi.edu.vn",
      passwordHash: studentPassword,
      role: Role.STUDENT,
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@tramongthi.edu.vn" },
    update: {},
    create: {
      name: "Admin TramOnThi",
      email: "admin@tramongthi.edu.vn",
      passwordHash: await bcrypt.hash("Admin@2026", 10),
      role: Role.ADMIN,
    },
  });

  console.log("✓ Tài khoản mẫu đã được tạo\n");

  // --- Khóa học ---
  console.log(`Đang seed ${ALL_COURSES.length} khóa học...\n`);
  for (const course of ALL_COURSES) {
    await seedCourse(course);
  }

  console.log("\n✅ Seed hoàn thành!");
  console.log("📚 Các khóa học:");
  for (const c of ALL_COURSES) {
    const mCount = c.modules.length;
    const lCount = c.modules.reduce((s, m) => s + m.lessons.length, 0);
    const qCount = c.modules.reduce((s, m) => s + m.quiz.questions.length, 0);
    console.log(`   ${c.title} (${mCount} module, ${lCount} bài, ${qCount} câu hỏi)`);
  }
  console.log("\n🔑 Tài khoản mẫu:");
  console.log("   Instructor: giang.vien@tramongthi.edu.vn / Instructor@2026");
  console.log("   Student:    hoc.sinh@tramongthi.edu.vn  / Student@2026");
  console.log("   Admin:      admin@tramongthi.edu.vn     / Admin@2026");
}

main()
  .catch((e) => {
    console.error("❌ Seed thất bại:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
