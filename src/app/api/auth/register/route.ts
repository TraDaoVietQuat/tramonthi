import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken, COOKIE } from "@/lib/auth";
import { verifyCaptcha } from "@/lib/recaptcha";

export async function POST(req: NextRequest) {
  const { name, email, password, captchaToken } = await req.json();

  if (!captchaToken || !(await verifyCaptcha(captchaToken)))
    return NextResponse.json({ error: "Xác nhận captcha thất bại." }, { status: 400 });

  if (!name || !email || !password)
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists)
    return NextResponse.json({ error: "Email đã tồn tại" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, passwordHash, role: "STUDENT" },
  });

  const token = await signToken({ id: user.id, name: user.name, email: user.email, role: user.role });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, token, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}