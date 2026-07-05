"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "@phosphor-icons/react";

const QUESTIONS = [
  "Tôi hiểu rõ khái niệm nghiên cứu khoa học",
  "Tôi biết cách chọn đề tài nghiên cứu phù hợp",
  "Tôi có thể tìm kiếm tài liệu học thuật hiệu quả",
  "Tôi hiểu các phương pháp nghiên cứu cơ bản",
  "Tôi có thể phân tích dữ liệu thống kê cơ bản",
  "Tôi tự tin viết báo cáo nghiên cứu khoa học",
  "Tôi tự tin trình bày đề tài trước hội đồng",
  "E-learning phù hợp với phong cách học của tôi",
  "Tôi hài lòng với nội dung học tập hiện tại",
  "Tôi sẽ giới thiệu khóa học này cho bạn bè",
];

const SCALE = ["1 – Hoàn toàn không đồng ý", "2", "3 – Trung lập", "4", "5 – Hoàn toàn đồng ý"];

export default function SurveyPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [warning, setWarning] = useState("");

  const checkExisting = useCallback(async () => {
    const res = await fetch(`/api/survey?type=${type}`);
    if (res.status === 401) { router.push("/login"); return; }
    const data = await res.json();
    if (data.submitted) setAlreadyDone(true);
  }, [type, router]);

  useEffect(() => { checkExisting(); }, [checkExisting]);

  async function handleSubmit() {
    if (Object.keys(answers).length < QUESTIONS.length) {
      setWarning("Vui lòng trả lời tất cả câu hỏi trước khi gửi.");
      return;
    }
    setWarning("");
    setSubmitting(true);
    await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, answers }),
    });
    setSubmitted(true);
    setSubmitting(false);
  }

  const isPost = type === "post";
  const title = isPost ? "Khảo sát Post-test (Sau khi học)" : "Khảo sát Pre-test (Trước khi học)";
  const desc = isPost
    ? "Đánh giá sự thay đổi kiến thức và kỹ năng của bạn sau khóa học."
    : "Đánh giá mức độ hiểu biết hiện tại của bạn trước khi bắt đầu học.";

  if (alreadyDone || submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navbar />
        <div className="mx-auto max-w-xl px-4 py-16 text-center">
          <CheckCircle size={48} className="mx-auto text-emerald-400" weight="fill" />
          <h1 className="mt-4 text-xl font-semibold">
            {submitted ? "Cảm ơn bạn đã hoàn thành khảo sát!" : "Bạn đã làm khảo sát này rồi."}
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Dữ liệu của bạn đã được ghi nhận để phục vụ nghiên cứu.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-block rounded-lg bg-emerald-400 px-6 py-2.5 text-sm font-medium text-zinc-950"
          >
            Về khóa học
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-zinc-400">{desc}</p>
        <p className="mt-1 text-xs text-zinc-500">
          Thang đo 1-5: 1 = Hoàn toàn không đồng ý, 5 = Hoàn toàn đồng ý
        </p>

        <div className="mt-6 space-y-5">
          {QUESTIONS.map((q, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
              <p className="text-sm font-medium mb-3">
                <span className="text-zinc-500 mr-2">{idx + 1}.</span>
                {q}
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAnswers((prev) => ({ ...prev, [idx]: val }))}
                    className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                      answers[idx] === val
                        ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                        : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                    }`}
                    title={SCALE[val - 1]}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {warning && (
          <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
            {warning}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-zinc-500">{Object.keys(answers).length}/{QUESTIONS.length} câu đã trả lời</span>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-lg bg-emerald-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-all active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100"
          >
            {submitting ? "Đang gửi..." : "Gửi khảo sát"}
          </button>
        </div>
      </div>
    </div>
  );
}