// FILE: src/Components/SwalHelpers.jsx
import Swal from "sweetalert2";

export function confirmLogout() {
  return Swal.fire({
    title: "Konfirmasi Logout",
    text: "Anda yakin ingin keluar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, keluar",
    cancelButtonText: "Batal",
  }).then((r) => r.isConfirmed);
}

export function confirmLogin(email) {
  return Swal.fire({
    title: "Konfirmasi Login",
    text: `Lanjutkan login untuk ${email || "akun ini"}?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Ya, login",
    cancelButtonText: "Batal",
  }).then((r) => r.isConfirmed);
}
