'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'shortlist' | 'hold' | 'pass' | 'info'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-accent font-medium uppercase tracking-wide rounded-full',
          // Variants
          {
            'bg-neutral-200 text-neutral-700': variant === 'default',
            'bg-success-50 text-success-700': variant === 'shortlist',
            'bg-warning-50 text-warning-700': variant === 'hold',
            'bg-error-50 text-error-700': variant === 'pass',
            'bg-info-50 text-info-700': variant === 'info',
          },
          // Sizes
          {
            'text-[10px] px-2 py-0.5': size === 'sm',
            'text-xs px-3 py-1': size === 'md',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

// Convenience component for property status badges
export function StatusBadge({ status }: { status: 'SHORTLIST' | 'HOLD' | 'PASS' }) {
  const variantMap = {
    SHORTLIST: 'shortlist',
    HOLD: 'hold',
    PASS: 'pass',
  } as const

  return <Badge variant={variantMap[status]}>{status}</Badge>
}

export { Badge }
