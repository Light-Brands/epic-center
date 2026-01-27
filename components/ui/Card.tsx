'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'custom'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', hoverable = false, children, ...props }, ref) => {
    // Detect if custom background is being passed
    const hasCustomBackground = className?.includes('bg-')
    const effectiveVariant = hasCustomBackground ? 'custom' : variant

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl',
          'transition-all duration-300 ease-out',
          // Variants
          {
            'bg-white shadow-card border border-neutral-100': effectiveVariant === 'default',
            'bg-white shadow-lg border border-neutral-100': effectiveVariant === 'elevated',
            'bg-transparent border border-neutral-200': effectiveVariant === 'outlined',
            'bg-white/80 backdrop-blur-xl border border-neutral-200/50 shadow-lg': effectiveVariant === 'glass',
            'shadow-card': effectiveVariant === 'custom', // Just shadow, no background
          },
          // Padding
          {
            'p-0': padding === 'none',
            'p-4': padding === 'sm',
            'p-6': padding === 'md',
            'p-8': padding === 'lg',
          },
          // Hover
          hoverable && 'hover:shadow-xl hover:-translate-y-1 hover:border-neutral-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-4', className)} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Tag = 'h3', children, ...props }, ref) => {
    return (
      <Tag ref={ref} className={cn('font-heading text-neutral-900', className)} {...props}>
        {children}
      </Tag>
    )
  }
)

CardTitle.displayName = 'CardTitle'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }
