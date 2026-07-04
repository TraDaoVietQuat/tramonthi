import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { quizId } = await params;
  const { answers, startedAt } = await req.json();

  const questions = await prisma.question.findMany({ where: { quizId } });
  let correct = 0;
  for (const q of questions) {
    if (answers[q.id] === q.answer) correct++;
  }
  const score = questions.length ? (correct / questions.length) * 100 : 0;

  const attempt = await prisma.attempt.create({
    data: {
      userId: user.id,
      quizId,
      answers: JSON.stringify(answers),
      score,
      startedAt: new Date(startedAt),
      endedAt: new Date(),
    },
  });

  return NextResponse.json({ score, correct, total: questions.length, attemptId: attempt.id });
}