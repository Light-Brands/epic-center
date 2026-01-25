'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from 'recharts'
import { useScenario } from '@/lib/context/ScenarioContext'
import { getRevenueChartData, formatCurrency } from '@/lib/sheets'

// Chart colors matching design system
const CHART_COLORS = {
  conservative: '#a8a89e', // neutral-400
  base: '#1a3a3a', // primary-800
  aggressive: '#c4a962', // secondary-400
}

interface RevenueChartProps {
  showAllScenarios?: boolean
  height?: number
  className?: string
}

export function RevenueChart({
  showAllScenarios = true,
  height = 400,
  className,
}: RevenueChartProps) {
  const { scenario } = useScenario()
  const data = getRevenueChartData()

  // Format tick values
  const formatYAxis = (value: number) => formatCurrency(value)

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-card border border-neutral-200">
          <p className="font-medium text-neutral-900 mb-2">{label}</p>
          {payload.map((entry: any) => (
            <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  if (showAllScenarios) {
    return (
      <div className={className}>
        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CHART_COLORS.base} stopOpacity={0.1} />
                <stop offset="95%" stopColor={CHART_COLORS.base} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e3" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#7a7a70', fontSize: 12 }}
              axisLine={{ stroke: '#e8e8e3' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fill: '#7a7a70', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: 20 }}
              formatter={(value) => (
                <span className="text-sm font-medium text-neutral-700 capitalize">{value}</span>
              )}
            />
            {/* Area fill for base case */}
            <Area
              type="monotone"
              dataKey="base"
              fill="url(#baseGradient)"
              stroke="none"
              name="Base"
            />
            {/* Conservative line */}
            <Line
              type="monotone"
              dataKey="conservative"
              stroke={CHART_COLORS.conservative}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: CHART_COLORS.conservative, r: 4 }}
              activeDot={{ r: 6 }}
              name="Conservative"
            />
            {/* Base line */}
            <Line
              type="monotone"
              dataKey="base"
              stroke={CHART_COLORS.base}
              strokeWidth={3}
              dot={{ fill: CHART_COLORS.base, r: 5 }}
              activeDot={{ r: 7 }}
              name="Base"
            />
            {/* Aggressive line */}
            <Line
              type="monotone"
              dataKey="aggressive"
              stroke={CHART_COLORS.aggressive}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: CHART_COLORS.aggressive, r: 4 }}
              activeDot={{ r: 6 }}
              name="Aggressive"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }

  // Single scenario mode
  const singleScenarioData = data.map((d) => ({
    year: d.year,
    revenue: d[scenario],
  }))

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={singleScenarioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="singleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={CHART_COLORS.base} stopOpacity={0.2} />
              <stop offset="95%" stopColor={CHART_COLORS.base} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e3" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: '#7a7a70', fontSize: 12 }}
            axisLine={{ stroke: '#e8e8e3' }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fill: '#7a7a70', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={CHART_COLORS.base}
            strokeWidth={3}
            dot={{ fill: CHART_COLORS.base, r: 5 }}
            activeDot={{ r: 7 }}
            name="Revenue"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
