// FILE: src/Components/Heading.jsx
export default function Heading({
  as: Tag = 'h1',
  size = 'xl', // 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  weight = 'semibold', // 'normal' | 'medium' | 'semibold' | 'bold'
  className = '',
  children,
}) {
  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  }[size];

  const weightClass = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  return <Tag className={`${sizeClass} ${weightClass} ${className}`}>{children}</Tag>;
}
