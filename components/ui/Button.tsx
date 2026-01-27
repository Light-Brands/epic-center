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
          'inline-flex items-center justify-center font-accent font-semibold uppercase',
          'transition-all duration-300 ease-out rounded-lg',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
          'active:scale-[0.98]',
          // Variants
          {
            // Primary - Terracotta accent
            'bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-glow-accent':
              variant === 'primary',
            // Secondary - Outlined botanical green
            'bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white':
              variant === 'secondary',
            // Accent - Warm gold gradient
            'bg-gradient-to-r from-secondary-400 to-secondary-500 text-primary-950 hover:from-secondary-500 hover:to-secondary-600 shadow-sm hover:shadow-glow-gold':
              variant === 'accent',
            // Ghost - Subtle with hover underline
            'bg-transparent text-primary-800 hover:text-accent-600':
              variant === 'ghost',
          },
          // Sizes
          {
            'text-xs tracking-wider px-5 py-2.5': size === 'sm',
            'text-sm tracking-wider px-8 py-4': size === 'md',
            'text-sm tracking-wider px-10 py-5': size === 'lg',
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
