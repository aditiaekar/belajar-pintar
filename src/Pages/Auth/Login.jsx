// FILE: src/Pages/Auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { toastError, toastSuccess } from "../../Utils/Helpers/ToastHelpers.jsx";
import { confirmLogin } from "../../Utils/Helpers/SwalHelpers.jsx"; // ← tambah ini

const AUTH_KEY = "bp_auth";
const DUMMY = { email: "111202314997@mhs.dinus.ac.id", password: "polke", name: "Aditia Eka Ramadhan" };

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Konfirmasi sebelum memproses login
    const ok = await confirmLogin(email);
    if (!ok) return;

    if (email === DUMMY.email && password === DUMMY.password) {
      localStorage.setItem(AUTH_KEY, JSON.stringify({ name: DUMMY.name, email: DUMMY.email }));
      toastSuccess("Login berhasil");
      navigate("/admin/dashboard", { replace: true });
    } else {
      toastError("Email atau password salah");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow space-y-4">
      <h1 className="text-xl font-semibold">Masuk</h1>
      <div className="space-y-1">
        <label className="text-sm">Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Password</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
