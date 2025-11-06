// FILE: src/Pages/Admin/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card.jsx";
import ProgressBar from "../../Components/ProgressBar.jsx";
import { modules } from "../../Data/Dummy.js";

const AUTH_KEY = "bp_auth";
const PROGRESS_KEY = "bp_progress";
const COMPLETED_KEY = "bp_completedChapters";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [completed, setCompleted] = useState([]);

  const allChapters = useMemo(() => modules.flatMap((m) => m.chapters.map((c) => ({ ...c, moduleId: m.id, moduleTitle: m.title }))), []);

  const totalModules = modules.length;
  const totalChapters = allChapters.length;
  const doneCount = completed.length;
  const progress = totalChapters > 0 ? Math.round((doneCount / totalChapters) * 100) : 0;

  const backlog = useMemo(() => allChapters.filter((c) => !completed.includes(c.id)).slice(0, 5), [allChapters, completed]);

  useEffect(() => {
    const u = localStorage.getItem(AUTH_KEY);
    setUser(u ? JSON.parse(u) : null);
    try {
      const c = JSON.parse(localStorage.getItem(COMPLETED_KEY) || "[]");
      setCompleted(Array.isArray(c) ? c : []);
    } catch {
      setCompleted([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, String(progress));
  }, [progress]);

  return (
    <div className="space-y-6">
      {/* Header minimal */}
      <Card className="rounded-2xl border bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Halo, {user?.name}</h1>
            <p className="mt-1 text-sm text-gray-600">Lanjutkan progres belajarmu dengan konsisten.</p>
          </div>
          <div>
            <Link to="/admin/kelas" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Lanjutkan Belajar
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">Progress Belajar</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>
      </Card>

      {/* Statistik: semua pakai Card */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-black/10 rounded-xl" bodyClassName="p-4">
          <div className="text-xs text-gray-500">Total Modul</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{totalModules}</div>
          <div className="mt-1 text-xs text-gray-500">Aktif saat ini</div>
        </Card>

        <Card className="border border-black/10 rounded-xl" bodyClassName="p-4">
          <div className="text-xs text-gray-500">Total Bab</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{totalChapters}</div>
          <div className="mt-1 text-xs text-gray-500">Seluruh materi</div>
        </Card>

        <Card className="border border-black/10 rounded-xl" bodyClassName="p-4">
          <div className="text-xs text-gray-500">Selesai</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{doneCount}</div>
          <div className="mt-1 text-xs text-gray-500">Bab ditandai selesai</div>
        </Card>

        <Card className="border border-black/10 rounded-xl" bodyClassName="p-4">
          <div className="text-xs text-gray-500">Progress</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{progress}%</div>
          <div className="mt-1 text-xs text-gray-500">Perkembangan</div>
        </Card>
      </section>

      {/* Lanjutan Belajar */}
      <Card className="rounded-2xl border bg-white p-6" title="Lanjutan Belajar" subtitle="Bab yang belum kamu selesaikan">
        {backlog.length === 0 ? (
          <div className="text-sm text-gray-600">Semua bab sudah selesai. Bagus.</div>
        ) : (
          <ul className="divide-y">
            {backlog.map((c) => (
              <li key={c.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">
                    {c.moduleTitle} — {c.title}
                  </div>
                  <div className="text-sm text-gray-500">{c.description}</div>
                </div>
                <Link to="/admin/kelas" className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
                  Buka
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
