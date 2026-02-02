import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-forest-dark/80 ml-1"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-cream border border-forest-green/20 rounded-lg px-4 py-3 text-forest-dark',
            'focus:ring-1 focus:ring-forest-green focus:border-forest-green outline-none',
            'input-transition placeholder:text-forest-dark/30 text-sm',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 ml-1">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-forest-dark/80 ml-1"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-cream border border-forest-green/20 rounded-lg px-4 py-3 text-forest-dark',
            'focus:ring-1 focus:ring-forest-green focus:border-forest-green outline-none',
            'input-transition placeholder:text-forest-dark/30 text-sm resize-none',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 ml-1">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-forest-dark/80 ml-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              'w-full bg-cream border border-forest-green/20 rounded-lg px-4 py-3 text-forest-dark',
              'focus:ring-1 focus:ring-forest-green focus:border-forest-green outline-none',
              'input-transition text-sm appearance-none cursor-pointer',
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-forest-dark/50">
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-500 ml-1">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
