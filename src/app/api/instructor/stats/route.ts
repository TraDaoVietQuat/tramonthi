import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!user || user.role === "STUDENT")
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const [totalStudents, totalEnrollments, attempts, completedLessons, surveys] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.enrollment.count(),
    prisma.attempt.findMany({
      include: { user: { select: { name: true, email: true } }, quiz: { select: { title: true } } },
      orderBy: { startedAt: "desc" },
    }),
    prisma.progress.count({ where: { completedAt: { not: null } } }),
    prisma.surveyResponse.groupBy({ by: ["type"], _count: true }),
  ]);

  const avgScore = attempts.length
    ? attempts.reduce((s, a) => s + a.score, 0) / attempts.length
    : 0;

  return NextResponse.json({
    totalStudents,
    totalEnrollments,
    avgScore: Math.round(avgScore * 10) / 10,
    completedLessons,
    surveys,
    recentAttempts: attempts.slice(0, 20),
  });
}