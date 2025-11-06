// FILE: src/Components/ProgressBar.jsx
export default function ProgressBar({ value = 0 }) {
  const v = Math.max(0, Math.min(100, value))
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div className="h-3 rounded-full bg-blue-600" style={{ width: `${v}%` }} />
    </div>
  )
}
