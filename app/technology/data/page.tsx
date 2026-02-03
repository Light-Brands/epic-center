'use client'

import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Activity,
  Heart,
  Shield,
  Database,
  Layers,
  TrendingUp,
  Search,
  Lightbulb,
  BarChart3,
  GitBranch,
  Fingerprint,
  FileText,
  Microscope,
  Network,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Lock,
  Waves,
  Eye,
  HeartPulse,
  FlaskConical,
  Zap,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

// Data layers
const DATA_LAYERS = [
  {
    icon: Activity,
    title: 'Biometric Streams',
    color: 'from-accent-500 to-accent-600',
    description:
      'Continuous physiological data captured through medical-grade wearables during every phase of treatment.',
    dataPoints: [
      'Heart rate variability (HRV)',
      'Electrodermal activity (stress response)',
      'Sleep architecture & REM patterns',
      'Blood oxygen & respiratory rate',
      'Core body temperature fluctuation',
      'Movement & activity patterns',
    ],
    volume: '~2.4M data points per guest',
  },
  {
    icon: Brain,
    title: 'Psychological & Behavioral',
    color: 'from-primary-500 to-primary-600',
    description:
      'Structured and unstructured data from clinical assessments, therapy sessions, and behavioral observation.',
    dataPoints: [
      'Pre/post psychometric assessments (PHQ-9, GAD-7, PCL-5, ASI)',
      'Therapist session notes & clinical observations',
      'Guided journaling entries & sentiment patterns',
      'Behavioral pattern tracking (sleep, appetite, social)',
      'Self-reported mood & energy daily check-ins',
      'Goal progression & milestone tracking',
    ],
    volume: '~180 structured assessments per guest',
  },
  {
    icon: Heart,
    title: 'Treatment & Protocol',
    color: 'from-secondary-400 to-secondary-500',
    description:
      'Granular records of every treatment administered, every protocol adjustment, and the clinical reasoning behind each decision.',
    dataPoints: [
      'Dosage, timing, and administration details',
      'Real-time treatment response markers',
      'Protocol adaptations & clinical rationale',
      'Adverse event monitoring & resolution',
      'Bio-optimization interventions (NAD+, IV, HBOT)',
      'Integration session progression',
    ],
    volume: '~340 clinical data entries per guest',
  },
  {
    icon: TrendingUp,
    title: 'Outcomes & Longitudinal',
    color: 'from-primary-600 to-primary-700',
    description:
      'The most valuable layer: long-term follow-up data that reveals what actually works, for whom, and why.',
    dataPoints: [
      '30/60/90/180/365-day outcome assessments',
      'Relapse events & early warning indicators',
      'Quality of life trajectory tracking',
      'Return-to-function metrics (work, relationships)',
      'Medication changes post-treatment',
      'Self-reported transformation narratives',
    ],
    volume: 'Tracked for 12+ months post-treatment',
  },
]

const AI_APPLICATIONS = [
  {
    icon: Fingerprint,
    title: 'Predictive Treatment Matching',
    description:
      'Which protocol variant will work best for this specific person? The AI correlates intake profiles with outcome data from hundreds of prior guests to recommend the highest-probability treatment path, before the first session begins.',
    impact: 'Expected to improve first-treatment response rates by 20-30%',
  },
  {
    icon: Search,
    title: 'Early Risk Detection',
    description:
      'Subtle biometric and behavioral shifts often precede a crisis by 48-72 hours. Pattern recognition across the data corpus identifies at-risk guests before they self-identify, enabling proactive clinical intervention instead of reactive crisis management.',
    impact: 'Continuous monitoring across 6+ signal streams',
  },
  {
    icon: GitBranch,
    title: 'Adaptive Protocol Optimization',
    description:
      'Treatment protocols aren\'t static documents. They\'re living systems. As outcome data accumulates, the AI identifies which protocol variations produce the strongest results for specific patient profiles, and surfaces refinement recommendations to the clinical team.',
    impact: 'Protocols refined continuously against real outcomes',
  },
  {
    icon: Lightbulb,
    title: 'Integration Intelligence',
    description:
      'The 12-month integration period generates the most actionable data. AI identifies which aftercare patterns correlate with sustained recovery, then personalizes each guest\'s integration protocol to maximize their specific probability of lasting change.',
    impact: 'Personalized 12-month aftercare driven by outcome data',
  },
  {
    icon: BarChart3,
    title: 'Operational Intelligence',
    description:
      'Beyond clinical outcomes, the data platform optimizes operations. Staffing patterns, supply forecasting, capacity planning, and guest satisfaction signals feed a management dashboard that turns intuition into evidence-based decisions.',
    impact: 'Data-driven operational decision-making',
  },
  {
    icon: Microscope,
    title: 'Research & Evidence Building',
    description:
      'Every consenting guest contributes to the largest structured dataset on psychedelic-assisted therapy outcomes in the world. Anonymized, aggregated data supports clinical publications, regulatory submissions, and the scientific legitimacy of the entire field.',
    impact: 'Building the evidence base for the industry',
  },
]

const FLYWHEEL_STEPS = [
  {
    step: '01',
    title: 'Collect',
    description: 'Every guest interaction generates structured, high-fidelity data across biometric, psychological, treatment, and outcome dimensions.',
    icon: Database,
  },
  {
    step: '02',
    title: 'Learn',
    description: 'AI models identify patterns invisible to human analysis, correlating thousands of variables across hundreds of guests to surface non-obvious insights.',
    icon: Brain,
  },
  {
    step: '03',
    title: 'Improve',
    description: 'Insights feed back into protocols, personalization engines, and clinical training. Each cycle makes treatment more precise, integration more effective, outcomes more predictable.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Compound',
    description: 'More guests produce more data. More data produces better models. Better models produce better outcomes. Better outcomes attract more guests. The flywheel accelerates.',
    icon: Network,
  },
]

const SCANNING_MODALITIES = [
  {
    icon: Waves,
    title: 'qEEG',
    subtitle: '19-Channel Electrical Brain Mapping',
    color: 'from-accent-500 to-accent-600',
    dataPoints: [
      'Alpha/beta/theta/delta/gamma power distribution',
      'Default Mode Network (DMN) connectivity patterns',
      'Frontal alpha asymmetry (approach vs. withdrawal)',
    ],
  },
  {
    icon: Eye,
    title: 'fNIRS',
    subtitle: 'Non-Invasive Optical Brain Imaging',
    color: 'from-primary-500 to-primary-600',
    dataPoints: [
      'Prefrontal cortex activation mapping',
      'Real-time neural response during treatment sessions',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Heart-Brain Coherence',
    subtitle: 'HRV-EEG Coupling Analysis',
    color: 'from-secondary-400 to-secondary-500',
    dataPoints: [
      'Autonomic nervous system rebalancing metrics',
      'Stress recovery trajectory modeling',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Neuroplasticity Biomarkers',
    subtitle: 'Blood-Based Panels',
    color: 'from-primary-600 to-primary-700',
    dataPoints: [
      'BDNF levels (brain-derived neurotrophic factor)',
      'Cortisol and inflammatory marker panels',
      'Molecular proof of brain restructuring',
    ],
  },
]

const NEURAL_CHANGES = [
  { before: 'DMN hyperconnectivity', after: 'Normalized connectivity', icon: Brain },
  { before: 'Prefrontal-amygdala disconnect', after: 'Restored connectivity', icon: Network },
  { before: 'Rigid brain entropy', after: 'Increased flexibility', icon: Zap },
  { before: 'Right-shifted frontal alpha', after: 'Left-shifted (approach motivation)', icon: Activity },
]

const DATASET_PROJECTIONS = [
  { label: 'Year 1', value: '~650', sublabel: 'brain maps' },
  { label: 'Year 3', value: '~2,000', sublabel: 'scans (publishable evidence)' },
  { label: 'Replication cost', value: '$0', sublabel: 'for competitors starting now' },
  { label: 'Head start', value: '5+', sublabel: 'years of structured neural data' },
]

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <span ref={ref} className="inline-block">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{value}{suffix}</span>
      )}
    </span>
  )
}

export default function DataIntelligencePage() {
  const animatedTextRef = useRef<HTMLDivElement>(null)

  // GSAP text animation on scroll
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

      gsap.set(lines, { opacity: 0, y: 50, filter: 'blur(4px)' })
      gsap.set(highlights, { opacity: 0, scale: 0.95 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animatedTextRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(lines[0], {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
      })
        .to(
          lines[1],
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          highlights,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.5)',
            stagger: 0.15,
          },
          '-=0.6'
        )

      cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }

    initGsap()
    return () => cleanup?.()
  }, [])

  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - "Every Interaction Becomes Intelligence"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary-900">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-500/8 blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary-500/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        {/* Floating data particles - subtle animated dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-secondary-400/30"
              style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="w-full sm:w-[70vw] mx-auto py-32 relative">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent-500/30 bg-accent-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-accent-400">
                Data & Intelligence
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Every Interaction Becomes{' '}
            <span className="relative inline-block">
              <span className="text-accent-400">Intelligence</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg md:text-xl text-primary-200/90 mb-14 max-w-2xl leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We're building the most comprehensive dataset on psychedelic-assisted therapy
            outcomes in the world. Every biosensor reading, every clinical observation, every
            long-term follow-up feeds an AI system that makes the next person's healing
            more precise than the last.
          </motion.p>

          {/* Stat badges */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Layers className="w-5 h-5 text-accent-400" />
              <span className="font-accent text-sm text-white">4 Data Dimensions</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Database className="w-5 h-5 text-accent-400" />
              <span className="font-accent text-sm text-white">2.4M+ Data Points per Guest</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <TrendingUp className="w-5 h-5 text-accent-400" />
              <span className="font-accent text-sm text-white">12-Month Outcome Tracking</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PHILOSOPHY - GSAP Text Reveal
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <div ref={animatedTextRef} className="text-center space-y-6">
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              Most retreats measure success by{' '}
              <span className="highlight text-accent-600 inline-block">satisfaction surveys.</span>
            </p>
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              We measure it by{' '}
              <span className="highlight text-secondary-600 inline-block">what actually changed</span>, and prove it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          DATA LAYERS - "What We Collect"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F483A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                The Data Corpus
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Four Dimensions of Understanding
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Each guest's journey generates a rich, multi-dimensional dataset.
              Together, these layers create the most complete picture of psychedelic-assisted
              therapy outcomes ever assembled.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {DATA_LAYERS.map((layer, index) => (
              <motion.div key={layer.title} variants={fadeUpVariants}>
                <Card padding="lg" className="hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
                  {/* Side accent */}
                  <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${layer.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="grid lg:grid-cols-3 gap-8 items-start pl-4">
                    {/* Left: Title + description */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-md`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <layer.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="font-heading text-xl text-neutral-900">{layer.title}</h3>
                      </div>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {layer.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                        <Database className="w-3.5 h-3.5" />
                        {layer.volume}
                      </div>
                    </div>

                    {/* Right: Data points grid */}
                    <div className="lg:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {layer.dataPoints.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-canvas hover:bg-canvas-muted transition-colors duration-200"
                          >
                            <ChevronRight className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          BRAIN MAPPING & NEUROIMAGING
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/6 w-48 h-48 rounded-full bg-primary-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                Neural Evidence
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Seeing Transformation in the Brain
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Beyond self-reported outcomes, we capture objective neural evidence of change.
              Four scanning modalities produce a brain map that shows transformation
              at the biological level.
            </p>
          </motion.div>

          {/* Investor Stats Row */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { value: '4', label: 'Scanning Modalities' },
              { value: '340+', label: 'Neural Data Points per Guest/Session' },
              { value: '72hr', label: 'Continuous Capture During Peak Treatment' },
              { value: '0', label: 'Competitors at Scale' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleInVariants}
                className="text-center p-6 rounded-2xl bg-canvas border border-neutral-100"
              >
                <p className="font-heading text-3xl md:text-4xl text-primary-800 mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scanning Modality Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {SCANNING_MODALITIES.map((modality) => (
              <motion.div key={modality.title} variants={fadeUpVariants}>
                <Card padding="lg" className="h-full hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
                  <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${modality.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${modality.color} flex items-center justify-center shadow-md`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <modality.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-xl text-neutral-900">{modality.title}</h3>
                        <p className="text-sm text-neutral-500">{modality.subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {modality.dataPoints.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2 px-3 py-2 rounded-lg bg-canvas hover:bg-canvas-muted transition-colors duration-200"
                        >
                          <ChevronRight className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Neural Data Convergence Infographic */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUpVariants}
          >
            <div className="text-center mb-10">
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600 mb-3">
                Data Synthesis
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-neutral-900">
                From Raw Signals to Unified Brain Map
              </h3>
            </div>

            {/* Desktop: Radial convergence diagram */}
            <div className="hidden md:block">
              <div className="relative w-full max-w-[600px] mx-auto" style={{ aspectRatio: '1/1' }}>
                <svg
                  viewBox="0 0 600 600"
                  fill="none"
                  className="w-full h-full"
                  aria-label="Infographic showing four scanning modalities converging into a unified brain map"
                >
                  <defs>
                    <radialGradient id="ng-hub-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4A63B" stopOpacity="0.2" />
                      <stop offset="60%" stopColor="#D4A63B" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#D4A63B" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="ng-hub-fill" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#2a5c4a" />
                      <stop offset="100%" stopColor="#1F483A" />
                    </radialGradient>
                  </defs>

                  {/* Concentric context rings */}
                  <circle cx="300" cy="300" r="235" stroke="#1F483A" strokeWidth="0.75" opacity="0.06" strokeDasharray="4 8" />
                  <circle cx="300" cy="300" r="175" stroke="#1F483A" strokeWidth="0.75" opacity="0.08" strokeDasharray="4 8" />
                  <circle cx="300" cy="300" r="130" stroke="#D4A63B" strokeWidth="0.75" opacity="0.12" />

                  {/* Central glow */}
                  <circle cx="300" cy="300" r="120" fill="url(#ng-hub-glow)" />

                  {/* Connection paths - subtle curved lines */}
                  <path d="M300,90 Q330,195 300,300" stroke="#D4724D" strokeWidth="1" opacity="0.15" />
                  <path d="M510,300 Q405,330 300,300" stroke="#347a5e" strokeWidth="1" opacity="0.15" />
                  <path d="M300,510 Q270,405 300,300" stroke="#D4A63B" strokeWidth="1" opacity="0.15" />
                  <path d="M90,300 Q195,270 300,300" stroke="#245845" strokeWidth="1" opacity="0.2" />

                  {/* Secondary connection lines for depth */}
                  <path d="M300,90 Q270,195 300,300" stroke="#D4724D" strokeWidth="0.5" opacity="0.08" />
                  <path d="M510,300 Q405,270 300,300" stroke="#347a5e" strokeWidth="0.5" opacity="0.08" />
                  <path d="M300,510 Q330,405 300,300" stroke="#D4A63B" strokeWidth="0.5" opacity="0.08" />
                  <path d="M90,300 Q195,330 300,300" stroke="#245845" strokeWidth="0.5" opacity="0.1" />

                  {/* Animated particles - Top path (qEEG / terracotta) */}
                  {[0, 0.8, 1.6].map((delay, i) => (
                    <motion.circle
                      key={`pt-${i}`}
                      r="4"
                      fill="#D4724D"
                      animate={{
                        cx: [300, 315, 300],
                        cy: [90, 195, 280],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
                    />
                  ))}
                  {/* Right path (fNIRS / green) */}
                  {[0.2, 1.0, 1.8].map((delay, i) => (
                    <motion.circle
                      key={`pr-${i}`}
                      r="4"
                      fill="#347a5e"
                      animate={{
                        cx: [510, 405, 320],
                        cy: [300, 315, 300],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
                    />
                  ))}
                  {/* Bottom path (Heart-Brain / gold) */}
                  {[0.4, 1.2, 2.0].map((delay, i) => (
                    <motion.circle
                      key={`pb-${i}`}
                      r="4"
                      fill="#D4A63B"
                      animate={{
                        cx: [300, 285, 300],
                        cy: [510, 405, 320],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
                    />
                  ))}
                  {/* Left path (Biomarkers / deep green) */}
                  {[0.6, 1.4, 2.2].map((delay, i) => (
                    <motion.circle
                      key={`pl-${i}`}
                      r="4"
                      fill="#245845"
                      animate={{
                        cx: [90, 195, 280],
                        cy: [300, 285, 300],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay }}
                    />
                  ))}

                  {/* Pulsing synthesis rings */}
                  <motion.circle
                    cx="300" cy="300" fill="none" stroke="#D4A63B" strokeWidth="1.5"
                    animate={{ r: [60, 78, 60], opacity: [0.5, 0.05, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="300" cy="300" fill="none" stroke="#D4A63B" strokeWidth="0.75"
                    animate={{ r: [66, 92, 66], opacity: [0.2, 0.02, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />

                  {/* Center hub */}
                  <circle cx="300" cy="300" r="56" fill="url(#ng-hub-fill)" />
                  <circle cx="300" cy="300" r="56" fill="none" stroke="#D4A63B" strokeWidth="1.5" opacity="0.5" />

                  {/* qEEG node (top) */}
                  <circle cx="300" cy="90" r="78" fill="#D4724D" opacity="0.08" />
                  <circle cx="300" cy="90" r="54" fill="#D4724D" />
                  <path d="M278,70 Q289,54 300,70 Q311,86 322,70" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <text x="300" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="'DM Sans', sans-serif">qEEG</text>
                  <text x="300" y="114" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="'DM Sans', sans-serif">19-channel mapping</text>

                  {/* fNIRS node (right) */}
                  <circle cx="510" cy="300" r="78" fill="#347a5e" opacity="0.08" />
                  <circle cx="510" cy="300" r="54" fill="#347a5e" />
                  <circle cx="510" cy="282" r="10" fill="white" opacity="0.9" />
                  <circle cx="510" cy="282" r="17" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <text x="510" y="310" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="'DM Sans', sans-serif">fNIRS</text>
                  <text x="510" y="324" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="'DM Sans', sans-serif">Optical imaging</text>

                  {/* Heart-Brain node (bottom) */}
                  <circle cx="300" cy="510" r="78" fill="#D4A63B" opacity="0.08" />
                  <circle cx="300" cy="510" r="54" fill="#D4A63B" />
                  <path d="M280,492 L290,476 L300,508 L310,476 L320,492" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="300" y="522" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="'DM Sans', sans-serif">Heart-Brain</text>
                  <text x="300" y="536" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="'DM Sans', sans-serif">HRV-EEG coupling</text>

                  {/* Biomarkers node (left) */}
                  <circle cx="90" cy="300" r="78" fill="#245845" opacity="0.08" />
                  <circle cx="90" cy="300" r="54" fill="#245845" />
                  <path d="M80,278 L80,298 Q80,312 90,312 Q100,312 100,298 L100,278" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="90" y="326" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="'DM Sans', sans-serif">Biomarkers</text>
                  <text x="90" y="340" textAnchor="middle" fill="white" fontSize="8" opacity="0.7" fontFamily="'DM Sans', sans-serif">Blood panels</text>

                  {/* Center hub icon + label */}
                  <circle cx="300" cy="286" r="9" fill="none" stroke="#D4A63B" strokeWidth="2" />
                  <path d="M295,286 Q300,280 305,286" stroke="#D4A63B" strokeWidth="1.5" fill="none" />
                  <text x="300" y="310" textAnchor="middle" fill="white" fontSize="11" fontFamily="'DM Sans', sans-serif" fontWeight="600" opacity="0.9">UNIFIED</text>
                  <text x="300" y="323" textAnchor="middle" fill="white" fontSize="8" fontFamily="'DM Sans', sans-serif" fontWeight="500" opacity="0.7">BRAIN MAP</text>
                </svg>

              </div>

              {/* Output callout */}
              <div className="text-center mt-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-50 border border-primary-100">
                  <Sparkles className="w-4 h-4 text-secondary-500" />
                  <span className="text-sm font-medium text-primary-800">
                    340+ neural data points synthesized into one actionable brain map
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile: Vertical convergence flow */}
            <div className="md:hidden space-y-1">
              {SCANNING_MODALITIES.map((mod) => (
                <div key={mod.title}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-canvas border border-neutral-100">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0`}>
                      <mod.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-heading text-sm text-neutral-900">{mod.title}</p>
                      <p className="text-xs text-neutral-500">{mod.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex justify-center py-1">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ChevronRight className="w-4 h-4 text-secondary-400 rotate-90" />
                    </motion.div>
                  </div>
                </div>
              ))}
              {/* Synthesis card */}
              <div className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-primary-800 text-white">
                <Brain className="w-6 h-6 text-secondary-400" />
                <div>
                  <p className="font-heading text-sm">Unified Brain Map</p>
                  <p className="text-xs text-primary-200">340+ data points synthesized</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Before & After Neural Changes - Dark Card */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
              <div className="text-center mb-10">
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400 mb-3">
                  Measurable Neural Changes
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-white">
                  Before & After: What the Brain Maps Show
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {NEURAL_CHANGES.map((change) => (
                  <div
                    key={change.before}
                    className="bg-primary-700/40 rounded-xl p-5 hover:bg-primary-700/60 transition-colors duration-300"
                  >
                    <change.icon className="w-8 h-8 text-secondary-400 mb-4" />
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-accent uppercase tracking-wider text-primary-400 mb-1">Before</p>
                        <p className="text-sm text-primary-200">{change.before}</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-secondary-400/40 to-transparent" />
                      <div>
                        <p className="text-xs font-accent uppercase tracking-wider text-secondary-400 mb-1">After</p>
                        <p className="text-sm text-white font-medium">{change.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Gold Card: Dataset That Cannot Be Replicated */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                    Competitive Moat
                  </p>
                  <h3 className="text-3xl font-heading mb-4">
                    A Dataset That Cannot Be Replicated
                  </h3>
                  <p className="text-primary-800">
                    Every brain map we capture expands a proprietary neural dataset
                    that no competitor can shortcut. Time is the ingredient that cannot
                    be purchased. By the time a competitor begins scanning, our models
                    will have years of structured neural data powering better predictions
                    and better outcomes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {DATASET_PROJECTIONS.map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={scaleInVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-default"
                    >
                      <p className="font-heading text-2xl">{stat.value}</p>
                      <p className="font-medium text-sm">{stat.label}</p>
                      <p className="text-xs text-primary-700">{stat.sublabel}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE LEARNING FLYWHEEL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-400" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                Compounding Intelligence
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-400" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              The Learning Flywheel
            </h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              Data doesn't sit in a warehouse. It enters a continuous cycle of learning
              that makes every subsequent treatment more effective than the last.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {FLYWHEEL_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                variants={scaleInVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="group h-full bg-primary-800/50 rounded-2xl p-8 border border-primary-700/50 backdrop-blur-sm hover:bg-primary-800/70 hover:border-primary-600/50 transition-all duration-500 relative overflow-hidden">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-primary-700/30 group-hover:text-secondary-400/20 transition-colors duration-500">
                    {step.step}
                  </div>

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-secondary-400/20 border border-secondary-400/30 flex items-center justify-center mb-6 group-hover:bg-secondary-400/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon className="w-7 h-7 text-secondary-400" />
                  </motion.div>

                  <h3 className="font-heading text-xl mb-3 text-white">{step.title}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed">{step.description}</p>

                  {/* Connecting arrow (not on last) */}
                  {index < FLYWHEEL_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-secondary-400/40" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Flywheel callout */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="inline-flex items-center gap-3 text-primary-300 text-sm md:text-base">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500" />
              Guest 500 receives meaningfully better care than Guest 1, automatically
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          AI APPLICATIONS - "What the Data Enables"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                AI Applications
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              What the Data Enables
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Raw data is just noise. Intelligence is what you do with it.
              Here's how our AI platform transforms data into better outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {AI_APPLICATIONS.map((app) => (
              <motion.div
                key={app.title}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-canvas rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <app.icon className="w-7 h-7 text-primary-600" />
                  </motion.div>

                  <h3 className="font-heading text-lg text-neutral-900 mb-3 group-hover:text-primary-800 transition-colors duration-300 relative">
                    {app.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 relative">
                    {app.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 relative">
                    <div className="flex items-center gap-2 text-sm text-accent-600 font-medium">
                      <Sparkles className="w-4 h-4" />
                      {app.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PRIVACY & GOVERNANCE
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                    <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                      Trust & Governance
                    </p>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl mb-6 text-white">
                    The Most Sensitive Data Deserves the Strongest Protection
                  </h2>
                  <p className="text-primary-200 leading-relaxed mb-8">
                    Medical and psychological data is the most intimate information a person
                    can share. Our data governance framework reflects the gravity of that trust.
                    Every system is HIPAA-compliant. Every guest controls their data. And every
                    research contribution is fully anonymized and opt-in.
                  </p>
                  <div className="space-y-4">
                    {[
                      'HIPAA-compliant infrastructure with end-to-end encryption',
                      'Granular consent: guests control what data is used and how',
                      'Anonymization pipeline for research contributions',
                      'Regular third-party security audits',
                      'Data retention policies aligned with medical best practices',
                      'Ethics board oversight for AI model governance',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-100 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lock, value: 'HIPAA', label: 'Compliant', sublabel: 'From day one' },
                    { icon: Shield, value: '256-bit', label: 'Encryption', sublabel: 'End-to-end' },
                    { icon: Fingerprint, value: 'Opt-In', label: 'Research', sublabel: 'Guest-controlled' },
                    { icon: FileText, value: 'Annual', label: 'Security Audits', sublabel: 'Third-party' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={scaleInVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="bg-primary-700/40 rounded-xl p-5 text-center hover:bg-primary-700/60 transition-colors duration-300 cursor-default"
                    >
                      <stat.icon className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                      <p className="font-heading text-2xl text-white">{stat.value}</p>
                      <p className="text-sm font-medium text-primary-100">{stat.label}</p>
                      <p className="text-xs text-primary-300">{stat.sublabel}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE MOAT - "Data as Competitive Advantage"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                    Strategic Asset
                  </p>
                  <h3 className="text-3xl font-heading mb-4">
                    Data Is the Moat
                  </h3>
                  <p className="text-primary-800 mb-6">
                    Competitors can replicate a facility. They can hire similar staff. They can
                    even adopt similar protocols. What they cannot replicate is years of structured
                    outcome data and the AI models trained on it. With every guest, the data
                    advantage compounds, creating a defensible, widening moat.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Proprietary outcome dataset grows with every guest',
                      'AI models improve continuously, with no reset possible',
                      'Evidence base supports regulatory and partnership leverage',
                      'Data-driven protocols become the industry standard',
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-800" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'Year 1', label: '~650 guests', sublabel: 'Initial dataset' },
                    { value: 'Year 3', label: '~2,000 guests', sublabel: 'Statistical power' },
                    { value: 'Year 5', label: '~3,500 guests', sublabel: 'Publishable evidence' },
                    { value: 'Scale', label: '10,000+', sublabel: 'Multi-site corpus' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={scaleInVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-default"
                    >
                      <p className="font-heading text-2xl">{stat.value}</p>
                      <p className="font-medium text-sm">{stat.label}</p>
                      <p className="text-xs text-primary-700">{stat.sublabel}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[150px]" />

        <motion.div
          className="w-full sm:w-[70vw] mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            See the Platform That Powers It
          </h2>
          <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Data collection is one layer of the technology ecosystem. See how
            every system works together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/technology">
              <button className="group inline-flex items-center gap-2 px-10 py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-300">
                The Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/financials">
              <button className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                View Financials
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Page Navigation */}
      <div className="bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto py-8">
          <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
            <Link href="/technology" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Platform</span>
            </Link>
            <Link href="/virtual-tour">
              <Button variant="primary">
                Property Tour
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
