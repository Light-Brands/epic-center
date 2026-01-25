'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { ScenarioIndicator } from '@/components/financial'

const NAV_SECTIONS = [
  {
    title: 'Opportunity',
    items: [
      { name: 'Vision', href: '/', description: 'The investment thesis' },
      { name: 'Market', href: '/market', description: '$5.6T opportunity' },
      { name: 'Model', href: '/model', description: 'How we operate' },
      { name: 'Expansion', href: '/expansion', description: 'Growth strategy' },
    ],
  },
  {
    title: 'Assets',
    items: [
      { name: 'Properties', href: '/properties', description: 'Evaluated locations' },
      { name: 'Team', href: '/team', description: 'Leadership & expertise' },
      { name: 'Moat', href: '/moat', description: 'Competitive advantages' },
    ],
  },
  {
    title: 'Analysis',
    items: [
      { name: 'Financials', href: '/financials', description: '5-year projections' },
      { name: 'Returns', href: '/returns', description: 'IRR & exit strategy' },
      { name: 'Risks', href: '/risks', description: 'Risk factors' },
      { name: 'Timeline', href: '/timeline', description: 'Project milestones' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Legal', href: '/legal', description: 'Structure & compliance' },
      { name: 'Outcomes', href: '/outcomes', description: 'Clinical evidence' },
      { name: 'Data Room', href: '/data-room', description: 'Due diligence' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Only use transparent header on home page
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || !isHomePage
          ? 'bg-white/95 backdrop-blur-nav shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={`font-heading text-xl md:text-2xl transition-colors ${
              isScrolled || isMobileMenuOpen || !isHomePage ? 'text-primary-800' : 'text-white'
            }`}>
              Transformational Epicenter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((section) => (
              <div
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(section.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled || !isHomePage
                      ? 'text-neutral-600 hover:text-primary-600'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {section.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === section.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                {activeDropdown === section.title && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-card border border-neutral-200 py-2 min-w-[220px]">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 hover:bg-neutral-50 transition-colors ${
                            pathname === item.href ? 'bg-primary-50' : ''
                          }`}
                        >
                          <span className={`block text-sm font-medium ${
                            pathname === item.href ? 'text-primary-600' : 'text-neutral-900'
                          }`}>
                            {item.name}
                          </span>
                          <span className="block text-xs text-neutral-500">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ScenarioIndicator variant={isScrolled || !isHomePage ? 'dark' : 'light'} />
            </div>
            <Link href="/invest" className="hidden sm:block">
              <Button variant={isScrolled || !isHomePage ? 'primary' : 'accent'} size="sm">
                Invest
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled || isMobileMenuOpen || !isHomePage
                  ? 'text-neutral-600 hover:bg-neutral-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="max-w-container-2xl mx-auto px-4 py-4">
            <div className="grid gap-4">
              {NAV_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-2">
                    {section.title}
                  </p>
                  <div className="grid gap-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <Link href="/invest" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  View Investment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
