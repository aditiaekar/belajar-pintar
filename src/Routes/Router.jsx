// FILE: src/Routes/Router.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import AdminLayout from "../Layouts/AdminLayout.jsx";
import Login from "../Pages/Auth/Login.jsx";
import Dashboard from "../Pages/Admin/Dashboard.jsx";
import Modul from "../Pages/Admin/Modul/Modul.jsx";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kelas" element={<Modul />} /> {/* path resmi */}
          <Route path="modul" element={<Navigate to="/admin/kelas" replace />} /> {/* alias */}
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
