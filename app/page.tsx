'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Shield,
  Target,
  Heart,
  Brain,
  Leaf,
  Users,
  Globe,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { formatCurrency } from '@/lib/sheets'

export default function VisionPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"
          style={{ scale: heroScale }}
        >
          {/* Decorative circles */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-secondary-400/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-container-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="font-accent text-sm uppercase tracking-[0.3em] text-secondary-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Investment Opportunity
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-normal mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transformational<br />Epicenter
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-primary-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A luxury medical retreat pioneering evidence-based healing through
            plant medicine, bio-optimization, and trauma integration.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/invest">
              <Button variant="accent" size="lg">
                View Investment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/financials">
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary-800"
              >
                Explore Financials
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* Key Metrics Bar */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="max-w-container-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: 'Project Cost', value: '$19M' },
              { label: 'Year 5 Revenue', value: '$15.3M' },
              { label: 'Project IRR', value: '30%' },
              { label: '5-Year MOIC', value: '3.0x' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-heading text-2xl md:text-3xl text-primary-800">{metric.value}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wide font-accent">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-4">
        <div className="max-w-container-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-error-500 mb-4">
                The Crisis
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
                Mental Health is Breaking
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Traditional approaches are failing. Depression, anxiety, addiction, and trauma
                affect 1 in 5 adults, yet treatment success rates remain dismally low.
                The system is designed for management, not healing.
              </p>

              <div className="space-y-4">
                {[
                  { stat: '280M+', text: 'people suffer from depression globally' },
                  { stat: '70%', text: 'of addicts relapse within the first year' },
                  { stat: '$5.6T', text: 'annual cost of mental health disorders' },
                  { stat: '10-15%', text: 'success rate for traditional addiction treatment' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <AlertTriangle className="w-5 h-5 text-error-500 flex-shrink-0" />
                    <p className="text-neutral-700">
                      <span className="font-semibold text-neutral-900">{item.stat}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Brain className="w-24 h-24 text-neutral-400 mx-auto mb-6" />
                  <p className="text-2xl font-heading text-neutral-600">
                    The old paradigm<br />isn't working
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 bg-primary-800 text-white">
        <div className="max-w-container-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center border border-primary-600/30">
                <div className="text-center p-8">
                  <div className="flex justify-center gap-4 mb-6">
                    <Heart className="w-16 h-16 text-secondary-400" />
                    <Leaf className="w-16 h-16 text-success-500" />
                    <Brain className="w-16 h-16 text-info-500" />
                  </div>
                  <p className="text-2xl font-heading text-primary-100">
                    Integrated healing<br />for lasting change
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-4">
                The Opportunity
              </p>
              <h2 className="text-4xl md:text-5xl font-heading mb-6">
                A New Paradigm in Healing
              </h2>
              <p className="text-lg text-primary-200 mb-8 leading-relaxed">
                Transformational Epicenter combines clinically-supervised plant medicine
                with cutting-edge bio-optimization and deep integration therapy.
                We're not treating symptoms—we're facilitating profound, lasting transformation.
              </p>

              <div className="space-y-4">
                {[
                  { text: 'Ibogaine treatment with 60-80% addiction interruption rate' },
                  { text: 'Medical-grade facility with 24/7 physician oversight' },
                  { text: 'Comprehensive integration for lasting behavioral change' },
                  { text: 'Bio-optimization protocols enhance recovery outcomes' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-success-400 flex-shrink-0" />
                    <p className="text-primary-100">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 px-4">
        <div className="max-w-container-xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Market Timing
            </p>
            <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              Why Now?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A convergence of scientific validation, regulatory progress, and market demand
              creates an unprecedented opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Scientific Validation',
                description: 'FDA breakthrough therapy designations for psilocybin and MDMA. Johns Hopkins, NYU, and Imperial College leading research.',
              },
              {
                icon: Globe,
                title: 'Regulatory Momentum',
                description: 'Mexico permits ibogaine treatment. Australia approved MDMA and psilocybin. US decriminalization accelerating.',
              },
              {
                icon: Users,
                title: 'Demand Explosion',
                description: 'Psychedelic therapy market projected to reach $10.75B by 2027. HNW individuals seeking alternatives to failed treatments.',
              },
            ].map((item) => (
              <Card key={item.title} padding="lg" className="text-center">
                <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 px-4 bg-neutral-100">
        <div className="max-w-container-xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Investment Thesis
            </p>
            <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
              The Investment Opportunity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: 'Project Cost', value: '$19M', description: 'All-in capital requirement' },
              { icon: TrendingUp, label: 'Year 5 Revenue', value: '$15.3M', description: 'Projected annual revenue' },
              { icon: Target, label: 'Project IRR', value: '30%', description: '5-year internal rate of return' },
              { icon: Shield, label: '5-Year MOIC', value: '3.0x', description: 'Multiple on invested capital' },
            ].map((metric) => (
              <Card key={metric.label} padding="lg" hoverable className="text-center">
                <metric.icon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <p className="font-heading text-4xl text-neutral-900 mb-1">{metric.value}</p>
                <p className="font-accent text-sm text-neutral-500 uppercase tracking-wide mb-2">{metric.label}</p>
                <p className="text-sm text-neutral-600">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-24 px-4">
        <div className="max-w-container-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Explore the Pitch
            </h2>
            <p className="text-neutral-600">Dive deeper into any section of our investment thesis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Market', href: '/market', description: '$5.6T addressable market' },
              { title: 'Properties', href: '/properties', description: '4 evaluated properties' },
              { title: 'Financials', href: '/financials', description: '5-year projections' },
              { title: 'Returns', href: '/returns', description: '30% IRR, 3.0x MOIC' },
            ].map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group block bg-neutral-100 rounded-lg p-6 hover:bg-white hover:shadow-card transition-all duration-200"
              >
                <h3 className="text-xl font-heading text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">{section.description}</p>
                <span className="inline-flex items-center text-sm font-accent text-primary-600 uppercase tracking-wide">
                  Explore
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-primary-800 text-white">
        <div className="max-w-container-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Join us in building the future of mental health treatment. This is your
            opportunity to be part of a paradigm shift in healing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/invest">
              <Button variant="accent" size="lg">
                View Investment Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/properties">
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary-800"
              >
                Explore Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
