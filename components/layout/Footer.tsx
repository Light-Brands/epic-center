'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
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
      { name: 'The Property', href: '/properties/riviera-maya-jungle-estate' },
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
    <footer className="text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/footer-cover.png"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-primary-950/70" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
      </div>

      {/* Main Footer */}
      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-display text-2xl text-white">
                Transformational Epicenter
              </span>
            </Link>
            <p className="text-primary-200/80 mb-8 max-w-sm leading-relaxed">
              A luxury medical retreat pioneering evidence-based healing through
              plant medicine, bio-optimization, and trauma integration.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:invest@transformational-epicenter.com"
                className="group flex items-center gap-3 text-primary-200/80 hover:text-secondary-400 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">invest@transformational-epicenter.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-200/80">
                <div className="w-10 h-10 rounded-xl bg-primary-800/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Tulum, Quintana Roo, Mexico</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-secondary-400/80 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-primary-200/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-primary-800/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-white">Ready to Transform Healthcare?</h3>
              <p className="text-primary-200/70 max-w-lg">
                Join a select group of investors pioneering the future of mental health treatment.
              </p>
            </div>
            <Link href="/invest">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/30 transition-all duration-300">
                View Investment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800/30 relative">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300/60">
              &copy; {new Date().getFullYear()} Transformational Epicenter. Confidential Investment Materials.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-300/60">
              <Link href="/legal" className="hover:text-secondary-400 transition-colors duration-300">
                Legal
              </Link>
              <Link href="/risks" className="hover:text-secondary-400 transition-colors duration-300">
                Risk Factors
              </Link>
              <span className="text-primary-700">|</span>
              <span className="text-secondary-500/80 font-accent tracking-wide">For Accredited Investors Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-neutral-950 relative">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-neutral-500 leading-relaxed">
            <strong className="text-neutral-400">Important Disclosures:</strong> This website is for informational purposes only
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
