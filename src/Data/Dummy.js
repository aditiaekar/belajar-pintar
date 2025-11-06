// FILE: src/Data/Dummy.js
export const modules = [
  {
    id: 'm1',
    title: 'Dasar React',
    description: 'Pengenalan komponen, props, dan state.',
    chapters: [
      { id: 'm1c1', title: 'Apa itu React?', description: 'Konsep Virtual DOM dan SPA.' },
      { id: 'm1c2', title: 'Component & Props', description: 'Membuat UI reusable.' },
      { id: 'm1c3', title: 'State & Events', description: 'Interaksi komponen.' },
    ],
  },
  {
    id: 'm2',
    title: 'Routing & Auth',
    description: 'Navigasi halaman dan proteksi route.',
    chapters: [
      { id: 'm2c1', title: 'React Router', description: 'Routes, Navigate, Outlet.' },
      { id: 'm2c2', title: 'Protected Route', description: 'Guard berdasarkan auth.' },
    ],
  },
  {
    id: 'm3',
    title: 'UX Notifikasi',
    description: 'Toast (informasi) dan Swal (konfirmasi).',
    chapters: [
      { id: 'm3c1', title: 'React Toastify', description: 'Notifikasi sukses/gagal.' },
      { id: 'm3c2', title: 'SweetAlert2', description: 'Konfirmasi aksi penting.' },
    ],
  },
]
