'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronDown, AlertTriangle, Shield, Scale, Building2, Users, Globe, Activity, DollarSign } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

interface Risk {
  id: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  severity: 'High' | 'Medium' | 'Low'
  likelihood: 'High' | 'Medium' | 'Low'
  title: string
  description: string
  mitigations: string[]
}

const RISKS: Risk[] = [
  {
    id: 'regulatory',
    category: 'Regulatory',
    icon: Scale,
    severity: 'High',
    likelihood: 'Low',
    title: 'Regulatory Changes in Mexico',
    description: 'Changes to Mexican law regarding ibogaine or psychedelic substances could impact operations. While currently legal and unregulated, regulatory frameworks could change.',
    mitigations: [
      'Operating under medical supervision with full physician oversight',
      'Building relationships with Mexican health authorities',
      'Maintaining multiple location options for regulatory diversification',
      'Legal counsel monitoring regulatory developments',
      'Following best practices that would meet any reasonable regulatory framework',
    ],
  },
  {
    id: 'medical',
    category: 'Medical',
    icon: Activity,
    severity: 'High',
    likelihood: 'Low',
    title: 'Adverse Medical Events',
    description: 'Ibogaine carries inherent cardiac risks. While rare with proper screening, serious adverse events could occur despite best practices.',
    mitigations: [
      'Comprehensive cardiac screening (EKG, bloodwork) before treatment',
      'Continuous cardiac monitoring during treatment',
      '24/7 physician and nursing supervision',
      'Emergency protocols and equipment on-site',
      'Strict exclusion criteria for high-risk patients',
      'Medical malpractice insurance coverage',
    ],
  },
  {
    id: 'reputation',
    category: 'Reputation',
    icon: Shield,
    severity: 'High',
    likelihood: 'Medium',
    title: 'Reputational Risk',
    description: 'Negative media coverage, patient complaints, or association with the broader "underground" psychedelic scene could damage brand and referral pipeline.',
    mitigations: [
      'Medical-grade positioning differentiating from retreat centers',
      'Rigorous patient selection and expectation setting',
      'Comprehensive consent and disclosure process',
      'Proactive PR and thought leadership strategy',
      'Building relationships with respected researchers and institutions',
    ],
  },
  {
    id: 'competition',
    category: 'Competition',
    icon: Users,
    severity: 'Medium',
    likelihood: 'High',
    title: 'Competitive Pressure',
    description: 'Increased competition from new entrants, established rehab centers adding psychedelic offerings, or US legalization reducing medical tourism demand.',
    mitigations: [
      'First-mover advantage in medical-grade positioning',
      'Building brand equity and referral relationships',
      'Proprietary protocols and integration methodology',
      'Location in established wellness destination',
      'Expansion optionality to maintain market position',
    ],
  },
  {
    id: 'execution',
    category: 'Execution',
    icon: Building2,
    severity: 'Medium',
    likelihood: 'Medium',
    title: 'Operational Execution',
    description: 'Challenges in property acquisition, renovation, staffing, or achieving target occupancy could delay break-even or reduce returns.',
    mitigations: [
      'Experienced real estate partners in Tulum',
      'Conservative renovation budget with contingency',
      'Phased ramp-up plan with realistic occupancy targets',
      'Multiple property options under evaluation',
      'Experienced hospitality operators as advisors',
    ],
  },
  {
    id: 'key-person',
    category: 'Key Person',
    icon: Users,
    severity: 'Medium',
    likelihood: 'Medium',
    title: 'Key Person Dependency',
    description: 'Heavy reliance on founder and key medical staff. Loss of critical personnel could impact operations and investor confidence.',
    mitigations: [
      'Building deep bench of qualified medical professionals',
      'Documented protocols and operating procedures',
      'Key person insurance on critical roles',
      'Equity incentives for key hires',
      'Advisory board providing strategic backup',
    ],
  },
  {
    id: 'market',
    category: 'Market',
    icon: Globe,
    severity: 'Medium',
    likelihood: 'Low',
    title: 'Market Demand Shifts',
    description: 'Economic downturn affecting HNW spending, changes in insurance coverage, or shifts in mental health treatment preferences could reduce demand.',
    mitigations: [
      'Multiple customer segments (addiction, depression, optimization)',
      'Premium positioning less sensitive to economic cycles',
      'Building recurring revenue through integration services',
      'Diversified referral channels',
      'Flexible pricing and program options',
    ],
  },
  {
    id: 'financial',
    category: 'Financial',
    icon: DollarSign,
    severity: 'Medium',
    likelihood: 'Low',
    title: 'Capital Requirements',
    description: 'Cost overruns, slower-than-expected ramp-up, or unforeseen expenses could require additional capital beyond initial raise.',
    mitigations: [
      'Conservative financial projections with sensitivity analysis',
      '15% contingency built into budget',
      'Phased investment approach',
      'Operating reserve requirements',
      'Clear milestone-based capital deployment',
    ],
  },
]

function RiskCard({ risk }: { risk: Risk }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const severityColor = {
    High: 'bg-error-100 text-error-700',
    Medium: 'bg-warning-100 text-warning-700',
    Low: 'bg-success-100 text-success-700',
  }

  return (
    <Card padding="none" className="overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
            <risk.icon className="w-5 h-5 text-primary-600" />
          </div>
          <div className="text-left">
            <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
              {risk.category}
            </p>
            <h4 className="font-medium text-neutral-900">{risk.title}</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${severityColor[risk.severity]}`}>
              Severity: {risk.severity}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${severityColor[risk.likelihood]}`}>
              Likelihood: {risk.likelihood}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-neutral-100">
          <div className="sm:hidden flex gap-2 mt-4 mb-4">
            <span className={`px-2 py-1 rounded text-xs font-medium ${severityColor[risk.severity]}`}>
              Severity: {risk.severity}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${severityColor[risk.likelihood]}`}>
              Likelihood: {risk.likelihood}
            </span>
          </div>

          <p className="text-neutral-600 mt-4 mb-6">{risk.description}</p>

          <div>
            <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-3">
              Mitigation Strategies
            </p>
            <ul className="space-y-2">
              {risk.mitigations.map((mitigation, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-700">
                  <Shield className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                  <span>{mitigation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}

export default function RisksPage() {
  const highRisks = RISKS.filter((r) => r.severity === 'High')
  const mediumRisks = RISKS.filter((r) => r.severity === 'Medium')

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Transparency
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Risk Factors & Mitigations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every investment carries risk. We believe in full transparency about the
            challenges we face and our strategies to address them.
          </p>
        </section>

        {/* Risk Summary */}
        <section className="mb-12">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-full bg-error-500/20 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-error-400" />
                </div>
                <p className="font-heading text-3xl mb-1">{highRisks.length}</p>
                <p className="text-sm text-primary-200">High Severity Risks</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-warning-500/20 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-warning-400" />
                </div>
                <p className="font-heading text-3xl mb-1">{mediumRisks.length}</p>
                <p className="text-sm text-primary-200">Medium Severity Risks</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-success-500/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-success-400" />
                </div>
                <p className="font-heading text-3xl mb-1">{RISKS.reduce((acc, r) => acc + r.mitigations.length, 0)}</p>
                <p className="text-sm text-primary-200">Mitigation Strategies</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-secondary-400/20 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-secondary-400" />
                </div>
                <p className="font-heading text-3xl mb-1">Active</p>
                <p className="text-sm text-primary-200">Risk Monitoring</p>
              </div>
            </div>
          </Card>
        </section>

        {/* High Severity Risks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-error-500" />
            <h3 className="text-2xl font-heading text-neutral-900">High Severity Risks</h3>
          </div>
          <div className="space-y-4">
            {highRisks.map((risk) => (
              <RiskCard key={risk.id} risk={risk} />
            ))}
          </div>
        </section>

        {/* Medium Severity Risks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-warning-500" />
            <h3 className="text-2xl font-heading text-neutral-900">Medium Severity Risks</h3>
          </div>
          <div className="space-y-4">
            {mediumRisks.map((risk) => (
              <RiskCard key={risk.id} risk={risk} />
            ))}
          </div>
        </section>

        {/* Risk Philosophy */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-heading mb-6">Our Approach to Risk</h3>
              <p className="text-lg text-primary-800 mb-8">
                We don't avoid risk—we manage it. Every significant risk has been identified,
                analyzed, and addressed with specific mitigation strategies. We continuously
                monitor and adapt our approach as conditions evolve.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  {
                    title: 'Identify',
                    description: 'Comprehensive risk assessment across all operational areas',
                  },
                  {
                    title: 'Mitigate',
                    description: 'Proactive strategies to reduce likelihood and impact',
                  },
                  {
                    title: 'Monitor',
                    description: 'Ongoing tracking and adjustment of risk management',
                  },
                ].map((step) => (
                  <div key={step.title} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-heading text-xl mb-2">{step.title}</h4>
                    <p className="text-sm text-primary-800">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/returns" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Returns</span>
          </Link>
          <Link href="/timeline">
            <Button variant="primary">
              Timeline
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
