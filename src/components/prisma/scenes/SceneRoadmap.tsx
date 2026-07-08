"use client";

import { forwardRef } from "react";
import { Play, Zap, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import Scene from "../cinematic/Scene";
import WordsPullUpMultiStyle from "../WordsPullUpMultiStyle";
import RoadmapIllustration from "./RoadmapIllustration";

interface Step {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  title: string;
  description: string;
  left: string;
  top: string;
}

const STEPS: Step[] = [
  {
    icon: Play,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-400/30",
    title: "Bài giảng chi tiết đầy đủ",
    description: "192 bài học từ lớp 10 đến ôn thi ĐH, bám sát SGK Kết nối tri thức 2022.",
    left: "8%",
    top: "68%",
  },
  {
    icon: Zap,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-400/30",
    title: "AI Kiểm tra hiểu bài",
    description: "Sau mỗi bài học, AI tự động tạo câu hỏi kiểm tra, giải thích đáp án sai ngay lập tức.",
    left: "34%",
    top: "58%",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    iconBorder: "border-orange-400/30",
    title: "Quiz bám đề thi thật",
    description: "400+ câu hỏi theo đúng dạng THPT Quốc gia, phân tích điểm yếu để ôn đúng chỗ.",
    left: "58%",
    top: "18%",
  },
  {
    icon: Users,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    iconBorder: "border-sky-400/30",
    title: "Trợ lý AI hỗ trợ 24/7",
    description: "Đặt câu hỏi bất cứ lúc nào và nhận giải đáp tức thì, đào tạo chuyên về chương trình THPT Việt Nam.",
    left: "82%",
    top: "56%",
  },
];

const SceneRoadmap = forwardRef<HTMLElement>(function SceneRoadmap(_props, ref) {
  return (
    <Scene ref={ref} id="roadmap" height={170} direction="horizontal">
      <div className="cine-scene-bg bg-[#0d0d0d]">
        <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />

        <div className="absolute inset-0 max-w-2xl mx-auto flex items-center justify-center opacity-70">
          <RoadmapIllustration className="w-full h-full max-h-140" />
        </div>

        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="cine-text absolute w-52 sm:w-60"
              style={{ left: step.left, top: step.top, ["--delay" as string]: `${i * 140}ms` }}
            >
              <div className="bg-[#161616] backdrop-blur-sm border border-white/10 rounded-xl shadow-xl px-4 py-3.5">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${step.iconBg} border ${step.iconBorder} mb-3`}
                >
                  <Icon className={`w-4.5 h-4.5 ${step.iconColor}`} />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{step.title}</h3>
                <p className="mt-1 text-xs text-white/50 leading-snug">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cine-scene__content px-6 pt-24 md:px-14 md:pt-28">
        <span className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          Tại sao chọn chúng tôi
        </span>
        <div className="mt-3 max-w-xl">
          <WordsPullUpMultiStyle
            className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight !justify-start"
            segments={[
              { text: "Tất cả những gì bạn cần để", className: "" },
              { text: "thành công.", className: "text-gradient" },
            ]}
          />
        </div>
      </div>
    </Scene>
  );
});

export default SceneRoadmap;
