"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { GraduationCap, SignOut, BookOpen, List, X, ChalkboardTeacher } from "@phosphor-icons/react";

type User = { name: string; role: string } | null;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me").then((r) => r.json()).then((d) => setUser(d.user));
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center gap-2 font-bold text-gray-900"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
            <GraduationCap size={16} weight="fill" className="text-white" />
          </div>
          TramOnThi
        </Link>

        {/* Desktop nav */}
        {user && (
          <div className="hidden items-center gap-1 md:flex">
            {user.role === "INSTRUCTOR" && (
              <Link
                href="/instructor"
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors ${
                  pathname.startsWith("/instructor")
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <ChalkboardTeacher size={15} />
                Cổng giảng viên
              </Link>
            )}
            <Link
              href="/dashboard"
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors ${
                pathname.startsWith("/dashboard") || pathname.startsWith("/course")
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <BookOpen size={15} />
              Khóa học
            </Link>
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden text-xs text-gray-400 sm:block">{user.name}</span>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 active:scale-95"
              >
                <SignOut size={13} />
                Đăng xuất
              </button>
              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 md:hidden"
                aria-label="Mở menu"
              >
                {menuOpen ? <X size={18} /> : <List size={18} />}
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                Đăng nhập
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-600 active:scale-95 transition-all"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && user && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {user.role === "INSTRUCTOR" && (
            <Link href="/instructor" className="flex items-center gap-2 rounded-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
              <ChalkboardTeacher size={16} /> Cổng giảng viên
            </Link>
          )}
          <Link href="/dashboard" className="flex items-center gap-2 rounded-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <BookOpen size={16} /> Khóa học của tôi
          </Link>
        </div>
      )}
    </header>
  );
}
