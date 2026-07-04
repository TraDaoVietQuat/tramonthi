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

  const { quizId, text, options, answer } = await req.json();
  if (!quizId || !text?.trim() || !options || answer === undefined)
    return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });

  const question = await prisma.question.create({
    data: {
      quizId,
      text: text.trim(),
      options: JSON.stringify(options),
      answer: String(answer),
    },
  });

  return NextResponse.json(question);
}
