"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Scene from "../cinematic/Scene";

const SceneNewsletter = forwardRef<HTMLElement>(function SceneNewsletter(_props, ref) {
  const [email, setEmail] = useState("");

  return (
    <Scene ref={ref} id="newsletter" height={130} direction="vertical">
      <div className="cine-scene-bg bg-[#0d0d0d]">
        <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />
      </div>

      <div className="cine-scene__content flex h-full flex-col items-center justify-center px-4 md:px-8">
        <div className="cine-text w-full max-w-2xl">
          <div className="w-full rounded-[2.5rem] p-6 sm:p-10 md:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden isolate shadow-2xl bg-[#F3F1EC]">
            <Image
              src="/images/newsletter-bg.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover -z-10 opacity-80"
            />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Nhận bản tin học tập.</h2>
            <p className="mt-2 max-w-lg text-xs sm:text-sm text-gray-600">
              Đề thi thử hàng tuần, mẹo ôn luyện hiệu quả và ưu đãi khoá học mới — không spam, huỷ đăng ký bất cứ lúc
              nào.
            </p>

            <form className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="w-full sm:flex-1 bg-white/80 border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 outline-none focus:border-gray-400 transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:gap-3 transition-all shrink-0"
              >
                Đăng ký
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>

        <p className="cine-text mt-10 text-xs text-white/30" style={{ ["--delay" as string]: "160ms" }}>
          © {new Date().getFullYear()} TramOnThi. Made for students who refuse to give up.
        </p>
      </div>
    </Scene>
  );
});

export default SceneNewsletter;
