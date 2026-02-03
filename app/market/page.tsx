'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            The Opportunity
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-neutral-900 mb-6">
            ~$5 Trillion
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-4">
            The global economic burden of mental health disorders creates an unprecedented market
            opportunity for effective, transformational treatment solutions.
          </p>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9526145/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 transition-colors"
          >
            Source: Arias, Saxena &amp; Verguet, The Lancet eClinicalMedicine (2022)
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                value: '$1T',
                label: 'Depression & Anxiety',
                description: 'Annual lost productivity from depression and anxiety alone',
                source: 'WHO, 2024',
                href: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work',
              },
              {
                value: '$740B+',
                label: 'Substance Use Disorders',
                description: 'Annual economic cost in the US alone from alcohol, drugs, and tobacco',
                source: 'NIDA / Georgetown HPI',
                href: 'https://hpi.georgetown.edu/abuse/',
              },
              {
                value: '$16T',
                label: 'Projected by 2030',
                description: 'Cumulative global economic impact of mental disorders by 2030',
                source: 'Lancet Commission',
                href: 'https://www.psychiatrictimes.com/view/mental-illness-will-cost-world-16-usd-trillion-2030',
              },
            ].map((item) => (
              <Card key={item.label} padding="lg" className="text-center">
                <p className="font-heading text-4xl text-neutral-900 mb-1">{item.value}</p>
                <p className="font-accent text-sm text-primary-600 uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-600 mb-3">{item.description}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-primary-600 transition-colors"
                >
                  {item.source}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Market Size Breakdown */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '/icons/market-depression.png',
                value: '280M+',
                label: 'Depression Sufferers',
                description: 'People globally affected by depression',
              },
              {
                icon: '/icons/market-anxiety.png',
                value: '301M',
                label: 'Anxiety Disorders',
                description: 'Living with anxiety worldwide',
              },
              {
                icon: '/icons/market-addiction.png',
                value: '35M',
                label: 'Substance Use Disorders',
                description: 'Struggling with addiction',
              },
              {
                icon: '/icons/market-affected.png',
                value: '1 in 5',
                label: 'Adults Affected',
                description: 'Experience mental illness annually',
              },
            ].map((stat) => (
              <Card key={stat.label} padding="lg" className="text-center group hover:shadow-xl transition-all duration-500">
                <div className="w-28 h-28 mx-auto mb-4 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
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
                  { value: '~$5T', label: 'Annual Cost', sublabel: 'Global economic burden' },
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
                icon: '/icons/market-efficacy.png',
                title: 'Clinical Efficacy',
                stats: [
                  '67% remission rate for treatment-resistant depression (psilocybin)',
                  '83% reduction in PTSD symptoms (MDMA-assisted therapy)',
                  '60-80% addiction interruption rate (ibogaine)',
                ],
              },
              {
                icon: '/icons/market-regulatory.png',
                title: 'Regulatory Progress',
                stats: [
                  'FDA Breakthrough Therapy designation for psilocybin',
                  'Australia approves MDMA and psilocybin prescribing',
                  'Mexico permits ibogaine treatment',
                ],
              },
              {
                icon: '/icons/market-growth.png',
                title: 'Market Growth',
                stats: [
                  '$10.75B projected market by 2027',
                  '15%+ CAGR for psychedelic therapy sector',
                  '$2.4B invested in psychedelic companies (2019-2023)',
                ],
              },
            ].map((category) => (
              <Card key={category.title} padding="lg" className="group hover:shadow-xl transition-all duration-500">
                <div className="w-28 h-28 mb-4 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
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
                  { label: 'Average Treatment Program', value: '$14,000-$56,000', note: '7-28 day programs' },
                  { label: 'Revenue per Guest', value: '$26,600', note: 'Weighted average (13-day stay)' },
                  { label: 'Gross Margin per Guest', value: '$21,971', note: '83% gross margin' },
                  { label: 'Customer Acquisition Cost', value: '$2,613', note: 'Blended CAC' },
                  { label: 'LTV:CAC Ratio', value: '13.0x', note: 'Strong unit economics' },
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
      <Footer />
    </div>
  )
}
