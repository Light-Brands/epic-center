'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const TREATMENT_PROGRAMS = [
  {
    id: 'ibogaine',
    name: 'Ibogaine Protocol',
    duration: '10-14 days',
    price: '$35,000-$55,000',
    icon: '/icons/program-ibogaine.png',
    description: 'Medically-supervised ibogaine treatment for addiction interruption and deep psychological reset.',
    outcomes: ['60-80% addiction interruption rate', 'Reduces withdrawal symptoms by 90%', 'Single treatment effectiveness'],
    color: 'bg-primary-600',
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin Journey',
    duration: '7-10 days',
    price: '$25,000-$40,000',
    icon: '/icons/program-psilocybin.png',
    description: 'Guided psilocybin experiences for depression, anxiety, and existential distress.',
    outcomes: ['67% remission rate for treatment-resistant depression', 'Sustained effects at 6-month follow-up', 'Enhanced neuroplasticity'],
    color: 'bg-primary-500',
  },
  {
    id: 'integration',
    name: '5-MeO-DMT Integration',
    duration: '5-7 days',
    price: '$20,000-$30,000',
    icon: '/icons/program-5meo.png',
    description: 'Profound ego dissolution experiences with comprehensive integration support.',
    outcomes: ['Rapid mystical experiences', 'Deep trauma processing', 'Spiritual awakening'],
    color: 'bg-secondary-400',
  },
  {
    id: 'bio-optimization',
    name: 'Bio-Optimization',
    duration: 'Ongoing',
    price: '$5,000-$15,000',
    icon: '/icons/program-bio.png',
    description: 'Cutting-edge protocols for physical optimization enhancing treatment outcomes.',
    outcomes: ['NAD+ therapy', 'Hyperbaric oxygen', 'IV nutrient therapy'],
    color: 'bg-primary-400',
  },
]

const REVENUE_STREAMS = [
  { name: 'Treatment Programs', percentage: 65, description: 'Core ibogaine, psilocybin, and 5-MeO-DMT programs' },
  { name: 'Accommodations', percentage: 15, description: 'Luxury room revenue and extended stays' },
  { name: 'Bio-Optimization', percentage: 10, description: 'NAD+, IV therapy, hyperbaric, etc.' },
  { name: 'Integration Services', percentage: 5, description: 'Post-treatment coaching and support' },
  { name: 'Concierge & Ancillary', percentage: 5, description: 'Transportation, activities, companions' },
]

export default function ModelPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Integrated Healing Model
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We combine clinically-proven plant medicine protocols with luxury hospitality,
            comprehensive integration, and cutting-edge bio-optimization to deliver
            transformational outcomes.
          </p>
        </section>

        {/* The Model Visualization */}
        <section className="mb-16">
          <Card variant="custom" padding="lg" className="bg-primary-800 text-white rounded-xl">
            <h3 className="text-2xl font-heading text-center text-white mb-12">The Transformational Epicenter Model</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  phase: '1',
                  title: 'Assessment',
                  icon: '/icons/phase-assessment.png',
                  items: ['Medical screening', 'Psychological evaluation', 'Treatment planning', 'Goal setting'],
                },
                {
                  phase: '2',
                  title: 'Preparation',
                  icon: '/icons/phase-preparation.png',
                  items: ['Dietary protocols', 'Intention setting', 'Bio-optimization', 'Emotional readiness'],
                },
                {
                  phase: '3',
                  title: 'Treatment',
                  icon: '/icons/phase-treatment.png',
                  items: ['24/7 medical supervision', 'Guided ceremonies', 'Multiple modalities', 'Crisis support'],
                },
                {
                  phase: '4',
                  title: 'Integration',
                  icon: '/icons/phase-integration.png',
                  items: ['Processing sessions', 'Behavioral coaching', 'Aftercare planning', 'Community support'],
                },
              ].map((phase) => (
                <div key={phase.phase} className="text-center group">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/10 p-3 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-105">
                    <Image
                      src={phase.icon}
                      alt={phase.title}
                      width={160}
                      height={160}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="font-accent text-xs uppercase tracking-widest text-secondary-400 mb-2">
                    Phase {phase.phase}
                  </div>
                  <h4 className="text-xl font-heading text-white mb-4">{phase.title}</h4>
                  <ul className="space-y-2 text-sm text-primary-200">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Treatment Programs */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Core Offerings
              </p>
              <h3 className="text-3xl font-heading text-neutral-900">Treatment Programs</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TREATMENT_PROGRAMS.map((program) => (
              <Card key={program.id} padding="lg" hoverable className="group">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-36 h-36 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={program.icon}
                      alt={program.name}
                      width={144}
                      height={144}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-2xl font-heading text-neutral-900">{program.name}</h4>
                    <div className="flex gap-4 text-sm text-neutral-500 mt-2">
                      <span className="flex items-center gap-2">
                        <Image src="/icons/util-clock.png" alt="Duration" width={20} height={20} className="object-contain" />
                        {program.duration}
                      </span>
                      <span className="font-medium text-primary-600">{program.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{program.description}</p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs font-accent uppercase tracking-wide text-neutral-500 mb-2">
                    Key Outcomes
                  </p>
                  <ul className="space-y-1">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Revenue Streams */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Revenue Mix
              </p>
              <h3 className="text-3xl font-heading text-neutral-900 mb-6">Diversified Revenue Streams</h3>
              <p className="text-neutral-600 mb-8">
                While treatment programs drive the majority of revenue, ancillary services
                enhance the guest experience and improve overall margins.
              </p>

              <div className="space-y-4">
                {REVENUE_STREAMS.map((stream, index) => (
                  <div key={stream.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-900">{stream.name}</span>
                      <span className="font-heading text-lg text-primary-600">{stream.percentage}%</span>
                    </div>
                    <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${stream.percentage}%`,
                          backgroundColor: index === 0 ? '#1a3a3a' : index === 1 ? '#1a5a57' : index === 2 ? '#c4a962' : '#4d9f9a',
                        }}
                      />
                    </div>
                    <p className="text-sm text-neutral-500 mt-1">{stream.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card padding="lg" className="bg-neutral-100">
              <h4 className="text-xl font-heading text-neutral-900 mb-6">Unit Economics Summary</h4>
              <div className="space-y-4">
                {[
                  { label: 'Avg Revenue per Guest', value: '$14,000' },
                  { label: 'Direct Cost per Guest', value: '$4,443' },
                  { label: 'Gross Profit per Guest', value: '$9,557' },
                  { label: 'Gross Margin', value: '68%' },
                  { label: 'Customer Acquisition Cost', value: '$173' },
                  { label: 'LTV:CAC Ratio', value: '80.9x' },
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
                    <span className="text-neutral-700">{metric.label}</span>
                    <span className="font-heading text-xl text-primary-800">{metric.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Our Differentiators
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">What Sets Us Apart</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Medical-Grade Protocols',
                description: 'Full cardiac monitoring, physician oversight, and emergency protocols. Not a retreat center—a medical facility.',
                icon: '/icons/diff-medical.png',
              },
              {
                title: 'Integrated Approach',
                description: 'Combining plant medicine with bio-optimization, therapy, and integration creates compounded healing effects.',
                icon: '/icons/diff-integrated.png',
              },
              {
                title: 'Luxury Experience',
                description: 'World-class accommodations and hospitality ensure comfort during the most vulnerable moments of treatment.',
                icon: '/icons/diff-luxury.png',
              },
              {
                title: 'Comprehensive Integration',
                description: '12-month aftercare program with coaching, community support, and continued bio-optimization.',
                icon: '/icons/diff-aftercare.png',
              },
              {
                title: 'Evidence-Based',
                description: 'Protocols developed from the latest clinical research with outcome tracking and continuous improvement.',
                icon: '/icons/diff-evidence.png',
              },
              {
                title: 'Location Advantage',
                description: 'Tulum provides legal treatment access, proximity to US patients, and a healing environment.',
                icon: '/icons/diff-location.png',
              },
            ].map((diff) => (
              <Card key={diff.title} padding="lg" className="group hover:shadow-xl transition-all duration-500 text-center">
                <div className="w-40 h-40 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={diff.icon}
                    alt={diff.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-heading text-neutral-900 mb-2">{diff.title}</h4>
                <p className="text-sm text-neutral-600">{diff.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Capacity & Scaling */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading mb-4">Designed for Scale</h3>
                <p className="text-primary-800 mb-6">
                  Our model is designed to be replicated. Once proven in Tulum, the playbook
                  can be deployed to additional locations, creating a platform for growth.
                </p>
                <div className="space-y-3">
                  {[
                    'Standardized protocols and training programs',
                    'Technology-enabled operations and CRM',
                    'Brand equity driving referrals and premium pricing',
                    'Multi-location operational leverage',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-800" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '30', label: 'Rooms', sublabel: 'Riviera Maya (full build)' },
                  { value: '1,157', label: 'Guests/Year', sublabel: 'At 75% occupancy' },
                  { value: '$16.2M', label: 'Year 5 Revenue', sublabel: 'Base scenario' },
                  { value: '55%', label: 'EBITDA Margin', sublabel: 'At maturity' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="font-heading text-3xl">{stat.value}</p>
                    <p className="font-medium text-sm">{stat.label}</p>
                    <p className="text-xs text-primary-700">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/market" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Market</span>
          </Link>
          <Link href="/expansion">
            <Button variant="primary">
              Expansion Strategy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
