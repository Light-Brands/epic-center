'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-accent font-medium uppercase tracking-wide',
          'transition-all duration-200 rounded-md',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
          // Variants
          {
            'bg-primary-800 text-white hover:bg-primary-700': variant === 'primary',
            'bg-transparent text-primary-800 border border-primary-800 hover:bg-primary-800 hover:text-white':
              variant === 'secondary',
            'bg-secondary-400 text-primary-900 hover:bg-secondary-500': variant === 'accent',
            'bg-transparent text-primary-800 hover:underline underline-offset-4': variant === 'ghost',
          },
          // Sizes
          {
            'text-xs px-4 py-2': size === 'sm',
            'text-sm px-7 py-3.5': size === 'md',
            'text-base px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
