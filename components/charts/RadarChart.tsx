'use client'

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { PropertyScoreData } from '@/lib/sheets/property-details'

interface RadarChartProps {
  data: PropertyScoreData[]
  height?: number
  className?: string
}

export function RadarChart({ data, height = 350, className }: RadarChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e8e8e3" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#454540', fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#7a7a70', fontSize: 10 }}
            tickCount={5}
            axisLine={false}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#1a3a3a"
            strokeWidth={2}
            fill="#1a3a3a"
            fillOpacity={0.2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e8e8e3',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(26, 58, 58, 0.08)',
            }}
            formatter={(value: number) => [`${value}/100`, 'Score']}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
