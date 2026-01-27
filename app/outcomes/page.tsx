'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Heart, Brain, Activity, Users, TrendingUp, Star, Quote } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const TREATMENT_OUTCOMES = [
  {
    condition: 'Opioid Addiction',
    treatment: 'Ibogaine Protocol',
    successRate: '60-80%',
    metric: 'Addiction Interruption',
    source: 'Brown & Alper, 2018',
    description: 'Single ibogaine treatment eliminates acute withdrawal symptoms and interrupts addiction patterns in the majority of patients.',
  },
  {
    condition: 'Treatment-Resistant Depression',
    treatment: 'Psilocybin Therapy',
    successRate: '67%',
    metric: 'Remission at 3 Weeks',
    source: 'COMPASS Pathways, 2022',
    description: 'Patients who had not responded to multiple antidepressants showed significant improvement after psilocybin treatment.',
  },
  {
    condition: 'PTSD',
    treatment: 'MDMA-Assisted Therapy',
    successRate: '67%',
    metric: 'No Longer Meet Diagnosis',
    source: 'MAPS Phase 3, 2021',
    description: 'Two-thirds of treatment-resistant PTSD patients no longer met diagnostic criteria after MDMA-assisted therapy.',
  },
  {
    condition: 'Alcohol Use Disorder',
    treatment: 'Psilocybin Therapy',
    successRate: '83%',
    metric: 'Reduction in Heavy Drinking',
    source: 'Bogenschutz et al., 2022',
    description: 'Participants showed an 83% reduction in heavy drinking days compared to 51% in placebo group.',
  },
]

const TESTIMONIALS = [
  {
    quote: "After 15 years of opioid addiction and countless failed rehabs, one ibogaine treatment gave me my life back. I've been clean for 3 years now.",
    attribution: "Former Patient, Opioid Addiction",
    outcome: "3 Years Clean",
  },
  {
    quote: "I tried every antidepressant on the market. Nothing worked. One psilocybin session did more than a decade of pharmaceuticals.",
    attribution: "Former Patient, Treatment-Resistant Depression",
    outcome: "In Remission",
  },
  {
    quote: "As a combat veteran, I thought PTSD was my life sentence. This treatment gave me peace I didn't know was possible.",
    attribution: "Former Patient, PTSD",
    outcome: "Symptom-Free",
  },
]

const OUTCOME_TRACKING = [
  { metric: 'PHQ-9 (Depression)', baseline: 'Pre-treatment', followUp: '3, 6, 12 months' },
  { metric: 'GAD-7 (Anxiety)', baseline: 'Pre-treatment', followUp: '3, 6, 12 months' },
  { metric: 'PCL-5 (PTSD)', baseline: 'Pre-treatment', followUp: '3, 6, 12 months' },
  { metric: 'AUDIT (Alcohol)', baseline: 'Pre-treatment', followUp: '3, 6, 12 months' },
  { metric: 'Quality of Life (WHO-5)', baseline: 'Pre-treatment', followUp: '3, 6, 12 months' },
  { metric: 'MEQ30 (Mystical Experience)', baseline: 'Post-session', followUp: 'N/A' },
]

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Evidence Base
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Clinical Outcomes
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our protocols are based on decades of clinical research demonstrating
            remarkable efficacy for treatment-resistant conditions.
          </p>
        </section>

        {/* Key Outcomes Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '60-80%', label: 'Addiction Interruption', sublabel: 'Ibogaine for opioids' },
              { value: '67%', label: 'Depression Remission', sublabel: 'Psilocybin therapy' },
              { value: '67%', label: 'PTSD Resolution', sublabel: 'MDMA-assisted' },
              { value: '83%', label: 'Reduced Heavy Drinking', sublabel: 'Psilocybin therapy' },
            ].map((stat) => (
              <Card key={stat.label} padding="lg" className="text-center">
                <p className="font-heading text-4xl text-primary-600 mb-2">{stat.value}</p>
                <p className="font-medium text-neutral-900 mb-1">{stat.label}</p>
                <p className="text-sm text-neutral-500">{stat.sublabel}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Treatment Outcomes Detail */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Research-Backed Outcomes</h3>
          <div className="space-y-6">
            {TREATMENT_OUTCOMES.map((outcome) => (
              <Card key={outcome.condition} padding="lg">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Condition
                    </p>
                    <h4 className="text-lg font-medium text-neutral-900">{outcome.condition}</h4>
                    <p className="text-sm text-primary-600">{outcome.treatment}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Success Rate
                    </p>
                    <p className="font-heading text-3xl text-success-600">{outcome.successRate}</p>
                    <p className="text-sm text-neutral-500">{outcome.metric}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Evidence
                    </p>
                    <p className="text-neutral-600 mb-2">{outcome.description}</p>
                    <p className="text-xs text-neutral-400">Source: {outcome.source}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800">
            <h3 className="text-2xl font-heading text-center text-white mb-8">Patient Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="bg-primary-700/50 rounded-xl p-6">
                  <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                  <p className="text-primary-100 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-primary-600">
                    <p className="text-sm text-primary-100">{testimonial.attribution}</p>
                    <p className="text-sm font-medium text-secondary-400">{testimonial.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-primary-200 mt-8 text-sm">
              * Testimonials represent individual experiences. Results vary by patient.
            </p>
          </Card>
        </section>

        {/* Our Outcome Tracking */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading text-neutral-900 mb-6">Our Outcome Tracking</h3>
              <p className="text-neutral-600 mb-6">
                We use validated clinical instruments to measure outcomes at baseline
                and follow-up intervals, enabling continuous protocol improvement.
              </p>
              <Card padding="md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">
                        Instrument
                      </th>
                      <th className="text-left py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">
                        Baseline
                      </th>
                      <th className="text-left py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">
                        Follow-Up
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {OUTCOME_TRACKING.map((item) => (
                      <tr key={item.metric} className="border-b border-neutral-100">
                        <td className="py-3 font-medium text-neutral-900">{item.metric}</td>
                        <td className="py-3 text-neutral-600">{item.baseline}</td>
                        <td className="py-3 text-neutral-600">{item.followUp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>

            <Card padding="lg" className="bg-neutral-100">
              <h4 className="text-xl font-heading text-neutral-900 mb-6">Integration Success Factors</h4>
              <div className="space-y-4">
                {[
                  { factor: 'Pre-treatment preparation', impact: 'High', description: 'Proper intention setting and psychological readiness' },
                  { factor: 'Medical screening', impact: 'Critical', description: 'Identifying contraindications and risk factors' },
                  { factor: 'Set and setting', impact: 'High', description: 'Optimal environment for therapeutic experience' },
                  { factor: 'Integration support', impact: 'High', description: 'Post-treatment coaching and community' },
                  { factor: 'Lifestyle changes', impact: 'Medium', description: 'Nutrition, exercise, and sleep optimization' },
                ].map((item) => (
                  <div key={item.factor} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      item.impact === 'Critical' ? 'bg-error-500' :
                      item.impact === 'High' ? 'bg-success-500' : 'bg-warning-500'
                    }`} />
                    <div>
                      <p className="font-medium text-neutral-900">{item.factor}</p>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Research Commitment */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-3xl mx-auto">
              <Activity className="w-12 h-12 mx-auto mb-4 text-primary-800" />
              <h3 className="text-3xl font-heading mb-4">Commitment to Research</h3>
              <p className="text-lg text-primary-800 mb-6">
                We are committed to contributing to the growing body of evidence on
                psychedelic therapy. Our outcome data will support the broader movement
                toward mainstream acceptance and accessibility.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Data Collection', description: 'Standardized instruments at all touchpoints' },
                  { title: 'Analysis', description: 'Regular outcome analysis and protocol refinement' },
                  { title: 'Publication', description: 'Contributing to peer-reviewed research' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-primary-800">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/legal" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Legal</span>
          </Link>
          <Link href="/data-room">
            <Button variant="primary">
              Data Room
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
