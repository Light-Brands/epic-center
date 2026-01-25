'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield, Award, Users, Building2, Brain, Sparkles, Lock, TrendingUp } from 'lucide-react'
import { Button, Card } from '@/components/ui'

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
  },
]

const BARRIERS_TO_ENTRY = [
  {
    barrier: 'Medical Expertise',
    description: 'Requires physicians experienced in ibogaine administration—a rare specialty.',
    strength: 'High',
  },
  {
    barrier: 'Capital Requirements',
    description: '$19M+ to acquire, renovate, and operate a medical-grade facility.',
    strength: 'High',
  },
  {
    barrier: 'Regulatory Knowledge',
    description: 'Navigating Mexican healthcare regulations and licensing requirements.',
    strength: 'Medium',
  },
  {
    barrier: 'Brand & Reputation',
    description: 'Building trust in a stigmatized industry requires time and track record.',
    strength: 'Medium',
  },
  {
    barrier: 'Referral Networks',
    description: 'Relationships with interventionists, therapists, and physicians.',
    strength: 'High',
  },
]

export default function MoatPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Defensibility
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Why We Win
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Five reinforcing competitive advantages create a defensible market position
            that compounds over time.
          </p>
        </section>

        {/* Main Advantages */}
        <section className="mb-16">
          <div className="space-y-8">
            {COMPETITIVE_ADVANTAGES.map((advantage, index) => (
              <Card key={advantage.id} padding="none" className="overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Left Column - Overview */}
                  <div className={`p-8 ${index % 2 === 0 ? 'bg-primary-800 text-white' : 'bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`font-heading text-5xl ${index % 2 === 0 ? 'text-secondary-400' : 'text-primary-800'}`}>
                        {advantage.number}
                      </span>
                      <advantage.icon className={`w-10 h-10 ${index % 2 === 0 ? 'text-secondary-400' : 'text-primary-800'}`} />
                    </div>
                    <p className={`font-accent text-xs uppercase tracking-widest mb-2 ${index % 2 === 0 ? 'text-primary-300' : 'text-primary-700'}`}>
                      {advantage.subtitle}
                    </p>
                    <h3 className="text-2xl font-heading mb-4">{advantage.title}</h3>
                    <p className={index % 2 === 0 ? 'text-primary-200' : 'text-primary-800'}>
                      {advantage.description}
                    </p>
                  </div>

                  {/* Right Columns - Details */}
                  <div className="lg:col-span-2 p-8 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-4">
                        Our Approach
                      </p>
                      <ul className="space-y-3">
                        {advantage.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-neutral-700">
                            <Shield className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-4">
                        Competitive Gap
                      </p>
                      <p className="text-neutral-600">{advantage.competitors}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Barriers to Entry */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Defensibility
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Barriers to Entry</h3>
            <p className="text-neutral-600 mt-2">
              Significant obstacles prevent easy replication of our model
            </p>
          </div>

          <Card padding="lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {BARRIERS_TO_ENTRY.map((barrier) => (
                <div key={barrier.barrier} className="text-center">
                  <Lock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-medium text-neutral-900 mb-2">{barrier.barrier}</h4>
                  <p className="text-sm text-neutral-600 mb-3">{barrier.description}</p>
                  <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                    barrier.strength === 'High' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                  }`}>
                    {barrier.strength} Barrier
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Moat Flywheel */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-heading mb-4">The Competitive Flywheel</h3>
                <p className="text-primary-200">
                  Our advantages reinforce each other, creating compounding returns that widen our moat over time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: '1',
                    title: 'Superior Outcomes',
                    description: 'Medical protocols + integration = better results',
                    arrow: true,
                  },
                  {
                    step: '2',
                    title: 'Word of Mouth',
                    description: 'Successful guests become advocates',
                    arrow: true,
                  },
                  {
                    step: '3',
                    title: 'Referral Network',
                    description: 'Therapists and physicians recommend us',
                    arrow: true,
                  },
                  {
                    step: '4',
                    title: 'Brand Premium',
                    description: 'Reputation enables premium pricing',
                    arrow: false,
                  },
                ].map((step) => (
                  <div key={step.step} className="relative">
                    <div className="bg-primary-700/50 rounded-xl p-4 text-center h-full">
                      <div className="w-8 h-8 rounded-full bg-secondary-400 text-primary-900 font-heading text-lg flex items-center justify-center mx-auto mb-3">
                        {step.step}
                      </div>
                      <h4 className="font-medium mb-2">{step.title}</h4>
                      <p className="text-sm text-primary-200">{step.description}</p>
                    </div>
                    {step.arrow && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ArrowRight className="w-5 h-5 text-secondary-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-secondary-400 font-medium flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Reinvest in protocols, integration, and capacity
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Competitive Position Summary */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">Sustainable Competitive Position</h3>
              <p className="text-lg text-primary-800 mb-8">
                While the psychedelic therapy space is growing rapidly, we believe our combination
                of medical rigor, comprehensive integration, strategic location, and luxury
                positioning creates a differentiated and defensible market position.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: '5', label: 'Reinforcing Advantages' },
                  { value: '5', label: 'Barriers to Entry' },
                  { value: '1', label: 'Integrated Offering' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4">
                    <p className="font-heading text-4xl mb-1">{stat.value}</p>
                    <p className="text-sm text-primary-800">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/team" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Team</span>
          </Link>
          <Link href="/financials">
            <Button variant="primary">
              View Financials
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
