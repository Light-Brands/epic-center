<[Home](../../README.md) | [Pitch Packet](./README.md) | [Full Strategy](./DIGITAL_PITCH_PACKET.md) | [Quick Start](./QUICK_START.md) | [Checklist](./CONTENT_CHECKLIST.md)>

---

# Investor Portal Technical Specification

> Technical specification for the digital pitch experience that demonstrates Transformational Epicenter's capabilities while raising $5M.

## Overview

A dedicated web application for presenting our investment opportunity in an interactive, engaging, and trackable format.

**URL**: `invest.transformationalepicenter.com`

**One-Sentence Pitch**: Transformational Epicenter is building the world's first luxury medical wellness destination that combines hospital-grade care, five-star hospitality, cutting-edge health technology, and transformational medicine—a combination no competitor offers today.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         INVESTOR PORTAL                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                        NEXT.JS 14 APP                           │    │
│  │                                                                  │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │    │
│  │  │ Landing  │ │Interactive│ │  Data    │ │ Schedule │           │    │
│  │  │  Page    │ │  Pitch   │ │  Room    │ │   Page   │           │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │    │
│  │                                                                  │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │    │
│  │  │Financial │ │   Team   │ │    AI    │ │Personalized│          │    │
│  │  │  Model   │ │Showcase  │ │   FAQ    │ │  Pages   │           │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │    │
│  │                                                                  │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                        SERVICES LAYER                            │    │
│  │                                                                  │    │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │    │
│  │  │  Supabase  │  │  PostHog   │  │   Cal.com  │                 │    │
│  │  │ Auth + DB  │  │ Analytics  │  │ Scheduling │                 │    │
│  │  └────────────┘  └────────────┘  └────────────┘                 │    │
│  │                                                                  │    │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │    │
│  │  │   OpenAI   │  │  Vercel    │  │   Resend   │                 │    │
│  │  │  FAQ Bot   │  │  Hosting   │  │   Email    │                 │    │
│  │  └────────────┘  └────────────┘  └────────────┘                 │    │
│  │                                                                  │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14 (App Router) | SSR, API routes, modern React |
| Styling | Tailwind CSS | Rapid development, consistency |
| Animations | Framer Motion | Scroll animations, interactions |
| 3D (optional) | Three.js / React Three Fiber | Facility visualization |
| Database | Supabase (PostgreSQL) | Auth + DB + Realtime |
| Auth | Supabase Auth | Magic links, passwordless |
| Analytics | PostHog | Open-source, self-hostable |
| Scheduling | Cal.com | Open-source, customizable |
| AI/LLM | OpenAI API | FAQ chatbot |
| Email | Resend | Transactional emails |
| Hosting | Vercel | Seamless Next.js deployment |
| CDN/Storage | Cloudflare R2 / Supabase Storage | Document hosting |

---

## Page Structure

### Public Pages

```
/                           → Landing page
/pitch                      → Interactive pitch experience (teaser)
```

### Authenticated Pages

```
/pitch/full                 → Complete interactive pitch
/data-room                  → Document repository
/data-room/[category]       → Category-specific documents
/financials                 → Interactive financial model
/team                       → Team showcase with videos
/faq                        → AI-powered FAQ
/schedule                   → Meeting booking
```

### Personalized Pages

```
/i/[investor-slug]          → Custom investor landing page
```

### Admin Pages

```
/admin                      → Analytics dashboard
/admin/investors            → Investor management
/admin/documents            → Document management
/admin/engagement           → Engagement tracking
```

---

## Database Schema

### Tables

```sql
-- Investors
CREATE TABLE investors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  firm TEXT,
  slug TEXT UNIQUE,
  status TEXT DEFAULT 'prospect', -- prospect, engaged, active, passed
  source TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sessions/Engagement
CREATE TABLE engagement_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id),
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL, -- page_view, scroll_depth, video_play, doc_download, etc.
  event_data JSONB,
  page TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Document Access
CREATE TABLE document_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id),
  document_id TEXT NOT NULL,
  document_name TEXT NOT NULL,
  accessed_at TIMESTAMPTZ DEFAULT NOW(),
  download_count INTEGER DEFAULT 0
);

-- FAQ Interactions
CREATE TABLE faq_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  helpful BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Personalized Content
CREATE TABLE investor_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investor_id UUID REFERENCES investors(id),
  content_key TEXT NOT NULL,
  content_value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Feature Specifications

### 1. Landing Page (`/`)

**Purpose**: Capture investor email, create intrigue

**Components**:
- Hero section with company tagline
- Brief problem/solution teaser
- Email capture form
- Social proof (advisor logos, press mentions)
- "Request Access" CTA

**Behavior**:
- Email submission creates investor record
- Sends magic link for full access
- Tracks referral source

### 2. Interactive Pitch (`/pitch`)

**Purpose**: Immersive storytelling experience

**Sections** (scroll-driven, aligned with Executive Summary v2.0):
1. The Hook (Crisis of Disconnection - animated gap visualization)
2. The Solution (8 Operational Segments interactive diagram)
3. Why Now (Timeline + structural opportunity)
4. Market Opportunity ($5.6T visualization, ideal guest profile)
5. Business Model ($2,000/day, program pricing breakdown)
6. Traction (live metrics dashboard, development progress)
7. Competition (why competitors can't copy, 5 layers of moat)
8. Go-to-Market (4-phase growth to 30+ locations, guest journey arc)
9. Financials ($3.6M-$11.7M projections with adjustable assumptions)
10. Team (video cards, key hires roadmap)
11. The Ask ($5M, use of funds, milestones, risk mitigation)

**Technical Implementation**:
```typescript
// Scroll-driven sections using Framer Motion
import { useScroll, useTransform, motion } from 'framer-motion'

function PitchSection({ children, index }) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(
    scrollYProgress,
    [index * 0.1, index * 0.1 + 0.05, index * 0.1 + 0.1],
    [0, 1, 1]
  )

  return (
    <motion.section style={{ opacity }}>
      {children}
    </motion.section>
  )
}
```

**Tracking**:
- Time spent per section
- Scroll depth
- Video plays
- CTA clicks

### 3. Data Room (`/data-room`)

**Purpose**: Organized document repository

**Features**:
- Category-based navigation
- Search functionality
- Document previews
- Download tracking
- Watermarking (investor name + date on PDFs)

**Categories**:
- Executive Summary
- Financials
- Market Research
- Product & Technology
- Operations
- Team
- Legal
- Traction

**Document Watermarking**:
```typescript
// PDF watermarking using pdf-lib
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

async function watermarkPDF(pdfBytes: Uint8Array, investorName: string) {
  const pdfDoc = await PDFDocument.load(pdfBytes)
  const pages = pdfDoc.getPages()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  for (const page of pages) {
    page.drawText(`Confidential - ${investorName} - ${new Date().toISOString()}`, {
      x: 50,
      y: 30,
      size: 8,
      font,
      color: rgb(0.7, 0.7, 0.7),
    })
  }

  return pdfDoc.save()
}
```

### 4. Interactive Financial Model (`/financials`)

**Purpose**: Transparent, explorable projections

**Features**:
- Adjustable assumptions (sliders)
- Real-time calculation updates
- Multiple scenarios
- Downloadable spreadsheet
- Key metrics highlighted

**Assumptions to Expose**:
- Capacity (beds per location)
- Occupancy rate
- Average program price
- Program mix
- Cost structure
- Growth rate
- Location expansion timeline

**Visualization**:
- Revenue waterfall chart
- Unit economics breakdown
- Cash flow projection
- Sensitivity analysis

### 5. Team Showcase (`/team`)

**Purpose**: Build trust through human connection

**Features**:
- Photo cards with hover effects
- 60-second video intros
- LinkedIn integration
- Advisory board grid
- Key hires roadmap

**Video Implementation**:
```typescript
// Video player with tracking
function TeamVideo({ member, onPlay, onComplete }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    video?.addEventListener('play', () => onPlay(member.id))
    video?.addEventListener('ended', () => onComplete(member.id))
  }, [])

  return (
    <video
      ref={videoRef}
      src={member.videoUrl}
      poster={member.thumbnailUrl}
      controls
    />
  )
}
```

### 6. AI FAQ (`/faq`)

**Purpose**: 24/7 investor support

**Implementation**:
- RAG (Retrieval Augmented Generation) with pitch content
- OpenAI GPT-4 for responses
- Source citations
- Fallback to human support
- Question logging for improvement

**Technical Approach**:
```typescript
// FAQ chatbot using Vercel AI SDK
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Retrieve relevant context from pitch materials
  const context = await retrieveContext(messages[messages.length - 1].content)

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: `You are an AI assistant for Transformational Epicenter,
             answering investor questions. Use this context: ${context}
             Be helpful, accurate, and suggest scheduling a call
             for complex questions.`,
    messages,
  })

  return result.toDataStreamResponse()
}
```

### 7. Scheduling (`/schedule`)

**Purpose**: Frictionless meeting booking

**Implementation**:
- Cal.com embed
- Multiple meeting types:
  - 15-min intro call
  - 30-min deep dive
  - 45-min technical review
- Automatic timezone detection
- Calendar integration

### 8. Personalized Pages (`/i/[slug]`)

**Purpose**: VIP investor experience

**Features**:
- Custom greeting
- Relevant portfolio company mentions
- Tailored thesis alignment
- Unique tracking link

**Example**:
```
/i/sarah-at-healthcare-vc

"Hi Sarah,

We noticed [Portfolio Company A] in your portfolio—
we see natural synergies in the digital health space.

Given [Healthcare VC]'s thesis around transformative
healthcare, we believe Transformational Epicenter
aligns strongly with your investment criteria..."
```

---

## Analytics & Tracking

### Events to Track

| Event | Data Captured |
|-------|---------------|
| `page_view` | page, referrer, time |
| `scroll_depth` | page, depth %, time |
| `section_view` | section_id, time_spent |
| `video_play` | video_id, duration_watched |
| `video_complete` | video_id |
| `document_view` | doc_id, preview_time |
| `document_download` | doc_id |
| `faq_question` | question_text, answer |
| `meeting_booked` | meeting_type, datetime |
| `cta_click` | cta_id, location |

### Investor Scoring

```typescript
// Engagement scoring algorithm
function calculateEngagementScore(events: Event[]): number {
  let score = 0

  for (const event of events) {
    switch (event.type) {
      case 'page_view': score += 1; break
      case 'scroll_depth': score += event.depth * 0.05; break
      case 'video_play': score += 5; break
      case 'video_complete': score += 10; break
      case 'document_download': score += 15; break
      case 'faq_question': score += 8; break
      case 'meeting_booked': score += 50; break
    }
  }

  // Recency bonus
  const daysSinceLastVisit = getDaysSince(events[events.length - 1].timestamp)
  if (daysSinceLastVisit < 7) score *= 1.2

  return Math.min(score, 100) // Cap at 100
}
```

### Alerts

- **High engagement alert**: Score jumps >20 points
- **Return visit alert**: Investor returns after >24 hours
- **Document download alert**: Any data room download
- **Meeting booked alert**: Immediate notification

---

## Security Considerations

### Authentication
- Magic link (passwordless) via Supabase
- Optional: LinkedIn OAuth for verification
- Session-based with secure cookies

### Document Security
- Signed URLs with expiration
- Watermarking with investor name
- Download logging
- No direct file URLs exposed

### Data Protection
- All data encrypted at rest
- TLS 1.3 for all connections
- Row-level security in Supabase
- GDPR-compliant data handling

---

## Deployment

### Infrastructure

```yaml
# vercel.json
{
  "framework": "nextjs",
  "regions": ["sfo1", "iad1"],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "SUPABASE_SERVICE_KEY": "@supabase-service-key",
    "OPENAI_API_KEY": "@openai-key",
    "POSTHOG_KEY": "@posthog-key"
  }
}
```

### CI/CD

```yaml
# GitHub Actions
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: vercel/actions/deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Monitoring

- Vercel Analytics (Web Vitals)
- Sentry (Error tracking)
- PostHog (Product analytics)
- Uptime monitoring (Better Uptime)

---

## Development Phases

### Phase 1: MVP (Week 1-2)
- [ ] Project setup (Next.js, Tailwind, Supabase)
- [ ] Landing page with email capture
- [ ] Basic authentication flow
- [ ] Static pitch narrative
- [ ] Simple data room (file list)
- [ ] Cal.com integration
- [ ] Basic analytics

### Phase 2: Interactive (Week 3-4)
- [ ] Scroll-driven pitch animations
- [ ] Animated data visualizations
- [ ] Interactive financial model (basic)
- [ ] Team page with video players
- [ ] Document watermarking
- [ ] Enhanced analytics

### Phase 3: Intelligence (Week 5-6)
- [ ] AI FAQ chatbot
- [ ] Personalized investor pages
- [ ] Engagement scoring
- [ ] Alert system
- [ ] Admin dashboard

### Phase 4: Polish (Week 7-8)
- [ ] 3D facility visualization (stretch)
- [ ] Mobile optimization
- [ ] Performance tuning
- [ ] Security audit
- [ ] User testing
- [ ] Launch prep

---

## Estimated Effort

| Component | Hours |
|-----------|-------|
| Project setup & infrastructure | 8 |
| Landing page | 8 |
| Authentication | 6 |
| Interactive pitch | 40 |
| Data room | 20 |
| Financial model | 24 |
| Team showcase | 12 |
| AI FAQ | 16 |
| Scheduling | 4 |
| Personalized pages | 12 |
| Admin dashboard | 24 |
| Analytics & tracking | 16 |
| Testing & polish | 20 |
| **Total** | **210 hours** |

---

## Dependencies & Costs

### Monthly Costs (Estimated)

| Service | Plan | Cost/month |
|---------|------|------------|
| Vercel | Pro | $20 |
| Supabase | Pro | $25 |
| PostHog | Cloud | $0 (free tier) |
| OpenAI | Pay-as-you-go | ~$50 |
| Cal.com | Team | $12 |
| Resend | Pro | $20 |
| Domain | - | ~$2 |
| **Total** | | **~$130/month** |

### One-Time Costs

| Item | Cost |
|------|------|
| Domain purchase | ~$15 |
| Initial OpenAI training | ~$100 |
| **Total** | **~$115** |

---

## Success Metrics

### Technical
- [ ] Page load <2s (LCP)
- [ ] Mobile Lighthouse >90
- [ ] 99.9% uptime
- [ ] Zero security incidents

### Business
- [ ] 50+ unique investor visits
- [ ] 5+ minute average session
- [ ] 30% data room access rate
- [ ] 20% meeting conversion
- [ ] Full round subscribed

---

*Document Version: 2.0*
*Last Updated: January 2026*
*Aligned with: Executive Summary v2.0*
