'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
  className?: string
  animated?: boolean
  showDot?: boolean
}

export function Sparkline({
  data,
  width = 80,
  height = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  animated = true,
  showDot = true,
}: SparklineProps) {
  const path = useMemo(() => {
    if (data.length < 2) return ''

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    const padding = 4
    const effectiveWidth = width - padding * 2
    const effectiveHeight = height - padding * 2

    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * effectiveWidth
      const y = padding + effectiveHeight - ((value - min) / range) * effectiveHeight
      return { x, y }
    })

    // Create smooth curve using cardinal spline
    let d = `M ${points[0].x} ${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)]
      const p1 = points[i]
      const p2 = points[i + 1]
      const p3 = points[Math.min(points.length - 1, i + 2)]

      const tension = 0.3
      const cp1x = p1.x + (p2.x - p0.x) * tension
      const cp1y = p1.y + (p2.y - p0.y) * tension
      const cp2x = p2.x - (p3.x - p1.x) * tension
      const cp2y = p2.y - (p3.y - p1.y) * tension

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }

    return d
  }, [data, width, height])

  const lastPoint = useMemo(() => {
    if (data.length < 2) return null

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    const padding = 4
    const effectiveWidth = width - padding * 2
    const effectiveHeight = height - padding * 2

    const lastValue = data[data.length - 1]
    return {
      x: padding + effectiveWidth,
      y: padding + effectiveHeight - ((lastValue - min) / range) * effectiveHeight,
    }
  }, [data, width, height])

  if (data.length < 2) return null

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
      {showDot && lastPoint && (
        <motion.circle
          cx={lastPoint.x}
          cy={lastPoint.y}
          r={3}
          fill={color}
          initial={animated ? { scale: 0, opacity: 0 } : undefined}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
      )}
    </svg>
  )
}
