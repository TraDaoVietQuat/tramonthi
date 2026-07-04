import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string; quizId: string }> }
) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug, quizId } = await params;

  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: {
      questions: true,
      module: { include: { course: true } },
    },
  });

  if (!quiz || quiz.module.course.slug !== slug)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({
    id: quiz.id,
    title: quiz.title,
    courseSlug: slug,
    questions: quiz.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: JSON.parse(q.options),
    })),
  });
}