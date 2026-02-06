'use client'

import { useState, useCallback, useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Delete, Check } from 'lucide-react'
import { Card } from '@/components/ui'
import { useVault } from '@/lib/context/VaultContext'

function VaultLogin({ onUnlock, title, subtitle }: {
  onUnlock: () => void
  title: string
  subtitle: string
}) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<'locked' | 'error' | 'unlocking' | 'opening'>('locked')
  const { vaultCode } = useVault()

  const handleDigit = useCallback((digit: string) => {
    if (phase !== 'locked' || code.length >= 4) return
    const next = code + digit

    setCode(next)

    if (next.length === 4) {
      if (next === vaultCode) {
        setPhase('unlocking')
        setTimeout(() => setPhase('opening'), 800)
        setTimeout(onUnlock, 1400)
      } else {
        setPhase('error')
        setTimeout(() => {
          setPhase('locked')
          setCode('')
        }, 600)
      }
    }
  }, [code, phase, onUnlock, vaultCode])

  const handleDelete = useCallback(() => {
    if (phase !== 'locked') return
    setCode(prev => prev.slice(0, -1))
  }, [phase])

  const handleClear = useCallback(() => {
    if (phase !== 'locked') return
    setCode('')
  }, [phase])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key)
      else if (e.key === 'Backspace') handleDelete()
      else if (e.key === 'Escape') handleClear()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleDigit, handleDelete, handleClear])

  const isUnlocking = phase === 'unlocking' || phase === 'opening'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-canvas p-4">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-warm-glow"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm"
      >
        <Card padding="lg" className="bg-white shadow-xl border border-neutral-200">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2 text-center">
            {title}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl text-neutral-900 mb-2 text-center">
            Enter Access Code
          </h2>
          <p className="text-sm text-neutral-600 text-center mb-8">
            {subtitle}
          </p>

          <motion.div
            animate={phase === 'error' ? { x: [-6, 6, -4, 4, -2, 2, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center gap-3 mb-8"
          >
            {[0, 1, 2, 3].map(i => {
              const filled = i < code.length
              return (
                <div
                  key={i}
                  className={`
                    w-12 h-14 sm:w-14 sm:h-16 rounded-lg border-2 flex items-center justify-center
                    transition-colors duration-200
                    ${phase === 'error'
                      ? 'border-error-500 bg-error-50'
                      : isUnlocking && filled
                        ? 'border-primary-600 bg-primary-50'
                        : filled
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-300 bg-neutral-50'
                    }
                  `}
                >
                  {filled && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      className={`
                        w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full
                        ${phase === 'error'
                          ? 'bg-error-500'
                          : isUnlocking
                            ? 'bg-primary-600'
                            : 'bg-primary-800'
                        }
                      `}
                    />
                  )}
                </div>
              )
            })}
          </motion.div>

          <div className="grid grid-cols-3 gap-2 max-w-[220px] mx-auto">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
              <motion.button
                key={digit}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => handleDigit(digit)}
                className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-50 text-neutral-900 font-body text-lg font-medium hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                {digit}
              </motion.button>
            ))}
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleClear}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-100 text-neutral-600 text-xs font-accent uppercase tracking-wider hover:border-neutral-400 hover:text-neutral-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              Clear
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => handleDigit('0')}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-50 text-neutral-900 font-body text-lg font-medium hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              0
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleDelete}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-100 text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <Delete className="w-5 h-5" />
            </motion.button>
          </div>

          <p className="mt-6 text-xs text-neutral-500 text-center">
            Use keypad above or your keyboard (0-9, Backspace, Escape)
          </p>
        </Card>

        {isUnlocking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.05 }}
              className="w-14 h-14 rounded-full border-2 border-primary-600 bg-primary-50 flex items-center justify-center"
            >
              <Check className="w-7 h-7 text-primary-600" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export function VaultGate({ children, title, subtitle }: {
  children: ReactNode
  title: string
  subtitle: string
}) {
  const { isUnlocked, unlock } = useVault()

  if (!isUnlocked) {
    return <VaultLogin onUnlock={unlock} title={title} subtitle={subtitle} />
  }

  return <>{children}</>
}
