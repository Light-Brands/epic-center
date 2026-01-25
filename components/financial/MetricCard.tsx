'use client'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export interface MetricCardProps {
  label: string
  value: string | number
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  accent?: boolean
  className?: string
}

export function MetricCard({
  label,
  value,
  subtitle,
  trend,
  trendValue,
  accent = false,
  className,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden',
        accent && 'border-l-4 border-l-secondary-400',
        className
      )}
    >
      <div className="space-y-2">
        {/* Label */}
        <p className="text-caption text-neutral-500 uppercase">{label}</p>

        {/* Value */}
        <p className="font-heading text-4xl md:text-5xl text-neutral-900 tracking-tight">
          {value}
        </p>

        {/* Subtitle and trend */}
        <div className="flex items-center justify-between">
          {subtitle && (
            <p className="text-sm text-neutral-600">{subtitle}</p>
          )}

          {trend && trendValue && (
            <div
              className={cn(
                'flex items-center gap-1 text-sm font-medium',
                trend === 'up' && 'text-success-700',
                trend === 'down' && 'text-error-700',
                trend === 'neutral' && 'text-neutral-500'
              )}
            >
              {trend === 'up' && <TrendingUp className="w-4 h-4" />}
              {trend === 'down' && <TrendingDown className="w-4 h-4" />}
              {trend === 'neutral' && <Minus className="w-4 h-4" />}
              <span>{trendValue}</span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative accent */}
      {accent && (
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-800">
            <circle cx="80" cy="20" r="60" />
          </svg>
        </div>
      )}
    </Card>
  )
}

// Compact variant for grids
export function MetricCardCompact({
  label,
  value,
  className,
}: {
  label: string
  value: string | number
  className?: string
}) {
  return (
    <div className={cn('text-center p-4', className)}>
      <p className="text-caption text-neutral-500 uppercase mb-1">{label}</p>
      <p className="font-heading text-2xl text-neutral-900">{value}</p>
    </div>
  )
}
