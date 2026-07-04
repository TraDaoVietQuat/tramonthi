import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import DashboardContent from "@/components/DashboardContent";

export default async function DashboardPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const courses = await prisma.course.findMany({
    where: { published: true },
    orderBy: [{ grade: "asc" }, { subject: "asc" }],
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: { orderBy: { order: "asc" } },
          quizzes: { include: { attempts: { where: { userId: user.id } } } },
        },
      },
      enrollments: { where: { userId: user.id } },
    },
  });

  if (courses.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 py-12 text-gray-400">Chưa có khóa học nào.</main>
      </div>
    );
  }

  // Tự enroll tất cả course chưa enroll
  for (const course of courses) {
    if (course.enrollments.length === 0) {
      await prisma.enrollment.create({ data: { userId: user.id, courseId: course.id } });
    }
  }

  // Tính progress
  const allLessonIds = courses.flatMap((c) => c.modules.flatMap((m) => m.lessons.map((l) => l.id)));
  const progresses = await prisma.progress.findMany({
    where: { userId: user.id, lessonId: { in: allLessonIds } },
  });
  const completedIds = progresses.filter((p) => p.completedAt).map((p) => p.lessonId);
  const completedSet = new Set(completedIds);

  const hasSurveyPre  = !!(await prisma.surveyResponse.findFirst({ where: { userId: user.id, type: "pre" } }));
  const hasSurveyPost = !!(await prisma.surveyResponse.findFirst({ where: { userId: user.id, type: "post" } }));

  // Serialize courses cho client component
  const serializedCourses = courses.map((course) => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    subject: course.subject,
    grade: course.grade,
    modules: course.modules.map((mod) => ({
      id: mod.id,
      title: mod.title,
      order: mod.order,
      volume: mod.volume,
      lessons: mod.lessons.map((l) => ({ id: l.id, title: l.title, order: l.order })),
      quiz: mod.quizzes[0]
        ? { id: mod.quizzes[0].id, title: mod.quizzes[0].title, attempted: mod.quizzes[0].attempts.length }
        : null,
    })),
    lessonIds: course.modules.flatMap((m) => m.lessons.map((l) => l.id)),
    completedCount: course.modules.flatMap((m) => m.lessons.map((l) => l.id)).filter((id) => completedSet.has(id)).length,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DashboardContent
        courses={serializedCourses}
        completedIds={completedIds}
        userName={user.name.split(" ").pop() ?? user.name}
        totalLessons={allLessonIds.length}
        totalCompleted={completedSet.size}
        hasSurveyPre={hasSurveyPre}
        hasSurveyPost={hasSurveyPost}
      />
    </div>
  );
}
