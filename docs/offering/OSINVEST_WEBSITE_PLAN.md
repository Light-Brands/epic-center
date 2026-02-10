# OSinvest Website: Complete Implementation Plan

**Document Version:** 1.0
**Date:** February 10, 2026
**Purpose:** Comprehensive plan for building the OSinvest marketing website
**For Review By:** Team

---

## Executive Summary

This document outlines the complete plan for building the OSinvest website - a high-converting B2B marketing site that positions OSinvest as a credible alternative to Big 4 consulting firms for founders raising institutional capital.

**Key Decisions:**
- **Brand:** Separate domain (osinvest.com), independent from Transformational Epicenter
- **Scope:** Full comprehensive build with all interactive features
- **Design:** Reuse existing botanical/luxury design system from TE codebase
- **Content:** All content derived from OSINVEST_COMPLETE_OFFERING.md
- **Timeline:** 6-week phased implementation

**Deliverables:**
- Homepage with 11-section scroll narrative
- 3 tier detail pages (Foundation, Scale, Partner)
- 10 service category pages (A-J)
- Interactive tools (ROI calculator, tier selector, comparison tables)
- Contact forms with CRM integration
- Complete mobile-responsive experience

---

## Table of Contents

1. [Project Goals & Context](#1-project-goals--context)
2. [Technical Architecture](#2-technical-architecture)
3. [Design System Approach](#3-design-system-approach)
4. [Site Structure & Pages](#4-site-structure--pages)
5. [Content Strategy](#5-content-strategy)
6. [Interactive Components](#6-interactive-components)
7. [Forms & Conversion](#7-forms--conversion)
8. [Performance & SEO](#8-performance--seo)
9. [Implementation Timeline](#9-implementation-timeline)
10. [Success Metrics](#10-success-metrics)

---

## 1. Project Goals & Context

### What We're Building

OSinvest is a fundraising infrastructure service that delivers in 14-30 days what traditionally costs $3.35M-$7.7M and takes 6-12 months. The website must:

1. **Sell and wow** visitors immediately with compelling value proposition
2. **Build credibility** through detailed service descriptions and proof points
3. **Qualify buyers** through interactive tools and self-identification
4. **Convert visitors** to consultation bookings and demo requests
5. **Speak to sophisticated buyers** (founders, CFOs, advisors evaluating $75K-$750K purchase)

### Target Audience

**Primary personas:**
- Technical founders raising first institutional round ($500K-$3M)
- Growth-stage CEOs raising Series A/B ($3M-$20M)
- Institutional-scale founders raising growth equity ($10M-$100M+)
- Advisory firms seeking production partners
- UHNW individuals deploying personal capital

### Core Value Propositions

1. **Speed:** 14-30 days vs. 6-12 months
2. **Cost:** $75K-$750K vs. $3.35M-$7.7M
3. **Integration:** 1 vendor vs. 8 fragmented consultants
4. **Quality:** Institutional-grade output through AI + senior review
5. **Proof:** Interactive platform demo, sample deliverables

---

## 2. Technical Architecture

### Recommended Structure: Separate Next.js Application

**Why separate from Transformational Epicenter:**
- Different domain (osinvest.com)
- Independent brand identity and navigation
- Different analytics, forms, integrations
- Cleaner separation of concerns
- Still imports TE design system and components

### Directory Structure

```
transformational-epicenter/
├── [existing TE app]
│
└── osinvest/                        # NEW: Separate Next.js app
    ├── package.json
    ├── next.config.js
    ├── tailwind.config.ts           # Extends TE design
    ├── tsconfig.json
    │
    ├── app/
    │   ├── layout.tsx               # Root layout
    │   ├── page.tsx                 # Homepage
    │   │
    │   ├── tiers/
    │   │   ├── page.tsx             # Tier comparison
    │   │   ├── foundation/page.tsx
    │   │   ├── scale/page.tsx
    │   │   ├── partner/page.tsx
    │   │   └── calculator/page.tsx
    │   │
    │   ├── services/
    │   │   ├── page.tsx             # All services overview
    │   │   └── [id]/page.tsx        # Dynamic A-J pages
    │   │
    │   ├── how-it-works/page.tsx
    │   ├── why-osinvest/page.tsx
    │   ├── case-studies/page.tsx
    │   ├── faq/page.tsx
    │   ├── contact/page.tsx
    │   └── demo/page.tsx
    │
    ├── components/
    │   ├── layout/                  # Header, Footer
    │   ├── tiers/                   # Tier cards, selector
    │   ├── services/                # Service cards
    │   ├── comparison/              # Competitor matrix, ROI calc
    │   ├── interactive/             # Persona quiz, package builder
    │   └── forms/                   # Contact, tier selection
    │
    ├── lib/
    │   ├── data/
    │   │   ├── tiers.ts             # Foundation/Scale/Partner
    │   │   ├── services.ts          # A-J categories
    │   │   ├── comparisons.ts       # Big 4 vs OSinvest
    │   │   └── personas.ts          # Buyer personas
    │   ├── utils/
    │   │   ├── pricing.ts
    │   │   └── analytics.ts
    │   └── hooks/
    │       └── usePricingCalculator.ts
    │
    └── public/
        ├── images/
        ├── pdfs/
        └── samples/
```

### Component Reusability (80% from TE)

**Import from TE codebase:**
```typescript
// Reuse primitives
import { Card, Button, Badge } from '../../components/ui'
import { CountUp, FadeIn, StaggerContainer } from '../../components/animation'
import { cn } from '../../lib/utils'
```

**Build new (OSinvest-specific):**
- TierCard (pricing tier display)
- ServiceCard (A-J categories)
- CompetitorMatrix (Big 4 comparison)
- ROICalculator (savings calculator)
- TierSelector (recommendation tool)
- ProcessTimeline (14/21/30 day visualization)
- Header/Footer (OSinvest branding)

---

## 3. Design System Approach

### Visual Identity

**Reuse from TE codebase:**
- Botanical green primary colors
- Warm gold accents
- Luxury aesthetic
- Professional shadows and spacing
- Fraunces display font
- Libre Baskerville headings
- Source Sans 3 body text

**OSinvest adaptations:**
- Slightly larger base font (18px vs 16px) for B2B audience
- Higher information density (more details per section)
- Optional investment blue accent for financial credibility
- More aggressive font weights for pricing (700 vs 500)

### Tailwind Configuration

```typescript
// osinvest/tailwind.config.ts
import teConfig from '../tailwind.config'

export default {
  ...teConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../components/**/*.{js,ts,jsx,tsx}', // Import TE
  ],
  theme: {
    extend: {
      ...teConfig.theme.extend,
      fontSize: {
        base: '1.125rem', // 18px for B2B
      },
    },
  },
}
```

---

## 4. Site Structure & Pages

### Complete Site Map

```
Homepage (/)
├── Tiers
│   ├── Comparison (/tiers)
│   ├── Foundation (/tiers/foundation)
│   ├── Scale (/tiers/scale)
│   ├── Partner (/tiers/partner)
│   └── Calculator (/tiers/calculator)
│
├── Services
│   ├── Overview (/services)
│   └── [Category A-J] (/services/[id])
│       ├── strategic-foundation
│       ├── market-research
│       ├── financial-models
│       ├── valuation-report
│       ├── tax-legal-architecture
│       ├── expansion-research
│       ├── site-evaluation
│       ├── operational-blueprint
│       ├── data-room
│       └── investor-platform
│
├── Supporting Pages
│   ├── How It Works (/how-it-works)
│   ├── Why OSinvest (/why-osinvest)
│   ├── Case Studies (/case-studies)
│   ├── FAQ (/faq)
│   ├── Contact (/contact)
│   └── Demo (/demo)
│
└── Utility Pages
    ├── Privacy Policy
    ├── Terms of Service
    └── Thank You (post-submission)
```

### Homepage Structure (11 Sections)

**Section 1: Hero**
- Headline: "14-30 days. Not 6-12 months."
- Subheadline: "Turn $3M+ of scattered consultants into one unified operating system"
- CTAs: "See How It Works", "View Live Example"
- Trust indicators: $75K-$750K | 150+ Docs | 30-Day Delivery

**Section 2: The Problem**
- "The $3M Problem Nobody Talks About"
- Split-screen comparison: Traditional (8 vendors, $3.35M-$7.7M, 6-12 months) vs OSinvest (1 system, $355K-$710K, 14-30 days)
- Visual: Fragmented nodes vs unified hub-and-spoke

**Section 3: The Solution**
- "What Is OSinvest?"
- Vertical operating system explanation
- What it replaces (8 vendors → 1 system)
- Stack collapse narrative

**Section 4: Deliverables**
- Platform inventory visualization
- 150+ strategic documents
- 30-page interactive web platform
- 12-tab financial model
- 20+ document data room

**Section 5: Service Categories**
- 10-category grid (A-J)
- Each with icon, name, traditional cost vs OSinvest price
- Expandable cards with deliverables
- Links to detail pages

**Section 6: Tiers**
- Three pricing cards: Foundation, Scale, Partner
- Price ranges, delivery timelines, included services
- Buyer persona indicators
- Interactive tier selector tool

**Section 7: Buyer Personas**
- Who buys each tier
- Persona cards with quotes and journey maps
- Self-identification mechanism
- Social proof (when available)

**Section 8: Why We Win**
- Head-to-head comparison table
- Big 4 vs Boutique IB vs OSinvest
- Dimensions: Cost, timeline, quality, vendors, hidden costs
- Unique capabilities OSinvest offers

**Section 9: AI Advantage**
- "96-98% cost reduction without cutting corners"
- How AI handles volume, humans handle judgment
- Structural efficiency explanation
- Quality validation approach

**Section 10: Engagement Model**
- Visual timeline: 14/21/30 day process
- Phase breakdown: Discovery → Content → Platform → Review
- Client touchpoints and checkpoints

**Section 11: Final CTA**
- Three conversion paths:
  - Book Scoping Call (high intent)
  - Request Demo (medium intent)
  - Download Guide (low intent)

---

## 5. Content Strategy

### Source Material

All content derived from: `OSINVEST_COMPLETE_OFFERING.md` (812 lines)

### Content Mapping

**Homepage Sections → Offering Doc:**
- Hero: Lines 1-22
- Problem: Lines 38-94
- Solution: Lines 96-142
- Deliverables: Lines 145-158
- Categories: Lines 169-188
- Tiers: Lines 426-594
- Personas: Lines 597-640
- Why We Win: Lines 643-730
- AI Advantage: Lines 733-756
- Timeline: Lines 758-788
- CTA: Lines 791-812

**Tier Pages:**
- Foundation: Lines 427-453
- Scale: Lines 456-486
- Partner: Lines 489-516

**Service Pages (A-J):**
- Strategic Foundation (A): Lines 191-206
- Market Research (B): Lines 209-224
- Financial Models (C): Lines 227-242
- Valuation Report (D): Lines 245-260
- Tax & Legal (E): Lines 263-278
- Expansion Research (F): Lines 281-296
- Site Evaluation (G): Lines 299-314
- Operational Blueprint (H): Lines 317-332
- Data Room (I): Lines 335-350
- Investor Platform (J): Lines 353-368

### Data Structure

**Tier Data** (`lib/data/tiers.ts`):
```typescript
export const TIERS = {
  foundation: {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'For early-stage founders raising their first institutional round',
    price: { min: 75000, max: 150000 },
    deliveryDays: 14,
    services: ['A', 'C', 'I'],
    addOns: ['D'],
    comparableCost: { min: 1200000, max: 2500000 },
    features: [/* ... */],
    personas: [/* ... */],
  },
  // scale, partner
}
```

**Service Data** (`lib/data/services.ts`):
```typescript
export const SERVICES = {
  A: {
    id: 'A',
    name: 'Strategic Foundation',
    category: 'Strategy & Positioning',
    description: '...',
    deliverables: [/* ... */],
    marketComparable: { min: 750000, max: 1500000 },
    osinvestPrice: { min: 50000, max: 100000 },
    whyItMatters: '...',
  },
  // B through J
}
```

---

## 6. Interactive Components

### Priority 1: Core Components (Week 1-2)

**TierCard**
- Displays pricing tier (Foundation/Scale/Partner)
- Shows price range, delivery timeline, included services
- Hover effects reveal more details
- CTA button to tier detail page

**ServiceCard**
- Displays service category (A-J)
- Traditional cost vs OSinvest price
- Expandable deliverables list
- Links to service detail page

**CompetitorMatrix**
- Comparison table: Big 4 | Boutique IB | OSinvest
- Dimensions: Cost, Timeline, Quality, Hidden costs
- Highlighting/checkmarks for OSinvest advantages
- Responsive: horizontal scroll on mobile

**ContactForm**
- Multi-field form with validation
- Fields: Name, Email, Company, Raise amount, Tier, Message
- Real-time validation
- API integration for email/CRM

### Priority 2: Interactive Tools (Week 3-4)

**TierSelector**
- Interactive recommendation tool
- Inputs: Raise amount slider, Timeline need, Primary services
- Output: Recommended tier with pricing estimate
- "Book call to confirm scope" CTA

**ROICalculator**
- Calculator showing traditional cost vs OSinvest savings
- Inputs: Traditional budget, Timeline, Number of vendors
- Output: Cost savings, Time savings, ROI percentage
- Shareable results (PDF or link)

**ProcessTimeline**
- Visual timeline for 14/21/30 day delivery
- Interactive hover: show activities per phase
- Phase indicators: Discovery → Content → Platform → Review
- Client touchpoint markers

### Priority 3: Advanced Features (Week 5+)

**PackageBuilder**
- A la carte service selector
- Checkboxes for each service category
- Real-time price calculation
- "Get custom quote" submission

**BuyerPersonaQuiz**
- 5-7 question quiz
- Identifies buyer type and recommends tier
- Results page with personalized recommendations
- Email capture for follow-up

**PlatformDemo (Future)**
- Embedded live platform demo
- Option 1: Public sanitized demo
- Option 2: Gated access with email
- Watermarked, time-limited viewing

---

## 7. Forms & Conversion

### Forms Needed

**1. Contact Form**
- General inquiries and consultation requests
- Fields: Name, Email, Company, Raise amount, Tier preference, Timeline, Message
- Validation: Required fields, email format, message min length
- Submission: API route → Email → CRM

**2. Tier Selection Form**
- Select tier + add-ons, submit for custom quote
- Fields: Tier (dropdown), Add-ons (checkboxes), Contact info
- Pre-populated from tier page if linked
- Generates custom proposal email

**3. Demo Request Form**
- Request access to gated platform demo
- Fields: Name, Email, Company, Raise amount
- Generates magic link for time-limited access
- Tracks demo engagement

**4. Newsletter/Guide Download**
- Email capture for lead generation
- Fields: Email, Company stage
- Triggers automated email with PDF download
- Adds to nurture sequence

### Form Technology Stack

```typescript
// React Hook Form + Zod validation
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  raiseAmount: z.enum(['<$3M', '$3M-$10M', '$10M-$50M', '$50M+']),
  // ...
})
```

### API Routes

```typescript
// app/api/contact/route.ts
export async function POST(req: Request) {
  const data = await req.json()
  // 1. Validate with Zod
  // 2. Send email (Resend/SendGrid)
  // 3. Add to CRM (HubSpot/Salesforce)
  // 4. Return success
}
```

### Email Delivery

**Transactional emails:**
- Form submission confirmations
- Demo access links
- PDF download delivery
- Consultation booking confirmations

**Providers:** Resend, SendGrid, or Postmark

---

## 8. Performance & SEO

### Performance Targets

**Core Web Vitals:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1
- Bundle size: <150KB initial JS

**Optimization Strategies:**
- Code splitting with dynamic imports
- Lazy load below-fold images
- Optimize images with Next.js Image component
- Tree-shake unused dependencies
- Minimize client-side JavaScript
- CDN caching via Vercel

### SEO Strategy

**Meta Tags** (per page):
```typescript
export const metadata = {
  title: 'OSinvest - Fundraising Infrastructure in 14-30 Days',
  description: '$75K-$750K for what traditionally costs $3.35M-$7.7M...',
  keywords: ['fundraising consulting', 'financial modeling', ...],
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
}
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "OSinvest Foundation Tier",
  "offers": {
    "@type": "Offer",
    "priceRange": "$75,000-$150,000",
    "priceCurrency": "USD"
  }
}
```

**SEO Checklist:**
- [ ] Semantic HTML (h1-h6 hierarchy)
- [ ] Meta descriptions (unique per page)
- [ ] Open Graph tags
- [ ] Sitemap.xml (auto-generated)
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Internal linking strategy
- [ ] Fast page load times
- [ ] Mobile-responsive
- [ ] HTTPS

---

## 9. Implementation Timeline

### Week 1: Foundation & Data
**Goals:** Set up structure, create data files

- [ ] Set up osinvest/ directory
- [ ] Install dependencies (Next.js 14, React 18, Tailwind, TypeScript)
- [ ] Configure Tailwind to import TE design system
- [ ] Create tier data (`lib/data/tiers.ts`)
- [ ] Create service data (`lib/data/services.ts`)
- [ ] Create persona data (`lib/data/personas.ts`)
- [ ] Create comparison data (`lib/data/comparisons.ts`)

**Deliverables:**
- Working Next.js app
- Complete data structure
- Design system configured

---

### Week 2: Core Pages
**Goals:** Build main pages with content

- [ ] Build root layout (OSinvest header/footer)
- [ ] Build homepage (11 sections)
- [ ] Build tier detail pages (Foundation, Scale, Partner)
- [ ] Build service category pages (A-J via dynamic route)
- [ ] Implement routing and navigation
- [ ] Add basic animations (scroll reveals)

**Deliverables:**
- Complete page structure (18 pages)
- Navigation working
- Content from offering doc

---

### Week 3: Interactive Components
**Goals:** Build interactive tools and calculators

- [ ] Build TierCard component
- [ ] Build ServiceCard component
- [ ] Build CompetitorMatrix
- [ ] Build TierSelector (recommendation tool)
- [ ] Build ProcessTimeline visualization
- [ ] Add scroll-triggered animations (GSAP/Framer Motion)

**Deliverables:**
- 6 interactive components
- Tier recommendation working
- Animations polished

---

### Week 4: Forms & Conversion
**Goals:** Implement forms and conversion paths

- [ ] Build ContactForm with validation
- [ ] Build TierSelectionForm
- [ ] Create API routes for form submission
- [ ] Integrate Calendly for demo booking
- [ ] Set up email delivery (Resend/SendGrid)
- [ ] Add CRM integration (HubSpot/Salesforce)

**Deliverables:**
- Working contact forms
- Email delivery
- CRM integration
- Booking system

---

### Week 5: Advanced Features
**Goals:** Add calculators and advanced interactions

- [ ] Build ROICalculator
- [ ] Build PackageBuilder (a la carte selector)
- [ ] Build BuyerPersonaQuiz
- [ ] Add comparison charts (Recharts)
- [ ] Create FAQ page with accordion
- [ ] Build case studies template

**Deliverables:**
- ROI calculator working
- Package builder functional
- FAQ interactive
- Case study template

---

### Week 6: Polish & Launch
**Goals:** Optimize, test, deploy

- [ ] Performance optimization
  - Lazy loading
  - Image optimization
  - Bundle size reduction
  - Code splitting
- [ ] SEO implementation
  - Meta tags all pages
  - Structured data
  - Sitemap
  - Robots.txt
- [ ] Analytics integration (Google Analytics 4)
- [ ] Mobile responsiveness testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Deploy to osinvest.com

**Deliverables:**
- Lighthouse score >90
- Mobile optimized
- Accessible
- Live on osinvest.com

---

## 10. Success Metrics

### Traffic Metrics (90 days post-launch)

**Volume:**
- 500+ unique visitors/month
- 1,000+ page views/month
- 50%+ from organic search

**Engagement:**
- <40% bounce rate
- >4 min average time on site
- >70% scroll depth on homepage
- 30%+ click tier/service pages
- 20%+ engage with interactive tools

### Conversion Metrics

**Primary conversions:**
- 5+ consultation bookings/month
- 10+ demo requests/month
- 25+ email captures/month

**Conversion rates:**
- 3%+ overall conversion rate (visitor → any conversion)
- 10%+ form start rate
- 60%+ form completion rate (started → completed)

### Technical Metrics

**Performance:**
- Lighthouse score >90 (all metrics)
- First Contentful Paint <1.5s
- Largest Contentful Paint <2.5s
- Zero critical accessibility violations

**SEO:**
- Top 10 for "fundraising infrastructure"
- Top 20 for "investor platform builder"
- Featured snippets for tier comparison queries

### Business Metrics (Revenue Impact)

**Pipeline:**
- 2-3 closed deals within 90 days
- 5-7 deals in active pipeline
- $300K-$500K+ in signed contracts

**Average deal value:**
- Foundation: $100K-$125K average
- Scale: $200K-$250K average
- Partner: $500K+ average

---

## Appendix A: Technology Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### UI & Animation
- **Framer Motion** - Scroll animations
- **GSAP** - Timeline animations (optional)
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Resend/SendGrid** - Email delivery

### Analytics & Tracking
- **Google Analytics 4** - Web analytics
- **Vercel Analytics** - Performance monitoring
- **Hotjar** (future) - Heatmaps and recordings

### Deployment
- **Vercel** - Hosting and deployment
- **GitHub** - Version control
- **osinvest.com** - Custom domain

---

## Appendix B: Risk Assessment

### Technical Risks

**Risk:** Bundle size too large, slow load times
- **Mitigation:** Aggressive code splitting, lazy loading, tree-shaking
- **Monitor:** Lighthouse CI, bundle analyzer

**Risk:** Form submissions fail or spam
- **Mitigation:** Server-side validation, rate limiting, CAPTCHA
- **Monitor:** Form completion rates, error logs

**Risk:** Mobile experience subpar
- **Mitigation:** Mobile-first design, extensive mobile testing
- **Monitor:** Mobile analytics, user feedback

### Business Risks

**Risk:** Low conversion rates
- **Mitigation:** A/B testing, clear CTAs, social proof
- **Monitor:** Conversion funnel analytics

**Risk:** High bounce rates
- **Mitigation:** Compelling above-fold content, fast load
- **Monitor:** Bounce rate by page, heat maps

**Risk:** SEO underperformance
- **Mitigation:** Quality content, technical SEO, backlink strategy
- **Monitor:** Search Console, keyword rankings

---

## Appendix C: Open Questions for Team Review

1. **Content Creation:** Who will finalize the ~30,000 words of website copy? Should we hire a copywriter or adapt internally?

2. **Case Studies:** Do we have any client case studies ready to publish? If not, should we create anonymized examples or wait?

3. **Video Content:** Do we want explainer videos or founder testimonials? If yes, what's the production plan?

4. **CRM Integration:** Which CRM should we integrate with? (HubSpot, Salesforce, other?)

5. **Calendar Integration:** Should we use Calendly, or a different booking system?

6. **Budget:** What's the budget for:
   - Copywriter (if external): $5K-$15K
   - Video production (if desired): $10K-$30K
   - Photography (if needed): $3K-$10K
   - Email/CRM tools: $200-$500/month

7. **Launch Date:** Is there a hard deadline or event (conference, fundraise announcement) that determines launch timing?

8. **Legal Review:** Should legal review the content before launch (pricing claims, competitive comparisons)?

---

## Next Steps

**For Team Review:**
1. Review this plan document
2. Discuss open questions
3. Assign content creation responsibilities
4. Approve budget and timeline
5. Schedule kick-off meeting

**After Approval:**
1. Set up development environment
2. Begin Week 1 tasks
3. Schedule weekly progress reviews
4. Plan stakeholder demos at Weeks 2, 4, 6

---

**Questions or feedback?** Contact the development team to discuss this plan.
