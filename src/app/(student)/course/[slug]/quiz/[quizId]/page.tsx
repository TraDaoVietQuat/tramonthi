"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { ArrowLeft, CheckCircle, XCircle, ArrowCounterClockwise } from "@phosphor-icons/react";

type Question = { id: string; text: string; options: string[] };
type QuizData = { id: string; title: string; questions: Question[]; courseSlug: string };

export default function QuizPage() {
  const { slug, quizId } = useParams<{ slug: string; quizId: string }>();
  const router = useRouter();
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; correct: number; total: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef(new Date().toISOString());

  const fetchQuiz = useCallback(async () => {
    const res = await fetch(`/api/course/${slug}/quiz/${quizId}`);
    if (res.status === 401) { router.push("/login"); return; }
    const data = await res.json();
    setQuiz(data);
  }, [slug, quizId, router]);

  useEffect(() => { fetchQuiz(); }, [fetchQuiz]);

  async function handleSubmit() {
    if (!quiz) return;
    const unanswered = quiz.questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      alert(`Còn ${unanswered.length} câu chưa trả lời.`);
      return;
    }
    setSubmitting(true);
    const res = await fetch(`/api/quiz/${quizId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, startedAt: startedAt.current }),
    });
    const data = await res.json();
    setResult(data);
    setSubmitting(false);
  }

  function resetQuiz() {
    setResult(null);
    setAnswers({});
    startedAt.current = new Date().toISOString();
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex h-64 items-center justify-center text-gray-400">Đang tải...</div>
      </div>
    );
  }

  const answered = Object.keys(answers).length;
  const pass = result && result.score >= 60;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-8">

        {/* Header */}
        <div className="mb-6">
          <Link href="/dashboard" className="flex w-fit items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-700">
            <ArrowLeft size={15} />
            Quay lại khóa học
          </Link>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">{quiz.title}</h1>
          <p className="mt-1 text-sm text-gray-500">{quiz.questions.length} câu hỏi trắc nghiệm</p>
        </div>

        {/* Result screen */}
        {result ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${pass ? "bg-emerald-50" : "bg-amber-50"}`}>
              {pass
                ? <CheckCircle size={42} weight="fill" className="text-emerald-500" />
                : <XCircle size={42} weight="fill" className="text-amber-500" />
              }
            </div>
            <div className={`mt-4 text-5xl font-bold ${pass ? "text-emerald-500" : "text-amber-500"}`}>
              {result.score.toFixed(0)}%
            </div>
            <p className="mt-2 text-gray-500">{result.correct}/{result.total} câu đúng</p>
            <p className={`mt-1 text-sm font-medium ${pass ? "text-emerald-600" : "text-amber-600"}`}>
              {pass ? "Xuất sắc! Bạn đã hoàn thành module." : "Hãy ôn lại bài và thử lại nhé."}
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <button
                type="button"
                onClick={resetQuiz}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                <ArrowCounterClockwise size={15} />
                Làm lại
              </button>
              <Link
                href="/dashboard"
                className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Về khóa học
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Progress indicator */}
            <div className="mb-5 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
              <span className="text-sm text-gray-500">
                Đã chọn <span className="font-semibold text-gray-900">{answered}</span>/{quiz.questions.length} câu
              </span>
              <ProgressBar value={(answered / quiz.questions.length) * 100} className="h-1.5 w-40" />
            </div>

            {/* Questions */}
            <div className="space-y-5">
              {quiz.questions.map((q, idx) => (
                <div key={q.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">
                    <span className="mr-2 text-gray-400">{idx + 1}.</span>
                    {q.text}
                  </p>
                  <div className="mt-4 space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const selected = answers[q.id] === String(optIdx);
                      return (
                        <label
                          key={optIdx}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                            selected
                              ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                              : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={String(optIdx)}
                            checked={selected}
                            onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: String(optIdx) }))}
                            className="mt-0.5 accent-emerald-500"
                          />
                          <span>
                            <span className={`mr-2 font-semibold ${selected ? "text-emerald-600" : "text-gray-400"}`}>
                              {["A", "B", "C", "D"][optIdx]}.
                            </span>
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || answered < quiz.questions.length}
                className="rounded-lg bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 disabled:opacity-50"
              >
                {submitting ? "Đang nộp..." : "Nộp bài"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
