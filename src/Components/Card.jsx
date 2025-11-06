// FILE: src/Components/Card.jsx
export default function Card({
  title,
  subtitle,
  actions,
  children,
  variant = 'elevated', // 'elevated' | 'outlined' | 'ghost'
  className = '',
  bodyClassName = '',
}) {
  const base =
    variant === 'outlined'
      ? 'bg-white border rounded-lg'
      : variant === 'ghost'
      ? 'bg-transparent'
      : 'bg-white rounded-lg shadow';

  return (
    <div className={`${base} ${className}`}>
      {(title || actions || subtitle) && (
        <div className="px-4 py-3 border-b flex items-start justify-between">
          <div>
            {title && <div className="font-semibold">{title}</div>}
            {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className={`p-4 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
