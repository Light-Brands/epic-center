'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, Users, Globe, Brain, Heart, Pill, DollarSign, Activity } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            The Opportunity
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-neutral-900 mb-6">
            $5.6 Trillion
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            The global cost of mental health disorders creates an unprecedented market opportunity
            for effective, transformational treatment solutions.
          </p>
        </section>

        {/* Market Size Breakdown */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                value: '280M+',
                label: 'Depression Sufferers',
                description: 'People globally affected by depression',
              },
              {
                icon: Heart,
                value: '301M',
                label: 'Anxiety Disorders',
                description: 'Living with anxiety worldwide',
              },
              {
                icon: Pill,
                value: '35M',
                label: 'Substance Use Disorders',
                description: 'Struggling with addiction',
              },
              {
                icon: Users,
                value: '1 in 5',
                label: 'Adults Affected',
                description: 'Experience mental illness annually',
              },
            ].map((stat) => (
              <Card key={stat.label} padding="lg" className="text-center">
                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <p className="font-heading text-4xl text-neutral-900 mb-1">{stat.value}</p>
                <p className="font-accent text-sm text-primary-600 uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-neutral-600">{stat.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* The Crisis */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-4">
                  The Crisis
                </p>
                <h3 className="text-3xl md:text-4xl font-heading mb-6">
                  Traditional Treatment is Failing
                </h3>
                <p className="text-primary-200 text-lg mb-8">
                  Despite billions spent annually on mental health treatment, outcomes remain
                  poor. The system is designed for chronic management, not lasting healing.
                </p>
                <div className="space-y-4">
                  {[
                    { stat: '70%', text: 'of addicts relapse within the first year' },
                    { stat: '50%', text: 'of depression patients don\'t respond to medication' },
                    { stat: '30%', text: 'of PTSD patients show no improvement with CBT' },
                    { stat: '$280B', text: 'spent annually on mental health in the US alone' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <span className="font-heading text-2xl text-secondary-400 w-20 flex-shrink-0">
                        {item.stat}
                      </span>
                      <p className="text-primary-100">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '$5.6T', label: 'Annual Cost', sublabel: 'Global economic burden' },
                  { value: '15%', label: 'Success Rate', sublabel: 'Traditional addiction treatment' },
                  { value: '6.7%', label: 'Market Growth', sublabel: 'Mental health services CAGR' },
                  { value: '$10.75B', label: 'Psychedelic Market', sublabel: 'Projected by 2027' },
                ].map((metric) => (
                  <div key={metric.label} className="bg-primary-700/50 rounded-xl p-6 text-center">
                    <p className="font-heading text-3xl text-secondary-400 mb-1">{metric.value}</p>
                    <p className="font-medium text-white text-sm">{metric.label}</p>
                    <p className="text-xs text-primary-300">{metric.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Psychedelic Therapy Market */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Emerging Solution
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              The Psychedelic Therapy Revolution
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A new paradigm in mental health treatment is emerging, backed by rigorous science
              and regulatory progress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Activity,
                title: 'Clinical Efficacy',
                stats: [
                  '67% remission rate for treatment-resistant depression (psilocybin)',
                  '83% reduction in PTSD symptoms (MDMA-assisted therapy)',
                  '60-80% addiction interruption rate (ibogaine)',
                ],
              },
              {
                icon: Globe,
                title: 'Regulatory Progress',
                stats: [
                  'FDA Breakthrough Therapy designation for psilocybin',
                  'Australia approves MDMA and psilocybin prescribing',
                  'Mexico permits ibogaine treatment',
                ],
              },
              {
                icon: TrendingUp,
                title: 'Market Growth',
                stats: [
                  '$10.75B projected market by 2027',
                  '15%+ CAGR for psychedelic therapy sector',
                  '$2.4B invested in psychedelic companies (2019-2023)',
                ],
              },
            ].map((category) => (
              <Card key={category.title} padding="lg">
                <category.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h4 className="text-xl font-heading text-neutral-900 mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.stats.map((stat, index) => (
                    <li key={index} className="flex items-start gap-2 text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Customer */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card padding="lg">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
                Target Customer
              </p>
              <h3 className="text-2xl font-heading text-neutral-900 mb-6">
                High-Net-Worth Individuals Seeking Transformation
              </h3>
              <p className="text-neutral-600 mb-6">
                Our target demographic has the means to seek the best care, the sophistication
                to understand the science, and the desperation that comes from failed conventional treatments.
              </p>
              <div className="space-y-4">
                {[
                  'Executives burned out from high-pressure careers',
                  'Veterans struggling with treatment-resistant PTSD',
                  'Individuals with addiction who have tried everything else',
                  'Those seeking deep personal transformation and growth',
                  'Family members seeking help for loved ones',
                ].map((profile) => (
                  <div key={profile} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600" />
                    <span className="text-neutral-700">{profile}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding="lg" className="bg-neutral-100">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
                Unit Economics
              </p>
              <h3 className="text-2xl font-heading text-neutral-900 mb-6">
                Premium Pricing Power
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Average Treatment Program', value: '$35,000-$75,000', note: '10-21 day programs' },
                  { label: 'Revenue per Guest', value: '$48,138', note: 'Blended average' },
                  { label: 'Gross Margin per Guest', value: '$35,538', note: '74% gross margin' },
                  { label: 'Customer Acquisition Cost', value: '$2,613', note: 'Blended CAC' },
                  { label: 'LTV:CAC Ratio', value: '13.6x', note: 'Strong unit economics' },
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center pb-4 border-b border-neutral-200 last:border-0">
                    <div>
                      <p className="font-medium text-neutral-900">{metric.label}</p>
                      <p className="text-sm text-neutral-500">{metric.note}</p>
                    </div>
                    <p className="font-heading text-2xl text-primary-800">{metric.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Competitive Landscape</h3>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Competitor Type
                    </th>
                    <th className="text-left py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Examples
                    </th>
                    <th className="text-left py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Strengths
                    </th>
                    <th className="text-left py-4 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Our Advantage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Luxury Rehab Centers',
                      examples: 'Promises, Passages Malibu',
                      strengths: 'Brand recognition, insurance',
                      advantage: 'Ibogaine efficacy, medical-grade protocols',
                    },
                    {
                      type: 'Ayahuasca Retreats',
                      examples: 'Rhythmia, Soltara',
                      strengths: 'Established, spiritual focus',
                      advantage: 'Medical oversight, addiction specialization',
                    },
                    {
                      type: 'Ibogaine Clinics',
                      examples: 'Beond, Clear Sky',
                      strengths: 'Treatment expertise',
                      advantage: 'Luxury experience, integration support',
                    },
                    {
                      type: 'Bio-Optimization Centers',
                      examples: 'Bulletproof, Upgrade Labs',
                      strengths: 'Wellness positioning',
                      advantage: 'Combined modalities, deeper transformation',
                    },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-neutral-100">
                      <td className="py-4 pr-4 font-medium text-neutral-900">{row.type}</td>
                      <td className="py-4 px-4 text-neutral-600">{row.examples}</td>
                      <td className="py-4 px-4 text-neutral-600">{row.strengths}</td>
                      <td className="py-4 pl-4 text-primary-600 font-medium">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Market Timing */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">Why Now?</h3>
              <p className="text-lg text-primary-800 mb-8">
                We are at an inflection point where scientific validation, regulatory progress,
                and cultural acceptance converge to create a once-in-a-generation opportunity.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Science', description: 'Decades of research validating psychedelic therapy' },
                  { title: 'Regulation', description: 'Global momentum toward legal access' },
                  { title: 'Demand', description: 'Failed conventional treatments driving alternatives' },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-heading text-xl mb-2">{pillar.title}</h4>
                    <p className="text-sm text-primary-800">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Vision</span>
          </Link>
          <Link href="/model">
            <Button variant="primary">
              Our Model
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
