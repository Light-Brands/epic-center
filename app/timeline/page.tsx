'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Building2, Users, Briefcase, Heart, TrendingUp } from 'lucide-react'
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
  // 2026 Q1-Q2
  {
    id: 'seed-round',
    date: 'Q1 2026',
    title: 'Seed Round Close',
    description: 'Close $19M equity raise from aligned investors',
    status: 'in-progress',
    category: 'fundraising',
  },
  {
    id: 'property-acquisition',
    date: 'Q2 2026',
    title: 'Property Acquisition',
    description: 'Acquire Hotel Alea Tulum or alternative property',
    status: 'upcoming',
    category: 'acquisition',
  },
  {
    id: 'team-hiring',
    date: 'Q2 2026',
    title: 'Core Team Hiring',
    description: 'Medical Director, Head Nurse, Clinical Psychologist',
    status: 'upcoming',
    category: 'operations',
  },
  // 2026 Q3-Q4
  {
    id: 'renovation-start',
    date: 'Q3 2026',
    title: 'Renovation Begins',
    description: 'Medical facility buildout and room renovations',
    status: 'upcoming',
    category: 'construction',
  },
  {
    id: 'protocol-development',
    date: 'Q3 2026',
    title: 'Protocol Development',
    description: 'Finalize medical protocols and operational procedures',
    status: 'upcoming',
    category: 'operations',
  },
  {
    id: 'licensing',
    date: 'Q4 2026',
    title: 'Licensing & Permits',
    description: 'Complete all Mexican regulatory requirements',
    status: 'upcoming',
    category: 'operations',
  },
  {
    id: 'staff-training',
    date: 'Q4 2026',
    title: 'Staff Training',
    description: 'Comprehensive training program for all staff',
    status: 'upcoming',
    category: 'operations',
  },
  // 2027 Q1
  {
    id: 'soft-launch',
    date: 'Q1 2027',
    title: 'Soft Launch',
    description: 'Begin accepting patients at limited capacity',
    status: 'upcoming',
    category: 'launch',
  },
  {
    id: 'full-operations',
    date: 'Q2 2027',
    title: 'Full Operations',
    description: 'Ramp to target occupancy levels',
    status: 'upcoming',
    category: 'launch',
  },
]

const PHASES = [
  {
    name: 'Phase 1: Foundation',
    period: 'Q1-Q2 2026',
    icon: Briefcase,
    color: 'bg-primary-600',
    items: ['Close equity raise', 'Acquire property', 'Hire core team'],
  },
  {
    name: 'Phase 2: Build',
    period: 'Q3-Q4 2026',
    icon: Building2,
    color: 'bg-primary-500',
    items: ['Renovations & buildout', 'Protocol development', 'Licensing & permits'],
  },
  {
    name: 'Phase 3: Prepare',
    period: 'Q4 2026',
    icon: Users,
    color: 'bg-secondary-400',
    items: ['Staff hiring', 'Training programs', 'Systems setup'],
  },
  {
    name: 'Phase 4: Launch',
    period: 'Q1-Q2 2027',
    icon: Heart,
    color: 'bg-success-500',
    items: ['Soft launch', 'Ramp operations', 'Marketing activation'],
  },
]

const ANNUAL_PROJECTIONS = [
  { year: 'Year 1', revenue: '$7.6M', guests: '79', occupancy: '37%', ebitda: '$1.4M' },
  { year: 'Year 2', revenue: '$10.3M', guests: '107', occupancy: '50%', ebitda: '$2.5M' },
  { year: 'Year 3', revenue: '$12.4M', guests: '129', occupancy: '60%', ebitda: '$3.6M' },
  { year: 'Year 4', revenue: '$13.9M', guests: '144', occupancy: '67%', ebitda: '$4.8M' },
  { year: 'Year 5', revenue: '$15.3M', guests: '158', occupancy: '75%', ebitda: '$6.0M' },
]

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
        <section className="mb-16 text-center">
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
        </section>

        {/* Phase Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASES.map((phase, index) => (
              <Card key={phase.name} padding="lg" className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${phase.color}`} />
                <div className={`w-12 h-12 rounded-lg ${phase.color} flex items-center justify-center mb-4`}>
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  {phase.period}
                </p>
                <h3 className="text-lg font-heading text-neutral-900 mb-3">{phase.name}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Timeline */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-8">Milestone Timeline</h3>
          <Card padding="lg">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-neutral-200 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-8">
                {MILESTONES.map((milestone, index) => (
                  <div key={milestone.id} className="relative">
                    <div className={`flex flex-col md:flex-row md:items-center gap-4 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className={`inline-block px-2 py-1 rounded text-xs font-accent uppercase tracking-wide mb-2 ${categoryColors[milestone.category]} text-white`}>
                          {milestone.category}
                        </div>
                        <p className="font-accent text-sm text-neutral-500 mb-1">{milestone.date}</p>
                        <h4 className="text-lg font-medium text-neutral-900 mb-1">{milestone.title}</h4>
                        <p className="text-neutral-600">{milestone.description}</p>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white flex items-center justify-center">
                        {statusIcons[milestone.status]}
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Annual Projections */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">5-Year Growth Trajectory</h3>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Year
                    </th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Revenue
                    </th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Guests
                    </th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Occupancy
                    </th>
                    <th className="text-right py-4 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      EBITDA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ANNUAL_PROJECTIONS.map((year, index) => (
                    <tr key={year.year} className={`border-b border-neutral-100 ${index === ANNUAL_PROJECTIONS.length - 1 ? 'bg-primary-50' : ''}`}>
                      <td className="py-4 pr-4 font-medium text-neutral-900">{year.year}</td>
                      <td className="py-4 px-4 text-right font-heading text-lg text-neutral-900">{year.revenue}</td>
                      <td className="py-4 px-4 text-right text-neutral-600">{year.guests}</td>
                      <td className="py-4 px-4 text-right text-neutral-600">{year.occupancy}</td>
                      <td className="py-4 pl-4 text-right font-medium text-primary-600">{year.ebitda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Key Dates Summary */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <h3 className="text-2xl font-heading text-center mb-8">Critical Path Milestones</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { date: 'Q2 2026', event: 'Fundraise Close', icon: Briefcase },
                { date: 'Q2 2026', event: 'Property Acquired', icon: Building2 },
                { date: 'Q4 2026', event: 'Renovation Complete', icon: Building2 },
                { date: 'Q1 2027', event: 'First Patient', icon: Heart },
              ].map((milestone) => (
                <div key={milestone.event} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary-400 flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="w-7 h-7 text-primary-900" />
                  </div>
                  <p className="font-accent text-sm text-primary-300 mb-1">{milestone.date}</p>
                  <p className="font-medium">{milestone.event}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Exit Timeline */}
        <section className="mb-16">
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
                <div className="space-y-3">
                  {[
                    'Year 3-4: Platform value established',
                    'Year 4-5: Begin strategic discussions',
                    'Year 5-7: Target exit window',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '30%', label: 'Target IRR' },
                  { value: '3.0x', label: 'Target MOIC' },
                  { value: '5-7 yrs', label: 'Hold Period' },
                  { value: '8-10x', label: 'Exit Multiple' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="font-heading text-3xl">{stat.value}</p>
                    <p className="text-sm text-primary-800">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
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
        </div>
      </div>
      <Footer />
    </div>
  )
}
