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

  const { courseId, title } = await req.json();
  if (!courseId || !title?.trim())
    return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

  const count = await prisma.module.count({ where: { courseId } });

  const module = await prisma.module.create({
    data: { title: title.trim(), courseId, order: count + 1 },
    include: { lessons: true, quizzes: { include: { questions: true } } },
  });

  return NextResponse.json(module);
}
