'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Building2, Users, Briefcase, Heart, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

interface Milestone {
  id: string
  date: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  category: 'fundraising' | 'acquisition' | 'construction' | 'operations' | 'launch'
}

const MILESTONES: Milestone[] = [
  {
    id: 'seed-round',
    date: 'Q1 2026',
    title: 'Seed Round Close',
    description: 'Close $14.95M equity raise for initial 30-casita campus',
    status: 'in-progress',
    category: 'fundraising',
  },
  {
    id: 'property-acquisition',
    date: 'Q2 2026',
    title: 'Property Acquisition',
    description: 'Acquire Rancho Paraiso Oasis compound (9 lots, 45,000 m²)',
    status: 'upcoming',
    category: 'acquisition',
  },
  {
    id: 'medical-conversion',
    date: 'Q2 2026',
    title: 'Medical Conversion',
    description: 'Convert first 15 casitas for treatment operations',
    status: 'upcoming',
    category: 'construction',
  },
  {
    id: 'core-team-hiring',
    date: 'Q2 2026',
    title: 'Core Team Hiring',
    description: 'Medical Director, Head Nurse, Clinical Psychologist',
    status: 'upcoming',
    category: 'operations',
  },
  {
    id: 'first-patients',
    date: 'Q2 2026',
    title: 'First Patients (15 Casitas)',
    description: 'Begin accepting patients at 15-casita capacity',
    status: 'upcoming',
    category: 'launch',
  },
  {
    id: 'phase1-expansion',
    date: 'Q3–Q4 2026',
    title: 'Phase 1 Expansion (+15 Casitas)',
    description: 'Build-out to 30 casitas by end of Year 1',
    status: 'upcoming',
    category: 'construction',
  },
  {
    id: 'licensing-protocols',
    date: 'Q3 2026',
    title: 'Licensing & Protocols',
    description: 'Complete regulatory requirements, refine protocols',
    status: 'upcoming',
    category: 'operations',
  },
  {
    id: 'year1-capacity',
    date: 'Q4 2026',
    title: '30-Casita Capacity',
    description: 'Year 1 target reached - 30 casitas operational',
    status: 'upcoming',
    category: 'launch',
  },
  {
    id: 'year2-expansion',
    date: '2027',
    title: 'Year 2: Expand to 40 Casitas',
    description: 'Add 10 casitas funded from operating cash flow. Villa sales begin.',
    status: 'upcoming',
    category: 'construction',
  },
  {
    id: 'year3-expansion',
    date: '2028',
    title: 'Year 3: Expand to 48 Casitas',
    description: 'Add 8 casitas. 24 villas operational. Revenue ~$26.3M.',
    status: 'upcoming',
    category: 'construction',
  },
  {
    id: 'year5-full',
    date: '2030',
    title: 'Year 5: Full 60-Casita Campus',
    description: 'All 60 casitas operational. 36 villas complete. Revenue ~$34M.',
    status: 'upcoming',
    category: 'launch',
  },
]

const PHASES = [
  {
    name: 'Phase 1: Acquire & Launch',
    period: 'Q1–Q2 2026',
    icon: Briefcase,
    color: 'bg-primary-600',
    items: ['Close equity raise', 'Acquire property', 'Convert first 15 casitas', 'First patients'],
  },
  {
    name: 'Phase 2: Year 1 Build-Out',
    period: 'Q3–Q4 2026',
    icon: Building2,
    color: 'bg-primary-500',
    items: ['Build +15 casitas to reach 30', 'Scale clinical team', 'Begin villa pre-sales'],
  },
  {
    name: 'Phase 3: Campus Growth',
    period: '2027–2028',
    icon: Heart,
    color: 'bg-secondary-400',
    items: ['Expand to 40 → 48 casitas', 'Villa construction underway', 'Revenue reaches ~$26M'],
  },
  {
    name: 'Phase 4: Full Campus',
    period: '2029–2030',
    icon: Users,
    color: 'bg-success-500',
    items: ['60 casitas operational', '36 villas complete', 'Revenue ~$34M Year 5'],
  },
]

const ANNUAL_PROJECTIONS = [
  { year: 'Year 1', revenue: '$10.3M', rooms: '30', guests: '387', occupancy: '60%', ebitda: '$4.3M' },
  { year: 'Year 2', revenue: '$19.6M', rooms: '40', guests: '737', occupancy: '75%', ebitda: '$10.9M' },
  { year: 'Year 3', revenue: '$26.3M', rooms: '48', guests: '988', occupancy: '80%', ebitda: '$15.4M' },
  { year: 'Year 4', revenue: '$30.5M', rooms: '54', guests: '1,145', occupancy: '80%', ebitda: '$18.1M' },
  { year: 'Year 5', revenue: '$34.0M', rooms: '60', guests: '1,280', occupancy: '80%', ebitda: '$20.3M' },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function TimelinePage() {
  const categoryColors = {
    fundraising: 'bg-primary-600',
    acquisition: 'bg-primary-500',
    construction: 'bg-secondary-500',
    operations: 'bg-primary-400',
    launch: 'bg-success-500',
  }

  const statusIcons = {
    completed: <CheckCircle2 className="w-6 h-6 text-success-500" />,
    'in-progress': <Clock className="w-6 h-6 text-warning-500" />,
    upcoming: <Circle className="w-6 h-6 text-neutral-300" />,
  }

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Execution Plan
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A clear path from capital raise to full operations, with defined milestones
            and measurable progress checkpoints.
          </p>
        </motion.section>

        {/* Phase Overview */}
        <section className="mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PHASES.map((phase, index) => (
              <motion.div key={phase.name} variants={itemVariants}>
                <Card padding="lg" className="relative overflow-hidden h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className={`absolute top-0 left-0 right-0 h-1 ${phase.color} origin-left`}
                  />
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className={`w-12 h-12 rounded-lg ${phase.color} flex items-center justify-center mb-4`}
                  >
                    <phase.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                    {phase.period}
                  </p>
                  <h3 className="text-lg font-heading text-neutral-900 mb-3">{phase.name}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-neutral-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Detailed Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading text-neutral-900 mb-8">Milestone Timeline</h3>
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute top-0 bottom-0 left-6 w-0.5 bg-neutral-200 md:left-1/2 md:-translate-x-px origin-top"
              />

              <div className="space-y-8">
                {MILESTONES.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.08 }}
                    className="relative"
                  >
                    <div className={`flex flex-col md:flex-row md:items-center gap-4 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.08, type: 'spring', stiffness: 300 }}
                          className={`inline-block px-2 py-1 rounded text-xs font-accent uppercase tracking-wide mb-2 ${categoryColors[milestone.category]} text-white`}
                        >
                          {milestone.category}
                        </motion.div>
                        <p className="font-accent text-sm text-neutral-500 mb-1">{milestone.date}</p>
                        <h4 className="text-lg font-medium text-neutral-900 mb-1">{milestone.title}</h4>
                        <p className="text-neutral-600">{milestone.description}</p>
                      </div>

                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.75 + index * 0.08, type: 'spring', stiffness: 300 }}
                        className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white flex items-center justify-center"
                      >
                        {statusIcons[milestone.status]}
                      </motion.div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Annual Projections */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">5-Year Growth Trajectory</h3>
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Revenue</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Casitas</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Guests</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Occupancy</th>
                    <th className="text-right py-4 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">EBITDA</th>
                  </tr>
                </thead>
                <tbody>
                  {ANNUAL_PROJECTIONS.map((year, index) => (
                    <motion.tr
                      key={year.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                      className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${
                        index === ANNUAL_PROJECTIONS.length - 1 ? 'bg-primary-50 hover:bg-primary-100' : ''
                      }`}
                    >
                      <td className="py-4 pr-4 font-medium text-neutral-900">{year.year}</td>
                      <td className="py-4 px-4 text-right font-heading text-lg text-neutral-900">{year.revenue}</td>
                      <td className="py-4 px-4 text-right text-neutral-600">{year.rooms}</td>
                      <td className="py-4 px-4 text-right text-neutral-600">{year.guests}</td>
                      <td className="py-4 px-4 text-right text-neutral-600">{year.occupancy}</td>
                      <td className="py-4 pl-4 text-right font-medium text-primary-600">{year.ebitda}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.section>

        {/* Key Dates Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="bg-primary-800 text-white">
            <h3 className="text-2xl font-heading text-center mb-8">Critical Path Milestones</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { date: 'Q1 2026', event: 'Fundraise Close', icon: Briefcase },
                { date: 'Q2 2026', event: 'Property Acquired', icon: Building2 },
                { date: 'Q2 2026', event: 'First Patient (15 casitas)', icon: Heart },
                { date: 'Q4 2026', event: '30 Casitas Operational', icon: Users },
              ].map((milestone, index) => (
                <motion.div key={milestone.event} variants={itemVariants} className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="w-14 h-14 rounded-full bg-secondary-400 flex items-center justify-center mx-auto mb-4"
                  >
                    <milestone.icon className="w-7 h-7 text-primary-900" />
                  </motion.div>
                  <p className="font-accent text-sm text-primary-300 mb-1">{milestone.date}</p>
                  <p className="font-medium">{milestone.event}</p>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.section>

        {/* Exit Timeline */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                  Looking Ahead
                </p>
                <h3 className="text-3xl font-heading mb-4">Exit Horizon</h3>
                <p className="text-primary-800 mb-6">
                  With a 5-7 year investment horizon, we target a strategic exit once
                  the business has demonstrated consistent profitability and growth.
                </p>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {[
                    'Year 3-4: Platform value established',
                    'Year 4-5: Begin strategic discussions',
                    'Year 5-7: Target exit window',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={itemVariants}
                      className="flex items-center gap-2 hover:translate-x-1 transition-transform"
                    >
                      <TrendingUp className="w-5 h-5 text-primary-700" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: '78%', label: 'Target IRR' },
                  { value: '7.8x', label: 'Target MOIC' },
                  { value: '5 yrs', label: 'Hold Period' },
                  { value: '$81.2M', label: 'Y5 Enterprise Value' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-default"
                  >
                    <p className="font-heading text-3xl">{stat.value}</p>
                    <p className="text-sm text-primary-800">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-between items-center pt-8 border-t border-neutral-200"
        >
          <Link href="/risks" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Risks</span>
          </Link>
          <Link href="/legal">
            <Button variant="primary">
              Legal
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
