'use client'

import { cn } from '@/lib/utils'
import { useScenario, type Scenario } from '@/lib/context/ScenarioContext'

const scenarios: { value: Scenario; label: string; description: string }[] = [
  { value: 'conservative', label: 'Conservative', description: '75% occupancy' },
  { value: 'base', label: 'Base', description: '85% occupancy' },
  { value: 'aggressive', label: 'Aggressive', description: '95% occupancy' },
]

export interface ScenarioToggleProps {
  className?: string
  showDescriptions?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function ScenarioToggle({
  className,
  showDescriptions = false,
  size = 'md',
}: ScenarioToggleProps) {
  const { scenario, setScenario } = useScenario()

  return (
    <div className={cn('inline-flex flex-col', className)}>
      {/* Toggle buttons */}
      <div
        className={cn(
          'inline-flex rounded-lg bg-neutral-200 p-1',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base'
        )}
        role="radiogroup"
        aria-label="Scenario selection"
      >
        {scenarios.map(({ value, label }) => (
          <button
            key={value}
            role="radio"
            aria-checked={scenario === value}
            onClick={() => setScenario(value)}
            className={cn(
              'font-accent font-medium uppercase tracking-wide rounded-md transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
              size === 'sm' && 'px-3 py-1.5',
              size === 'md' && 'px-4 py-2',
              size === 'lg' && 'px-6 py-3',
              scenario === value
                ? 'bg-white text-primary-800 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-800'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Optional descriptions */}
      {showDescriptions && (
        <p className="mt-2 text-sm text-neutral-500 text-center">
          {scenarios.find((s) => s.value === scenario)?.description}
        </p>
      )}
    </div>
  )
}

// Dropdown variant for header - allows scenario selection
export function ScenarioIndicator({
  className,
  variant = 'dark'
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const { scenario, setScenario } = useScenario()

  const colorMap = {
    conservative: 'bg-warning-500',
    base: 'bg-primary-600',
    aggressive: 'bg-success-500',
  }

  const textColor = variant === 'light'
    ? 'text-white/90 hover:text-white'
    : 'text-neutral-700 hover:text-primary-600'

  const chevronColor = variant === 'light'
    ? 'text-white/60'
    : 'text-neutral-400'

  return (
    <div className={cn('relative inline-flex items-center', className)}>
      <span className={cn('absolute left-3 w-2 h-2 rounded-full', colorMap[scenario])} />
      <select
        value={scenario}
        onChange={(e) => setScenario(e.target.value as Scenario)}
        className={cn(
          'appearance-none bg-transparent pl-7 pr-6 py-1.5 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-md transition-colors',
          textColor
        )}
        aria-label="Select financial scenario"
      >
        <option value="conservative" className="text-neutral-900">Conservative</option>
        <option value="base" className="text-neutral-900">Base Case</option>
        <option value="aggressive" className="text-neutral-900">Aggressive</option>
      </select>
      <svg
        className={cn('absolute right-0 w-4 h-4 pointer-events-none', chevronColor)}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}
