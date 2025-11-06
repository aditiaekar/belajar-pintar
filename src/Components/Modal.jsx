// FILE: src/Components/Modal.jsx
export default function Modal({ open, title, children, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow w-full max-w-lg mx-4">
        <div className="px-4 py-3 border-b font-semibold">{title}</div>
        <div className="p-4 space-y-3">{children}</div>
        <div className="p-4 border-t text-right">
          <button onClick={onClose} className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300">Tutup</button>
        </div>
      </div>
    </div>
  )
}
