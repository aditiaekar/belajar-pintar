// FILE: src/Pages/Admin/Modul/AccordionItem.jsx
import Button from '../../../Components/Button.jsx'

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
    >
      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function AccordionItem({ chapter, active, onToggle, completed, onToggleDone, onAsk }) {
  return (
    <div className={active ? 'bg-slate-50/60' : ''}>
      {/* Header item */}
      <button
        onClick={() => onToggle(chapter.id)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition"
      >
        <div className="min-w-0 pr-3">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">{chapter.moduleTitle} — {chapter.title}</span>
            {completed && (
              <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                Selesai
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-gray-600 truncate">{chapter.description}</p>
        </div>
        <Chevron open={active} />
      </button>

      {/* Konten item */}
      {active && (
        <div className="px-4 pb-4">
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Button onClick={() => onToggleDone(chapter)}>
              {completed ? 'Batalkan Selesai' : 'Tandai Selesai'}
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-800" onClick={() => onAsk(chapter)}>
              Tanya Dosen
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
