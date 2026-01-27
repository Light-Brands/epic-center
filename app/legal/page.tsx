'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Scale, Building2, FileText, Shield, Globe, Users, CheckCircle2 } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const LEGAL_STRUCTURE = {
  holding: {
    name: 'Transformational Epicenter Holdings, LLC',
    jurisdiction: 'Delaware, USA',
    purpose: 'Parent holding company for all subsidiaries',
  },
  operating: {
    name: 'TE Operations Mexico, S.A. de C.V.',
    jurisdiction: 'Mexico',
    purpose: 'Operating entity for Mexican medical facility',
  },
  real_estate: {
    name: 'TE Real Estate Mexico, S.A. de C.V.',
    jurisdiction: 'Mexico',
    purpose: 'Real estate holding through fideicomiso (trust)',
  },
}

const REGULATORY_COMPLIANCE = [
  {
    area: 'Mexican Healthcare Regulations',
    status: 'In Progress',
    details: 'Working with legal counsel to navigate COFEPRIS requirements and medical facility licensing.',
  },
  {
    area: 'Real Estate (Restricted Zone)',
    status: 'Planned',
    details: 'Fideicomiso structure for foreign ownership within restricted coastal zone.',
  },
  {
    area: 'Corporate Structure',
    status: 'Planned',
    details: 'Delaware holding company with Mexican operating subsidiaries.',
  },
  {
    area: 'Tax Optimization',
    status: 'Planned',
    details: 'Working with international tax advisors on optimal structure.',
  },
  {
    area: 'Employment Law',
    status: 'Planned',
    details: 'Compliance with Mexican labor law for all employees.',
  },
]

const INVESTOR_RIGHTS = [
  {
    right: 'Board Representation',
    description: 'Lead investors receive board seats proportional to ownership',
  },
  {
    right: 'Information Rights',
    description: 'Quarterly financial reporting and annual audited statements',
  },
  {
    right: 'Pro-Rata Rights',
    description: 'Right to participate in future financing rounds',
  },
  {
    right: 'Tag-Along Rights',
    description: 'Participate pro-rata in any sale transaction',
  },
  {
    right: 'Anti-Dilution Protection',
    description: 'Weighted-average anti-dilution for down rounds',
  },
  {
    right: 'Exit Rights',
    description: 'Drag-along provisions for clean exits above threshold',
  },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Governance
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Legal & Corporate Structure
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A carefully designed corporate structure that protects investors, enables
            efficient operations, and ensures regulatory compliance across jurisdictions.
          </p>
        </section>

        {/* Corporate Structure */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Corporate Structure</h3>
          <Card padding="lg">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(LEGAL_STRUCTURE).map(([key, entity]) => (
                <div key={key} className="text-center p-6 bg-neutral-50 rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    {key === 'holding' ? (
                      <Building2 className="w-7 h-7 text-primary-600" />
                    ) : key === 'operating' ? (
                      <Users className="w-7 h-7 text-primary-600" />
                    ) : (
                      <Globe className="w-7 h-7 text-primary-600" />
                    )}
                  </div>
                  <h4 className="font-medium text-neutral-900 mb-2">{entity.name}</h4>
                  <p className="text-sm text-primary-600 font-accent uppercase tracking-wide mb-2">
                    {entity.jurisdiction}
                  </p>
                  <p className="text-sm text-neutral-600">{entity.purpose}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="flex items-center justify-center gap-4 text-neutral-400">
                <div className="w-32 h-0.5 bg-neutral-200" />
                <span className="text-sm">Ownership Flow</span>
                <div className="w-32 h-0.5 bg-neutral-200" />
              </div>
              <p className="text-center text-neutral-600 mt-4">
                US investors → Delaware Holding → Mexican Operating Entities
              </p>
            </div>
          </Card>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Regulatory Compliance</h3>
          <div className="space-y-4">
            {REGULATORY_COMPLIANCE.map((item) => (
              <Card key={item.area} padding="md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Scale className="w-6 h-6 text-primary-600" />
                    <div>
                      <h4 className="font-medium text-neutral-900">{item.area}</h4>
                      <p className="text-sm text-neutral-600">{item.details}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Complete' ? 'bg-success-100 text-success-700' :
                    item.status === 'In Progress' ? 'bg-warning-100 text-warning-700' :
                    'bg-neutral-100 text-neutral-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Investor Rights */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Investor Rights & Protections</h3>
          <Card padding="lg">
            <div className="grid md:grid-cols-2 gap-6">
              {INVESTOR_RIGHTS.map((right) => (
                <div key={right.right} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">{right.right}</h4>
                    <p className="text-sm text-neutral-600">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Key Legal Considerations */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <h3 className="text-2xl font-heading mb-8 text-center">Key Legal Considerations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Ibogaine Legality',
                  description: 'Ibogaine is not a controlled substance in Mexico. We operate legally under Mexican law with medical supervision.',
                },
                {
                  icon: Shield,
                  title: 'Liability Protection',
                  description: 'Comprehensive medical malpractice insurance, informed consent protocols, and corporate liability shields.',
                },
                {
                  icon: FileText,
                  title: 'Investment Documents',
                  description: 'Standard venture documentation: subscription agreement, operating agreement, investor rights agreement.',
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary-400 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-900" />
                  </div>
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-primary-200">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Legal Advisors */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading mb-4">Professional Advisors</h3>
              <p className="text-primary-800 mb-8">
                We work with experienced legal and financial advisors to ensure proper
                structure and compliance across all jurisdictions.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { role: 'US Corporate Counsel', focus: 'Delaware structure, securities' },
                  { role: 'Mexican Legal Counsel', focus: 'Healthcare, real estate, labor' },
                  { role: 'Tax Advisors', focus: 'Cross-border optimization' },
                ].map((advisor) => (
                  <div key={advisor.role} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-medium mb-1">{advisor.role}</h4>
                    <p className="text-sm text-primary-800">{advisor.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/timeline" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Timeline</span>
          </Link>
          <Link href="/outcomes">
            <Button variant="primary">
              Patient Outcomes
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
