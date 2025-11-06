// FILE: src/Components/Button.jsx
export default function Button({ className = '', ...props }) {
  const base = 'px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
  return <button className={`${base} ${className}`} {...props} />
}
