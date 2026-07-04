"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ChalkboardTeacher, BookOpen, ChartLine } from "@phosphor-icons/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function InstructorLoginPage() {
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
      if (data.role === "ADMIN") {
        setError("Tài khoản quản trị — vui lòng đăng nhập tại cổng quản trị.");
        recaptchaRef.current?.reset(); return;
      }
      router.push("/instructor");
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
      <div className="hidden w-1/2 lg:flex flex-col justify-between p-12 relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-linear-to-br from-blue-800 via-indigo-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        ></div>

        <Link href="/" className="relative z-10 flex items-center gap-2.5 font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
          <span className="ml-1 text-xs font-normal bg-blue-500/50 px-2 py-0.5 rounded-full text-blue-100">Giảng viên</span>
        </Link>

        <div className="relative z-10">
          <ChalkboardTeacher size={48} weight="duotone" className="text-blue-300 mb-4" />
          <h2 className="text-2xl font-black text-white leading-snug">Cổng giảng viên</h2>
          <p className="mt-2 text-sm text-blue-200/80">Quản lý khóa học, theo dõi tiến độ học sinh và cập nhật nội dung.</p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: BookOpen, text: "Quản lý bài giảng & khóa học" },
              { icon: ChartLine, text: "Theo dõi tiến độ học sinh" },
              { icon: ChalkboardTeacher, text: "Tạo quiz & bài kiểm tra" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={14} weight="bold" className="text-blue-300" />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-xs text-blue-300/50">© 2026 TramOnThi</p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-gray-900 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <GraduationCap size={18} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>

        <div className="w-full max-w-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <ChalkboardTeacher size={18} weight="fill" className="text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Cổng giảng viên</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">Đăng nhập giảng viên</h1>
          <p className="mt-1.5 text-sm text-gray-500">Chỉ dành cho tài khoản giảng viên.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-400">
            Là học sinh?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline font-medium">Cổng học sinh</Link>
            {" · "}
            <Link href="/admin/login" className="text-slate-600 hover:underline font-medium">Cổng quản trị</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
