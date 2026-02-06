'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight, Lock } from 'lucide-react'

interface NavLink {
  name: string
  href: string
  locked?: boolean
}

interface NavSection {
  title: string
  links: NavLink[]
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Story',
    links: [
      { name: 'Vision', href: '/' },
      { name: 'The Origin', href: '/story/origin' },
      { name: 'The Solution', href: '/story/solution' },
      { name: 'The Experience', href: '/story/experience' },
      { name: 'The Programs', href: '/story/programs' },
      { name: 'The Science', href: '/story/science' },
      { name: 'The Sanctuary', href: '/story/sanctuary' },
    ],
  },
  {
    title: 'Opportunity',
    links: [
      { name: 'Market', href: '/market' },
      { name: 'Model', href: '/model' },
      { name: 'Moat', href: '/moat' },
      { name: 'Expansion', href: '/expansion' },
      { name: 'Villas', href: '/villas' },
    ],
  },
  {
    title: 'Assets',
    links: [
      { name: 'The Property', href: '/properties/rancho-paraiso-oasis' },
      { name: 'Virtual Tour', href: '/virtual-tour' },
      { name: 'The Platform', href: '/technology' },
      { name: 'Data & Intelligence', href: '/technology/data' },
      { name: 'Team', href: '/team' },
    ],
  },
  {
    title: 'Analysis',
    links: [
      { name: 'Financials', href: '/financials' },
      { name: 'Risks', href: '/risks' },
      { name: 'Timeline', href: '/timeline' },
      { name: 'The Ask', href: '/invest' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Summary', href: '/overview' },
      { name: 'Legal', href: '/counsel', locked: true },
      { name: 'Outcomes', href: '/outcomes' },
      { name: 'Data Room', href: '/data-room', locked: true },
      { name: 'FAQ', href: '/faq' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileSections, setExpandedMobileSections] = useState<Set<string>>(new Set(['Story']))
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  // Reorder sections for mobile: "Story" first
  const mobileNavSections = [
    NAV_SECTIONS.find(s => s.title === 'Story')!,
    ...NAV_SECTIONS.filter(s => s.title !== 'Story'),
  ]

  const toggleMobileSection = (title: string) => {
    setExpandedMobileSections(prev =>
      prev.has(title) ? new Set() : new Set([title])
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <>
      {/* Floating Navigation - Glass Morphism */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-5 flex justify-center"
      >
        <nav className={`
          w-full sm:w-[70vw]
          flex items-center justify-between
          px-4 sm:px-6 lg:px-8 py-3.5
          bg-white/80 backdrop-blur-xl
          rounded-2xl
          border border-white/50
          shadow-lg shadow-neutral-900/5
          transition-all duration-500
          ${isScrolled ? 'bg-white/90 shadow-xl shadow-neutral-900/10' : ''}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <span className="text-[10px] sm:text-[11px] md:text-xs font-accent font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary-800">
              Transformational
            </span>
            <span className="w-px h-3 sm:h-4 bg-primary-800/20" />
            <span className="text-[10px] sm:text-[11px] md:text-xs font-accent font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary-600">
              Epicenter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((section) => (
              <div
                key={section.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`
                    flex items-center gap-1 px-4 py-2.5
                    text-[10px] font-accent font-semibold uppercase tracking-[0.12em]
                    rounded-xl transition-all duration-200
                    ${activeDropdown === section.title
                      ? 'text-primary-800 bg-white/60 shadow-sm'
                      : 'text-primary-700/80 hover:text-primary-800 hover:bg-white/40'
                    }
                  `}
                >
                  {section.title}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === section.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === section.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(section.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-xl shadow-neutral-900/10 py-2 min-w-[180px]">
                        {section.links.map((link) => {
                          const isActive = pathname === link.href
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`
                                flex items-center justify-between px-4 py-2.5 text-[10px] font-accent font-semibold uppercase tracking-[0.1em]
                                transition-colors duration-150 rounded-lg mx-1
                                ${isActive
                                  ? 'text-secondary-600 bg-secondary-50'
                                  : link.locked
                                    ? 'text-primary-700/40'
                                    : 'text-primary-700/80 hover:text-primary-800 hover:bg-white/60'
                                }
                              `}
                            >
                              {link.name}
                              {link.locked && <Lock className="w-3 h-3 text-primary-700/30" />}
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-primary-800/10 mx-3" />

            {/* CTA */}
            <Link
              href="/invest"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-secondary-400 to-secondary-500 text-white text-[10px] font-accent font-bold uppercase tracking-[0.1em] rounded-xl hover:from-secondary-500 hover:to-secondary-600 shadow-md shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-200"
            >
              Invest
              <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-primary-700/80 hover:bg-white/60 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden max-h-[calc(100vh-6rem)] overflow-y-auto">
                {/* Nav Sections - Collapsible Accordion */}
                <div className="px-3 py-3 space-y-0.5">
                  {mobileNavSections.map((section) => {
                    const isExpanded = expandedMobileSections.has(section.title)
                    return (
                      <div key={section.title}>
                        <button
                          onClick={() => toggleMobileSection(section.title)}
                          className="w-full flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/50 transition-colors duration-150"
                        >
                          <span className="text-[9px] font-accent font-bold uppercase tracking-[0.2em] text-primary-700/50">
                            {section.title}
                          </span>
                          <ChevronDown className={`w-3 h-3 text-primary-700/40 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-0.5 pb-1">
                                {section.links.map((link) => {
                                  const isActive = pathname === link.href
                                  return (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      className={`
                                        flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-accent font-semibold uppercase tracking-[0.1em]
                                        transition-colors duration-150
                                        ${isActive
                                          ? 'bg-secondary-500 text-white shadow-sm'
                                          : link.locked
                                            ? 'text-primary-700/40'
                                            : 'text-primary-700/80 hover:bg-white/60 hover:text-primary-800'
                                        }
                                      `}
                                    >
                                      {link.name}
                                      {link.locked && <Lock className="w-3 h-3 text-primary-700/30" />}
                                    </Link>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>

                {/* CTA */}
                <div className="px-3 pb-3 pt-2 bg-white/40 border-t border-white/30">
                  <Link
                    href="/invest"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-secondary-400 to-secondary-500 text-white text-[11px] font-accent font-bold uppercase tracking-[0.15em] rounded-xl hover:from-secondary-500 hover:to-secondary-600 shadow-md shadow-secondary-500/25 transition-all duration-200"
                  >
                    View Investment
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
