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
        {/* Hero — Global Wellness Economy */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            The Opportunity
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-neutral-900 mb-6">
            $6.9 Trillion
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-4">
            The global wellness economy is one of the world&rsquo;s largest and fastest-growing
            markets &mdash; and The Experiential sits at the intersection of its highest-growth sectors.
          </p>
          <p className="text-sm text-neutral-400">
            Source: Global Wellness Institute, 2024 &middot; CAGR figures: 2019&ndash;2024 (past) &amp; 2024&ndash;2029 (future)
          </p>
        </section>

        {/* ── GWE Sector Breakdown ── */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Where the Growth Is
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Wellness Economy by Sector
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Across eleven sectors totaling $6.9&nbsp;trillion, the wellness economy is
              accelerating &mdash; with several of TE&rsquo;s core sectors leading the charge.
            </p>
          </div>

          {/* Explosive Growth Sectors */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary-300" />
              <h4 className="font-accent text-xs uppercase tracking-widest text-secondary-600 whitespace-nowrap">
                Explosive Growth Sectors
              </h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary-300" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Wellness Real Estate', size: '$548.4B', pastCagr: '19.5%', futureCagr: '15.2%', accelerating: false, teRelevant: false },
                { name: 'Mental Wellness', size: '$268.3B', pastCagr: '12.4%', futureCagr: '10.1%', accelerating: false, teRelevant: true },
              ].map((sector) => (
                <Card key={sector.name} padding="lg" className={`text-center relative overflow-hidden ${sector.teRelevant ? 'ring-2 ring-primary-300' : ''}`}>
                  {sector.teRelevant && (
                    <span className="absolute top-3 right-3 font-accent text-[10px] uppercase tracking-widest bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                      TE Sector
                    </span>
                  )}
                  <p className="font-heading text-4xl md:text-5xl text-neutral-900 mb-2">{sector.size}</p>
                  <p className="font-accent text-sm text-primary-600 uppercase tracking-wide mb-4">{sector.name}</p>
                  <div className="flex justify-center gap-8">
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Past</p>
                      <p className="font-heading text-xl text-neutral-700">{sector.pastCagr}</p>
                    </div>
                    <div className="w-px bg-neutral-200" />
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Future</p>
                      <p className="font-heading text-xl text-neutral-700">{sector.futureCagr}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Mature & Steady Growth Sectors */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-200" />
              <h4 className="font-accent text-xs uppercase tracking-widest text-primary-600 whitespace-nowrap">
                Mature &amp; Steady Growth Sectors
              </h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-200" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Physical Activity', size: '$1,143.9B', pastCagr: '4.6%', futureCagr: '5.1%', accelerating: true, teRelevant: false },
                { name: 'Personal Care & Beauty', size: '$1,350.0B', pastCagr: '4.8%', futureCagr: '4.8%', accelerating: false, teRelevant: false },
                { name: 'Healthy Eating, Nutrition & Weight Loss', size: '$1,148.0B', pastCagr: '4.7%', futureCagr: '7.1%', accelerating: true, teRelevant: false },
                { name: 'Traditional & Complementary Medicine', size: '$605.6B', pastCagr: '4.6%', futureCagr: '10.8%', accelerating: true, teRelevant: true },
              ].map((sector) => (
                <Card key={sector.name} padding="md" className={`text-center relative overflow-hidden ${sector.teRelevant ? 'ring-2 ring-primary-300' : ''}`}>
                  {sector.teRelevant && (
                    <span className="absolute top-3 right-3 font-accent text-[10px] uppercase tracking-widest bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                      TE Sector
                    </span>
                  )}
                  <p className="font-heading text-2xl md:text-3xl text-neutral-900 mb-1">{sector.size}</p>
                  <p className="font-accent text-xs text-primary-600 uppercase tracking-wide mb-3 leading-tight min-h-[2rem] flex items-center justify-center">{sector.name}</p>
                  <div className="flex justify-between text-center px-2">
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Past</p>
                      <p className="font-medium text-neutral-700">{sector.pastCagr}</p>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 text-neutral-300" />
                    </div>
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Future</p>
                      <p className={`font-medium ${sector.accelerating ? 'text-primary-600' : 'text-neutral-700'}`}>{sector.futureCagr}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tourism-Based Sectors */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-200" />
              <h4 className="font-accent text-xs uppercase tracking-widest text-accent-600 whitespace-nowrap">
                Tourism-Based Sectors
              </h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-200" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Wellness Tourism', size: '$893.9B', pastCagr: '6.4%', futureCagr: '9.1%', accelerating: true, teRelevant: true },
                { name: 'Spas', size: '$157.4B', pastCagr: '6.2%', futureCagr: '7.7%', accelerating: true, teRelevant: true },
                { name: 'Thermal / Mineral Springs', size: '$71.7B', pastCagr: '1.7%', futureCagr: '10.0%', accelerating: true, teRelevant: false },
              ].map((sector) => (
                <Card key={sector.name} padding="md" className={`text-center relative overflow-hidden ${sector.teRelevant ? 'ring-2 ring-primary-300' : ''}`}>
                  {sector.teRelevant && (
                    <span className="absolute top-3 right-3 font-accent text-[10px] uppercase tracking-widest bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                      TE Sector
                    </span>
                  )}
                  <p className="font-heading text-2xl md:text-3xl text-neutral-900 mb-1">{sector.size}</p>
                  <p className="font-accent text-xs text-primary-600 uppercase tracking-wide mb-3">{sector.name}</p>
                  <div className="flex justify-between text-center px-2">
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Past</p>
                      <p className="font-medium text-neutral-700">{sector.pastCagr}</p>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 text-neutral-300" />
                    </div>
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Future</p>
                      <p className={`font-medium ${sector.accelerating ? 'text-primary-600' : 'text-neutral-700'}`}>{sector.futureCagr}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Public/Private Policy-Based Sectors */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-200" />
              <h4 className="font-accent text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                Public / Private Policy-Based Sectors
              </h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-200" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { name: 'Public Health, Prevention & Personal Medicine', size: '$675.9B', pastCagr: '8.6%', futureCagr: '4.7%', accelerating: false },
                { name: 'Workplace Wellness', size: '$53.3B', pastCagr: '0.7%', futureCagr: '2.2%', accelerating: true },
              ].map((sector) => (
                <Card key={sector.name} padding="md" className="text-center">
                  <p className="font-heading text-2xl md:text-3xl text-neutral-900 mb-1">{sector.size}</p>
                  <p className="font-accent text-xs text-primary-600 uppercase tracking-wide mb-3 leading-tight">{sector.name}</p>
                  <div className="flex justify-between text-center px-2">
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Past</p>
                      <p className="font-medium text-neutral-700">{sector.pastCagr}</p>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-3 h-3 text-neutral-300" />
                    </div>
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Future</p>
                      <p className={`font-medium ${sector.accelerating ? 'text-primary-600' : 'text-neutral-700'}`}>{sector.futureCagr}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── TE Addressable Market ── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-4">
                Our Addressable Sectors
              </p>
              <h4 className="text-2xl md:text-3xl font-heading mb-6">
                The Experiential operates at the intersection of four high-growth wellness sectors
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Mental Wellness', size: '$268.3B', cagr: '10.1%' },
                  { name: 'Wellness Tourism', size: '$893.9B', cagr: '9.1%' },
                  { name: 'Traditional & Complementary Medicine', size: '$605.6B', cagr: '10.8%' },
                  { name: 'Spas', size: '$157.4B', cagr: '7.7%' },
                ].map((sector) => (
                  <div key={sector.name} className="bg-primary-700/50 rounded-xl p-4">
                    <p className="font-heading text-2xl text-secondary-400 mb-1">{sector.size}</p>
                    <p className="text-sm text-white font-medium mb-1">{sector.name}</p>
                    <p className="text-xs text-primary-300">{sector.cagr} CAGR</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary-700">
                <p className="font-heading text-4xl text-secondary-400">$1.93T</p>
                <p className="text-sm text-primary-200 mt-1">Combined addressable market across TE&rsquo;s four core wellness sectors</p>
              </div>
            </div>
          </Card>
        </section>

        {/* ── The Unmet Need ── */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              The Unmet Need
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Mental Wellness: The Largest Gap in a $6.9T Economy
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Within the global wellness economy, mental health represents the most underserved
              category &mdash; a ~$5&nbsp;trillion economic burden driven by treatments that consistently
              fail to deliver lasting results.
            </p>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9526145/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 transition-colors mt-3"
            >
              Source: Arias, Saxena &amp; Verguet, The Lancet eClinicalMedicine (2022)
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Scale of the problem */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: '/icons/market-depression.png',
                value: '280M+',
                label: 'Depression',
                description: 'People globally affected',
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

          {/* Treatment failure + economic cost */}
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl md:text-3xl font-heading mb-4">
                  Traditional Treatment is Failing
                </h4>
                <p className="text-primary-200 text-lg mb-8">
                  Despite $280B spent annually on mental health in the US alone, outcomes remain
                  poor. The system is designed for chronic management, not lasting healing &mdash;
                  creating massive white space within the wellness economy.
                </p>
                <div className="space-y-4">
                  {[
                    { stat: '70%', text: 'of addicts relapse within the first year' },
                    { stat: '50%', text: 'of depression patients don\'t respond to medication' },
                    { stat: '30%', text: 'of PTSD patients show no improvement with CBT' },
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
                  { value: '~$5T', label: 'Economic Burden', sublabel: 'Annual global cost of mental health disorders' },
                  { value: '$1T', label: 'Lost Productivity', sublabel: 'Depression & anxiety alone (WHO)' },
                  { value: '$16T', label: 'Projected by 2030', sublabel: 'Cumulative global impact' },
                  { value: '6.7%', label: 'Market Growth', sublabel: 'Mental health services CAGR' },
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

        {/* ── Emerging Solution ── */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Emerging Solution
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Psychedelic-Assisted Therapy
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Where traditional treatment fails, a new clinical paradigm is emerging within the
              wellness economy &mdash; backed by rigorous science, growing regulatory acceptance,
              and a rapidly expanding market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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

        {/* ── Target Customer ── */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Target Customer
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              The UHNW Wellness Consumer
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our guests are already spending within the wellness economy. They have the means
              to seek the best care, the sophistication to understand the science, and the
              urgency that comes from failed conventional treatments.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card padding="lg">
              <h4 className="text-xl font-heading text-neutral-900 mb-6">
                Profile
              </h4>
              <p className="text-neutral-600 mb-6">
                High-functioning executives and entrepreneurs, ages 40&ndash;55, with $10M+ net
                worth &mdash; seeking transformation beyond what luxury rehab and traditional
                wellness retreats can offer.
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
              <h4 className="text-xl font-heading text-neutral-900 mb-6">
                Unit Economics
              </h4>
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

        {/* ── Competitive Landscape ── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Competitive Landscape
            </p>
            <h3 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">
              Where We Fit
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Existing players address parts of the wellness economy, but none integrate
              medical-grade treatment, luxury hospitality, and emerging modalities into a
              single destination.
            </p>
          </div>
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

        {/* ── Why Now ── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">Why Now?</h3>
              <p className="text-lg text-primary-800 mb-8">
                The $6.9T wellness economy is accelerating, traditional mental health treatment
                is failing, and scientific breakthroughs are creating a once-in-a-generation
                convergence.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Science', description: 'Decades of research validating psychedelic-assisted therapy with 60-83% efficacy rates' },
                  { title: 'Regulation', description: 'Global momentum toward legal access — Australia, Mexico, and FDA breakthrough designations' },
                  { title: 'Demand', description: 'A $1.93T addressable market with failed conventional treatments driving consumers to seek alternatives' },
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
