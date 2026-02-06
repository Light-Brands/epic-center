'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'
import { getUseOfFunds, formatCurrencyFull } from '@/lib/sheets'

const COLORS = [
  '#1a3a3a', // primary-800
  '#1a5a57', // primary-600
  '#2d7a76', // primary-500
  '#c4a962', // secondary-400
  '#b39347', // secondary-500
  '#4d9f9a', // primary-400
  '#80bbb8', // primary-300
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function OverviewFundsChart() {
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
        <div className="bg-white p-3 rounded-lg shadow-card border border-neutral-200">
          <p className="font-medium text-neutral-900 text-sm mb-0.5">{item.name}</p>
          <p className="text-primary-600 font-semibold text-sm">{formatCurrencyFull(item.value)}</p>
          <p className="text-xs text-neutral-500">{item.percentage.toFixed(1)}%</p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-6">
      <div className="w-full lg:w-1/2 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
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
              {chartData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full lg:w-1/2 space-y-2">
        {chartData.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-neutral-700 flex-1">{entry.name}</span>
            <span className="text-sm font-mono text-neutral-900 tabular-nums">{entry.percentage.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
