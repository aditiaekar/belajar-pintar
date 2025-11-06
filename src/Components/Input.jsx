// FILE: src/Components/Input.jsx
export default function Input({ className = '', ...props }) {
  return <input className={`w-full border rounded px-3 py-2 ${className}`} {...props} />
}
