'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OverviewMetricCardProps {
  label: string
  value: string
  subtitle?: string
  className?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function OverviewMetricCard({ label, value, subtitle, className }: OverviewMetricCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        'relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200/50 p-5',
        'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300',
        className
      )}
    >
      <p className="text-[10px] font-accent font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-1.5">
        {label}
      </p>
      <p className="font-heading text-2xl md:text-3xl text-neutral-900 tracking-tight font-mono tabular-nums">
        {value}
      </p>
      {subtitle && (
        <p className="text-xs text-neutral-500 mt-1">{subtitle}</p>
      )}
    </motion.div>
  )
}
