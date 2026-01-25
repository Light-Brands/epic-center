'use client'

import { TrendingUp, DollarSign, Users, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui'
import { useScenario } from '@/lib/context/ScenarioContext'
import { formatCurrency, formatCurrencyFull, formatPercent, PROPERTY_FINANCIALS } from '@/lib/sheets'
import type { Property } from '@/types/financial'

interface PropertyFinancialSummaryProps {
  property: Property
  className?: string
}

export function PropertyFinancialSummary({ property, className }: PropertyFinancialSummaryProps) {
  const { scenario } = useScenario()
  const financials = PROPERTY_FINANCIALS[property.id]

  if (!financials) {
    return null
  }

  const revenue = financials.revenuePotential[scenario]
  const irr = financials.projectedIRR[scenario]
  const guests = financials.guestsPerYear[scenario]
  const totalInvestment = property.acquisition.totalAcquisitionCost + financials.renovationCost
  const revenuePerGuest = Math.round(revenue / guests)

  return (
    <div className={cn('space-y-6', className)}>
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="text-center">
          <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
            <DollarSign className="w-5 h-5" />
          </div>
          <p className="font-heading text-2xl text-neutral-900">{formatCurrency(totalInvestment)}</p>
          <p className="text-sm text-neutral-500">Total Investment</p>
        </Card>
        <Card className="text-center">
          <div className="flex items-center justify-center gap-2 text-success-600 mb-2">
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="font-heading text-2xl text-success-700">{formatPercent(irr)}</p>
          <p className="text-sm text-neutral-500">Projected IRR</p>
        </Card>
        <Card className="text-center">
          <div className="flex items-center justify-center gap-2 text-secondary-500 mb-2">
            <Users className="w-5 h-5" />
          </div>
          <p className="font-heading text-2xl text-neutral-900">{guests}</p>
          <p className="text-sm text-neutral-500">Guests/Year</p>
        </Card>
        <Card className="text-center">
          <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
            <Calendar className="w-5 h-5" />
          </div>
          <p className="font-heading text-2xl text-neutral-900">{financials.paybackYears} yrs</p>
          <p className="text-sm text-neutral-500">Payback Period</p>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card padding="lg">
        <h4 className="font-medium text-neutral-900 mb-4">Investment Breakdown</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-neutral-200">
            <span className="text-neutral-600">Acquisition Cost</span>
            <span className="font-medium text-neutral-900">
              {formatCurrencyFull(property.acquisition.totalAcquisitionCost)}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-neutral-200">
            <span className="text-neutral-600">Renovation & Build-out</span>
            <span className="font-medium text-neutral-900">
              {formatCurrencyFull(financials.renovationCost)}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 bg-primary-50 px-3 rounded">
            <span className="font-medium text-primary-800">Total Investment</span>
            <span className="font-heading text-xl text-primary-800">
              {formatCurrencyFull(totalInvestment)}
            </span>
          </div>
        </div>
      </Card>

      {/* Revenue Projections */}
      <Card padding="lg">
        <h4 className="font-medium text-neutral-900 mb-4">Year 1 Revenue Projection</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-neutral-200">
            <span className="text-neutral-600">Projected Revenue</span>
            <span className="font-medium text-neutral-900">{formatCurrencyFull(revenue)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-neutral-200">
            <span className="text-neutral-600">Operating Costs</span>
            <span className="font-medium text-neutral-900">
              ({formatCurrencyFull(financials.operatingCostPerYear)})
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-neutral-200">
            <span className="text-neutral-600">Revenue per Guest</span>
            <span className="font-medium text-neutral-900">{formatCurrencyFull(revenuePerGuest)}</span>
          </div>
          <div className="flex justify-between items-center py-2 bg-success-50 px-3 rounded">
            <span className="font-medium text-success-800">Est. EBITDA</span>
            <span className="font-heading text-xl text-success-700">
              {formatCurrencyFull(revenue - financials.operatingCostPerYear)}
            </span>
          </div>
        </div>
      </Card>
    </div>
  )
}
