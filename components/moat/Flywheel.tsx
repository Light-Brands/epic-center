'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, TrendingUp, Brain, Award, ArrowRight, RotateCw } from 'lucide-react'

interface FlywheelStep {
  id: number
  title: string
  description: string
  detail: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

const FLYWHEEL_STEPS: FlywheelStep[] = [
  {
    id: 1,
    title: 'Superior Outcomes',
    description: 'Medical protocols + integration',
    detail: 'Our medical-grade protocols combined with comprehensive 12-month integration deliver measurably better results than competitors.',
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
  },
  {
    id: 2,
    title: 'Word of Mouth',
    description: 'Guests become advocates',
    detail: 'Transformed guests naturally share their experiences with friends, family, and communities struggling with similar challenges.',
    icon: TrendingUp,
    color: 'text-secondary-400',
    bgColor: 'bg-secondary-500/20',
  },
  {
    id: 3,
    title: 'Referral Network',
    description: 'Professionals recommend us',
    detail: 'Therapists, physicians, and interventionists build confidence in our outcomes and refer their most challenging cases.',
    icon: Brain,
    color: 'text-accent-400',
    bgColor: 'bg-accent-500/20',
  },
  {
    id: 4,
    title: 'Brand Premium',
    description: 'Premium pricing power',
    detail: 'Strong reputation enables premium positioning, funding reinvestment in protocols, facilities, and talent.',
    icon: Award,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
  },
]

export function Flywheel() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId)
  }

  const triggerSpin = () => {
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 2000)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Main flywheel visualization */}
      <div className="relative">
        {/* Desktop: Circular layout */}
        <div className="hidden md:block">
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            {/* Center hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{ rotate: isSpinning ? 360 : 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <button
                onClick={triggerSpin}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 flex flex-col items-center justify-center text-primary-900 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <RotateCw className={`w-8 h-8 mb-1 transition-transform duration-300 ${isSpinning ? 'animate-spin' : 'group-hover:rotate-45'}`} />
                <span className="font-heading text-sm font-bold">Flywheel</span>
                <span className="text-[10px] opacity-80">Click to spin</span>
              </button>
            </motion.div>

            {/* Circular track */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Outer ring */}
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />

              {/* Animated dashed ring */}
              <motion.circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#flywheel-gradient)"
                strokeWidth="3"
                strokeDasharray="20 10"
                animate={{ rotate: isSpinning ? 360 : 0 }}
                transition={{ duration: 2, ease: 'linear' }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="flywheel-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4A63B" />
                  <stop offset="50%" stopColor="#D4724D" />
                  <stop offset="100%" stopColor="#D4A63B" />
                </linearGradient>
              </defs>

              {/* Arrow indicators between steps */}
              {FLYWHEEL_STEPS.map((_, index) => {
                const angle = (index * 90 + 45) * (Math.PI / 180)
                const x = 200 + Math.cos(angle) * 160
                const y = 200 + Math.sin(angle) * 160
                const rotation = index * 90 + 45

                return (
                  <g key={`arrow-${index}`} transform={`translate(${x}, ${y}) rotate(${rotation})`}>
                    <path
                      d="M-8,-4 L0,0 L-8,4"
                      fill="none"
                      stroke="#D4A63B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Step nodes positioned around the circle */}
            {FLYWHEEL_STEPS.map((step, index) => {
              const angle = (index * 90 - 90) * (Math.PI / 180) // Start from top
              const radius = 160 // Match SVG radius
              const centerX = 50 // percent
              const centerY = 50 // percent
              const offsetX = Math.cos(angle) * (radius / 2) // Convert to percentage offset
              const offsetY = Math.sin(angle) * (radius / 2)

              const StepIcon = step.icon
              const isActive = activeStep === step.id

              return (
                <motion.button
                  key={step.id}
                  className={`absolute w-36 -ml-18 -mt-18 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-white/15 border-secondary-400 scale-110 z-30'
                      : 'bg-primary-800/80 border-white/20 hover:border-white/40 hover:bg-primary-800'
                  }`}
                  style={{
                    top: `calc(50% + ${offsetY}%)`,
                    left: `calc(50% + ${offsetX}%)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => handleStepClick(step.id)}
                  whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg ${step.bgColor} flex items-center justify-center`}>
                      <span className="font-bold text-white text-sm">{step.id}</span>
                    </div>
                    <StepIcon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <h4 className="font-heading text-sm text-white mb-1">{step.title}</h4>
                  <p className="text-[11px] text-white/70 leading-tight">{step.description}</p>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Mobile: Linear flow layout */}
        <div className="md:hidden space-y-4">
          {FLYWHEEL_STEPS.map((step, index) => {
            const StepIcon = step.icon
            const isActive = activeStep === step.id
            const isLast = index === FLYWHEEL_STEPS.length - 1

            return (
              <div key={step.id}>
                <motion.button
                  className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-white/15 border-secondary-400'
                      : 'bg-primary-800/80 border-white/20'
                  }`}
                  onClick={() => handleStepClick(step.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <span className="font-bold text-white text-lg">{step.id}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-heading text-base text-white">{step.title}</h4>
                        <StepIcon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <p className="text-sm text-white/70">{step.description}</p>
                    </div>
                  </div>
                </motion.button>

                {/* Connector arrow */}
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-5 h-5 text-secondary-400 rotate-90" />
                    </motion.div>
                  </div>
                )}

                {/* Loop back indicator after last step */}
                {isLast && (
                  <div className="flex items-center justify-center gap-2 py-4 text-secondary-400">
                    <RotateCw className="w-5 h-5" />
                    <span className="text-sm font-medium">Cycle continues</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {activeStep && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 md:mt-12"
          >
            {FLYWHEEL_STEPS.filter(s => s.id === activeStep).map(step => {
              const StepIcon = step.icon

              return (
                <div
                  key={step.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <StepIcon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded-full bg-white/20 text-xs font-bold text-white">
                          Step {step.id}
                        </span>
                        <h3 className="font-heading text-xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">{step.detail}</p>

                      {/* How it connects */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-white/70 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-secondary-400" />
                          <span>
                            Leads to:{' '}
                            <span className="text-secondary-400 font-medium">
                              {FLYWHEEL_STEPS[(step.id) % 4].title}
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      {!activeStep && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/60 text-sm mt-8 md:mt-12"
        >
          Click on any step to learn more about how it connects to the cycle
        </motion.p>
      )}
    </div>
  )
}
