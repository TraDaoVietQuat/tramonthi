import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!user || user.role !== "ADMIN")
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const [totalUsers, usersByRole, totalCourses, publishedCourses,
         totalAttempts, totalProgress, surveys, recentUsers, allAttempts] = await Promise.all([
    prisma.user.count(),
    prisma.user.groupBy({ by: ["role"], _count: true }),
    prisma.course.count(),
    prisma.course.count({ where: { published: true } }),
    prisma.attempt.count(),
    prisma.progress.count({ where: { completedAt: { not: null } } }),
    prisma.surveyResponse.groupBy({ by: ["type"], _count: true }),
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    }),
    prisma.attempt.findMany({ select: { score: true } }),
  ]);

  const avgScore = allAttempts.length
    ? allAttempts.reduce((s, a) => s + a.score, 0) / allAttempts.length
    : 0;

  return NextResponse.json({
    totalUsers,
    usersByRole,
    totalCourses,
    publishedCourses,
    totalAttempts,
    totalProgress,
    avgScore: Math.round(avgScore * 10) / 10,
    surveys,
    recentUsers,
  });
}
