"use client";

import { forwardRef, useRef } from "react";
import { useInView } from "framer-motion";
import Scene from "../cinematic/Scene";
import WordsPullUpMultiStyle from "../WordsPullUpMultiStyle";

const STATS = [
  { value: "192", label: "bài giảng chi tiết", left: "12%" },
  { value: "400+", label: "câu hỏi trắc nghiệm", left: "42%" },
  { value: "100%", label: "bám sát đề thi THPT", left: "72%" },
];

const SceneQuizBank = forwardRef<HTMLElement>(function SceneQuizBank(_props, ref) {
  const bgRef = useRef<HTMLDivElement>(null);
  // Defer the background video fetch until this scene (4th of 6) is actually
  // about to scroll into view, instead of downloading it on initial page load.
  const nearView = useInView(bgRef, { once: true, margin: "600px 0px 600px 0px" });

  return (
    <Scene ref={ref} id="quiz-bank" height={150} direction="horizontal">
      <div className="cine-scene-bg bg-black" ref={bgRef}>
        {nearView && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="/videos/hoa-hoc-10-demo.mp4"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/40" />

        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="cine-text absolute top-1/2 -translate-y-1/2 text-center w-44"
            style={{ left: s.left, ["--delay" as string]: `${i * 160}ms` }}
          >
            <p className="cine-stat-number text-5xl sm:text-6xl font-black text-gradient">{s.value}</p>
            <p className="mt-2 text-xs sm:text-sm text-white/50 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="cine-scene__content flex h-full items-end px-6 pb-16 md:px-14 md:pb-20">
        <div className="max-w-lg">
          <span className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-widest cine-text">
            Quiz bám đề thi thật
          </span>
          <div className="mt-3">
            <WordsPullUpMultiStyle
              className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight !justify-start"
              segments={[{ text: "Luyện đúng dạng đề, không học lan man.", className: "" }]}
            />
          </div>
          <p
            className="cine-text mt-4 text-sm sm:text-base text-white/60 leading-relaxed"
            style={{ ["--delay" as string]: "180ms" }}
          >
            Ngân hàng câu hỏi được xây dựng theo đúng cấu trúc đề thi THPT Quốc gia, tự động phân tích điểm yếu để gợi
            ý lộ trình ôn luyện đúng chỗ cần thiết.
          </p>
        </div>
      </div>
    </Scene>
  );
});

export default SceneQuizBank;
