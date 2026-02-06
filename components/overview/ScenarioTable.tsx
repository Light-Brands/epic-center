'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  INVESTMENT_RETURNS,
  ENTERPRISE_VALUATION,
} from '@/lib/sheets/data'
import { formatCurrency, formatPercent, formatMultiple } from '@/lib/sheets'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const scenarios = [
  { key: 'conservative' as const, label: 'Conservative', color: 'neutral' },
  { key: 'base' as const, label: 'Base Case', color: 'primary' },
  { key: 'aggressive' as const, label: 'Aggressive', color: 'secondary' },
]

export function ScenarioTable() {
  const sop = ENTERPRISE_VALUATION.sumOfPartsValue
  const moic = INVESTMENT_RETURNS.moic
  const irr = INVESTMENT_RETURNS.irr

  const colorMap: Record<string, { bg: string; border: string; badge: string; text: string }> = {
    neutral: {
      bg: 'bg-neutral-50',
      border: 'border-neutral-200',
      badge: 'bg-neutral-200 text-neutral-700',
      text: 'text-neutral-700',
    },
    primary: {
      bg: 'bg-primary-50',
      border: 'border-primary-300',
      badge: 'bg-primary-800 text-white',
      text: 'text-primary-800',
    },
    secondary: {
      bg: 'bg-secondary-50',
      border: 'border-secondary-300',
      badge: 'bg-secondary-500 text-white',
      text: 'text-secondary-700',
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid md:grid-cols-3 gap-4"
    >
      {scenarios.map((s) => {
        const colors = colorMap[s.color]
        return (
          <motion.div
            key={s.key}
            variants={itemVariants}
            className={cn(
              'rounded-xl border-2 p-6 text-center',
              colors.bg,
              colors.border,
              s.key === 'base' && 'ring-2 ring-primary-800/20 scale-[1.02]'
            )}
          >
            <span className={cn('inline-block px-3 py-1 rounded-full text-[10px] font-accent font-bold uppercase tracking-[0.15em] mb-4', colors.badge)}>
              {s.label}
            </span>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-accent uppercase tracking-[0.12em] text-neutral-500 mb-1">Y5 Enterprise Value</p>
                <p className={cn('font-heading text-2xl', colors.text)}>
                  {formatCurrency(sop[s.key])}
                </p>
              </div>
              <div className="h-px bg-neutral-200" />
              <div>
                <p className="text-[10px] font-accent uppercase tracking-[0.12em] text-neutral-500 mb-1">MOIC</p>
                <p className={cn('font-heading text-3xl', colors.text)}>
                  {formatMultiple(moic[s.key])}
                </p>
              </div>
              <div className="h-px bg-neutral-200" />
              <div>
                <p className="text-[10px] font-accent uppercase tracking-[0.12em] text-neutral-500 mb-1">IRR</p>
                <p className={cn('font-heading text-3xl', colors.text)}>
                  {formatPercent(irr[s.key])}
                </p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
