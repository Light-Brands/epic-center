'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { getUseOfFunds, formatCurrencyFull } from '@/lib/sheets'
import { cn } from '@/lib/utils'

const COLORS = [
  '#1a3a3a', // primary-800
  '#1a5a57', // primary-600
  '#2d7a76', // primary-500
  '#c4a962', // secondary-400
  '#b39347', // secondary-500
  '#4d9f9a', // primary-400
  '#80bbb8', // primary-300
]

interface UseOfFundsChartProps {
  height?: number
  className?: string
  showLegend?: boolean
  /** When true, chart fills parent height (parent should be flex) */
  fillHeight?: boolean
}

export function UseOfFundsChart({
  height = 400,
  className,
  showLegend = true,
  fillHeight = false,
}: UseOfFundsChartProps) {
  const data = getUseOfFunds()

  const chartData = data.map((item) => ({
    name: item.category,
    value: item.amount,
    percentage: item.percentage,
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload
      return (
        <div className="bg-white p-4 rounded-lg shadow-card border border-neutral-200">
          <p className="font-medium text-neutral-900 mb-1">{item.name}</p>
          <p className="text-primary-600 font-semibold">{formatCurrencyFull(item.value)}</p>
          <p className="text-sm text-neutral-500">{item.percentage.toFixed(1)}% of total</p>
        </div>
      )
    }
    return null
  }

  const chartArea = (
    <ResponsiveContainer width="100%" height={fillHeight ? '100%' : height}>
      <PieChart margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius="42%"
          outerRadius="72%"
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )

  return (
    <div
      className={cn(
        'w-full',
        fillHeight && 'flex flex-col flex-1 min-h-0',
        className
      )}
    >
      {fillHeight ? (
        <div className="flex-1 min-h-[320px]">{chartArea}</div>
      ) : (
        chartArea
      )}
      {showLegend && (
        <ul className="grid grid-cols-2 gap-2 mt-4 flex-shrink-0">
          {chartData.map((entry, index) => (
            <li key={`legend-${index}`} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-neutral-600 truncate">{entry.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
