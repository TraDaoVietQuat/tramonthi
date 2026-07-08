"use client";

import { forwardRef } from "react";
import { Bot, User } from "lucide-react";
import Scene from "../cinematic/Scene";
import WordsPullUpMultiStyle from "../WordsPullUpMultiStyle";

const MESSAGES = [
  { from: "user" as const, text: "Tại sao (x−2)² lại bằng 8 ạ?" },
  { from: "ai" as const, text: "Vì phương trình ban đầu có dạng x² − 4x − 4 = 0, chuyển vế và hoàn thành bình phương em nhé — mình giải từng bước bên dưới." },
  { from: "user" as const, text: "Dạ em hiểu rồi, cảm ơn AI!" },
];

const SceneFlexible = forwardRef<HTMLElement>(function SceneFlexible(_props, ref) {
  return (
    <Scene ref={ref} id="flexible" height={140} direction="vertical">
      <div
        className="cine-scene-bg"
        style={{ background: "linear-gradient(160deg, #0a1a16 0%, #06120f 55%, #030a08 100%)" }}
      >
        <div className="bg-noise absolute inset-0 opacity-[0.06] pointer-events-none" />
        <div
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            bottom: "6%",
            left: "6%",
            width: 380,
            height: 380,
            background: "radial-gradient(circle, #10b981, transparent 70%)",
          }}
        />

        <div
          className="cine-text absolute w-[300px] sm:w-[340px] bg-[#0f1512] border border-white/10 rounded-2xl shadow-2xl p-4 space-y-3"
          style={{
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            animation: "cine-float 6s ease-in-out infinite",
          }}
        >
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="text-xs font-medium text-white/70">Trợ lý AI TramOnThi</p>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          {MESSAGES.map((m, i) => (
            <div key={i} className={`flex gap-2 ${m.from === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center ${
                  m.from === "ai" ? "bg-emerald-500/20" : "bg-white/10"
                }`}
              >
                {m.from === "ai" ? (
                  <Bot className="w-3 h-3 text-emerald-300" />
                ) : (
                  <User className="w-3 h-3 text-white/60" />
                )}
              </div>
              <p
                className={`text-[11px] leading-relaxed rounded-xl px-2.5 py-1.5 ${
                  m.from === "ai" ? "bg-white/5 text-white/70" : "bg-emerald-500/15 text-emerald-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="cine-scene__content flex h-full items-center justify-end px-6 md:px-14">
        <div className="max-w-lg text-right">
          <span className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-widest cine-text">
            Trợ lý AI 24/7
          </span>
          <div className="mt-3 flex justify-end">
            <WordsPullUpMultiStyle
              className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight !justify-end text-right"
              segments={[{ text: "Học mọi lúc, mọi nơi, không bao giờ đơn độc.", className: "" }]}
            />
          </div>
          <p
            className="cine-text mt-4 text-sm sm:text-base text-white/60 leading-relaxed"
            style={{ ["--delay" as string]: "180ms" }}
          >
            Kẹt bài tập lúc nửa đêm? Trợ lý AI luôn sẵn sàng giải thích lại kiến thức, gợi ý hướng làm và động viên bạn
            đi tiếp — trên điện thoại, máy tính, bất cứ khi nào bạn cần.
          </p>
        </div>
      </div>
    </Scene>
  );
});

export default SceneFlexible;
