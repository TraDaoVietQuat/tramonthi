import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function isInstructor(role: string) {
  return role === "INSTRUCTOR" || role === "ADMIN";
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ questionId: string }> }) {
  const user = await getSession();
  if (!user || !isInstructor(user.role))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { questionId } = await params;
  await prisma.question.delete({ where: { id: questionId } });
  return NextResponse.json({ success: true });
}
