"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users, BookOpen, ClipboardText, ChartLineUp, ShieldCheck,
  GraduationCap, Trash, CaretUpDown, SignOut, List,
} from "@phosphor-icons/react";

type Me = { name: string; email: string } | null;

type AdminStats = {
  totalUsers: number;
  usersByRole: { role: string; _count: number }[];
  totalCourses: number;
  publishedCourses: number;
  totalAttempts: number;
  totalProgress: number;
  avgScore: number;
  surveys: { type: string; _count: number }[];
  recentUsers: { id: string; name: string; email: string; role: string; createdAt: string }[];
};

const ROLE_LABEL: Record<string, string> = {
  STUDENT: "Học sinh",
  INSTRUCTOR: "Giảng viên",
  ADMIN: "Quản trị",
};
const ROLE_COLOR: Record<string, string> = {
  STUDENT:    "bg-sky-50 text-sky-700 border border-sky-200",
  INSTRUCTOR: "bg-blue-50 text-blue-700 border border-blue-200",
  ADMIN:      "bg-red-50 text-red-700 border border-red-200",
};

type Tab = "stats" | "users";

export default function AdminPage() {
  const router = useRouter();
  const [tab,      setTab]     = useState<Tab>("stats");
  const [sideOpen, setSide]    = useState(false);
  const [stats,    setStats]   = useState<AdminStats | null>(null);
  const [me,       setMe]      = useState<Me>(null);
  const [changing, setChanging] = useState<string | null>(null);
  const [confirm,  setConfirm]  = useState<string | null>(null);

  async function loadStats() {
    const r = await fetch("/api/admin/stats");
    if (r.ok) setStats(await r.json());
  }

  useEffect(() => {
    loadStats();
    fetch("/api/auth/me").then(r => r.json()).then(d => setMe(d.user ?? null));
  }, []);

  async function doLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function changeRole(userId: string, role: string) {
    setChanging(userId);
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, role }),
    });
    await loadStats();
    setChanging(null);
  }

  async function deleteUser(userId: string) {
    await fetch("/api/admin/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    setConfirm(null);
    await loadStats();
  }

  const students    = stats ? stats.usersByRole.find((r) => r.role === "STUDENT")?._count    ?? 0 : 0;
  const instructors = stats ? stats.usersByRole.find((r) => r.role === "INSTRUCTOR")?._count ?? 0 : 0;
  const admins      = stats ? stats.usersByRole.find((r) => r.role === "ADMIN")?._count      ?? 0 : 0;
  const preSurveys  = stats ? stats.surveys.find((s) => s.type === "pre")?._count            ?? 0 : 0;
  const postSurveys = stats ? stats.surveys.find((s) => s.type === "post")?._count           ?? 0 : 0;

  const NAV = [
    { id: "stats" as Tab,  label: "Thống kê",       icon: ChartLineUp },
    { id: "users" as Tab,  label: "Người dùng",     icon: Users       },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar overlay mobile */}
      {sideOpen && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSide(false)}/>}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-56 flex-col bg-white border-r border-gray-200 shadow-sm transition-transform lg:static lg:translate-x-0 ${sideOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
            <GraduationCap size={16} weight="fill" className="text-white"/>
          </div>
          <div>
            <div className="font-bold text-sm text-gray-900">TramOnThi</div>
            <div className="text-[10px] text-red-500 font-semibold">Quản trị</div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => { setTab(id); setSide(false); }}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${tab===id ? "bg-slate-100 text-slate-900" : "text-gray-600 hover:bg-gray-100"}`}>
              <Icon size={17} weight={tab===id ? "fill" : "regular"}/> {label}
            </button>
          ))}
        </nav>
        <div className="border-t border-gray-100 px-4 py-4 space-y-2">
          {me && (
            <div className="flex items-center gap-2.5 px-1 mb-1">
              <div className="h-7 w-7 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {me.name?.[0]?.toUpperCase() ?? "A"}
              </div>
              <span className="text-xs text-gray-600 truncate">{me.name}</span>
            </div>
          )}
          <button type="button" onClick={doLogout}
            className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors">
            <SignOut size={15}/> Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3">
          <button type="button" aria-label="Mở menu" onClick={() => setSide(true)} className="text-gray-600"><List size={22}/></button>
          <span className="font-semibold text-sm text-gray-900">{NAV.find((n)=>n.id===tab)?.label}</span>
        </div>

        <main className="flex-1 overflow-y-auto p-6">
          {!stats ? (
            <div className="text-sm text-gray-400 py-12 text-center">Đang tải...</div>
          ) : tab === "stats" ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Thống kê hệ thống</h2>
                <p className="text-sm text-gray-500 mt-0.5">Tổng quan người dùng và hoạt động</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { label:"Tổng người dùng", value:stats.totalUsers,                              icon:Users,        color:"text-gray-700",    bg:"bg-gray-100"   },
                  { label:"Học sinh",         value:students,                                      icon:GraduationCap,color:"text-sky-600",     bg:"bg-sky-50"     },
                  { label:"Giảng viên",       value:instructors,                                   icon:Users,        color:"text-blue-600",    bg:"bg-blue-50"    },
                  { label:"Khóa học",         value:`${stats.publishedCourses}/${stats.totalCourses}`,icon:BookOpen, color:"text-emerald-600", bg:"bg-emerald-50" },
                  { label:"Lần làm quiz",     value:stats.totalAttempts,                           icon:ClipboardText,color:"text-violet-600",  bg:"bg-violet-50"  },
                  { label:"Điểm TB Quiz",     value:`${stats.avgScore.toFixed(0)}%`,               icon:ChartLineUp,  color:"text-amber-600",   bg:"bg-amber-50"   },
                ].map(({ label, value, icon: Icon, color, bg }) => (
                  <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}><Icon size={18} className={color}/></div>
                    <div className={`text-2xl font-bold ${color}`}>{value}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-gray-900">Khảo sát Pre/Post-test</h3>
                  <div className="flex gap-8">
                    <div><div className="text-3xl font-bold text-emerald-500">{preSurveys}</div><div className="text-sm text-gray-500 mt-0.5">Pre-test</div></div>
                    <div><div className="text-3xl font-bold text-emerald-500">{postSurveys}</div><div className="text-sm text-gray-500 mt-0.5">Post-test</div></div>
                    <div><div className="text-3xl font-bold text-gray-800">{stats.totalProgress}</div><div className="text-sm text-gray-500 mt-0.5">Bài hoàn thành</div></div>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-gray-900">Phân bổ vai trò</h3>
                  <div className="space-y-3">
                    {[
                      { role:"STUDENT",    count:students,    color:"bg-sky-500"  },
                      { role:"INSTRUCTOR", count:instructors, color:"bg-blue-500" },
                      { role:"ADMIN",      count:admins,      color:"bg-red-500"  },
                    ].map(({ role, count, color }) => (
                      <div key={role} className="flex items-center gap-3">
                        <div className="w-20 text-xs text-gray-500">{ROLE_LABEL[role]}</div>
                        <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                          {/* eslint-disable-next-line react/forbid-component-props */}
                          <div className={`h-full rounded-full ${color}`} style={{ width: stats.totalUsers ? `${(count/stats.totalUsers)*100}%` : "0%" }}/>
                        </div>
                        <div className="w-6 text-right text-xs font-semibold text-gray-600">{count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Quản lý người dùng</h2>
                <p className="text-sm text-gray-500 mt-0.5">{stats.totalUsers} tài khoản trong hệ thống</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50 text-xs text-gray-400">
                        <th className="px-5 py-3 text-left font-medium">Tên</th>
                        <th className="px-5 py-3 text-left font-medium">Email</th>
                        <th className="px-5 py-3 text-left font-medium">Vai trò</th>
                        <th className="px-5 py-3 text-left font-medium">Ngày tạo</th>
                        <th className="px-5 py-3 text-right font-medium">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {stats.recentUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-3.5 font-medium text-gray-900">{u.name}</td>
                          <td className="px-5 py-3.5 text-xs text-gray-400">{u.email}</td>
                          <td className="px-5 py-3.5">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${ROLE_COLOR[u.role]}`}>
                              {ROLE_LABEL[u.role]}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-xs text-gray-400">{new Date(u.createdAt).toLocaleDateString("vi-VN")}</td>
                          <td className="px-5 py-3.5">
                            <div className="flex items-center justify-end gap-2">
                              <div className="relative">
                                <select aria-label={`Đổi vai trò của ${u.name}`} value={u.role}
                                  disabled={changing===u.id} onChange={(e)=>changeRole(u.id,e.target.value)}
                                  className="appearance-none cursor-pointer rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-7 text-xs text-gray-700 focus:border-slate-400 focus:outline-none disabled:opacity-40">
                                  <option value="STUDENT">Học sinh</option>
                                  <option value="INSTRUCTOR">Giảng viên</option>
                                  <option value="ADMIN">Quản trị</option>
                                </select>
                                <CaretUpDown size={11} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"/>
                              </div>
                              {confirm===u.id ? (
                                <div className="flex items-center gap-1.5">
                                  <button type="button" onClick={()=>deleteUser(u.id)} className="rounded px-2 py-1 text-[11px] font-semibold text-red-500 hover:bg-red-50">Xác nhận</button>
                                  <button type="button" onClick={()=>setConfirm(null)} className="rounded px-2 py-1 text-[11px] text-gray-400 hover:bg-gray-100">Hủy</button>
                                </div>
                              ) : (
                                <button type="button" onClick={()=>setConfirm(u.id)} title="Xóa người dùng"
                                  className="rounded-lg p-1.5 text-gray-300 hover:bg-red-50 hover:text-red-500">
                                  <Trash size={14}/>
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Confirm xóa */}
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl w-80">
            <ShieldCheck size={32} className="text-red-400 mb-3" />
            <h3 className="font-bold text-gray-900">Xác nhận xóa?</h3>
            <p className="mt-1 text-sm text-gray-500">Hành động này không thể hoàn tác.</p>
            <div className="mt-5 flex gap-3">
              <button type="button" onClick={() => deleteUser(confirm)} className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600">Xóa</button>
              <button type="button" onClick={() => setConfirm(null)} className="flex-1 rounded-lg border border-gray-200 py-2 text-sm text-gray-600 hover:bg-gray-50">Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
