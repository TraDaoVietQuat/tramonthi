import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const user = await getSession();
  if (!user || user.role === "STUDENT")
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const url = new URL(req.url);
  const type = url.searchParams.get("type") ?? "attempts";

  let csv = "";

  if (type === "attempts") {
    const attempts = await prisma.attempt.findMany({
      include: {
        user: { select: { name: true, email: true } },
        quiz: { select: { title: true } },
      },
      orderBy: { startedAt: "asc" },
    });
    csv = "Ho ten,Email,Quiz,Diem,Bat dau,Ket thuc\n";
    csv += attempts.map((a) =>
      [a.user.name, a.user.email, a.quiz.title, a.score.toFixed(1),
       a.startedAt.toISOString(), a.endedAt?.toISOString() ?? ""].join(",")
    ).join("\n");

  } else if (type === "progress") {
    const progress = await prisma.progress.findMany({
      include: {
        user: { select: { name: true, email: true } },
        lesson: { select: { title: true } },
      },
      orderBy: { startedAt: "asc" },
    });
    csv = "Ho ten,Email,Bai hoc,Bat dau,Hoan thanh\n";
    csv += progress.map((p) =>
      [p.user.name, p.user.email, p.lesson.title,
       p.startedAt.toISOString(), p.completedAt?.toISOString() ?? "Chua hoan thanh"].join(",")
    ).join("\n");

  } else if (type === "surveys") {
    const surveys = await prisma.surveyResponse.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: "asc" },
    });
    csv = "Ho ten,Email,Loai,Cau tra loi,Thoi gian\n";
    csv += surveys.map((s) =>
      [s.user.name, s.user.email, s.type, `"${s.answers}"`, s.createdAt.toISOString()].join(",")
    ).join("\n");
  }

  const bom = "﻿";
  return new NextResponse(bom + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${type}_${Date.now()}.csv"`,
    },
  });
}