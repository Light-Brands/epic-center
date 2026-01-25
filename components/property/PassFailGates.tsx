'use client'

import { Check, X, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PropertyGate } from '@/lib/sheets/property-details'

interface PassFailGatesProps {
  gates: PropertyGate[]
  className?: string
}

export function PassFailGates({ gates, className }: PassFailGatesProps) {
  const passCount = gates.filter((g) => g.status === 'pass').length
  const failCount = gates.filter((g) => g.status === 'fail').length
  const conditionalCount = gates.filter((g) => g.status === 'conditional').length

  return (
    <div className={className}>
      {/* Summary */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success-100">
            <Check className="w-4 h-4 text-success-600" />
          </span>
          <span className="text-sm font-medium text-neutral-700">{passCount} Pass</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-warning-100">
            <AlertTriangle className="w-4 h-4 text-warning-600" />
          </span>
          <span className="text-sm font-medium text-neutral-700">{conditionalCount} Conditional</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-error-100">
            <X className="w-4 h-4 text-error-600" />
          </span>
          <span className="text-sm font-medium text-neutral-700">{failCount} Fail</span>
        </div>
      </div>

      {/* Gates List */}
      <div className="space-y-3">
        {gates.map((gate) => (
          <div
            key={gate.name}
            className={cn(
              'flex items-start gap-3 p-4 rounded-lg border',
              gate.status === 'pass' && 'bg-success-50 border-success-200',
              gate.status === 'fail' && 'bg-error-50 border-error-200',
              gate.status === 'conditional' && 'bg-warning-50 border-warning-200'
            )}
          >
            <span
              className={cn(
                'flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0',
                gate.status === 'pass' && 'bg-success-500',
                gate.status === 'fail' && 'bg-error-500',
                gate.status === 'conditional' && 'bg-warning-500'
              )}
            >
              {gate.status === 'pass' && <Check className="w-4 h-4 text-white" />}
              {gate.status === 'fail' && <X className="w-4 h-4 text-white" />}
              {gate.status === 'conditional' && <AlertTriangle className="w-4 h-4 text-white" />}
            </span>
            <div className="flex-1">
              <p
                className={cn(
                  'font-medium',
                  gate.status === 'pass' && 'text-success-800',
                  gate.status === 'fail' && 'text-error-800',
                  gate.status === 'conditional' && 'text-warning-800'
                )}
              >
                {gate.name}
              </p>
              {gate.notes && (
                <p
                  className={cn(
                    'text-sm mt-1',
                    gate.status === 'pass' && 'text-success-700',
                    gate.status === 'fail' && 'text-error-700',
                    gate.status === 'conditional' && 'text-warning-700'
                  )}
                >
                  {gate.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
