// FILE: src/Pages/Admin/Modul/ModalTanya.jsx
import { useState, useEffect, useRef } from 'react'
import Modal from '../../../Components/Modal.jsx'
import { toastSuccess } from '../../../Utils/Helpers/ToastHelpers.jsx'

export default function ModalTanya({ open, chapter, onClose }) {
  const [text, setText] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setText('')
      // fokuskan textarea saat modal dibuka
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  const onSend = () => {
    onClose()
    toastSuccess('Pertanyaan berhasil dikirim')
  }

  return (
    <Modal open={open} title={chapter ? `Tanya Dosen: ${chapter.title}` : 'Tanya Dosen'} onClose={onClose}>
      <div className="space-y-2">
        <label className="text-sm">Pertanyaan Anda</label>
        <textarea
          ref={inputRef}
          rows={5}
          className="w-full border rounded p-2"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Tulis pertanyaan di sini..."
        />
      </div>
      <div className="text-right">
        <button
          onClick={onSend}
          className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={!text.trim()}
        >
          Kirim
        </button>
      </div>
    </Modal>
  )
}
