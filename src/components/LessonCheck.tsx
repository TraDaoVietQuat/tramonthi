"use client";

import { useState } from "react";
import { Brain, SpinnerGap, CheckCircle, XCircle, ArrowClockwise, CaretDown } from "@phosphor-icons/react";

interface Question {
  text: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface Props {
  lessonTitle: string;
  content: string;
}

export default function LessonCheck({ lessonTitle, content }: Props) {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selected, setSelected] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generate() {
    setLoading(true);
    setError("");
    setSubmitted(false);
    setSelected([]);
    setQuestions([]);

    try {
      const res = await fetch("/api/lesson-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonTitle, content }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Lỗi không xác định"); return; }
      setQuestions(data.questions);
      setSelected(new Array(data.questions.length).fill(null));
    } catch {
      setError("Không kết nối được. Thử lại.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpen() {
    setOpen(true);
    if (questions.length === 0 && !loading) generate();
  }

  function handleSelect(qi: number, oi: number) {
    if (submitted) return;
    setSelected((prev) => { const n = [...prev]; n[qi] = oi; return n; });
  }

  const allAnswered = selected.length > 0 && selected.every((s) => s !== null);
  const score = questions.filter((q, i) => selected[i] === q.answer).length;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-violet-200 bg-violet-50">
      {/* Header toggle */}
      <button
        type="button"
        onClick={open ? () => setOpen(false) : handleOpen}
        className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-violet-100"
      >
        <Brain size={20} className="shrink-0 text-violet-600" weight="fill" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-violet-700">Kiểm tra hiểu bài</p>
          <p className="text-xs text-violet-500">AI tự động tạo câu hỏi từ nội dung bài học</p>
        </div>
        <CaretDown
          size={16}
          className={`text-violet-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Content */}
      {open && (
        <div className="border-t border-violet-200 px-5 pb-5 pt-4">

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-2 py-6 text-sm text-violet-600">
              <SpinnerGap size={18} className="animate-spin" />
              AI đang tạo câu hỏi từ bài học...
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">{error}</p>
              <button type="button" onClick={generate} className="text-xs text-red-500 underline">Thử lại</button>
            </div>
          )}

          {/* Questions */}
          {!loading && questions.length > 0 && (
            <div className="space-y-6">
              {questions.map((q, qi) => {
                const isAnswered = submitted;
                const userPick = selected[qi];
                return (
                  <div key={qi} className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="mb-3 text-sm font-semibold text-gray-800">
                      <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                        {qi + 1}
                      </span>
                      {q.text}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        let cls = "flex items-start gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition cursor-pointer select-none ";
                        if (!isAnswered) {
                          cls += userPick === oi
                            ? "border-violet-400 bg-violet-50 text-violet-700"
                            : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50 text-gray-700";
                        } else {
                          if (oi === q.answer) {
                            cls += "border-emerald-400 bg-emerald-50 text-emerald-700";
                          } else if (userPick === oi && oi !== q.answer) {
                            cls += "border-red-300 bg-red-50 text-red-600";
                          } else {
                            cls += "border-gray-200 bg-gray-50 text-gray-400";
                          }
                        }
                        return (
                          <div key={oi} className={cls} onClick={() => handleSelect(qi, oi)}>
                            <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-gray-400">
                              {String.fromCharCode(65 + oi)}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isAnswered && oi === q.answer && (
                              <CheckCircle size={15} className="mt-0.5 shrink-0 text-emerald-500" weight="fill" />
                            )}
                            {isAnswered && userPick === oi && oi !== q.answer && (
                              <XCircle size={15} className="mt-0.5 shrink-0 text-red-400" weight="fill" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation after submit */}
                    {isAnswered && q.explanation && (
                      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
                        <span className="font-semibold">Giải thích:</span> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Submit / Result */}
              {!submitted ? (
                <button
                  type="button"
                  disabled={!allAnswered}
                  onClick={() => setSubmitted(true)}
                  className="w-full rounded-xl bg-violet-500 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:opacity-40"
                >
                  Nộp bài kiểm tra
                </button>
              ) : (
                <div className={`rounded-xl border p-4 text-center ${
                  score === questions.length
                    ? "border-emerald-200 bg-emerald-50"
                    : score >= Math.ceil(questions.length / 2)
                    ? "border-amber-200 bg-amber-50"
                    : "border-red-200 bg-red-50"
                }`}>
                  <p className={`text-2xl font-bold ${
                    score === questions.length ? "text-emerald-600" :
                    score >= Math.ceil(questions.length / 2) ? "text-amber-600" : "text-red-500"
                  }`}>
                    {score}/{questions.length}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {score === questions.length
                      ? "Xuất sắc! Bạn đã nắm vững bài học."
                      : score >= Math.ceil(questions.length / 2)
                      ? "Khá tốt! Xem lại phần chưa hiểu."
                      : "Hãy đọc lại bài và thử lại nhé!"}
                  </p>
                  <button
                    type="button"
                    onClick={generate}
                    className="mt-3 flex items-center gap-1.5 mx-auto text-xs text-violet-600 underline hover:text-violet-800"
                  >
                    <ArrowClockwise size={12} />
                    Tạo bộ câu hỏi mới
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
