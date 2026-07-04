"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ShieldCheck, Users, Gear } from "@phosphor-icons/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const isDev = process.env.NODE_ENV === "development" || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_SKIP_RECAPTCHA === "true";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const captchaToken = isDev ? "dev-bypass" : recaptchaRef.current?.getValue();
    if (!isDev && !captchaToken) {
      setError("Vui lòng xác nhận bạn không phải robot.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); recaptchaRef.current?.reset(); return; }
      if (data.role === "STUDENT") {
        setError("Tài khoản học sinh — vui lòng đăng nhập tại cổng học sinh.");
        recaptchaRef.current?.reset(); return;
      }
      if (data.role === "INSTRUCTOR") {
        setError("Tài khoản giảng viên — vui lòng đăng nhập tại cổng giảng viên.");
        recaptchaRef.current?.reset(); return;
      }
      router.push("/admin");
    } catch {
      setError("Lỗi kết nối, vui lòng thử lại.");
      recaptchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left panel */}
      <div className="hidden w-1/2 lg:flex flex-col justify-between p-12 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-slate-700/20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-slate-700/20 translate-y-1/2 -translate-x-1/2"></div>

        <Link href="/" className="relative z-10 flex items-center gap-2.5 font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
          <span className="ml-1 text-xs font-normal bg-red-500/30 px-2 py-0.5 rounded-full text-red-300 border border-red-500/30">Quản trị</span>
        </Link>

        <div className="relative z-10">
          <ShieldCheck size={48} weight="duotone" className="text-slate-400 mb-4" />
          <h2 className="text-2xl font-black text-white leading-snug">Cổng quản trị</h2>
          <p className="mt-2 text-sm text-slate-400">Toàn quyền quản lý hệ thống, tài khoản và nội dung.</p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: Users, text: "Quản lý người dùng & phân quyền" },
              { icon: Gear, text: "Cấu hình hệ thống" },
              { icon: ShieldCheck, text: "Bảo mật & nhật ký hoạt động" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={14} weight="bold" className="text-slate-400" />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-xs text-slate-600">© 2026 TramOnThi</p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-gray-900 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>

        <div className="w-full max-w-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
              <ShieldCheck size={18} weight="fill" className="text-slate-700" />
            </div>
            <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">Cổng quản trị</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">Đăng nhập quản trị</h1>
          <p className="mt-1.5 text-sm text-gray-500">Chỉ dành cho tài khoản quản trị viên.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="••••••••"
                required
              />
            </div>

            {!isDev && (
              <div className="flex justify-center">
                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-slate-800 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-900 disabled:opacity-60"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-400">
            Là học sinh?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline font-medium">Cổng học sinh</Link>
            {" · "}
            <Link href="/instructor/login" className="text-blue-600 hover:underline font-medium">Cổng giảng viên</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
