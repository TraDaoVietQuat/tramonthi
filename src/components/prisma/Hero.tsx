"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/prisma-hero.mp4"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 sm:pb-12 sm:pt-32 md:px-12 md:pb-16 md:pt-36 lg:px-16">
          <div className="max-w-3xl">
            <div className="animate-hero-badge inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-sm sm:text-sm">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              Nền tảng học trực tuyến
            </div>
          </div>

          <div>
            <div className="max-w-3xl">
              <h1 className="animate-hero-heading text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Học mọi lúc<br />
                <span className="shimmer-text">mọi nơi</span><br />
                thi đỗ <span className="text-gradient">mọi trường</span>
              </h1>
            </div>
            <p className="animate-hero-desc mb-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
              Khóa học trực tuyến chất lượng cao từ lớp 10 đến ôn thi Đại học. Bài giảng chi tiết, bài tập tương tác và AI kiểm tra hiểu bài bám sát chương trình mới 2025.
            </p>
            <Link
              href="/register"
              className="animate-hero-cta inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
            >
              Bắt đầu miễn phí
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
