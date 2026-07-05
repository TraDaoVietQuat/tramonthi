"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap } from "@phosphor-icons/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, captchaToken }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); recaptchaRef.current?.reset(); return; }
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
      {/* Left panel */}
      <div className="hidden w-1/2 lg:flex flex-col justify-between p-12 relative overflow-hidden bg-gray-800">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hoc-bai.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center opacity-90" />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <Link href="/" className="relative z-10 flex items-center gap-2.5 font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Sau khi đăng ký</p>
          <ul className="mt-4 space-y-3 text-white">
            {[
              "Truy cập tất cả khóa học miễn phí",
              "Theo dõi tiến độ học tập cá nhân",
              "Quiz bám sát cấu trúc đề thi THPT QG",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 text-xs text-white/50">© 2026 TramOnThi</p>
      </div>

      {/* Right panel – form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-gray-900 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900">Tạo tài khoản</h1>
          <p className="mt-1.5 text-sm text-gray-500">
            Đã có tài khoản?{" "}
            <Link href="/login" className="font-medium text-emerald-600 hover:underline">
              Đăng nhập
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Họ và tên</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>
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
                placeholder="Tối thiểu 6 ký tự"
                minLength={6}
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
              className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-600 active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100"
            >
              {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-400">
            Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng của TramOnThi.
          </p>
        </div>
      </div>
    </div>
  );
}
