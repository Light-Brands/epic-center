'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronDown, HelpCircle, Building2, DollarSign, Scale, Heart, Users, Calendar, Home } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

interface FAQ {
  question: string
  answer: string
  category: string
}

const FAQS: FAQ[] = [
  // Investment
  {
    category: 'Investment',
    question: 'What is the minimum investment amount?',
    answer: 'The minimum investment is $500,000. This ensures alignment with accredited investor requirements and allows us to maintain a manageable investor base while raising the necessary capital.',
  },
  {
    category: 'Investment',
    question: 'What is the investment structure?',
    answer: 'This is a 100% equity investment totaling $16.8M for the initial 30-casita campus. Expansion to 60 casitas is funded from operating cash flow, with no additional equity raise required. Investors receive common equity in Transformational Epicenter Holdings, LLC (Delaware).',
  },
  // Legal & Regulatory
  {
    category: 'Legal',
    question: 'Is ibogaine legal in Mexico?',
    answer: 'Yes. Ibogaine is not a controlled substance in Mexico. We operate legally under Mexican law with full medical supervision and proper licensing.',
  },
  {
    category: 'Legal',
    question: 'What happens if regulations change?',
    answer: 'We monitor regulatory developments closely. Our medical-grade protocols are designed to meet or exceed any reasonable regulatory framework. We also maintain location optionality for regulatory diversification.',
  },
  {
    category: 'Legal',
    question: 'How is liability managed?',
    answer: 'We carry comprehensive medical malpractice insurance, implement rigorous informed consent processes, and maintain corporate structures that provide appropriate liability protection.',
  },
  // Operations
  {
    category: 'Operations',
    question: 'What is the treatment capacity?',
    answer: 'The campus starts with 15 casitas at launch, expanding to 30 by end of Year 1 and ultimately to 60 casitas by Year 5. At 80% occupancy with a weighted average 13-day stay, we can serve approximately 1,280 guests annually at full capacity. Expansion is funded from operating cash flow.',
  },
  {
    category: 'Operations',
    question: 'What conditions do you treat?',
    answer: 'Primary focus is opioid addiction, treatment-resistant depression, PTSD, and alcohol use disorder. We also serve individuals seeking profound personal transformation and optimization.',
  },
  {
    category: 'Operations',
    question: 'What makes your approach different?',
    answer: 'We combine medical-grade protocols (24/7 physician oversight, cardiac monitoring) with luxury hospitality, comprehensive integration support, and bio-optimization, creating an integrated healing experience unavailable elsewhere.',
  },
  {
    category: 'Operations',
    question: 'How do you ensure patient safety?',
    answer: 'Comprehensive medical screening, continuous cardiac monitoring during treatment, 24/7 physician and nursing supervision, emergency protocols and equipment, and strict exclusion criteria for high-risk patients.',
  },
  // Villas
  {
    category: 'Villas',
    question: 'What is the villa program?',
    answer: 'A 48-villa condo-hotel collection on the campus grounds. Villas are sold to individual buyers ($1M-$3M each), who fund construction through deposits. The company earns development fees (10-15% of sales) and ongoing management fees (25% of rental revenue). Total villa sales of ~$96M with recurring management fee income of ~$1.7M/year at full operations.',
  },
  {
    category: 'Villas',
    question: 'How does the condo-hotel model work?',
    answer: 'Villa owners purchase their unit and place it in a rental pool when not personally using it. Rental revenue is split 75/25: 75% to the villa owner, 25% management fee to Transformational Epicenter. This creates a recurring revenue stream with no capital requirement from the company.',
  },
  {
    category: 'Villas',
    question: 'What villa types are available?',
    answer: 'Three tiers: Studio Villas ($1M-$1.5M, 1-bed, 1,200-1,500 sq ft, 16 units), Garden Villas ($1.5M-$2.5M, 2-bed, 1,800-2,400 sq ft, 22 units), and Estate Villas ($2.5M-$3M, 3-bed, 2,800-3,500 sq ft, 10 units).',
  },
  // Timeline
  {
    category: 'Timeline',
    question: 'When will the facility open?',
    answer: 'First patients begin in Q2 2026 with 15 casitas. An additional 15 casitas come online through Q4 2026, reaching 30-casita capacity by year end. Continued expansion adds 30 more casitas over Years 2-5, reaching full 60-casita capacity by 2030.',
  },
  {
    category: 'Timeline',
    question: 'What is the fundraising timeline?',
    answer: 'We are targeting an initial close in Q2 2026 upon reaching minimum threshold, with a final close 60-90 days later.',
  },
  // Team
  {
    category: 'Team',
    question: 'Who is the management team?',
    answer: 'Nicholas Courchesne (Founder/CEO) and Jason Sparks (Co-Founder/COO) lead the venture, supported by Dan Lawless as Technical Lead, Dr. Mariana Hoyo as Chief Medical Advisor, and a growing team of dedicated professionals.',
  },
  {
    category: 'Team',
    question: 'What experience does the team have?',
    answer: 'The founding team brings experience in hospitality operations, healthcare management, and alternative medicine. We are building an advisory board of experts in addiction medicine, psychiatry, and luxury hospitality.',
  },
]

const CATEGORIES = [
  { name: 'Investment', icon: DollarSign },
  { name: 'Legal', icon: Scale },
  { name: 'Operations', icon: Heart },
  { name: 'Villas', icon: Home },
  { name: 'Timeline', icon: Calendar },
  { name: 'Team', icon: Users },
]

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-medium text-neutral-900 pr-4">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 pr-8">
          <p className="text-neutral-600">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredFAQs = activeCategory
    ? FAQS.filter((faq) => faq.category === activeCategory)
    : FAQS

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Find answers to common questions about the investment opportunity,
            operations, and treatment approach.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ List */}
        <section className="mb-16">
          <Card padding="lg">
            <div className="divide-y divide-neutral-200">
              {filteredFAQs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </Card>
        </section>

        {/* Still Have Questions */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <HelpCircle className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-heading mb-4">Still Have Questions?</h3>
              <p className="text-primary-200 mb-6">
                We're happy to answer any additional questions about the investment
                opportunity. Schedule a call with our team or send us an email.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-primary-800"
                >
                  Email Us
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <h3 className="text-2xl font-heading text-center mb-8">Explore More</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: 'Investment Details', href: '/invest', icon: DollarSign },
                { title: 'Financial Model', href: '/financials', icon: Building2 },
                { title: 'Risk Factors', href: '/risks', icon: Scale },
                { title: 'Data Room', href: '/data-room', icon: HelpCircle },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors"
                >
                  <link.icon className="w-8 h-8 mx-auto mb-2 text-primary-800" />
                  <p className="font-medium">{link.title}</p>
                </Link>
              ))}
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/data-room" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Data Room</span>
          </Link>
          <Link href="/invest">
            <Button variant="primary">
              View Investment
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
