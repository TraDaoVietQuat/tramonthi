"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap, ChartBar, BookOpen, SignOut, Plus, Trash,
  PencilSimple, CaretDown, CaretRight, Article, ClipboardText,
  CheckCircle, Circle, UploadSimple, X, FloppyDisk,
  DownloadSimple, Users, ChartLineUp, List,
} from "@phosphor-icons/react";

/* ─── Types ─────────────────────────────────────────────── */
type Stats = {
  totalStudents: number;
  totalEnrollments: number;
  avgScore: number;
  completedLessons: number;
  surveys: { type: string; _count: number }[];
  recentAttempts: {
    id: string; score: number; startedAt: string;
    user: { name: string; email: string };
    quiz: { title: string };
  }[];
};
type Question = { id: string; text: string; options: string; answer: string };
type Quiz     = { id: string; title: string; questions: Question[] };
type Lesson   = { id: string; title: string; content: string; order: number };
type Module   = { id: string; title: string; order: number; lessons: Lesson[]; quizzes: Quiz[] };
type Course   = {
  id: string; title: string; description: string; subject: string;
  grade: string; published: boolean; slug: string;
  modules: Module[]; _count: { enrollments: number };
};

const GRADE_LABEL: Record<string, string> = {
  grade10: "Lớp 10", grade11: "Lớp 11", grade12: "Lớp 12", university: "Ôn thi ĐH",
};
const SUBJECT_LABEL: Record<string, string> = {
  "toan": "Toán", "vat-ly": "Vật Lý", "hoa-hoc": "Hóa học",
  "tieng-anh": "Tiếng Anh", "nckh": "NCKH",
};
const GRADE_LIST  = ["grade10","grade11","grade12","university"];
const SUBJECT_LIST = ["toan","vat-ly","hoa-hoc","tieng-anh","nckh"];

/* ─── LessonModal ────────────────────────────────────────── */
function LessonModal({ lesson, onSave, onClose }: {
  lesson: Lesson | null;
  onSave: (title: string, content: string) => Promise<void>;
  onClose: () => void;
}) {
  const [title,     setTitle]     = useState(lesson?.title   ?? "");
  const [content,   setContent]   = useState(lesson?.content ?? "");
  const [saving,    setSaving]    = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const r    = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await r.json();
    if (data.url) {
      const isImg = file.type.startsWith("image/");
      setContent((c) => c + (isImg ? `\n![${data.name}](${data.url})\n` : `\n[📎 ${data.name}](${data.url})\n`));
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="font-semibold text-gray-900">{lesson ? "Sửa bài học" : "Thêm bài học"}</h3>
          <button type="button" aria-label="Đóng" onClick={onClose}><X size={18} className="text-gray-400 hover:text-gray-700" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              placeholder="VD: Cấu tạo nguyên tử" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">Nội dung (Markdown)</label>
              <button type="button" onClick={() => fileRef.current?.click()}
                className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
                <UploadSimple size={13} /> {uploading ? "Đang tải..." : "Upload file"}
              </button>
              <input ref={fileRef} type="file" aria-label="Chọn file tải lên" className="hidden" onChange={handleUpload}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.xlsx,.pptx" />
            </div>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={13}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-mono focus:border-emerald-500 focus:outline-none resize-none"
              placeholder={"## Tiêu đề\n\nNội dung bài học...\n\n**In đậm**, *in nghiêng*\n\n- Gạch đầu dòng"} />
            <p className="text-xs text-gray-400 mt-1">Hỗ trợ Markdown. File upload sẽ chèn link vào nội dung.</p>
          </div>
        </div>
        <div className="flex gap-3 border-t px-5 py-4">
          <button type="button" onClick={onClose}
            className="flex-1 rounded-lg border border-gray-200 py-2 text-sm text-gray-600 hover:bg-gray-50">Hủy</button>
          <button type="button" disabled={saving || !title.trim()}
            onClick={async () => { setSaving(true); await onSave(title, content); setSaving(false); }}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-50">
            <FloppyDisk size={15} /> {saving ? "Đang lưu..." : "Lưu bài học"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── QuestionForm ───────────────────────────────────────── */
function QuestionForm({ quizId, onAdded }: { quizId: string; onAdded: (q: Question) => void }) {
  const [text,    setText]    = useState("");
  const [options, setOptions] = useState(["","","",""]);
  const [answer,  setAnswer]  = useState(0);
  const [saving,  setSaving]  = useState(false);

  async function handleAdd() {
    if (!text.trim() || options.some((o) => !o.trim())) return;
    setSaving(true);
    const r = await fetch("/api/instructor/manage/questions", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizId, text, options, answer }),
    });
    if (r.ok) { onAdded(await r.json()); setText(""); setOptions(["","","",""]); setAnswer(0); }
    setSaving(false);
  }

  return (
    <div className="mt-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 space-y-3">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Thêm câu hỏi</p>
      <input value={text} onChange={(e) => setText(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        placeholder="Nội dung câu hỏi..." />
      <div className="space-y-1.5">
        {options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <button type="button" onClick={() => setAnswer(i)}
              className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${answer === i ? "border-emerald-500 bg-emerald-500" : "border-gray-300"}`}>
              {answer === i && <div className="w-2 h-2 rounded-full bg-white" />}
            </button>
            <input value={opt} onChange={(e) => { const o=[...options]; o[i]=e.target.value; setOptions(o); }}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
              placeholder={`Đáp án ${String.fromCharCode(65+i)}`} />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400">Nhấn ô tròn để chọn đáp án đúng</p>
      <button type="button" onClick={handleAdd} disabled={saving || !text.trim() || options.some((o)=>!o.trim())}
        className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
        {saving ? "Đang thêm..." : "Thêm câu hỏi"}
      </button>
    </div>
  );
}

/* ─── Dashboard Tab ──────────────────────────────────────── */
function DashboardTab({ stats }: { stats: Stats }) {
  const preSurveys  = stats.surveys.find((s) => s.type === "pre")?._count  ?? 0;
  const postSurveys = stats.surveys.find((s) => s.type === "post")?._count ?? 0;
  const completion  = stats.totalStudents
    ? Math.round((postSurveys / stats.totalStudents) * 100) : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Dashboard Giảng viên</h2>
        <p className="text-sm text-gray-500 mt-0.5">Tổng quan hoạt động học tập và dữ liệu nghiên cứu</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Học sinh",          value: stats.totalStudents,    icon: Users,         color: "text-sky-600",    bg: "bg-sky-50"    },
          { label: "Bài học hoàn thành",value: stats.completedLessons, icon: BookOpen,      color: "text-emerald-600",bg: "bg-emerald-50"},
          { label: "Lần làm quiz",      value: stats.totalEnrollments, icon: ClipboardText, color: "text-violet-600", bg: "bg-violet-50" },
          { label: "Điểm TB Quiz",      value: `${stats.avgScore.toFixed(0)}%`, icon: ChartLineUp, color: "text-amber-600", bg: "bg-amber-50"},
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}>
              <Icon size={18} className={color} />
            </div>
            <div className={`text-2xl font-bold ${color}`}>{value}</div>
            <div className="mt-0.5 text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Khảo sát */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Khảo sát Pre/Post-test</h3>
        <div className="flex gap-10">
          <div><div className="text-3xl font-bold text-emerald-500">{preSurveys}</div><div className="text-sm text-gray-500 mt-0.5">Pre-test đã nộp</div></div>
          <div><div className="text-3xl font-bold text-emerald-500">{postSurveys}</div><div className="text-sm text-gray-500 mt-0.5">Post-test đã nộp</div></div>
          <div><div className="text-3xl font-bold text-gray-800">{completion}%</div><div className="text-sm text-gray-500 mt-0.5">Hoàn thành đủ cả hai</div></div>
        </div>
      </div>

      {/* CSV */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-1">Xuất dữ liệu CSV</h3>
        <p className="text-sm text-gray-400 mb-4">Dùng Excel, SPSS hoặc R để phân tích</p>
        <div className="flex flex-wrap gap-3">
          {[
            { type: "quiz",     label: "Kết quả Quiz (điểm, thời gian)" },
            { type: "progress", label: "Tiến độ học bài"                },
            { type: "survey",   label: "Khảo sát Pre/Post"              },
          ].map(({ type, label }) => (
            <button key={type} type="button"
              onClick={() => window.location.href = `/api/instructor/export?type=${type}`}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 shadow-sm">
              <DownloadSimple size={15} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent attempts */}
      {stats.recentAttempts.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 px-6 py-4">
            <h3 className="font-semibold text-gray-900">Quiz gần đây</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-xs text-gray-400">
                <th className="px-5 py-3 text-left font-medium">Học sinh</th>
                <th className="px-5 py-3 text-left font-medium">Quiz</th>
                <th className="px-5 py-3 text-left font-medium">Điểm</th>
                <th className="px-5 py-3 text-left font-medium">Thời gian</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {stats.recentAttempts.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{a.user.name}</td>
                  <td className="px-5 py-3 text-gray-500">{a.quiz.title}</td>
                  <td className="px-5 py-3">
                    <span className={`font-semibold ${a.score >= 80 ? "text-emerald-600" : a.score >= 60 ? "text-amber-600" : "text-red-500"}`}>
                      {a.score.toFixed(0)}%
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-400">
                    {new Date(a.startedAt).toLocaleDateString("vi-VN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ─── Manage Tab ─────────────────────────────────────────── */
function ManageTab() {
  const [courses,     setCourses]     = useState<Course[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [openCourse,  setOpenCourse]  = useState<string | null>(null);
  const [openModule,  setOpenModule]  = useState<string | null>(null);
  const [openQuiz,    setOpenQuiz]    = useState<string | null>(null);
  const [lessonModal, setLessonModal] = useState<{ moduleId: string; lesson: Lesson | null } | null>(null);
  const [newCourse,   setNewCourse]   = useState(false);
  const [newModule,   setNewModule]   = useState<string | null>(null);
  const [courseForm,  setCourseForm]  = useState({ title:"", description:"", subject:"hoa-hoc", grade:"grade10" });
  const [moduleTitle, setModuleTitle] = useState("");

  async function reload() {
    const r = await fetch("/api/instructor/manage/courses");
    if (r.ok) setCourses(await r.json());
    setLoading(false);
  }
  useEffect(() => { reload(); }, []);

  async function createCourse() {
    if (!courseForm.title.trim()) return;
    await fetch("/api/instructor/manage/courses", {
      method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(courseForm),
    });
    setNewCourse(false); setCourseForm({ title:"", description:"", subject:"hoa-hoc", grade:"grade10" }); reload();
  }

  async function togglePublish(c: Course) {
    await fetch(`/api/instructor/manage/courses/${c.id}`, {
      method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ published:!c.published }),
    });
    reload();
  }

  async function deleteCourse(id: string) {
    if (!confirm("Xóa khóa học này? Toàn bộ dữ liệu sẽ bị xóa.")) return;
    await fetch(`/api/instructor/manage/courses/${id}`, { method:"DELETE" }); reload();
  }

  async function createModule(courseId: string) {
    if (!moduleTitle.trim()) return;
    await fetch("/api/instructor/manage/modules", {
      method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ courseId, title:moduleTitle }),
    });
    setNewModule(null); setModuleTitle(""); reload();
  }

  async function deleteModule(id: string) {
    if (!confirm("Xóa module này?")) return;
    await fetch(`/api/instructor/manage/modules/${id}`, { method:"DELETE" }); reload();
  }

  async function saveLesson(title: string, content: string) {
    if (!lessonModal) return;
    if (lessonModal.lesson) {
      await fetch(`/api/instructor/manage/lessons/${lessonModal.lesson.id}`, {
        method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ title, content }),
      });
    } else {
      await fetch("/api/instructor/manage/lessons", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ moduleId:lessonModal.moduleId, title, content }),
      });
    }
    setLessonModal(null); reload();
  }

  async function deleteLesson(id: string) {
    if (!confirm("Xóa bài học này?")) return;
    await fetch(`/api/instructor/manage/lessons/${id}`, { method:"DELETE" }); reload();
  }

  async function handleOpenQuiz(mod: Module) {
    if (!mod.quizzes[0]) {
      await fetch("/api/instructor/manage/quizzes", {
        method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ moduleId:mod.id }),
      });
    }
    setOpenQuiz(openQuiz === mod.id ? null : mod.id); reload();
  }

  async function deleteQuestion(id: string) {
    await fetch(`/api/instructor/manage/questions/${id}`, { method:"DELETE" }); reload();
  }

  function addQuestionLocal(modId: string, q: Question) {
    setCourses((prev) => prev.map((c) => ({
      ...c, modules: c.modules.map((m) => m.id !== modId ? m : {
        ...m, quizzes: m.quizzes.map((qz,i) => i===0 ? { ...qz, questions:[...qz.questions,q] } : qz),
      }),
    })));
  }

  if (loading) return <div className="text-sm text-gray-400 py-12 text-center">Đang tải...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Quản lý khóa học</h2>
          <p className="text-sm text-gray-500 mt-0.5">{courses.length} khóa học</p>
        </div>
        <button type="button" onClick={() => setNewCourse(true)}
          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 shadow-sm">
          <Plus size={16} weight="bold" /> Tạo khóa học mới
        </button>
      </div>

      {/* Form tạo khóa học */}
      {newCourse && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="mb-4 font-semibold text-emerald-900">Khóa học mới</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-700">Tên khóa học *</label>
              <input value={courseForm.title} onChange={(e) => setCourseForm((f)=>({...f,title:e.target.value}))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                placeholder="VD: Hóa học 10 nâng cao" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-700">Mô tả</label>
              <input value={courseForm.description} onChange={(e) => setCourseForm((f)=>({...f,description:e.target.value}))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                placeholder="Mô tả ngắn" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Khối lớp</label>
              <select aria-label="Khối lớp" value={courseForm.grade} onChange={(e) => setCourseForm((f)=>({...f,grade:e.target.value}))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none">
                {GRADE_LIST.map((g) => <option key={g} value={g}>{GRADE_LABEL[g]}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Môn học</label>
              <select aria-label="Môn học" value={courseForm.subject} onChange={(e) => setCourseForm((f)=>({...f,subject:e.target.value}))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none">
                {SUBJECT_LIST.map((s) => <option key={s} value={s}>{SUBJECT_LABEL[s]}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => setNewCourse(false)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Hủy</button>
            <button type="button" onClick={createCourse}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600">Tạo khóa học</button>
          </div>
        </div>
      )}

      {/* Danh sách khóa học */}
      {courses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <BookOpen size={32} className="text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-400">Chưa có khóa học. Nhấn "Tạo khóa học mới" để bắt đầu.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50"
                onClick={() => setOpenCourse(openCourse===course.id ? null : course.id)}>
                <div className="text-gray-400">{openCourse===course.id ? <CaretDown size={16}/> : <CaretRight size={16}/>}</div>
                <BookOpen size={18} className="text-emerald-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-900 truncate">{course.title}</span>
                    <span className="text-xs text-gray-400">{GRADE_LABEL[course.grade]} · {SUBJECT_LABEL[course.subject]}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{course.modules.length} module · {course._count.enrollments} học sinh</div>
                </div>
                <div className="flex items-center gap-2 shrink-0" onClick={(e)=>e.stopPropagation()}>
                  <button type="button" onClick={() => togglePublish(course)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${course.published ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
                    {course.published ? <CheckCircle size={12} weight="fill"/> : <Circle size={12}/>}
                    {course.published ? "Đã xuất bản" : "Nháp"}
                  </button>
                  <button type="button" aria-label="Xóa khóa học" onClick={() => deleteCourse(course.id)}
                    className="rounded-lg p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50">
                    <Trash size={15}/>
                  </button>
                </div>
              </div>

              {openCourse === course.id && (
                <div className="border-t border-gray-100 px-5 py-4 space-y-3">
                  {course.modules.map((mod) => (
                    <div key={mod.id} className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
                        onClick={() => setOpenModule(openModule===mod.id ? null : mod.id)}>
                        {openModule===mod.id ? <CaretDown size={14}/> : <CaretRight size={14}/>}
                        <span className="flex-1 text-sm font-medium text-gray-800">{mod.title}</span>
                        <span className="text-xs text-gray-400">{mod.lessons.length} bài · {mod.quizzes[0]?.questions.length??0} câu hỏi</span>
                        <button type="button" aria-label="Xóa module" onClick={(e)=>{e.stopPropagation(); deleteModule(mod.id);}}
                          className="ml-2 rounded p-1 text-gray-300 hover:text-red-500 hover:bg-red-50"><Trash size={13}/></button>
                      </div>

                      {openModule === mod.id && (
                        <div className="px-4 py-3 space-y-2">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                            <Article size={12}/> Bài học
                          </p>
                          {mod.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2">
                              <span className="flex-1 text-sm text-gray-700 truncate">{lesson.title}</span>
                              <button type="button" aria-label="Sửa bài học" onClick={() => setLessonModal({ moduleId:mod.id, lesson })}
                                className="rounded p-1 text-gray-300 hover:text-blue-500 hover:bg-blue-50"><PencilSimple size={13}/></button>
                              <button type="button" aria-label="Xóa bài học" onClick={() => deleteLesson(lesson.id)}
                                className="rounded p-1 text-gray-300 hover:text-red-500 hover:bg-red-50"><Trash size={13}/></button>
                            </div>
                          ))}
                          <button type="button" onClick={() => setLessonModal({ moduleId:mod.id, lesson:null })}
                            className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-medium py-1">
                            <Plus size={12} weight="bold"/> Thêm bài học
                          </button>

                          {/* Quiz */}
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <button type="button" onClick={() => handleOpenQuiz(mod)}
                              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-blue-600">
                              <ClipboardText size={12}/>
                              Quiz ({mod.quizzes[0]?.questions.length??0} câu)
                              {openQuiz===mod.id ? <CaretDown size={11}/> : <CaretRight size={11}/>}
                            </button>
                            {openQuiz === mod.id && mod.quizzes[0] && (
                              <div className="mt-2 space-y-1.5">
                                {mod.quizzes[0].questions.map((q, qi) => {
                                  const opts: string[] = JSON.parse(q.options);
                                  return (
                                    <div key={q.id} className="rounded-lg border border-gray-100 bg-white p-3">
                                      <div className="flex items-start justify-between gap-2">
                                        <span className="text-sm text-gray-800"><span className="font-medium text-gray-400">C{qi+1}.</span> {q.text}</span>
                                        <button type="button" aria-label="Xóa câu hỏi" onClick={() => deleteQuestion(q.id)}
                                          className="shrink-0 rounded p-1 text-gray-300 hover:text-red-500 hover:bg-red-50"><Trash size={12}/></button>
                                      </div>
                                      <div className="mt-1.5 grid grid-cols-2 gap-1">
                                        {opts.map((o, oi) => (
                                          <span key={oi} className={`text-xs px-2 py-0.5 rounded ${String(oi)===q.answer ? "bg-emerald-100 text-emerald-700 font-semibold" : "text-gray-500"}`}>
                                            {String.fromCharCode(65+oi)}. {o}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                                <QuestionForm quizId={mod.quizzes[0].id} onAdded={(q)=>addQuestionLocal(mod.id,q)}/>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {newModule === course.id ? (
                    <div className="flex gap-2">
                      <input value={moduleTitle} onChange={(e)=>setModuleTitle(e.target.value)}
                        onKeyDown={(e)=>e.key==="Enter" && createModule(course.id)}
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                        placeholder="Tên module (VD: Module 1: Cấu tạo nguyên tử)" autoFocus/>
                      <button type="button" onClick={()=>createModule(course.id)}
                        className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">Thêm</button>
                      <button type="button" onClick={()=>{setNewModule(null);setModuleTitle("");}}
                        className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500">Hủy</button>
                    </div>
                  ) : (
                    <button type="button" onClick={()=>{setNewModule(course.id);setModuleTitle("");}}
                      className="flex items-center gap-2 rounded-xl border border-dashed border-gray-300 px-4 py-2.5 text-sm text-gray-500 hover:border-emerald-400 hover:text-emerald-600 w-full justify-center">
                      <Plus size={14} weight="bold"/> Thêm module
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {lessonModal && (
        <LessonModal lesson={lessonModal.lesson} onSave={saveLesson} onClose={() => setLessonModal(null)}/>
      )}
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
type Tab = "dashboard" | "manage";

export default function InstructorPage() {
  const router = useRouter();
  const [tab,       setTab]   = useState<Tab>("dashboard");
  const [stats,     setStats] = useState<Stats | null>(null);
  const [userName,  setName]  = useState("");
  const [sideOpen,  setSide]  = useState(false);

  useEffect(() => {
    fetch("/api/instructor/stats").then((r)=>r.json()).then(setStats);
    fetch("/api/auth/me").then((r)=>r.json()).then((d)=>setName(d.user?.name ?? ""));
  }, []);

  async function doLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/instructor/login");
  }

  const NAV: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id:"dashboard", label:"Dashboard",         icon: ChartBar   },
    { id:"manage",    label:"Quản lý nội dung",  icon: BookOpen   },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar overlay mobile */}
      {sideOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSide(false)}/>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-56 flex-col bg-white border-r border-gray-200 shadow-sm transition-transform lg:static lg:translate-x-0 ${sideOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <GraduationCap size={16} weight="fill" className="text-white"/>
          </div>
          <div>
            <div className="font-bold text-sm text-gray-900">TramOnThi</div>
            <div className="text-[10px] text-emerald-600 font-semibold">Giảng viên</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button"
              onClick={() => { setTab(id); setSide(false); }}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${tab===id ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>
              <Icon size={17} weight={tab===id ? "fill" : "regular"}/>
              {label}
            </button>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="border-t border-gray-100 px-4 py-4 space-y-2">
          <div className="flex items-center gap-2.5 px-1">
            <div className="h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {userName?.[0]?.toUpperCase() ?? "G"}
            </div>
            <span className="text-xs text-gray-600 truncate">{userName}</span>
          </div>
          <button type="button" onClick={doLogout}
            className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors">
            <SignOut size={15}/> Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3">
          <button type="button" aria-label="Mở menu" onClick={() => setSide(true)} className="text-gray-600 hover:text-gray-900">
            <List size={22}/>
          </button>
          <span className="font-semibold text-gray-900 text-sm">{NAV.find((n)=>n.id===tab)?.label}</span>
        </div>

        <main className="flex-1 overflow-y-auto p-6">
          {tab === "dashboard" && (
            stats
              ? <DashboardTab stats={stats}/>
              : <div className="text-sm text-gray-400 py-12 text-center">Đang tải...</div>
          )}
          {tab === "manage" && <ManageTab/>}
        </main>
      </div>
    </div>
  );
}
