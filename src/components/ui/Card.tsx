import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outline'
}

const variants = {
  default: 'bg-white rounded-2xl border border-forest-green/5',
  elevated: 'bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-forest-green/5',
  outline: 'bg-transparent rounded-2xl border border-forest-green/10',
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div className={cn(variants[variant], className)}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}
