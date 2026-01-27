'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Shield, Award, Building2, Brain, Sparkles, Lock, TrendingUp, CheckCircle2, Zap } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { RotateCw } from 'lucide-react'

const COMPETITIVE_ADVANTAGES = [
  {
    id: 'medical-grade',
    number: '01',
    title: 'Medical-Grade Protocols',
    subtitle: 'Clinical Excellence',
    icon: Shield,
    description: 'We operate as a medical facility, not a retreat center. Full cardiac monitoring, 24/7 physician oversight, and emergency protocols set us apart from the competition.',
    details: [
      'Board-certified physicians and licensed nurses',
      'Continuous EKG and vital sign monitoring',
      'Comprehensive medical screening and exclusion criteria',
      'Emergency equipment and protocols on-site',
      'Medical malpractice insurance coverage',
    ],
    competitors: 'Most competitors offer minimal medical supervision, relying on ceremony facilitators rather than healthcare professionals.',
    gradient: 'from-primary-800 to-primary-900',
    accent: 'secondary-400',
  },
  {
    id: 'integration',
    number: '02',
    title: 'Comprehensive Integration',
    subtitle: 'Lasting Results',
    icon: Brain,
    description: 'The psychedelic experience is just the beginning. Our 12-month integration program ensures insights translate into lasting behavioral change.',
    details: [
      '12-month structured integration program',
      'Weekly coaching sessions post-treatment',
      'Online community of alumni',
      'Bio-optimization follow-up protocols',
      'Family education and support',
    ],
    competitors: 'Most facilities provide minimal post-treatment support, leaving guests to integrate alone.',
    gradient: 'from-secondary-400 to-secondary-500',
    accent: 'primary-800',
  },
  {
    id: 'location',
    number: '03',
    title: 'Strategic Location',
    subtitle: 'Tulum Advantage',
    icon: Building2,
    description: 'Tulum offers the perfect combination: legal treatment access, proximity to US patients, established wellness reputation, and healing natural environment.',
    details: [
      'Direct flights from major US cities',
      'Ibogaine legally accessible in Mexico',
      'Established wellness tourism destination',
      'Natural cenotes, beaches, and jungle setting',
      'Growing infrastructure for medical tourism',
    ],
    competitors: 'Competitors in Costa Rica, Belize, and Europe face longer travel times, less infrastructure, or stricter regulations.',
    gradient: 'from-accent-500 to-accent-600',
    accent: 'secondary-400',
  },
  {
    id: 'combined-modalities',
    number: '04',
    title: 'Combined Modalities',
    subtitle: 'Synergistic Healing',
    icon: Sparkles,
    description: 'We combine multiple evidence-based modalities—ibogaine, psilocybin, 5-MeO-DMT, and bio-optimization—to create compounded healing effects.',
    details: [
      'Multiple treatment modalities under one roof',
      'Sequenced protocols for optimal outcomes',
      'Bio-optimization enhances neuroplasticity',
      'Personalized treatment combinations',
      'Research-backed protocol development',
    ],
    competitors: 'Most facilities specialize in single modalities, forcing patients to seek additional treatment elsewhere.',
    gradient: 'from-primary-800 to-primary-900',
    accent: 'secondary-400',
  },
  {
    id: 'luxury-experience',
    number: '05',
    title: 'Luxury Experience',
    subtitle: 'Premium Positioning',
    icon: Award,
    description: 'World-class hospitality ensures comfort during the most vulnerable moments of treatment, commanding premium pricing and building referral loyalty.',
    details: [
      'Boutique hotel-quality accommodations',
      'Gourmet nutrition programs',
      'Concierge and personal assistant services',
      'Private treatment rooms and spaces',
      'White-glove guest experience',
    ],
    competitors: 'Many ibogaine clinics offer clinical, sterile environments that feel institutional rather than healing.',
    gradient: 'from-secondary-400 to-secondary-500',
    accent: 'primary-800',
  },
]

const BARRIERS_TO_ENTRY = [
  {
    barrier: 'Medical Expertise',
    description: 'Requires physicians experienced in ibogaine administration—a rare specialty.',
    strength: 'High',
    icon: Shield,
  },
  {
    barrier: 'Capital Requirements',
    description: '$19M+ to acquire, renovate, and operate a medical-grade facility.',
    strength: 'High',
    icon: Zap,
  },
  {
    barrier: 'Regulatory Knowledge',
    description: 'Navigating Mexican healthcare regulations and licensing requirements.',
    strength: 'Medium',
    icon: Lock,
  },
  {
    barrier: 'Brand & Reputation',
    description: 'Building trust in a stigmatized industry requires time and track record.',
    strength: 'Medium',
    icon: Award,
  },
  {
    barrier: 'Referral Networks',
    description: 'Relationships with interventionists, therapists, and physicians.',
    strength: 'High',
    icon: Brain,
  },
]

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function MoatPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION — Animated intro with parallax
          ═══════════════════════════════════════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-canvas to-secondary-50" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary-800/20 bg-white/80 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary-800 animate-pulse" />
                <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-primary-800">
                  Competitive Moat
                </span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light mb-8 leading-[0.92] text-primary-800"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="relative inline-block tracking-[-0.02em]">
                Why We Win
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-400 via-secondary-500 to-accent-400" />
                </motion.span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-lg md:text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Five reinforcing competitive advantages create a defensible market position
              that compounds over time, building an unassailable moat.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { value: '5', label: 'Advantages' },
                { value: '5', label: 'Barriers' },
                { value: '∞', label: 'Compounding' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl md:text-5xl text-primary-800 mb-2">{stat.value}</p>
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
              <div className="absolute -inset-2 bg-primary-800/10 rounded-full blur-md animate-pulse" />
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
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          COMPETITIVE ADVANTAGES — Scroll-triggered reveals with elegant cards
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F483A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="space-y-12 md:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {COMPETITIVE_ADVANTAGES.map((advantage, index) => {
              const AdvantageIcon = advantage.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={advantage.id}
                  variants={fadeUpVariants}
                  className="group"
                >
                  <Card padding="none" className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-500">
                    <div className={`grid lg:grid-cols-5 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Left Column - Visual Header */}
                      <div className={`lg:col-span-2 p-8 md:p-12 bg-gradient-to-br ${advantage.gradient} text-white relative overflow-hidden`}>
                        {/* Decorative glow */}
                        {advantage.accent === 'secondary-400' ? (
                          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary-400/20 blur-3xl opacity-50" />
                        ) : (
                          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-800/20 blur-3xl opacity-50" />
                        )}
                        
                        {/* Number badge */}
                        <motion.div
                          className="relative z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-4 mb-6">
                            {advantage.accent === 'secondary-400' ? (
                              <>
                                <span className="font-display text-6xl md:text-7xl font-light text-secondary-400 opacity-90">
                                  {advantage.number}
                                </span>
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <AdvantageIcon className="w-12 h-12 md:w-14 md:h-14 text-secondary-400" />
                                </motion.div>
                              </>
                            ) : (
                              <>
                                <span className="font-display text-6xl md:text-7xl font-light text-primary-800 opacity-90">
                                  {advantage.number}
                                </span>
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <AdvantageIcon className="w-12 h-12 md:w-14 md:h-14 text-primary-800" />
                                </motion.div>
                              </>
                            )}
                          </div>
                          
                          {advantage.accent === 'secondary-400' ? (
                            <p className="font-accent text-xs uppercase tracking-[0.3em] mb-3 text-secondary-400 opacity-90">
                              {advantage.subtitle}
                            </p>
                          ) : (
                            <p className="font-accent text-xs uppercase tracking-[0.3em] mb-3 text-primary-800 opacity-90">
                              {advantage.subtitle}
                            </p>
                          )}
                          
                          <h3 className="text-2xl md:text-3xl font-heading mb-4 leading-tight text-white">
                            {advantage.title}
                          </h3>
                          
                          <p className="text-white/95 leading-relaxed text-lg">
                            {advantage.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Columns - Details */}
                      <div className="lg:col-span-3 p-8 md:p-12 bg-white grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-success-500" />
                            <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-500">
                              Our Approach
                            </p>
                          </div>
                          <ul className="space-y-4">
                            {advantage.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detail}
                                className="flex items-start gap-3 text-neutral-700"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + detailIndex * 0.05 }}
                              >
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-100 flex items-center justify-center mt-0.5">
                                  <div className="w-2 h-2 rounded-full bg-success-500" />
                                </div>
                                <span className="leading-relaxed">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <Shield className="w-5 h-5 text-accent-500" />
                            <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-500">
                              Competitive Gap
                            </p>
                          </div>
                          <motion.div
                            className="p-6 rounded-xl bg-neutral-50 border-l-4 border-accent-500"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                          >
                            <p className="text-neutral-700 leading-relaxed">{advantage.competitors}</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          BARRIERS TO ENTRY — Visual strength indicators
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        {/* Warm glow overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-radial from-secondary-500/8 to-transparent rounded-full blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                Defensibility
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-4">
              Barriers to Entry
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Significant obstacles prevent easy replication of our model, creating sustainable competitive advantage.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {BARRIERS_TO_ENTRY.map((barrier, index) => {
              const BarrierIcon = barrier.icon
              const isHigh = barrier.strength === 'High'
              
              return (
                <motion.div
                  key={barrier.barrier}
                  variants={scaleInVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <Card padding="lg" className="h-full text-center group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Strength indicator bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${
                      isHigh 
                        ? 'bg-gradient-to-r from-success-500 to-success-600' 
                        : 'bg-gradient-to-r from-warning-500 to-warning-600'
                    }`} />

                    {/* Icon with glow */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                        isHigh 
                          ? 'bg-success-100 group-hover:bg-success-200' 
                          : 'bg-warning-100 group-hover:bg-warning-200'
                      } transition-colors duration-300`}>
                        <BarrierIcon className={`w-8 h-8 ${
                          isHigh ? 'text-success-600' : 'text-warning-600'
                        }`} />
                      </div>
                    </motion.div>

                    <h4 className="font-heading text-lg text-neutral-900 mb-3 group-hover:text-primary-800 transition-colors">
                      {barrier.barrier}
                    </h4>
                    
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {barrier.description}
                    </p>
                    
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      isHigh 
                        ? 'bg-success-100 text-success-700 border border-success-200' 
                        : 'bg-warning-100 text-warning-700 border border-warning-200'
                    }`}>
                      <Lock className="w-3 h-3" />
                      {barrier.strength} Barrier
                    </span>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          COMPETITIVE FLYWHEEL — Simple static section
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-400" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                Growth Engine
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-400" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              The Competitive Flywheel
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Each advantage reinforces the others, creating compounding returns that widen our moat over time.
            </p>
          </motion.div>

          {/* Flywheel Steps */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                step: 1,
                title: 'Superior Outcomes',
                description: 'Medical protocols + integration',
                detail: 'Our medical-grade protocols combined with comprehensive 12-month integration deliver measurably better results than competitors.',
              },
              {
                step: 2,
                title: 'Word of Mouth',
                description: 'Guests become advocates',
                detail: 'Transformed guests naturally share their experiences with friends, family, and communities struggling with similar challenges.',
              },
              {
                step: 3,
                title: 'Referral Network',
                description: 'Professionals recommend us',
                detail: 'Therapists, physicians, and interventionists build confidence in our outcomes and refer their most challenging cases.',
              },
              {
                step: 4,
                title: 'Brand Premium',
                description: 'Premium pricing power',
                detail: 'Strong reputation enables premium positioning, funding reinvestment in protocols, facilities, and talent.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={scaleInVariants}
                className="relative"
              >
                <Card padding="lg" className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-secondary-400/20 flex items-center justify-center font-heading text-secondary-400 text-lg">
                      {item.step}
                    </span>
                    {index < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <div className="w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-secondary-400" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-heading text-xl text-white mb-2">{item.title}</h4>
                  <p className="text-secondary-400 text-sm mb-4">{item.description}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.detail}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Cycle indicator */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-secondary-400/30">
              <RotateCw className="w-5 h-5 text-secondary-400" />
              <p className="text-white/90 font-medium">
                Profits reinvest into protocols, integration, and capacity — the cycle continues
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          COMPETITIVE POSITION SUMMARY — Final compelling statement
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-800/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
              Sustainable Competitive Position
            </h2>
            
            <p className="text-lg md:text-xl text-primary-900 mb-12 leading-relaxed">
              While the psychedelic therapy space is growing rapidly, we believe our combination
              of medical rigor, comprehensive integration, strategic location, and luxury
              positioning creates a differentiated and defensible market position that compounds over time.
            </p>

            {/* Key metrics */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                { value: '5', label: 'Reinforcing Advantages', icon: Shield },
                { value: '5', label: 'Barriers to Entry', icon: Lock },
                { value: '1', label: 'Integrated Offering', icon: Sparkles },
              ].map((stat, index) => {
                const StatIcon = stat.icon
                
                return (
                  <motion.div
                    key={stat.label}
                    variants={scaleInVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/40 transition-all duration-500"
                  >
                    <StatIcon className="w-8 h-8 text-primary-800 mx-auto mb-4 opacity-80" />
                    <p className="font-display text-5xl md:text-6xl mb-2">{stat.value}</p>
                    <p className="text-sm font-accent uppercase tracking-[0.15em] text-primary-900/90">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          NAVIGATION — Clean footer navigation
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
            <Link 
              href="/team" 
              className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">Team</span>
            </Link>
            
            <Link href="/financials">
              <Button variant="primary" size="lg">
                View Financials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
