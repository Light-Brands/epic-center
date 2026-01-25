'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'

const FOOTER_LINKS = [
  {
    title: 'Opportunity',
    links: [
      { name: 'Vision', href: '/' },
      { name: 'Market', href: '/market' },
      { name: 'Business Model', href: '/model' },
      { name: 'Expansion', href: '/expansion' },
    ],
  },
  {
    title: 'Investment',
    links: [
      { name: 'Properties', href: '/properties' },
      { name: 'Financials', href: '/financials' },
      { name: 'Returns', href: '/returns' },
      { name: 'Invest', href: '/invest' },
    ],
  },
  {
    title: 'Due Diligence',
    links: [
      { name: 'Team', href: '/team' },
      { name: 'Risks', href: '/risks' },
      { name: 'Moat', href: '/moat' },
      { name: 'Data Room', href: '/data-room' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Timeline', href: '/timeline' },
      { name: 'Legal', href: '/legal' },
      { name: 'Outcomes', href: '/outcomes' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl text-white">
                Transformational Epicenter
              </span>
            </Link>
            <p className="text-primary-300 mb-6 max-w-sm">
              A luxury medical retreat pioneering evidence-based healing through
              plant medicine, bio-optimization, and trauma integration.
            </p>
            <div className="space-y-3 text-primary-300">
              <a
                href="mailto:invest@transformational-epicenter.com"
                className="flex items-center gap-2 hover:text-secondary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                invest@transformational-epicenter.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Tulum, Quintana Roo, Mexico
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-accent text-xs uppercase tracking-widest text-primary-400 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-12 border-t border-primary-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl mb-2">Ready to Transform Healthcare?</h3>
              <p className="text-primary-300">
                Join a select group of investors pioneering the future of mental health treatment.
              </p>
            </div>
            <Link href="/invest">
              <Button variant="accent" size="lg">
                View Investment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-400">
              &copy; {new Date().getFullYear()} Transformational Epicenter. Confidential Investment Materials.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-400">
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal
              </Link>
              <Link href="/risks" className="hover:text-white transition-colors">
                Risk Factors
              </Link>
              <span>|</span>
              <span>For Accredited Investors Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-primary-950">
        <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-primary-500 leading-relaxed">
            <strong>Important Disclosures:</strong> This website is for informational purposes only
            and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
            Any such offer will be made only by means of a confidential private placement memorandum
            and only to qualified investors in jurisdictions where permitted by law. Past performance
            is not indicative of future results. Investment in private securities involves substantial
            risk, including the potential loss of principal.
          </p>
        </div>
      </div>
    </footer>
  )
}
