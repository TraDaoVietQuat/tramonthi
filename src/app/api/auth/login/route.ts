import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken, COOKIE } from "@/lib/auth";
import { verifyCaptcha } from "@/lib/recaptcha";

export async function POST(req: NextRequest) {
  const { email, password, captchaToken } = await req.json();

  if (!captchaToken || !(await verifyCaptcha(captchaToken)))
    return NextResponse.json({ error: "Xác nhận captcha thất bại." }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "Email hoặc mật khẩu không đúng" }, { status: 401 });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: "Email hoặc mật khẩu không đúng" }, { status: 401 });

  const token = await signToken({ id: user.id, name: user.name, email: user.email, role: user.role });
  const res = NextResponse.json({ ok: true, role: user.role });
  res.cookies.set(COOKIE, token, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}