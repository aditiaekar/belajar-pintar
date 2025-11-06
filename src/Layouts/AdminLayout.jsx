// FILE: src/Layouts/AdminLayout.jsx
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { confirmLogout } from "../Utils/Helpers/SwalHelpers.jsx";

const AUTH_KEY = "bp_auth";
const PROGRESS_KEY = "bp_progress";
const COMPLETED_KEY = "bp_completedChapters";

export default function AdminLayout() {
  const authRaw = localStorage.getItem(AUTH_KEY);
  const user = authRaw ? JSON.parse(authRaw) : null;
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" replace />;

  const onLogout = async () => {
    const ok = await confirmLogout();
    if (ok) {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(PROGRESS_KEY);
      localStorage.removeItem(COMPLETED_KEY);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/admin/dashboard" className="font-semibold">
            Belajar Pintar
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/admin/modul" className="hover:underline">
              Modul
            </Link>
            <button onClick={onLogout} className="px-3 py-1.5 rounded bg-red-600 text-white hover:bg-red-700">
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
