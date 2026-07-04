import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, answers } = await req.json();
  if (!["pre", "post"].includes(type))
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });

  await prisma.surveyResponse.create({
    data: {
      userId: user.id,
      type,
      answers: JSON.stringify(answers),
    },
  });

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  const existing = await prisma.surveyResponse.findFirst({
    where: { userId: user.id, ...(type ? { type } : {}) },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ submitted: !!existing });
}