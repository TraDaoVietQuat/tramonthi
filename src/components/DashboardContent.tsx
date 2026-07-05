"use client";

import { useState } from "react";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import {
  BookOpen, CheckCircle, ClipboardText, Warning, CaretRight, CaretDown, ArrowLeft,
} from "@phosphor-icons/react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Lesson  { id: string; title: string; order: number }
interface Quiz    { id: string; title: string; attempted: number }
interface Module  { id: string; title: string; order: number; volume: number | null; lessons: Lesson[]; quiz: Quiz | null }
interface Course  {
  id: string; title: string; slug: string; subject: string; grade: string;
  modules: Module[];
  lessonIds: string[];
  completedCount: number;
}

interface Props {
  courses: Course[];
  completedIds: string[];
  userName: string;
  totalLessons: number;
  totalCompleted: number;
  hasSurveyPre: boolean;
  hasSurveyPost: boolean;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const GRADES = [
  { key: "9",          label: "Lớp 9" },
  { key: "10",         label: "Lớp 10" },
  { key: "11",         label: "Lớp 11" },
  { key: "12",         label: "Lớp 12" },
  { key: "university", label: "Ôn thi ĐH" },
] as const;

const SUBJECT_META: Record<string, { label: string; color: string; bg: string; border: string; icon: string }> = {
  english:     { label: "Tiếng Anh", color: "text-sky-600",     bg: "bg-sky-50",     border: "border-sky-200",     icon: "🇬🇧" },
  math:        { label: "Toán học",  color: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-200",  icon: "📐" },
  physics:     { label: "Vật Lý",    color: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200",  icon: "⚡" },
  chemistry:   { label: "Hóa học",   color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", icon: "🧪" },
  history:     { label: "Lịch sử",   color: "text-amber-700",   bg: "bg-amber-50",   border: "border-amber-200",   icon: "📜" },
  "exam-prep": { label: "Ôn thi ĐH", color: "text-rose-600",   bg: "bg-rose-50",    border: "border-rose-200",    icon: "🎯" },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function DashboardContent({
  courses, completedIds, userName, totalLessons, totalCompleted, hasSurveyPre, hasSurveyPost,
}: Props) {
  const completedSet = new Set(completedIds);
  const pct = totalLessons ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const [selectedGrade, setSelectedGrade] = useState<string>("10");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const gradeLabel = GRADES.find((g) => g.key === selectedGrade)?.label ?? "";

  // Lọc khóa học theo lớp đang chọn
  const gradeCourses = courses.filter((c) => c.grade === selectedGrade);

  // Khóa học đang xem chi tiết
  const activeCourse = selectedCourse ? courses.find((c) => c.id === selectedCourse) ?? null : null;

  function handleSelectGrade(grade: string) {
    setSelectedGrade(grade);
    setSelectedCourse(null);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Xin chào, {userName}!</h1>
        <p className="mt-1 text-sm text-gray-500">Tiếp tục hành trình ôn thi của bạn.</p>
      </div>

      {/* Overall progress */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-gray-700">Tiến độ tổng thể</span>
          <span className="font-bold text-emerald-600">{pct}%</span>
        </div>
        <ProgressBar value={pct} className="h-2.5 w-full" />
        <p className="mt-2 text-xs text-gray-400">{totalCompleted}/{totalLessons} bài học đã hoàn thành</p>
      </div>

      {/* Survey banners */}
      {!hasSurveyPre && (
        <Link href="/survey/pre" className="mb-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 transition hover:bg-amber-100">
          <Warning size={20} className="shrink-0 text-amber-500" weight="fill" />
          <div>
            <p className="text-sm font-semibold text-amber-700">Chưa làm khảo sát Pre-test</p>
            <p className="text-xs text-amber-600">Nhấn vào đây để làm trước khi bắt đầu học</p>
          </div>
        </Link>
      )}
      {hasSurveyPre && !hasSurveyPost && pct >= 50 && (
        <Link href="/survey/post" className="mb-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 transition hover:bg-emerald-100">
          <ClipboardText size={20} className="shrink-0 text-emerald-500" weight="fill" />
          <div>
            <p className="text-sm font-semibold text-emerald-700">Làm khảo sát Post-test</p>
            <p className="text-xs text-emerald-600">Đánh giá mức độ tiến bộ của bạn</p>
          </div>
        </Link>
      )}

      {/* Grade Tabs */}
      <div className="mb-6 flex gap-1 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:gap-2">
        {GRADES.map((g) => {
          const count = courses.filter((c) => c.grade === g.key);
          const done = count.reduce((s, c) => s + c.completedCount, 0);
          const total = count.reduce((s, c) => s + c.lessonIds.length, 0);
          const gpct = total ? Math.round((done / total) * 100) : 0;
          const active = selectedGrade === g.key;
          return (
            <button
              key={g.key}
              type="button"
              onClick={() => handleSelectGrade(g.key)}
              className={`flex flex-1 flex-col items-center rounded-xl px-1.5 py-2 transition active:scale-95 sm:px-3 sm:py-3 ${
                active ? "bg-emerald-500 text-white shadow" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span className={`text-center text-xs font-semibold sm:text-sm ${active ? "text-white" : "text-gray-700"}`}>{g.label}</span>
              <span className={`mt-0.5 text-xs ${active ? "text-emerald-100" : "text-gray-400"}`}>{gpct}%</span>
            </button>
          );
        })}
      </div>

      {/* Course detail view */}
      {activeCourse ? (
        <CourseDetail
          course={activeCourse}
          completedSet={completedSet}
          gradeLabel={gradeLabel}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        /* Subject grid */
        <div>
          <p className="mb-4 text-sm font-medium text-gray-500">Chọn môn học – {gradeLabel}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gradeCourses.map((course) => {
              const meta = SUBJECT_META[course.subject] ?? { label: course.subject, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200", icon: "📚" };
              const cpct = course.lessonIds.length
                ? Math.round((course.completedCount / course.lessonIds.length) * 100)
                : 0;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setSelectedCourse(course.id)}
                  className={`flex flex-col rounded-2xl border ${meta.border} ${meta.bg} p-5 text-left transition hover:shadow-md active:scale-95`}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-3xl">{meta.icon}</span>
                    <CaretRight size={16} className={`mt-1 ${meta.color}`} />
                  </div>
                  <p className={`text-base font-bold ${meta.color}`}>{meta.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{course.modules.length} module · {course.lessonIds.length} bài</p>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-gray-400">Tiến độ</span>
                      <span className={`font-semibold ${meta.color}`}>{cpct}%</span>
                    </div>
                    <ProgressBar value={cpct} className="h-1.5 w-full" />
                  </div>
                </button>
              );
            })}
          </div>

          {gradeCourses.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white py-12 text-center text-gray-400">
              Chưa có khóa học cho {gradeLabel}
            </div>
          )}
        </div>
      )}
    </main>
  );
}

// ── CourseDetail ──────────────────────────────────────────────────────────────

function CourseDetail({
  course, completedSet, gradeLabel, onBack,
}: {
  course: Course;
  completedSet: Set<string>;
  gradeLabel: string;
  onBack: () => void;
}) {
  const meta = SUBJECT_META[course.subject] ?? { label: course.subject, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200", icon: "📚" };
  const cpct = course.lessonIds.length
    ? Math.round((course.completedCount / course.lessonIds.length) * 100)
    : 0;

  // Nếu module có gán "volume" (Tập 1 / Tập 2...), nhóm lại và ẩn/hiện theo từng tập
  const volumes = Array.from(new Set(course.modules.map((m) => m.volume).filter((v): v is number => v != null))).sort((a, b) => a - b);
  const hasVolumes = volumes.length > 1;
  const [openVolumes, setOpenVolumes] = useState<Set<number>>(new Set());

  function toggleVolume(v: number) {
    setOpenVolumes((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v); else next.add(v);
      return next;
    });
  }

  return (
    <div>
      {/* Breadcrumb + back */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
        <button type="button" onClick={onBack} className="flex items-center gap-1 text-emerald-600 hover:underline">
          <ArrowLeft size={14} />
          {gradeLabel}
        </button>
        <span>/</span>
        <span className={`font-medium ${meta.color}`}>{meta.label}</span>
      </div>

      {/* Course header card */}
      <div className={`mb-5 rounded-2xl border ${meta.border} ${meta.bg} p-5`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{meta.icon}</span>
          <div className="flex-1">
            <h2 className={`text-lg font-bold ${meta.color}`}>{course.title}</h2>
            <p className="text-xs text-gray-500">{course.modules.length} module · {course.lessonIds.length} bài học</p>
            <div className="mt-2 flex items-center gap-3">
              <ProgressBar value={cpct} className="h-2 flex-1" />
              <span className={`text-sm font-bold ${meta.color}`}>{cpct}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      {hasVolumes ? (
        <div className="space-y-4">
          {volumes.map((vol) => {
            const volModules = course.modules.filter((m) => m.volume === vol);
            const volLessonIds = volModules.flatMap((m) => m.lessons.map((l) => l.id));
            const volDone = volLessonIds.filter((id) => completedSet.has(id)).length;
            const volPct = volLessonIds.length ? Math.round((volDone / volLessonIds.length) * 100) : 0;
            const isOpen = openVolumes.has(vol);
            return (
              <div key={vol} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleVolume(vol)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${meta.bg} ${meta.color}`}>
                    {vol}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800">Tập {vol}</h3>
                    <p className="text-xs text-gray-400">{volModules.length} chương · {volLessonIds.length} bài · {volPct}%</p>
                  </div>
                  {isOpen
                    ? <CaretDown size={16} className="shrink-0 text-gray-400" />
                    : <CaretRight size={16} className="shrink-0 text-gray-400" />}
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-4 pt-4">
                    <ModuleList modules={volModules} slug={course.slug} completedSet={completedSet} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <ModuleList modules={course.modules} slug={course.slug} completedSet={completedSet} />
      )}
    </div>
  );
}

// ── ModuleList ────────────────────────────────────────────────────────────────

function ModuleList({
  modules, slug, completedSet,
}: {
  modules: Module[];
  slug: string;
  completedSet: Set<string>;
}) {
  return (
    <div className="space-y-4">
      {modules.map((mod, idx) => {
        const modDone = mod.lessons.every((l) => completedSet.has(l.id));
        return (
          <div key={mod.id} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-mono font-semibold text-gray-500">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="flex-1 text-sm font-semibold text-gray-800">{mod.title}</h3>
              {modDone && <CheckCircle size={16} className="text-emerald-500" weight="fill" />}
            </div>
            <div className="divide-y divide-gray-50 px-5 pb-3 pt-1">
              {mod.lessons.map((lesson) => {
                const done = completedSet.has(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    href={`/course/${slug}/lesson/${lesson.id}`}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition hover:bg-gray-50"
                  >
                    <BookOpen
                      size={15}
                      className={done ? "text-emerald-500" : "text-gray-300"}
                      weight={done ? "fill" : "regular"}
                    />
                    <span className={done ? "text-gray-700" : "text-gray-500"}>{lesson.title}</span>
                    {done && <span className="ml-auto text-xs text-emerald-500">✓</span>}
                  </Link>
                );
              })}
              {mod.quiz && (
                <Link
                  href={`/course/${slug}/quiz/${mod.quiz.id}`}
                  className={`flex items-center gap-3 rounded-lg border border-dashed px-2 py-2.5 text-sm transition ${
                    mod.quiz.attempted > 0
                      ? "border-emerald-200 bg-emerald-50 hover:bg-emerald-100"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <ClipboardText
                    size={15}
                    className={mod.quiz.attempted > 0 ? "text-emerald-500" : "text-gray-300"}
                  />
                  <span className={mod.quiz.attempted > 0 ? "font-medium text-emerald-700" : "text-gray-500"}>
                    Quiz – {mod.quiz.title}
                  </span>
                  {mod.quiz.attempted > 0 && (
                    <span className="ml-auto text-xs text-emerald-600">Đã làm {mod.quiz.attempted}×</span>
                  )}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
