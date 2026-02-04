'use client'

import { useRef, useEffect, useLayoutEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { PropertyGallery } from '@/components/gallery/PropertyGallery'

// Animated counter hook for stats
function useAnimatedCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

// Animated stat component
function AnimatedStat({ stat, label, description, index }: {
  stat: string
  label: string
  description: string
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Parse the stat to extract number and suffix
  const numMatch = stat.match(/^([\d.]+)(.*)$/)
  const numValue = numMatch ? parseFloat(numMatch[1]) : 0
  const suffix = numMatch ? numMatch[2] : stat

  const animatedValue = useAnimatedCounter(numValue, 2000, isInView)

  // Format the displayed value
  const displayValue = numValue >= 1 ? animatedValue : animatedValue
  const formattedValue = numValue < 1 ? `${displayValue}` :
    numValue >= 100 ? `${displayValue}` : `${displayValue}`

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className="group relative"
    >
      <div className="relative h-full p-4 sm:p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200/60 shadow-card hover:shadow-xl hover:border-accent-300/50 hover:-translate-y-1 transition-all duration-500">
        {/* Subtle top accent on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* The big number */}
        <p className="relative font-mono text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tighter mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-[1.02]">
          {isInView ? `${formattedValue}${suffix}` : '0'}
        </p>

        {/* Label */}
        <p className="font-accent text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-600 mb-3">
          {label}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

// Botanical-inspired animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function VisionPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const animatedTextRef = useRef<HTMLDivElement>(null)
  const trustIndicatorsRef = useRef<HTMLDivElement>(null)

  // For parallax effect
  const { scrollY } = useScroll()
  const trustOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const trustY = useTransform(scrollY, [0, 400], [0, -30])

  // GSAP text animation on scroll - refined timing
  useLayoutEffect(() => {
    if (!animatedTextRef.current) return

    let cleanup: (() => void) | undefined

    const initGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!animatedTextRef.current) return

      const lines = animatedTextRef.current.querySelectorAll('.line')
      const highlights = animatedTextRef.current.querySelectorAll('.highlight')

      // Set initial state
      gsap.set(lines, { opacity: 0, y: 50, filter: 'blur(4px)' })
      gsap.set(highlights, { opacity: 0, scale: 0.95 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animatedTextRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      })

      // Animate lines with elegant easing
      tl.to(lines[0], {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
      })
      .to(lines[1], {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.8')
      // Highlight text color pop
      .to(highlights, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
        stagger: 0.15,
      }, '-=0.6')

      cleanup = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }

    initGsap()

    return () => {
      cleanup?.()
    }
  }, [])

  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════════════════
          TRUST INDICATORS - Fade out on scroll for clean transition
          ═══════════════════════════════════════════════════════════════════════════ */}
      <motion.div
        ref={trustIndicatorsRef}
        className="fixed top-24 left-0 right-0 z-40 hidden sm:flex justify-center pointer-events-none"
        style={{ opacity: trustOpacity, y: trustY }}
      >
        <div className="w-full sm:w-[70vw] flex justify-end pointer-events-auto">
          <div className="flex flex-col items-end gap-3">
            {[
              { label: 'Evidence-Based', icon: '◈' },
              { label: 'Medical-Grade', icon: '◆' },
              { label: 'Luxury Experience', icon: '✦' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, x: -4 }}
                className="w-[200px] flex items-center gap-3 px-4 py-2.5 bg-white/85 backdrop-blur-md rounded-xl border border-white/60 shadow-sm hover:shadow-md hover:bg-white/95 transition-all duration-300 cursor-default"
              >
                {/* Animated indicator */}
                <div className="relative flex-shrink-0">
                  <motion.span
                    className="text-[8px] text-primary-800/70"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {item.icon}
                  </motion.span>
                </div>

                {/* Refined typography */}
                <span className="font-accent text-[10px] uppercase tracking-[0.25em] text-primary-800/80 font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Refined light mode with elegant details
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-background.webm" type="video/webm" />
            <source src="/Loop_Domino_Wave_fhd_3239514.mp4" type="video/mp4" />
          </video>

          {/* White light overlay */}
          <div className="absolute inset-0 bg-white/30" />

          {/* White gradient fade at bottom for seamless merge */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full sm:w-[70vw] text-left pb-16 sm:pb-24 px-5 sm:px-0"
        >
          {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary-800/30 bg-white/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-800 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-primary-800">
                Investment Opportunity
              </span>
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light mb-6 sm:mb-8 leading-[0.92] text-primary-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative inline-block tracking-[-0.02em]">
              Transformational Epicenter
              {/* Refined underline accent */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 via-secondary-500 to-accent-400" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-body text-base sm:text-lg md:text-xl text-primary-800/90 mb-8 sm:mb-14 max-w-2xl leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A luxury medical retreat pioneering evidence-based healing through
            bio-optimization, plant medicine and trauma integration.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/invest">
              <button className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-lg shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-500 w-full sm:w-auto">
                <span>View Investment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/financials">
              <button className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-800 border border-primary-800/30 hover:bg-primary-800/10 hover:border-primary-800/50 backdrop-blur-sm transition-all duration-500 w-full sm:w-auto">
                <span>Explore Financials</span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator with glow */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-accent uppercase tracking-[0.2em] text-primary-800/60">Scroll</span>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-primary-800/10 rounded-full blur-md animate-pulse" />
              {/* Mouse/scroll icon */}
              <div className="relative w-5 h-8 rounded-full border-2 border-primary-800/40 flex justify-center pt-2">
                <motion.div
                  className="w-1 h-2 rounded-full bg-primary-800/60"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GSAP ANIMATED TEXT SECTION - Unique scroll-triggered text reveal
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-32 md:py-40 bg-white overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          <div
            ref={animatedTextRef}
            className="text-center space-y-4 sm:space-y-6"
          >
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              Healing isn't about <span className="highlight text-accent-600 inline-block">managing</span> symptoms.
            </p>
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              It's about <span className="highlight text-secondary-600 inline-block">transformation.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE CRISIS SECTION - Dramatic stats with video backdrop
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden outline-none">
        {/* Video background with white overlay */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Hi-Tech_Mesh_Background_Loop_source_1123169.mp4" type="video/mp4" />
          </video>
          {/* White overlay */}
          <div className="absolute inset-0 bg-white/50" />
          
          {/* White gradient fade at top for seamless merge */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/40 to-transparent" />
        </div>

        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          {/* Section header */}
          <motion.div
            className="text-center mb-10 sm:mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="font-accent text-xs uppercase tracking-[0.3em] text-accent-600">
                The Crisis
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-[1.1] tracking-tight">
              Mental Health is{' '}
              <span className="relative inline-block">
                <span className="text-accent-600">Breaking</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Traditional approaches are failing. Depression, anxiety, addiction, and trauma affect 1 in 5 adults, 
              yet the system is designed for management, not healing.
            </p>
          </motion.div>

          {/* Stats grid - the dramatic centerpiece with animated counters */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                stat: '280M+',
                label: 'people',
                description: 'suffer from depression globally'
              },
              {
                stat: '70%',
                label: 'relapse rate',
                description: 'of addicts within the first year'
              },
              {
                stat: '5.6T',
                label: 'annual cost',
                description: 'of mental health disorders',
                prefix: '$'
              },
              {
                stat: '10%',
                label: 'success rate',
                description: 'for traditional addiction treatment',
                suffix: '-15%'
              },
            ].map((item, index) => (
              <AnimatedStat
                key={item.stat}
                stat={item.stat}
                label={item.label}
                description={item.description}
                index={index}
              />
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.div
            className="mt-16 md:mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="inline-flex items-center gap-3 text-neutral-500 text-sm md:text-base">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-300" />
              The old paradigm isn't working
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-300" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE SOLUTION SECTION - Dark botanical background
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        {/* Warm glows */}
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Visual element */}
            <motion.div variants={scaleInVariants} className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/healing-transformation.png"
                  alt="Person in peaceful meditation, experiencing transformational healing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="order-1 lg:order-2">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                  The Opportunity
                </p>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
                A New Paradigm in Healing
              </h2>

              <p className="text-lg text-primary-200 mb-10 leading-relaxed">
                Transformational Epicenter combines clinically-supervised plant medicine
                with cutting-edge bio-optimization and deep integration therapy.
                We're not treating symptoms. We're facilitating profound, lasting transformation.
              </p>

              {/* Checkpoints */}
              <div className="space-y-5">
                {[
                  { text: 'Ibogaine treatment with 60-80% addiction interruption rate' },
                  { text: 'Medical-grade facility with 24/7 physician oversight' },
                  { text: 'Comprehensive integration for lasting behavioral change' },
                  { text: 'Bio-optimization protocols enhance recovery outcomes' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-start gap-4 group"
                    variants={fadeUpVariants}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-success-500/20 border border-success-500/30 flex items-center justify-center group-hover:bg-success-500/30 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-success-400" />
                    </div>
                    <p className="text-primary-100 pt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROPERTY WALKTHROUGH - YouTube video tour
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-0 bg-canvas-muted relative overflow-hidden">
        <motion.div
          className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
            <p className="font-accent text-sm uppercase tracking-[0.3em] text-secondary-600">
              Property Walkthrough
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4 text-center">
            Tour the Property
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed text-center mb-10 sm:mb-14">
            Walk through Rancho Paraiso Oasis, a 15-room luxury jungle compound
            in Akumal, Riviera Maya.
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/15 border border-neutral-200/50">
            <iframe
              src="https://www.youtube.com/embed/tzPCRxYmrfY?si=59AA_x0VoVHQRdAN"
              title="Rancho Paraiso Oasis - Property Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE PROPERTY - Photo gallery (videos available on Virtual Tour page)
          ═══════════════════════════════════════════════════════════════════════════ */}
      <PropertyGallery showVideoReels={false} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          WHY NOW SECTION - Three pillars with elegant cards
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-canvas relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F483A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                Market Timing
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Now?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A convergence of scientific validation, regulatory progress, and market demand
              creates an unprecedented opportunity.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: '/icons/scientific-validation.png',
                title: 'Scientific Validation',
                description: 'FDA breakthrough therapy designations for psilocybin and MDMA. Johns Hopkins, NYU, and Imperial College leading research.',
                accentColor: 'primary',
              },
              {
                icon: '/icons/regulatory-momentum.png',
                title: 'Regulatory Momentum',
                description: 'Mexico permits ibogaine treatment. Australia approved MDMA and psilocybin. US decriminalization accelerating.',
                accentColor: 'accent',
              },
              {
                icon: '/icons/demand-explosion.png',
                title: 'Demand Explosion',
                description: 'Psychedelic therapy market projected to reach $10.75B by 2027. HNW individuals seeking alternatives to failed treatments.',
                accentColor: 'secondary',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 ease-out-expo border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    item.accentColor === 'primary' ? 'from-primary-500 to-primary-700' :
                    item.accentColor === 'accent' ? 'from-accent-400 to-accent-600' :
                    'from-secondary-400 to-secondary-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Subtle background glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    item.accentColor === 'primary' ? 'bg-gradient-to-br from-primary-500/5 to-transparent' :
                    item.accentColor === 'accent' ? 'bg-gradient-to-br from-accent-500/5 to-transparent' :
                    'bg-gradient-to-br from-secondary-500/5 to-transparent'
                  }`} />

                  {/* Icon with hover scale */}
                  <div className="w-20 h-20 sm:w-28 sm:h-28 mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-105 relative">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={112}
                      height={112}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-heading text-xl text-neutral-900 mb-4 group-hover:text-primary-800 transition-colors duration-300 relative">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed relative">{item.description}</p>

                  {/* Bottom accent line that expands on hover */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-1/2 bg-gradient-to-r ${
                    item.accentColor === 'primary' ? 'from-primary-500 to-primary-700' :
                    item.accentColor === 'accent' ? 'from-accent-400 to-accent-600' :
                    'from-secondary-400 to-secondary-600'
                  } rounded-full transition-all duration-500 ease-out-expo`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          INVESTMENT OPPORTUNITY - Metric cards with glass effect
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-canvas-muted relative overflow-hidden">
        {/* Warm glow overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-radial from-secondary-500/8 to-transparent rounded-full blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                Investment Thesis
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              The Investment Opportunity
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: '/icons/project-cost.png', label: 'Total Raise', value: '$16.8M', description: 'All-equity seed round' },
              { icon: '/icons/year-5-revenue.png', label: 'Y5 Enterprise Value', value: '$146.7M', description: 'Sum-of-parts (4 units)' },
              { icon: '/icons/project-irr.png', label: 'Y5 Revenue', value: '$34M', description: 'Full 60-casita campus' },
              { icon: '/icons/moic.png', label: 'Total Casitas', value: '60', description: 'Phased expansion plan' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={scaleInVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-500 ease-out-expo border border-neutral-100 hover:border-secondary-200 text-center relative overflow-hidden">
                  {/* Top shimmer line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon with scale */}
                    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={metric.icon}
                        alt={metric.label}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>

                    {/* Value with color transition */}
                    <p className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-800 mb-1 sm:mb-2 tracking-tight transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105 break-words">
                      {metric.value}
                    </p>

                    {/* Label */}
                    <p className="font-accent text-[10px] sm:text-xs text-neutral-500 uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1 sm:mb-3 leading-snug">
                      {metric.label}
                    </p>

                    {/* Description */}
                    <p className="text-[11px] sm:text-sm text-neutral-500 leading-snug">{metric.description}</p>

                    {/* Bottom accent line */}
                    <div className="h-1 w-0 group-hover:w-20 mx-auto mt-6 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full transition-all duration-500 ease-out-expo" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          QUICK NAVIGATION - Explore the pitch
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-4">
              Explore the Pitch
            </h2>
            <p className="text-neutral-600">Dive deeper into any section of our investment thesis</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { title: 'Market', href: '/market', description: '$5.6T addressable market', accent: 'accent' },
              { title: 'The Property', href: '/properties/rancho-paraiso-oasis', description: '60-casita campus expansion', accent: 'primary' },
              { title: 'Financials', href: '/financials', description: '5-year projections', accent: 'secondary' },
              { title: 'Invest', href: '/invest', description: 'The investment opportunity', accent: 'accent' },
            ].map((section, index) => (
              <motion.div
                key={section.href}
                variants={scaleInVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Link
                  href={section.href}
                  className="group block h-full bg-canvas-subtle hover:bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all duration-500 ease-out-expo relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    section.accent === 'primary' ? 'bg-gradient-to-br from-primary-500/5 to-transparent' :
                    section.accent === 'secondary' ? 'bg-gradient-to-br from-secondary-500/5 to-transparent' :
                    'bg-gradient-to-br from-accent-500/5 to-transparent'
                  }`} />

                  <h3 className="font-heading text-xl text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 relative">
                    {section.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 relative">{section.description}</p>

                  <span className="inline-flex items-center gap-2 font-accent text-sm text-accent-600 uppercase tracking-wider relative">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>

                  {/* Bottom accent */}
                  <div className="h-0.5 w-0 group-hover:w-full mt-6 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full transition-all duration-500 ease-out-expo" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Final call to action
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-500/10 blur-[120px]" />

        <motion.div
          className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-8 leading-tight">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-base sm:text-xl text-primary-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in building the future of mental health treatment. This is your
            opportunity to be part of a paradigm shift in healing.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/invest" className="w-full sm:w-auto">
              <button className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-300">
                View Investment Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/properties/rancho-paraiso-oasis" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                Explore the Property
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
