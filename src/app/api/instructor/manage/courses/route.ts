import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function isInstructor(role: string) {
  return role === "INSTRUCTOR" || role === "ADMIN";
}

function toSlug(title: string) {
  return (
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[đ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") +
    "-" +
    Date.now()
  );
}

export async function GET() {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const courses = await prisma.course.findMany({
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: { orderBy: { order: "asc" } },
          quizzes: { include: { questions: true } },
        },
      },
      _count: { select: { enrollments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { title, description, subject, grade } = await req.json();
  if (!title?.trim())
    return NextResponse.json({ error: "Thiếu tiêu đề" }, { status: 400 });

  const course = await prisma.course.create({
    data: {
      title: title.trim(),
      description: description?.trim() ?? "",
      subject: subject ?? "nckh",
      grade: grade ?? "university",
      slug: toSlug(title),
      published: false,
    },
  });

  return NextResponse.json(course);
}
