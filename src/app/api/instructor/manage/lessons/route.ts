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

  const { moduleId, title, content } = await req.json();
  if (!moduleId || !title?.trim())
    return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

  const count = await prisma.lesson.count({ where: { moduleId } });

  const lesson = await prisma.lesson.create({
    data: {
      title: title.trim(),
      content: content ?? "",
      moduleId,
      order: count + 1,
    },
  });

  return NextResponse.json(lesson);
}
