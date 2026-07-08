"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Khóa học", href: "#khoa-hoc" },
  { label: "Tính năng", href: "#tinh-nang" },
];

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 py-3">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-full px-3 sm:px-5 py-1.5 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.35)]"
            : "bg-white/10 backdrop-blur-md border border-white/15 shadow-none"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 to-cyan-500 opacity-80 blur-sm scale-110 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-7 h-7 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-4 h-4 text-white" fill="currentColor" />
            </div>
          </div>
          <span className="text-base font-bold tracking-tight">
            <span className="text-white">Tram</span>
            <span className="text-gradient">OnThi</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all text-white/80 hover:text-white hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link href="/login" className="text-sm font-medium px-3 py-1.5 rounded-full transition-colors text-white/80 hover:text-white">
            Đăng nhập
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1.5 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all"
          >
            Đăng ký miễn phí
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          className="md:hidden p-1.5 rounded-full transition-colors shrink-0 text-white hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-3xl bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.35)] px-4 py-3 space-y-1 animate-fade-in">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-2xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/10 mt-2">
            <Link href="/login" className="flex-1 text-sm font-medium border border-white/15 text-white/80 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors text-center">
              Đăng nhập
            </Link>
            <Link href="/register" className="flex-1 text-sm font-semibold bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2.5 rounded-full text-center">
              Đăng ký
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
