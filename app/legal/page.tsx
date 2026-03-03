'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  Building2,
  FileText,
  Shield,
  Globe,
  Users,
  CheckCircle2,
  Brain,
  Server,
  Layers,
  Lock,
  Banknote,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { VaultGate } from '@/components/auth/VaultGate'
import { Footer } from '@/components/layout'

const ENTITIES = [
  {
    id: 'holdco',
    name: 'Transformational Epicenter Holdings Ltd.',
    jurisdiction: 'Cayman Islands',
    type: 'Exempted Company',
    icon: Building2,
    color: 'primary',
    purpose: 'Master holding company. Issues the convertible note. Manages the single cap table (Founders 51%, Investor 49%). Contracts with guests via booking platform.',
    doesNot: 'Operate clinical services. Hold real estate directly. Employ medical staff. Store data.',
  },
  {
    id: 'propco',
    name: 'TE PropCo Mexico, S.A. de C.V.',
    jurisdiction: 'Mexico',
    type: 'Real Estate Holding',
    icon: Globe,
    color: 'secondary',
    purpose: 'Holds the Tulum property through a fideicomiso (bank trust) — the standard legal mechanism for foreign-owned coastal real estate in Mexico. Investor\'s first-position lien attaches here.',
    doesNot: 'Run clinical operations. Employ staff beyond property management. Hold IP. Generate significant operating income.',
  },
  {
    id: 'opco',
    name: 'TE OpCo Mexico, S.A. de C.V.',
    jurisdiction: 'Mexico',
    type: 'Clinical Operations',
    icon: Users,
    color: 'secondary',
    purpose: 'Runs the medical retreat. Employs doctors, nurses, and clinical staff. Holds all Mexican medical licenses. Delivers patient care. Collects data under license from the IP entity.',
    doesNot: 'Own real estate. Own IP or data. Contract directly with international guests. Make strategic decisions outside clinical operations.',
  },
  {
    id: 'ipco',
    name: 'TE IP/Data Co',
    jurisdiction: 'Cayman Islands',
    type: 'Exempted Company',
    icon: Brain,
    color: 'primary',
    purpose: 'Owns all intellectual property — software platform, AI models, clinical protocols, brand, trademarks, and the master neurological dataset. Licenses IP to OpCo. Controls cloud infrastructure.',
    doesNot: 'Treat patients. Employ medical staff. Hold real estate. Operate in Mexico.',
  },
]

const RISK_FIREWALLS = [
  {
    entity: 'PropCo (Real Estate)',
    risks: 'Construction, environment, property disputes',
    assets: '$12.4M property',
  },
  {
    entity: 'OpCo (Operations)',
    risks: 'Malpractice, regulatory, employment',
    assets: 'Equipment + working capital (limited)',
  },
  {
    entity: 'IP/Data Co (IP Fortress)',
    risks: 'Data breach, tech failure',
    assets: 'AI platform, brain dataset, protocols, brand',
  },
]

const TAX_SUMMARY = [
  {
    mechanism: 'Cayman HoldCo',
    impact: '0% corporate tax on retained earnings',
    basis: 'Standard international holding structure',
  },
  {
    mechanism: 'IP Licensing from Cayman',
    impact: '75% retention on royalty stream (25% Mexico WHT)',
    basis: 'IP holding in zero-tax jurisdiction',
  },
  {
    mechanism: 'Non-CFC Structure',
    impact: 'U.S. tax deferred until distribution or exit',
    basis: '49% U.S. ownership below CFC threshold (IRC §957)',
  },
  {
    mechanism: 'Fideicomiso for RE',
    impact: 'Avoids double taxation on property gains',
    basis: 'Mexican bank trust for restricted zone property',
  },
]

const REGULATORY_COMPLIANCE = [
  {
    area: 'Mexican Healthcare (COFEPRIS)',
    status: 'In Progress',
    details: 'Medical facility licensing and COFEPRIS compliance for psychedelic-assisted therapy under Mexican law.',
  },
  {
    area: 'Real Estate (Restricted Zone)',
    status: 'In Progress',
    details: 'Fideicomiso (bank trust) structure for foreign-owned property within 50km of coastline in Tulum.',
  },
  {
    area: 'Cayman Corporate Formation',
    status: 'In Progress',
    details: 'HoldCo and IP/Data Co formation as Cayman Islands Exempted Companies with proper economic substance.',
  },
  {
    area: 'Transfer Pricing',
    status: 'Planned',
    details: 'Big 4 transfer pricing study to document arm\'s length intercompany pricing before operations begin.',
  },
  {
    area: 'Data Sovereignty',
    status: 'Planned',
    details: 'Cloud infrastructure outside Mexico, GDPR-equivalent governance, patient consent architecture, and de-identification protocols.',
  },
  {
    area: 'PFIC Analysis',
    status: 'Planned',
    details: 'Annual Passive Foreign Investment Company determination and QEF election planning for U.S. investor compliance.',
  },
]

const INVESTOR_RIGHTS = [
  {
    right: 'Board Representation',
    description: '3-seat board: 2 Founder seats, 1 Investor seat. Observer status if equity drops below 35%.',
  },
  {
    right: 'First-Position Lien',
    description: 'Security interest on the real estate property until conversion or repayment — the hardest asset in the structure.',
  },
  {
    right: 'Share Pledge',
    description: 'Pledge on PropCo shares providing structural claim — if needed, investor can enforce by taking ownership of PropCo shares.',
  },
  {
    right: 'Information Rights',
    description: 'Quarterly financial reporting and annual audited statements across all entities.',
  },
  {
    right: '49% Equity Across All Entities',
    description: 'Conversion gives ownership in real estate, clinical operations, and IP/data — not just one entity.',
  },
  {
    right: 'Independent Exit Paths',
    description: 'Each entity can be sold independently — real estate fund, biotech acquirer, or hospitality operator.',
  },
]

function LegalContent() {
  return (
    <div className="min-h-screen bg-canvas pt-28">
      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">

        {/* Hero */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Governance
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-900 mb-6">
              Global Legal Architecture
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              A single Cayman Islands holding company with three purpose-built subsidiaries
              to separate risk from assets, protect intellectual property, achieve legal tax efficiency,
              and give investors institutional-grade security from day one.
            </p>
            <p className="text-lg text-neutral-500">
              Two jurisdictions. Four entities. Total protection.
            </p>
          </div>
        </section>

        {/* The Three Pillars */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Three Pillars</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Every structural decision serves one of three objectives: protect assets, optimize taxes within the law,
            and create an IP fortress around the most valuable long-term asset — the neurological dataset.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card padding="lg" className="border-t-4 border-t-primary-600">
              <Shield className="w-8 h-8 text-primary-600 mb-4" />
              <h4 className="font-heading text-lg text-neutral-900 mb-2">Legal Protection</h4>
              <p className="text-sm text-neutral-600">
                Every major asset class lives in its own entity. If clinical operations face a lawsuit,
                the real estate and data are untouchable. If the real estate faces a lien dispute,
                it cannot affect the operating business or the technology platform.
              </p>
            </Card>
            <Card padding="lg" className="border-t-4 border-t-secondary-500">
              <Banknote className="w-8 h-8 text-secondary-600 mb-4" />
              <h4 className="font-heading text-lg text-neutral-900 mb-2">Tax Efficiency</h4>
              <p className="text-sm text-neutral-600">
                Estimated 15-23% effective rate vs. 40-50% under a simpler structure — a difference
                of $9-10M/year at scale. Not a tax scheme. A legal architecture where tax efficiency
                is a natural result of structuring correctly.
              </p>
            </Card>
            <Card padding="lg" className="border-t-4 border-t-primary-800">
              <Brain className="w-8 h-8 text-primary-800 mb-4" />
              <h4 className="font-heading text-lg text-neutral-900 mb-2">IP Fortress</h4>
              <p className="text-sm text-neutral-600">
                All intellectual property — the AI platform, clinical protocols, brand, and neurological
                dataset — is owned by a Cayman entity. The Mexican operating company licenses the IP;
                it does not own it. If operations shut down, every piece of IP remains protected.
              </p>
            </Card>
          </div>
        </section>

        {/* Entity Architecture */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Entity Architecture</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Four entities across two jurisdictions. Each one does one job, and only that job.
            Investor capital enters through a single entity with clear governance — one cap table, one set of documents.
          </p>

          {/* Ownership flow visual */}
          <Card padding="lg" className="mb-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-primary-700" />
                  </div>
                  <p className="text-sm font-medium text-neutral-900">Founders</p>
                  <p className="text-xs text-primary-600 font-accent">51%</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-2">
                    <Banknote className="w-8 h-8 text-secondary-600" />
                  </div>
                  <p className="text-sm font-medium text-neutral-900">Investor</p>
                  <p className="text-xs text-secondary-600 font-accent">49%</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-neutral-400 mb-6">
                <div className="w-24 h-0.5 bg-neutral-200" />
                <span className="text-xs font-accent uppercase tracking-wider">ownership flow</span>
                <div className="w-24 h-0.5 bg-neutral-200" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ENTITIES.map((entity) => (
                <div key={entity.id} className={`p-6 rounded-xl ${entity.color === 'primary' ? 'bg-primary-50 border border-primary-200' : 'bg-secondary-50 border border-secondary-200'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${entity.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'}`}>
                      <entity.icon className={`w-5 h-5 ${entity.color === 'primary' ? 'text-primary-700' : 'text-secondary-600'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-accent uppercase tracking-wider ${entity.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'}`}>
                        {entity.jurisdiction}
                      </p>
                      <h4 className="font-medium text-neutral-900 text-sm">{entity.name}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 mb-3">{entity.purpose}</p>
                  <p className="text-xs text-neutral-500"><span className="font-medium">Does not:</span> {entity.doesNot}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Risk Containment */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Risk Containment</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Each entity acts as a firewall. Medical malpractice liability in OpCo cannot reach
            the real estate or IP. Real estate risk cannot affect operations or data. The investor&apos;s
            lien is on the hardest, most recoverable asset — the property.
          </p>

          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Entity</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Contained Risks</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Protected Assets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {RISK_FIREWALLS.map((row, i) => (
                    <tr key={row.entity} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-900 font-medium">{row.entity}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.risks}</td>
                      <td className="px-4 py-3 text-neutral-700 font-medium">{row.assets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card padding="lg" className="bg-neutral-50 border border-neutral-200">
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Where risk lives vs. where assets live:</span> Operational risk
              (the highest-probability risk) is in Mexico OpCo — but OpCo&apos;s assets are limited to equipment
              and working capital. The high-value assets (real estate, IP, data) are in separate entities
              with no operational exposure.
            </p>
          </Card>
        </section>

        {/* Tax Strategy */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Tax Strategy</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Tax efficiency is a byproduct of structuring correctly for legal protection and scalability — not the driving purpose.
            Mexican entities pay full 30% corporate tax on all Mexican-source income. No avoidance, full compliance.
          </p>

          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Mechanism</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Impact</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {TAX_SUMMARY.map((row, i) => (
                    <tr key={row.mechanism} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-900 font-medium">{row.mechanism}</td>
                      <td className="px-4 py-3 text-neutral-700">{row.impact}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card padding="lg" className="text-center">
              <p className="text-xs font-accent text-neutral-500 uppercase tracking-wider mb-2">Conservative Structure</p>
              <p className="font-heading text-3xl text-neutral-400 mb-1">40-50%</p>
              <p className="text-sm text-neutral-500">Effective tax rate</p>
            </Card>
            <Card padding="lg" className="text-center border-2 border-secondary-300">
              <p className="text-xs font-accent text-secondary-600 uppercase tracking-wider mb-2">Optimized Structure</p>
              <p className="font-heading text-3xl text-neutral-900 mb-1">15-23%</p>
              <p className="text-sm text-neutral-600">Saving $9-10M/year at scale</p>
            </Card>
          </div>
        </section>

        {/* Revenue Flow */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">How Revenue Flows</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            HoldCo contracts with guests and receives full payment. Revenue is distributed to subsidiaries
            at arm&apos;s length, documented, and defensible under OECD transfer pricing guidelines.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center">
              <Server className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <p className="text-xs font-accent text-primary-600 uppercase tracking-wider mb-2">Mexico OpCo</p>
              <p className="font-heading text-2xl text-neutral-900 mb-1">60-70%</p>
              <p className="text-sm text-neutral-600">Service fee for clinical services, staff, facility, consumables</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Brain className="w-8 h-8 text-primary-800 mx-auto mb-4" />
              <p className="text-xs font-accent text-primary-800 uppercase tracking-wider mb-2">Cayman IP/Data Co</p>
              <p className="font-heading text-2xl text-neutral-900 mb-1">10-20%</p>
              <p className="text-sm text-neutral-600">Royalty for platform license, brand, protocols, AI analytics</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Building2 className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
              <p className="text-xs font-accent text-secondary-600 uppercase tracking-wider mb-2">Cayman HoldCo Retains</p>
              <p className="font-heading text-2xl text-neutral-900 mb-1">10-30%</p>
              <p className="text-sm text-neutral-600">Management, marketing, investor returns, professional fees</p>
            </Card>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Regulatory Compliance</h2>
          <div className="space-y-4">
            {REGULATORY_COMPLIANCE.map((item) => (
              <Card key={item.area} padding="md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Scale className="w-6 h-6 text-primary-600 shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900">{item.area}</h4>
                      <p className="text-sm text-neutral-600">{item.details}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${
                    item.status === 'Complete' ? 'bg-green-100 text-green-700' :
                    item.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
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
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Investor Rights & Protections</h2>
          <Card padding="lg">
            <div className="grid md:grid-cols-2 gap-6">
              {INVESTOR_RIGHTS.map((right) => (
                <div key={right.right} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
        <section className="mb-20">
          <Card padding="lg" className="bg-primary-800 text-white">
            <h3 className="text-2xl font-heading mb-8 text-center">Key Legal Considerations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Ibogaine Legality',
                  description: 'Ibogaine is not a controlled substance in Mexico. Operations are fully legal under Mexican law with medical supervision and COFEPRIS licensing.',
                },
                {
                  icon: Shield,
                  title: 'Liability Containment',
                  description: 'Medical malpractice stays in OpCo. Real estate risk stays in PropCo. IP is untouchable in Cayman. Three firewalls, maximum protection.',
                },
                {
                  icon: FileText,
                  title: 'OECD Compliance',
                  description: 'All intercompany pricing documented by a Big 4 transfer pricing study. Cayman complies with BEPS standards and CRS reporting.',
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

        {/* Professional Advisors */}
        <section className="mb-20">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading mb-4">Professional Advisors</h3>
              <p className="text-primary-800 mb-8">
                Experienced legal and financial advisors across both jurisdictions
                ensure proper structure and compliance at every level.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { role: 'Cayman Counsel', focus: 'HoldCo + IP Co formation, substance' },
                  { role: 'Mexican Counsel', focus: 'Healthcare, real estate, fideicomiso' },
                  { role: 'U.S. Tax Counsel', focus: 'CFC, PFIC, investor compliance' },
                  { role: 'Transfer Pricing', focus: 'Big 4 TP study, arm\'s length' },
                ].map((advisor) => (
                  <div key={advisor.role} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-medium mb-1 text-sm">{advisor.role}</h4>
                    <p className="text-xs text-primary-800">{advisor.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <Card padding="md" className="bg-neutral-100 border border-neutral-200">
            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>Important Notice:</strong> This structural overview is for informational purposes only and
              does not constitute legal, tax, or investment advice. The global structure described herein is
              a pre-counsel strategy document subject to review and modification by qualified legal and tax
              professionals in each jurisdiction. Prospective investors should consult their own Cayman Islands,
              Mexican, and U.S. counsel before making any investment decision. Tax outcomes depend on
              individual circumstances and are subject to change based on evolving law and regulation.
              All intercompany pricing and entity substance requirements are subject to formal documentation
              and ongoing compliance.
            </p>
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

export default function LegalPage() {
  return (
    <VaultGate title="Legal Architecture" subtitle="Enter your 4-digit PIN to access the global legal structure.">
      <LegalContent />
    </VaultGate>
  )
}
