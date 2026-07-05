import { PrismaClient } from "@prisma/client";
import { MATH_9_COURSE } from "./seed-data/math-9";
import type { CourseData } from "./seed-data/types";

const prisma = new PrismaClient();

async function seedCourse(course: CourseData) {
  const savedCourse = await prisma.course.upsert({
    where: { slug: course.slug },
    update: {
      title: course.title,
      description: course.description,
      subject: course.subject,
      grade: course.grade,
      published: course.published,
    },
    create: {
      title: course.title,
      slug: course.slug,
      description: course.description,
      subject: course.subject,
      grade: course.grade,
      published: course.published,
    },
  });

  await prisma.module.deleteMany({ where: { courseId: savedCourse.id } });

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
      data: { title: modData.quiz.title, moduleId: mod.id },
    });

    for (const q of modData.quiz.questions) {
      await prisma.question.create({
        data: { quizId: quiz.id, text: q.text, options: q.options, answer: q.answer },
      });
    }
  }

  const mCount = course.modules.length;
  const lCount = course.modules.reduce((s, m) => s + m.lessons.length, 0);
  const qCount = course.modules.reduce((s, m) => s + m.quiz.questions.length, 0);
  console.log(`  ✓ [${course.subject.toUpperCase()}] ${course.title} (${mCount} module, ${lCount} bài, ${qCount} câu hỏi)`);
}

seedCourse(MATH_9_COURSE)
  .then(() => console.log("\n✅ Seed Toán 9 hoàn thành!"))
  .catch((e) => {
    console.error("❌ Seed Toán 9 thất bại:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
