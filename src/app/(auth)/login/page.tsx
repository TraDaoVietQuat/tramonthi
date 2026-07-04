"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap } from "@phosphor-icons/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage() {
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
      if (data.role === "INSTRUCTOR") {
        setError("Tài khoản giảng viên — vui lòng đăng nhập tại cổng giảng viên.");
        recaptchaRef.current?.reset(); return;
      }
      if (data.role === "ADMIN") {
        setError("Tài khoản quản trị — vui lòng đăng nhập tại cổng quản trị.");
        recaptchaRef.current?.reset(); return;
      }
      router.push("/dashboard");
    } catch {
      setError("Lỗi kết nối, vui lòng thử lại.");
      recaptchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left panel – decorative */}
      <div className="hidden w-1/2 lg:flex flex-col justify-between p-12 relative overflow-hidden bg-gray-800">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hoc-bai.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <Link href="/" className="relative z-10 flex items-center gap-2.5 font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>
        <div className="relative z-10">
          <blockquote className="text-2xl font-black leading-snug text-white drop-shadow-lg">
            "Học thật — Thi thật — Điểm thật"
          </blockquote>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            Nền tảng ôn thi THPT Quốc gia với nội dung bám sát SGK và cấu trúc đề thi thực tế.
          </p>
        </div>
        <p className="relative z-10 text-xs text-white/50">© 2026 TramOnThi</p>
      </div>

      {/* Right panel – form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-gray-900 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900">Đăng nhập</h1>
          <p className="mt-1.5 text-sm text-gray-500">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="font-medium text-emerald-600 hover:underline">
              Đăng ký miễn phí
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="••••••••"
                required
              />
            </div>

            {!isDev && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />
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
              className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 disabled:opacity-60"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
