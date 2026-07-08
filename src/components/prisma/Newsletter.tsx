"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative px-4 md:px-8 py-12 md:py-24 bg-gray-100">
      <div className="w-full max-w-4xl mx-auto">
        <div className="w-full aspect-7/2 rounded-[3rem] p-4 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden isolate shadow-2xl bg-[#F3F1EC]">
          <img src="/images/newsletter-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-contain -z-10" />

          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900">Nhận bản tin học tập.</h2>
          <p className="mt-1 max-w-lg text-xs text-gray-600 hidden md:block">
            Đề thi thử hàng tuần, mẹo ôn luyện hiệu quả và ưu đãi khoá học mới — không spam, huỷ đăng ký bất cứ lúc nào.
          </p>

          <form className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn..."
              className="w-full sm:flex-1 bg-white/80 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              Đăng ký
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
