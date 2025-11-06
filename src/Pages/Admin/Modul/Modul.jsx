// FILE: src/Pages/Admin/Modul/Modul.jsx
import { useMemo, useState, useEffect } from 'react'
import { modules } from '../../../Data/Dummy.js'
import AccordionItem from './AccordionItem.jsx'
import ProgressBar from '../../../Components/ProgressBar.jsx'
import ModalTanya from './ModalTanya.jsx' 

const PROGRESS_KEY = 'bp_progress'
const COMPLETED_KEY = 'bp_completedChapters'

export default function Modul() {
  const allChapters = useMemo(
    () => modules.flatMap(m => (m.chapters || []).map(c => ({ ...c, moduleId: m.id, moduleTitle: m.title }))),
    []
  )

  const [activeId, setActiveId] = useState(null)
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]') } catch { return [] }
  })

  const totalChapters = allChapters.length
  const doneCount = completed.length
  const progress = totalChapters > 0 ? Math.round((doneCount / totalChapters) * 100) : 0

  const onToggle = (id) => setActiveId(prev => prev === id ? null : id)
  const onToggleDone = (chapter) => {
    setCompleted(prev => prev.includes(chapter.id) ? prev.filter(x => x !== chapter.id) : [...prev, chapter.id])
  }

  const [askOpen, setAskOpen] = useState(false)
  const [askTarget, setAskTarget] = useState(null)
  const onAsk = (chapter) => { setAskTarget(chapter); setAskOpen(true) }

  useEffect(() => {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed))
    localStorage.setItem(PROGRESS_KEY, String(progress))
  }, [completed, progress])

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-white p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Kelas / Modul</h1>
            <p className="mt-1 text-sm text-gray-600">Pilih bab, tandai selesai, dan tanya dosen.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {modules.length} Modul
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {totalChapters} Bab
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              {doneCount} Selesai
            </span>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
              {progress}% Progres
            </span>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">Progress Belajar</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>
      </section>

      {allChapters.length === 0 ? (
        <div className="rounded-xl border bg-white p-4 text-sm text-gray-600">
          Data modul kosong. Periksa <code>utils/dummyData.js</code>.
        </div>
      ) : (
        <section className="rounded-2xl border bg-white overflow-hidden">
          <div className="divide-y">
            {allChapters.map(ch => (
              <AccordionItem
                key={ch.id}
                chapter={ch}
                active={activeId === ch.id}
                onToggle={onToggle}
                completed={completed.includes(ch.id)}
                onToggleDone={onToggleDone}
                onAsk={onAsk}
              />
            ))}
          </div>
        </section>
      )}

      {/* Render kondisional ESM */}
      {askOpen && (
        <ModalTanya
          open={askOpen}
          chapter={askTarget}
          onClose={() => { setAskOpen(false); setAskTarget(null) }}
        />
      )}
    </div>
  )
}
