import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function isInstructor(role: string) {
  return role === "INSTRUCTOR" || role === "ADMIN";
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { courseId } = await params;
  const data = await req.json();

  const allowed = ["title", "description", "subject", "grade", "thumbnail", "published"];
  const update: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in data) update[key] = data[key];
  }

  const course = await prisma.course.update({ where: { id: courseId }, data: update });
  return NextResponse.json(course);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { courseId } = await params;
  await prisma.course.delete({ where: { id: courseId } });
  return NextResponse.json({ success: true });
}
