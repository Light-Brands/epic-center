'use client'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { AnimatedValue } from '@/components/animation/CountUp'
import { Sparkline } from '@/components/animation/Sparkline'
import { motion } from 'framer-motion'

export interface MetricCardProps {
  label: string
  value: string | number
  rawValue?: number
  formatFn?: (value: number) => string
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  accent?: boolean
  className?: string
  sparklineData?: number[]
  sparklineColor?: string
  delay?: number
}

export function MetricCard({
  label,
  value,
  rawValue,
  formatFn,
  subtitle,
  trend,
  trendValue,
  accent = false,
  className,
  sparklineData,
  sparklineColor,
  delay = 0,
}: MetricCardProps) {
  // Use animated value if rawValue and formatFn are provided
  const showAnimatedValue = rawValue !== undefined && formatFn !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          'hover:shadow-lg hover:-translate-y-1',
          accent && 'border-l-4 border-l-secondary-400',
          className
        )}
      >
        <div className="space-y-2">
          {/* Label with optional sparkline */}
          <div className="flex items-center justify-between">
            <p className="text-caption text-neutral-500 uppercase">{label}</p>
            {sparklineData && sparklineData.length > 1 && (
              <Sparkline
                data={sparklineData}
                width={64}
                height={20}
                color={sparklineColor || (accent ? '#c4a962' : '#1a3a3a')}
                strokeWidth={1.5}
              />
            )}
          </div>

          {/* Value - animated or static */}
          <p className="font-heading text-4xl md:text-5xl text-neutral-900 tracking-tight">
            {showAnimatedValue ? (
              <AnimatedValue value={rawValue} format={formatFn} duration={0.6} />
            ) : (
              value
            )}
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
    </motion.div>
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
