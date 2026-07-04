import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

// Các trang đăng nhập riêng — luôn truy cập được, không cần auth
const AUTH_PAGES     = ["/instructor/login", "/admin/login"];

const PROTECTED      = ["/dashboard", "/course", "/survey", "/instructor", "/admin"];
const INSTRUCTOR_ONLY = ["/instructor"];
const ADMIN_ONLY      = ["/admin"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Bỏ qua auth pages — không kiểm tra token
  if (AUTH_PAGES.some((p) => path.startsWith(p))) return NextResponse.next();

  const isProtected = PROTECTED.some((p) => path.startsWith(p));
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("elearn_token")?.value;
  const user  = token ? await verifyToken(token) : null;

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // /admin → chỉ ADMIN
  if (ADMIN_ONLY.some((p) => path.startsWith(p))) {
    if (user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // /instructor → chỉ INSTRUCTOR, chặn cả STUDENT và ADMIN
  if (INSTRUCTOR_ONLY.some((p) => path.startsWith(p))) {
    if (user.role === "STUDENT")
      return NextResponse.redirect(new URL("/dashboard", req.url));
    if (user.role === "ADMIN")
      return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/course/:path*",
    "/survey/:path*",
    "/instructor/:path*",
    "/admin/:path*",
  ],
};
