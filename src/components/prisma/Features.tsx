"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Zap, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Step {
  number: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  title: string;
  description: string;
  position: React.CSSProperties;
  slideFrom: "left" | "right";
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: Play,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    title: "Bài giảng chi tiết đầy đủ",
    description: "192 bài học từ lớp 10 đến ôn thi ĐH, giảng giải từng bước, bám sát SGK Kết nối tri thức 2022.",
    position: { top: "18%", left: "14%" },
    slideFrom: "left",
  },
  {
    number: "02",
    icon: Zap,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    title: "AI Kiểm tra hiểu bài",
    description: "Sau mỗi bài học, AI tự động tạo câu hỏi kiểm tra, giải thích đáp án sai ngay lập tức.",
    position: { top: "44%", left: "40%" },
    slideFrom: "left",
  },
  {
    number: "03",
    icon: ShieldCheck,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-100",
    title: "Quiz bám đề thi thật",
    description: "400+ câu hỏi theo đúng dạng THPT Quốc gia, phân tích điểm yếu để ôn đúng chỗ.",
    position: { bottom: "20%", left: "10%" },
    slideFrom: "left",
  },
  {
    number: "04",
    icon: Users,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-50",
    iconBorder: "border-sky-100",
    title: "Trợ lý AI hỗ trợ 24/7",
    description: "Đặt câu hỏi bất cứ lúc nào và nhận giải đáp tức thì từ AI được đào tạo chuyên về chương trình THPT Việt Nam.",
    position: { bottom: "10%", right: "4%" },
    slideFrom: "right",
  },
];

function Callout({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;
  const xFrom = step.slideFrom === "left" ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      className="absolute z-10 w-42 sm:w-47.5"
      style={step.position}
      initial={{ opacity: 0, x: xFrom }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xFrom }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: EASE }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="relative bg-[#FBF9F4]/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-300 px-3 py-2.5 cursor-default"
      >
        <div className={`flex items-center justify-center w-11 h-11 rounded-full ${step.iconBg} border ${step.iconBorder} mb-2`}>
          <Icon className={`w-4 h-4 ${step.iconColor}`} />
        </div>
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{step.title}</h3>
        <p className="mt-1 text-[10px] sm:text-[11px] text-gray-500 leading-snug">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}

function LegendItem({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="flex items-start gap-3">
      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.iconBg} border ${step.iconBorder} shrink-0`}>
        <Icon className={`w-5 h-5 ${step.iconColor}`} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
        <p className="mt-1 text-xs text-gray-500">{step.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="tinh-nang" className="relative bg-gray-100 py-20 sm:py-24 md:py-28 px-4 md:px-6 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl md:rounded-4xl px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-emerald-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Tại sao chọn chúng tôi
          </span>
          <div className="mt-3">
            <WordsPullUpMultiStyle
              className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight justify-center"
              segments={[
                { text: "Tất cả những gì bạn cần để", className: "" },
                { text: "thành công.", className: "text-gradient" },
              ]}
            />
          </div>
        </div>

        <div className="hidden md:block relative max-w-3xl mx-auto aspect-square">
          <Image src="/images/lo-trinh-hoc.jpg" alt="Lộ trình học tập" fill className="object-contain" />
          {STEPS.map((step, i) => (
            <Callout key={step.number} step={step} index={i} />
          ))}
        </div>

        <div className="md:hidden space-y-8">
          <div className="relative max-w-xs mx-auto aspect-square">
            <Image src="/images/lo-trinh-hoc.jpg" alt="Lộ trình học tập" fill className="object-contain" />
          </div>
          {STEPS.map((step) => (
            <LegendItem key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
