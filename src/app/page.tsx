"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Play, Star, Sparkle,
  Lightning, BookOpen, Users, Shield, GraduationCap, List, X,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "50,000+", label: "Học sinh đang học" },
  { value: "192", label: "Bài giảng" },
  { value: "400+", label: "Câu hỏi luyện tập" },
  { value: "95%", label: "Hài lòng với khóa học" },
];

const GRADES = [
  { id: "grade10", label: "Lớp 10" },
  { id: "grade11", label: "Lớp 11" },
  { id: "grade12", label: "Lớp 12" },
  { id: "university", label: "Ôn thi ĐH" },
];

const SUBJECTS: Record<string, { icon: string; name: string; bgClass: string; modules: number; lessons: number }[]> = {
  grade10: [
    { icon: "🧪", name: "Hóa học",    bgClass: "bg-green-50",  modules: 5, lessons: 12 },
    { icon: "📐", name: "Toán học",   bgClass: "bg-violet-50", modules: 5, lessons: 12 },
    { icon: "⚡", name: "Vật Lý",     bgClass: "bg-orange-50", modules: 5, lessons: 12 },
    { icon: "📖", name: "Tiếng Anh",  bgClass: "bg-blue-50",   modules: 5, lessons: 13 },
  ],
  grade11: [
    { icon: "🧪", name: "Hóa học",    bgClass: "bg-green-50",  modules: 5, lessons: 12 },
    { icon: "📐", name: "Toán học",   bgClass: "bg-violet-50", modules: 5, lessons: 12 },
    { icon: "⚡", name: "Vật Lý",     bgClass: "bg-orange-50", modules: 5, lessons: 12 },
    { icon: "📖", name: "Tiếng Anh",  bgClass: "bg-blue-50",   modules: 5, lessons: 12 },
  ],
  grade12: [
    { icon: "🧪", name: "Hóa học",    bgClass: "bg-green-50",  modules: 5, lessons: 12 },
    { icon: "📐", name: "Toán học",   bgClass: "bg-violet-50", modules: 5, lessons: 12 },
    { icon: "⚡", name: "Vật Lý",     bgClass: "bg-orange-50", modules: 5, lessons: 12 },
    { icon: "📖", name: "Tiếng Anh",  bgClass: "bg-blue-50",   modules: 5, lessons: 12 },
  ],
  university: [
    { icon: "🎯", name: "Ôn thi Toán",        bgClass: "bg-violet-50", modules: 5, lessons: 12 },
    { icon: "🔬", name: "Ôn thi Vật Lý",      bgClass: "bg-orange-50", modules: 5, lessons: 12 },
    { icon: "⚗️", name: "Ôn thi Hóa học",     bgClass: "bg-green-50",  modules: 5, lessons: 12 },
    { icon: "🇬🇧", name: "Ôn thi Tiếng Anh", bgClass: "bg-blue-50",   modules: 5, lessons: 12 },
  ],
};

const STAT_DOT_CLASSES = ["bg-emerald-500", "bg-cyan-500", "bg-blue-500", "bg-violet-500", "bg-pink-500"] as const;

const TESTIMONIALS = [
  {
    name: "Nguyễn Minh Khoa",
    initials: "NK",
    avatarBg: "from-emerald-400 to-teal-500",
    grade: "Học sinh lớp 12, THPT Chu Văn An",
    text: "Nhờ TramOnThi tôi đã cải thiện điểm Toán từ 6 lên 9.5. Cách giảng dạy rõ ràng, dễ hiểu và bám sát đề thi THPT.",
    score: "9.5",
    subject: "Toán",
  },
  {
    name: "Trần Thị Mai",
    initials: "TM",
    avatarBg: "from-violet-400 to-purple-500",
    grade: "Học sinh lớp 11, THPT Lê Hồng Phong",
    text: "Bài giảng chất lượng cao, có thể xem lại bao nhiêu lần cũng được. Bài tập sau mỗi bài giúp tôi ghi nhớ rất tốt.",
    score: "8.8",
    subject: "Hóa học",
  },
  {
    name: "Lê Hoàng Nam",
    initials: "LN",
    avatarBg: "from-blue-400 to-cyan-500",
    grade: "Thí sinh ôn thi Đại học 2026",
    text: "Kho câu hỏi luyện tập cực kỳ phong phú. AI kiểm tra hiểu bài giúp tôi biết cần ôn phần nào để đạt điểm cao hơn.",
    score: "28.5",
    subject: "Điểm xét tuyển ĐH",
  },
];

export default function Home() {
  const [activeGrade, setActiveGrade] = useState("grade10");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── NAVBAR (floating pill) ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 py-4">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-gray-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              : "bg-white/70 backdrop-blur-xl border border-gray-900/5 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-80 blur-sm scale-110 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-9 h-9 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap weight="fill" className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gray-900">Tram</span>
              <span className="text-gradient">OnThi</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[{ label: "Khóa học", href: "#khoa-hoc" }, { label: "Tính năng", href: "#tinh-nang" }].map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-900/5 transition-all">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors">
              Đăng nhập
            </Link>
            <Link href="/register" className="text-sm font-semibold bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all">
              Đăng ký miễn phí
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            className="md:hidden p-2 rounded-full hover:bg-gray-900/5 transition-colors flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-4 py-3 space-y-1 animate-fade-in">
            <a href="#khoa-hoc" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">Khóa học</a>
            <a href="#tinh-nang" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">Tính năng</a>
            <div className="flex gap-2 pt-2 border-t border-gray-100 mt-2">
              <Link href="/login" className="flex-1 text-sm font-medium border border-gray-200 text-gray-700 px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-center">Đăng nhập</Link>
              <Link href="/register" className="flex-1 text-sm font-semibold bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2.5 rounded-full text-center">Đăng ký</Link>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO (fullscreen video background) ── */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          src="/videos/hoa-hoc-10-demo.mp4"
          aria-label="Video giới thiệu TramOnThi"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 sm:pb-12 sm:pt-32 md:px-12 md:pb-16 md:pt-36 lg:px-16">
          <div className="max-w-3xl">
            <div className="animate-hero-badge inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-sm sm:text-sm">
              <Sparkle weight="fill" className="w-4 h-4 text-emerald-300" />
              Nền tảng học trực tuyến #1 Việt Nam
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
      </section>

      {/* ── STATS ── */}
      <section className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 gradient-animate py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <Reveal key={i} direction="up" delay={i * 80} className="text-center py-2">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-white/80 mt-0.5">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="tinh-nang" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="text-center mb-16">
            <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Tại sao chọn chúng tôi</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Tất cả những gì bạn cần để{" "}
              <span className="text-gradient">thành công</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Reveal direction="left" className="lg:col-span-2 card-glow rounded-2xl overflow-hidden">
              <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100">
                    <Play weight="fill" className="w-7 h-7 text-emerald-600" />
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200 font-medium">192 Bài học</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bài giảng chi tiết đầy đủ</h3>
                <p className="text-gray-500 leading-relaxed mb-6">192 bài học từ lớp 10 đến ôn thi ĐH, giảng giải từng bước, bám sát SGK Kết nối tri thức 2022.</p>
                <div className="flex gap-3 flex-wrap">
                  {["16 khóa học", "5 module/khóa", "Lớp 10 → Ôn thi ĐH"].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={100} className="card-glow rounded-2xl overflow-hidden">
              <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 mb-6">
                  <Lightning weight="fill" className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Kiểm tra hiểu bài</h3>
                <p className="text-gray-500 leading-relaxed">Sau mỗi bài học, AI tự động tạo câu hỏi kiểm tra, giải thích đáp án sai ngay lập tức.</p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={100} className="card-glow rounded-2xl overflow-hidden">
              <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 mb-6">
                  <Shield weight="fill" className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz bám đề thi thật</h3>
                <p className="text-gray-500 leading-relaxed">400+ câu hỏi theo đúng dạng THPT Quốc gia, phân tích điểm yếu để ôn đúng chỗ.</p>
              </div>
            </Reveal>
            <Reveal direction="right" className="lg:col-span-2 card-glow rounded-2xl overflow-hidden">
              <div className="bg-white rounded-2xl p-7 h-full border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center border border-cyan-100">
                    <Users weight="fill" className="w-7 h-7 text-cyan-600" />
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-cyan-50 text-cyan-600 border border-cyan-200 font-medium">AI Chatbot</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trợ lý AI hỗ trợ 24/7</h3>
                <p className="text-gray-500 leading-relaxed mb-6">Đặt câu hỏi bất cứ lúc nào và nhận giải đáp tức thì từ AI được đào tạo chuyên về chương trình THPT Việt Nam.</p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {STAT_DOT_CLASSES.map((cls, i) => (
                      <div key={i} className={`${cls} w-8 h-8 rounded-full border-2 border-white shadow-sm`}></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">GPT-4o-mini · Sẵn sàng mọi lúc</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COURSES BY GRADE ── */}
      <section id="khoa-hoc" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="text-center mb-14">
            <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Khóa học</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Chọn lớp, bắt đầu <span className="text-gradient">ngay hôm nay</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Chương trình học bám sát SGK Kết nối tri thức 2022, đúng chuẩn THPT hiện hành.</p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {GRADES.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveGrade(g.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeGrade === g.id ? "text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 border border-gray-200"}`}
              >
                {activeGrade === g.id && <span className="absolute inset-0 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" aria-hidden></span>}
                <span className="relative">{g.label}</span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SUBJECTS[activeGrade].map((subject, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 90}>
                <Link
                  href="/register"
                  className="card-glow group bg-white rounded-2xl p-5 text-left border border-gray-100 shadow-sm hover:-translate-y-2 transition-all duration-300 block"
                >
                  <div className={`${subject.bgClass} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    {subject.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{subject.name}</h3>
                  <p className="text-sm text-gray-400">{subject.modules} chương · {subject.lessons} bài</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-600">Miễn phí</span>
                    <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal direction="up" className="text-center mb-14">
            <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Phản hồi</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Học sinh nói gì về <span className="text-gradient">chúng tôi?</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={i}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
                delay={i * 120}
                className={`card-glow rounded-2xl overflow-hidden ${i === 1 ? "md:-mt-4" : ""}`}
              >
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-5">
                    {[1,2,3,4,5].map((s) => <Star key={s} weight="fill" className="w-4 h-4 text-amber-400" />)}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-black ring-2 ring-white shadow-md bg-linear-to-br ${t.avatarBg} flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.grade}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-gradient">{t.score}</p>
                      <p className="text-xs text-gray-400">{t.subject}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="scale" className="border-animated-slow border-animated-lg">
            <div className="border-inner-lg bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-[calc(1.5rem-1px)] px-8 py-16 text-center relative overflow-hidden shadow-xl shadow-emerald-500/8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 mb-6 mx-auto">
                  <BookOpen weight="fill" className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Sẵn sàng bắt đầu <span className="text-gradient">hành trình?</span>
                </h2>
                <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
                  Tham gia ngay hôm nay để học miễn phí. 16 khóa học, 192 bài giảng, AI hỗ trợ 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register" className="glow-btn inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold text-base shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300">
                    Đăng ký miễn phí ngay
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-2xl font-semibold text-base hover:bg-gray-50 transition-all shadow-sm">
                    Đã có tài khoản
                  </Link>
                </div>
                <p className="text-gray-400 text-sm mt-6">
                  Đã có <span className="text-emerald-600 font-semibold">50,000+</span> học sinh tham gia
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap weight="fill" className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">TramOnThi</span>
            </div>
            <p className="text-gray-400 text-sm">Nền tảng học trực tuyến THPT &amp; Đại học · Việt Nam · 2026</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/login" className="hover:text-white transition-colors">Đăng nhập</Link>
              <Link href="/register" className="hover:text-white transition-colors">Đăng ký</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
