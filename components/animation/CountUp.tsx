'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })

  const display = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, spring, value, hasAnimated])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}

// Animated number that responds to value changes (for scenario switching)
interface AnimatedValueProps {
  value: number
  format?: (value: number) => string
  duration?: number
  className?: string
}

export function AnimatedValue({
  value,
  format = (v) => v.toLocaleString(),
  duration = 0.6,
  className,
}: AnimatedValueProps) {
  const spring = useSpring(value, {
    duration: duration * 1000,
    bounce: 0,
  })

  const display = useTransform(spring, (current) => format(current))

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span className={className}>{display}</motion.span>
}
