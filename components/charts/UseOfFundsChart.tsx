'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { getUseOfFunds, formatCurrency, formatCurrencyFull } from '@/lib/sheets'

const COLORS = [
  '#1a3a3a', // primary-800
  '#1a5a57', // primary-600
  '#2d7a76', // primary-500
  '#c4a962', // secondary-400
  '#b39347', // secondary-500
  '#4d9f9a', // primary-400
  '#80bbb8', // primary-300
  '#a8a89e', // neutral-400
]

interface UseOfFundsChartProps {
  height?: number
  className?: string
  showLegend?: boolean
}

export function UseOfFundsChart({ height = 400, className, showLegend = true }: UseOfFundsChartProps) {
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

  const renderLegend = (props: any) => {
    const { payload } = props
    return (
      <ul className="grid grid-cols-2 gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <li key={`legend-${index}`} className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-neutral-600 truncate">{entry.value}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend content={renderLegend} />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
