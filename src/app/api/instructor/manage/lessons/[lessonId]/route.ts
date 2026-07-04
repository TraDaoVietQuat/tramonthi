import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function isInstructor(role: string) {
  return role === "INSTRUCTOR" || role === "ADMIN";
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { lessonId } = await params;
  const { title, content } = await req.json();

  const lesson = await prisma.lesson.update({
    where: { id: lessonId },
    data: {
      ...(title !== undefined && { title }),
      ...(content !== undefined && { content }),
    },
  });

  return NextResponse.json(lesson);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { lessonId } = await params;
  await prisma.lesson.delete({ where: { id: lessonId } });
  return NextResponse.json({ success: true });
}
