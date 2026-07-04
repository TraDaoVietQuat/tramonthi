"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LessonCheck from "@/components/LessonCheck";
import { ArrowLeft, CheckCircle, ClipboardText, ArrowRight } from "@phosphor-icons/react";

type Lesson = { id: string; title: string; content: string; order: number };
type Module = { id: string; title: string; order: number; lessons: Lesson[]; quizzes: { id: string }[] };
type CourseData = { slug: string; title: string; modules: Module[] };

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## "))
      return <h2 key={i} className="mb-2 mt-8 text-xl font-bold text-gray-900 first:mt-0">{line.slice(3)}</h2>;
    if (line.startsWith("### "))
      return <h3 key={i} className="mb-1.5 mt-5 text-sm font-semibold text-emerald-600">{line.slice(4)}</h3>;
    if (line.startsWith("> "))
      return <blockquote key={i} className="my-2 border-l-4 border-emerald-400 bg-emerald-50 py-2 pl-4 text-sm text-gray-700 italic">{line.slice(2)}</blockquote>;
    if (line.startsWith("- ") || line.startsWith("* "))
      return <li key={i} className="ml-5 list-disc text-sm text-gray-700">{line.slice(2)}</li>;
    if (line.match(/^\d+\. /))
      return <li key={i} className="ml-5 list-decimal text-sm text-gray-700">{line.replace(/^\d+\. /, "")}</li>;
    if (line.startsWith("| "))
      return <p key={i} className="font-mono text-xs text-gray-600 leading-6">{line}</p>;
    if (line.startsWith("$$") || line.startsWith("\\["))
      return <p key={i} className="my-2 rounded-lg bg-gray-50 px-4 py-3 font-mono text-sm text-gray-700">{line}</p>;
    if (line === "---" || line === "---")
      return <hr key={i} className="my-5 border-gray-200" />;
    if (line === "")
      return <div key={i} className="h-2" />;
    // Bold: **text**
    if (/\*\*(.+?)\*\*/.test(line)) {
      const parts = line.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i} className="text-sm leading-relaxed text-gray-700">
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="font-semibold text-gray-900">{p}</strong> : p)}
        </p>
      );
    }
    return <p key={i} className="text-sm leading-relaxed text-gray-700">{line}</p>;
  });
}

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const router = useRouter();
  const [course, setCourse] = useState<CourseData | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await fetch(`/api/course/${slug}/lesson/${lessonId}`);
    if (res.status === 401) { router.push("/login"); return; }
    const data = await res.json();
    setCourse(data.course);
    setLesson(data.lesson);
    setCompleted(data.completed);
    if (!data.completed) {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, action: "start" }),
      });
    }
  }, [slug, lessonId, router]);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function markComplete() {
    setLoading(true);
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, action: "complete" }),
    });
    setCompleted(true);
    setLoading(false);
  }

  if (!lesson || !course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex h-64 items-center justify-center text-gray-400">Đang tải...</div>
      </div>
    );
  }

  const currentModule = course.modules.find((m) => m.lessons.some((l) => l.id === lessonId));
  const allModuleLessons = currentModule?.lessons ?? [];
  const currentIdx = allModuleLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = allModuleLessons[currentIdx + 1];
  const quiz = currentModule?.quizzes[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/dashboard" className="flex items-center gap-1 hover:text-gray-700 transition-colors">
            <ArrowLeft size={15} />
            Khóa học
          </Link>
          <span>/</span>
          <span className="text-gray-500">{currentModule?.title}</span>
        </div>

        {/* Lesson content */}
        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{lesson.title}</h1>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs text-gray-400">Bài {currentIdx + 1}/{allModuleLessons.length}</span>
            {completed && (
              <span className="flex items-center gap-1 text-xs text-emerald-600">
                <CheckCircle size={12} weight="fill" /> Đã hoàn thành
              </span>
            )}
          </div>
          <div className="mt-7 space-y-1">
            {renderContent(lesson.content)}
          </div>

          {/* Inline comprehension check */}
          <LessonCheck lessonTitle={lesson.title} content={lesson.content} />
        </article>

        {/* Action bar */}
        <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
          {!completed ? (
            <button
              type="button"
              onClick={markComplete}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-60"
            >
              <CheckCircle size={16} />
              {loading ? "Đang lưu..." : "Đánh dấu hoàn thành"}
            </button>
          ) : (
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
              <CheckCircle size={16} weight="fill" />
              Đã hoàn thành
            </div>
          )}

          <div className="flex gap-2">
            {nextLesson && (
              <Link
                href={`/course/${slug}/lesson/${nextLesson.id}`}
                className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Bài tiếp
                <ArrowRight size={14} />
              </Link>
            )}
            {!nextLesson && quiz && (
              <Link
                href={`/course/${slug}/quiz/${quiz.id}`}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                <ClipboardText size={15} />
                Làm quiz
              </Link>
            )}
          </div>
        </div>

        {/* Lesson sidebar (same module) */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            {currentModule?.title}
          </p>
          <div className="space-y-1">
            {allModuleLessons.map((l, i) => (
              <Link
                key={l.id}
                href={`/course/${slug}/lesson/${l.id}`}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                  l.id === lessonId
                    ? "bg-emerald-50 font-medium text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="w-5 text-center text-xs text-gray-400">{i + 1}</span>
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
