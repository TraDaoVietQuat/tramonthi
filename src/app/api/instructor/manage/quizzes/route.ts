import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function isInstructor(role: string) {
  return role === "INSTRUCTOR" || role === "ADMIN";
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { moduleId, title } = await req.json();
  if (!moduleId)
    return NextResponse.json({ error: "Thiếu moduleId" }, { status: 400 });

  const existing = await prisma.quiz.findFirst({ where: { moduleId } });
  if (existing) return NextResponse.json(existing);

  const quiz = await prisma.quiz.create({
    data: { title: title ?? "Bài kiểm tra", moduleId },
    include: { questions: true },
  });

  return NextResponse.json(quiz);
}
