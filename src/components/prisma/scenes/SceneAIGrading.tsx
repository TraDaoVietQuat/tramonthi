"use client";

import { forwardRef } from "react";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import Scene from "../cinematic/Scene";
import WordsPullUpMultiStyle from "../WordsPullUpMultiStyle";

const OPTIONS = [
  { label: "A", text: "x² − 4x + 4 = 0", state: "wrong" as const },
  { label: "B", text: "x² − 4x − 4 = 0", state: "correct" as const },
  { label: "C", text: "x² + 4x + 4 = 0", state: "idle" as const },
  { label: "D", text: "2x² − 4x = 0", state: "idle" as const },
];

const SceneAIGrading = forwardRef<HTMLElement>(function SceneAIGrading(_props, ref) {
  return (
    <Scene ref={ref} id="ai-grading" height={140} direction="vertical">
      <div
        className="cine-scene-bg"
        style={{ background: "linear-gradient(160deg, #0a1220 0%, #06101c 55%, #030810 100%)" }}
      >
        <div className="bg-noise absolute inset-0 opacity-[0.06] pointer-events-none" />

        <div
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            top: "10%",
            right: "8%",
            width: 420,
            height: 420,
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          }}
        />

        <div
          className="cine-text absolute bg-[#12181f] border border-white/10 rounded-2xl shadow-2xl p-5 w-[320px] sm:w-[380px]"
          style={{
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            animation: "cine-float 5s ease-in-out infinite",
          }}
        >
          <p className="text-white/40 text-[11px] uppercase tracking-widest mb-2">Câu 12 / Đại số</p>
          <p className="text-white text-sm font-medium mb-4">
            Phương trình nào có nghiệm x = 2 ± 2√2 ?
          </p>
          <div className="space-y-2">
            {OPTIONS.map((o) => (
              <div
                key={o.label}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm ${
                  o.state === "correct"
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                    : o.state === "wrong"
                      ? "border-red-400/40 bg-red-500/10 text-red-300"
                      : "border-white/10 text-white/60"
                }`}
              >
                <span>
                  <b className="mr-2">{o.label}.</b>
                  {o.text}
                </span>
                {o.state === "correct" && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                {o.state === "wrong" && <XCircle className="w-4 h-4 shrink-0" />}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 mt-0.5 shrink-0" />
            <p className="text-xs text-white/60 leading-relaxed">
              AI: Bạn quên đổi dấu khi chuyển vế. Xem lại bước khai triển (x−2)² = 8 nhé.
            </p>
          </div>
        </div>
      </div>

      <div className="cine-scene__content flex h-full items-center px-6 md:px-14">
        <div className="max-w-lg">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-widest cine-text">
            AI Kiểm tra hiểu bài
          </span>
          <div className="mt-3">
            <WordsPullUpMultiStyle
              className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight !justify-start"
              segments={[{ text: "AI chấm bài, chỉ đúng chỗ bạn sai.", className: "" }]}
            />
          </div>
          <p className="cine-text mt-4 text-sm sm:text-base text-white/60 leading-relaxed" style={{ ["--delay" as string]: "180ms" }}>
            Không chỉ báo đúng/sai — AI phân tích từng bước giải, chỉ ra chính xác lỗi tư duy và giải thích lại kiến
            thức nền ngay tại chỗ, để bạn không lặp lại sai lầm trong kỳ thi thật.
          </p>
        </div>
      </div>
    </Scene>
  );
});

export default SceneAIGrading;
