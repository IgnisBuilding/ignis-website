import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary: 'bg-forest-green text-white hover:bg-forest-green/90 shadow-[0_4px_14px_0_rgba(26,60,52,0.39)] hover:shadow-[0_6px_20px_rgba(26,60,52,0.23)]',
  secondary: 'bg-accent-green text-forest-dark hover:bg-accent-green/90 shadow-md hover:shadow-lg',
  outline: 'bg-transparent border border-forest-dark/20 text-forest-dark hover:bg-forest-dark/5',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-10 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full font-bold tracking-wide transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
