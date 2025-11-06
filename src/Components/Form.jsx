// FILE: src/Components/Form.jsx
export default function Form({
  onSubmit,
  preventDefault = true,
  className = '',
  children,
}) {
  const handleSubmit = (e) => {
    if (preventDefault) e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
}

// Sub-komponen utilitas
export function FormRow({ className = '', children }) {
  return <div className={`space-y-1 ${className}`}>{children}</div>;
}

export function FormLabel({ className = '', children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={`text-sm text-gray-700 ${className}`}>
      {children}
    </label>
  );
}

export function FormHelp({ className = '', children }) {
  return <p className={`text-xs text-gray-500 ${className}`}>{children}</p>;
}

export function FormError({ className = '', children }) {
  return <p className={`text-sm text-red-600 ${className}`}>{children}</p>;
}
