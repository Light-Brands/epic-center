# Transformational Epicenter
## Investment Platform -Complete Page Specifications v1.0

**"Where do I sign?"** -The goal of every page.

---

## Document Purpose

This document contains the complete design and development specification for all 16 pages of the Transformational Epicenter Investment Platform. Each page is designed to:

1. Answer specific investor questions
2. Build emotional and logical conviction
3. Flow seamlessly to the next section
4. Create an elite, memorable experience

---

## Design Principles

### Visual Language
- **Primary Palette**: Deep ocean blues (#0A1628), warm earth tones (#C4A77D), healing greens (#2D5A4A)
- **Accent Colors**: Gold highlights (#D4AF37), soft white (#F8F6F3)
- **Typography**:
  - Headlines: Playfair Display (elegant, editorial)
  - Body: Inter (clean, readable)
  - Accents: Space Grotesk (modern, technical)
- **Imagery**: Cinematic photography -ocean, jungle, healing moments, luxury details
- **Mood**: Sophisticated, warm, trustworthy, transformational

### Interaction Philosophy
- **Scroll-driven storytelling**: Content reveals as user scrolls
- **Purposeful animation**: Every motion has meaning (not decorative)
- **Progressive disclosure**: Complexity revealed layer by layer
- **Immediate feedback**: Hover states, micro-interactions
- **Seamless transitions**: Pages flow like chapters of a story

### Mobile-First Approach
- All layouts designed mobile-first, then expanded
- Touch targets minimum 44px
- Swipe gestures for galleries and carousels
- Condensed navigation with hamburger menu
- Performance optimized for 3G connections

---

## Global Elements

### Navigation Header
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [LOGO]                                              [SECTIONS ▼] [INVEST] │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════   │
│  ●───────────────────────────────────────────────────────────────────○     │
│  VISION    MARKET    MODEL    EXPANSION    PROPERTIES    ...    INVEST     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Transparent on hero sections, solid on scroll
- Progress bar shows position in 16-section journey
- Section names appear on hover over progress dots
- "INVEST" button always visible (primary CTA)
- Sticky on scroll with backdrop blur

### Footer
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  TRANSFORMATIONAL EPICENTER                                                 │
│  ─────────────────────────                                                 │
│                                                                             │
│  Quick Links          Contact             Legal                            │
│  ───────────          ───────             ─────                            │
│  Vision               invest@te.com       Privacy Policy                   │
│  Properties           Schedule Call       Terms of Use                     │
│  Financials           +1 (XXX) XXX-XXXX   Cookie Policy                    │
│  Data Room                                                                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│  © 2026 Transformational Epicenter. Confidential Investment Materials.     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Page Transitions
- Fade transition between pages (300ms)
- Scroll position resets to top
- Progress indicator updates smoothly
- Browser back/forward supported

---

# PAGE 1: VISION (Home)
## Route: `/`

### Purpose
Hook investors in 10 seconds. Create emotional resonance. Make them feel the problem before showing the solution.

### SEO & Meta
```
Title: Transformational Epicenter | $5M Investment Opportunity
Description: The world's first luxury medical wellness destination combining hospital-grade care, five-star hospitality, and transformational medicine. 30 locations worldwide.
OG Image: Hero video thumbnail with logo
```

### Page Structure

#### Section 1.1: Hero (100vh)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         [FULL-SCREEN VIDEO]                                 │
│                                                                             │
│              Cinematic loop: Ocean waves → Jungle canopy →                  │
│              Healing hands → Peaceful face → Sunrise                        │
│              (12-15 seconds, seamless loop, muted)                          │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  [LOGO - White, centered]                                          │   │
│  │                                                                     │   │
│  │                                                                     │   │
│  │  "The world's most successful people are breaking."                │   │
│  │                                                                     │   │
│  │  They've tried therapy. Retreats. Biohacking.                      │   │
│  │  Nothing sticks. Nothing heals at the root.                        │   │
│  │                                                                     │   │
│  │  We're building the place that does.                               │   │
│  │                                                                     │   │
│  │                                                                     │   │
│  │  ──────────────────────────────────────────────────────────────    │   │
│  │                                                                     │   │
│  │  TRANSFORMATIONAL EPICENTER                                        │   │
│  │  Medical Rigor. Luxury Care. Deep Transformation.                  │   │
│  │  30 Locations Worldwide.                                           │   │
│  │                                                                     │   │
│  │                   [ EXPLORE THE OPPORTUNITY ]                       │   │
│  │                                                                     │   │
│  │                          ↓ SCROLL                                  │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Text fades in sequentially (staggered 200ms)
- Logo scales subtly on load
- Scroll indicator pulses gently
- Video has subtle Ken Burns effect

**Mobile Adaptation:**
- Video replaced with optimized still image
- Text slightly smaller but still impactful
- CTA button full-width

---

#### Section 1.2: The Problem (Parallax Scroll)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [PARALLAX IMAGE: Stressed executive at desk, head in hands]               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│      Modern humans suffer from a crisis of disconnection.                   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

     ↓ (Scroll reveals each line)

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│      From their bodies.                                                     │
│                                                                             │
│      Their nervous systems.                                                 │
│                                                                             │
│      Their purpose.                                                         │
│                                                                             │
│      Their essential nature.                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

     ↓ (Continue scroll)

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [PARALLAX IMAGE: Empty boardroom, city skyline at night]                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│      The most successful people on earth                                    │
│      are the most broken.                                                   │
│                                                                             │
│      They have everything.                                                  │
│      Except peace.                                                          │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Each text line fades in as it enters viewport
- Parallax images move at 0.5x scroll speed
- Subtle vignette effect on images
- Lines have slight stagger (100ms)

---

#### Section 1.3: Failed Solutions (Interactive Cards)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    WHAT THEY'VE TRIED                                       │
│                    ─────────────────                                        │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │                 │  │                 │  │                 │             │
│  │  [ICON: Cross]  │  │ [ICON: Resort]  │  │ [ICON: Tech]    │             │
│  │                 │  │                 │  │                 │             │
│  │  MEDICAL        │  │  LUXURY         │  │  BIOHACKING     │             │
│  │  CLINICS        │  │  RESORTS        │  │  CENTERS        │             │
│  │  ─────────────  │  │  ─────────────  │  │  ─────────────  │             │
│  │                 │  │                 │  │                 │             │
│  │  Treat symptoms │  │  Temporary      │  │  Transactional  │             │
│  │  Not root       │  │  escape         │  │  not transform- │             │
│  │  causes         │  │  Not change     │  │  ational        │             │
│  │                 │  │                 │  │                 │             │
│  │       ✗         │  │       ✗         │  │       ✗         │             │
│  │                 │  │                 │  │                 │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐           │
│  │                                                             │           │
│  │  [ICON: Plant/Leaf]                                        │           │
│  │                                                             │           │
│  │  PLANT MEDICINE RETREATS                                   │           │
│  │  ──────────────────────                                    │           │
│  │                                                             │           │
│  │  Powerful potential. But no medical oversight.             │           │
│  │  No integration support. No luxury care.                   │           │
│  │                                                             │           │
│  │                           ✗                                 │           │
│  │                                                             │           │
│  └─────────────────────────────────────────────────────────────┘           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Cards slide up and fade in on scroll (staggered)
- ✗ marks animate in with subtle shake
- Hover: cards lift slightly, subtle glow
- Fourth card spans full width (emphasis)

**Mobile:**
- 2x2 grid for top 4 cards
- Full-width fourth card below

---

#### Section 1.4: The Solution (Dramatic Reveal)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [BACKGROUND: Gradient transition from dark to warm golden light]          │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                WHAT IF ONE PLACE UNIFIED ALL FOUR?                          │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                                                                             │
│       ┌───────────┐      ┌───────────┐      ┌───────────┐                  │
│       │  MEDICAL  │      │  LUXURY   │      │   BIO-    │                  │
│       │   RIGOR   │  +   │   CARE    │  +   │OPTIMIZATION│                  │
│       │    ✓      │      │    ✓      │      │    ✓      │                  │
│       └───────────┘      └───────────┘      └───────────┘                  │
│                                                                             │
│                          ┌───────────┐                                     │
│                      +   │  PLANT    │                                     │
│                          │ MEDICINE  │                                     │
│                          │    ✓      │                                     │
│                          └───────────┘                                     │
│                                                                             │
│                               ═                                             │
│                                                                             │
│              ╔═══════════════════════════════════════════╗                 │
│              ║                                           ║                 │
│              ║       TRANSFORMATIONAL EPICENTER          ║                 │
│              ║                                           ║                 │
│              ║   The only destination where all four     ║                 │
│              ║   pillars meet under one roof.            ║                 │
│              ║                                           ║                 │
│              ╚═══════════════════════════════════════════╝                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Background transitions from dark blue to warm gold
- Each pillar box animates in with checkmark
- Plus signs pulse briefly
- Final box scales up slightly with glow
- Confetti-like particles (subtle) on reveal

---

#### Section 1.5: Seven Beliefs (Manifesto Scroll)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        WHAT WE BELIEVE                                      │
│                        ───────────────                                      │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  1. Healing happens at the root.                                   │   │
│  │     ─────────────────────────────                                  │   │
│  │     Surface-level interventions create surface-level change.       │   │
│  │     True transformation requires addressing the root.              │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  2. The body keeps the score.                                      │   │
│  │     ────────────────────────────                                   │   │
│  │     Transformation is somatic. Neurological. Cellular.             │   │
│  │     Our protocols honor the body as the vessel of healing.         │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ... (3-7 continue in same pattern)                                        │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  7. Community sustains change.                                     │   │
│  │     ───────────────────────────                                    │   │
│  │     Individual transformation flourishes within supportive         │   │
│  │     community. No one walks the integration path alone.            │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Each belief fades in as it enters viewport center
- Number animates from 0 to final value
- Subtle underline draws in
- Cards have slight parallax effect

---

#### Section 1.6: CTA Bridge to Market
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [BACKGROUND: Aerial ocean shot, gradual zoom]                             │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│               This is not just a vision.                                    │
│               It's a $1 trillion opportunity.                               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                     [ EXPLORE THE MARKET → ]                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Background slowly zooms in (Ken Burns)
- Text fades up
- Button pulses gently

### Components Required
- `VideoHero.tsx` -Full-screen video with overlay text
- `ParallaxSection.tsx` -Parallax image with text overlay
- `FailedSolutionCard.tsx` -Animated problem cards
- `SolutionReveal.tsx` -Four pillars animation
- `BeliefCard.tsx` -Manifesto item with number
- `CTABridge.tsx` -Transition section to next page

### Data Requirements
- Hero video (MP4, 15-20MB optimized)
- Hero video poster image (fallback)
- 3-4 parallax background images
- Icon set for failed solutions

### Success Metrics
- Video plays within 2 seconds
- User scrolls past hero (>80%)
- User reaches CTA bridge (>50%)
- Click-through to Market page (>40%)

---

# PAGE 2: MARKET
## Route: `/market`

### Purpose
Prove the opportunity is massive ($5.6T). Show the gap no competitor fills. Make the market feel inevitable.

### SEO & Meta
```
Title: $5.6 Trillion Market Opportunity | Transformational Epicenter
Description: Four converging markets create the perfect opportunity. Medical wellness, luxury hospitality, biohacking, and plant medicine, we unify them all.
```

### Page Structure

#### Section 2.1: Market Size Hero
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [BACKGROUND: Abstract data visualization, subtle animation]               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                              THE MARKET                                     │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                                                                             │
│                          ╔═══════════════════╗                             │
│                          ║                   ║                             │
│                          ║     $5.6          ║                             │
│                          ║    TRILLION       ║                             │
│                          ║                   ║                             │
│                          ║  Global Wellness  ║                             │
│                          ║     Economy       ║                             │
│                          ║                   ║                             │
│                          ╚═══════════════════╝                             │
│                                                                             │
│                   Source: Global Wellness Institute, 2024                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Number counts up from $0 to $5.6T
- Box scales in from center
- Subtle particle effect in background

---

#### Section 2.2: Four Markets Visualization
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│               WE SERVE FOUR MARKETS SIMULTANEOUSLY                          │
│               ────────────────────────────────────                          │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                                                                      │  │
│  │     [ANIMATED VENN DIAGRAM / ORBITAL VISUALIZATION]                 │  │
│  │                                                                      │  │
│  │           ┌──────────────┐         ┌──────────────┐                 │  │
│  │          │   MEDICAL &   │       │   LUXURY      │                │  │
│  │          │  LONGEVITY    │───────│  WELLNESS     │                │  │
│  │          │   $27-33B     │       │  $850B-1.1T   │                │  │
│  │          │   12-15%      │       │   7-10%       │                │  │
│  │           └──────────────┘         └──────────────┘                 │  │
│  │                    \                 /                               │  │
│  │                     \     ┌───┐     /                               │  │
│  │                      \    │GAP│    /                                │  │
│  │                       \   └───┘   /                                 │  │
│  │                        \         /                                  │  │
│  │           ┌──────────────┐         ┌──────────────┐                 │  │
│  │          │  BIOHACKING   │       │    PLANT     │                │  │
│  │          │ & PERFORMANCE │───────│   MEDICINE   │                │  │
│  │          │   $24-33B     │       │    $3-5B     │                │  │
│  │          │   18-22%      │       │   15-20%     │                │  │
│  │           └──────────────┘         └──────────────┘                 │  │
│  │                                                                      │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│                   Click any segment to explore →                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Interaction:**
- Segments pulse gently
- Click reveals detailed segment panel (slide in from right)
- "GAP" in center glows to draw attention
- Hover shows growth rate animation

---

#### Section 2.3: The Gap (Dramatic Callout)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [BACKGROUND: Dark with spotlight effect]                                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                              THE GAP                                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│       ┌─────────────────────────────────────────────────────────────┐      │
│       │                                                             │      │
│       │    NO ONE offers all four pillars together.                 │      │
│       │                                                             │      │
│       │    Medical clinics won't touch plant medicine.              │      │
│       │    Luxury resorts lack clinical expertise.                  │      │
│       │    Plant medicine centers can't afford the infrastructure.  │      │
│       │    Biohacking is transactional, not transformational.       │      │
│       │                                                             │      │
│       │    ─────────────────────────────────────────────────────    │      │
│       │                                                             │      │
│       │    We're not competing in these markets.                    │      │
│       │    We're creating a new category that unifies them.         │      │
│       │                                                             │      │
│       └─────────────────────────────────────────────────────────────┘      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Text reveals line by line
- Each pain point has subtle ✗ that fades in
- Final statement has subtle glow

---

#### Section 2.4: Customer Profile
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        THE TRANSFORMATIONAL GUEST                           │
│                        ─────────────────────────                            │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  ┌─────────────────┐                                                  │ │
│  │  │                 │  "I've achieved everything I set out to.         │ │
│  │  │   [SILHOUETTE   │   And I've never felt more lost."                │ │
│  │  │    AVATAR]      │                                                  │ │
│  │  │                 │  ─────────────────────────────────────────       │ │
│  │  └─────────────────┘                                                  │ │
│  │                                                                       │ │
│  │  WHO THEY ARE:                                                        │ │
│  │  ─────────────                                                        │ │
│  │  • High-functioning executives, entrepreneurs, creators               │ │
│  │  • Ages 40-55, HNW/UHNW ($10M+ net worth)                            │ │
│  │  • Exhausted from constant performance                                │ │
│  │  • Carrying trauma, stress, burnout affecting everything              │ │
│  │  • Tried therapy, meditation, retreats, nothing stuck               │ │
│  │  • Willing to invest $50,000–$150,000+ for genuine transformation    │ │
│  │                                                                       │ │
│  │  ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │     THEY DON'T NEED ANOTHER RETREAT.                                 │ │
│  │     THEY NEED TO COME HOME TO THEMSELVES.                            │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Avatar fades in with slight zoom
- Quote typewriter effect
- Bullet points stagger in
- Final statement fades up with emphasis

---

#### Section 2.5: Why Competitors Can't Copy
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    WHY COMPETITORS CAN'T INTEGRATE                          │
│                    ───────────────────────────────                          │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │   COMPETITOR TYPE              WHY THEY WON'T INTEGRATE               │ │
│  │   ───────────────              ────────────────────────               │ │
│  │                                                                       │ │
│  │   Medical Clinics              Won't touch plant medicine,            │ │
│  │   (Clinique La Prairie,        regulatory & brand risk too high       │ │
│  │    SHA Wellness)                                                      │ │
│  │                                                                       │ │
│  │   ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │   Luxury Resorts               Lack medical expertise and             │ │
│  │   (Aman, Six Senses)           clinical infrastructure                │ │
│  │                                                                       │ │
│  │   ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │   Plant Medicine Centers       Can't attract luxury talent or         │ │
│  │   (Beond, Rythmia)             afford medical rigor                   │ │
│  │                                                                       │ │
│  │   ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │   Biohacking Centers           Wrong model, transactional,             │ │
│  │   (Upgrade Labs)               not transformational                   │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│        The punchline: We're not competing. We're creating the category.    │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│                        [ SEE HOW IT WORKS → ]                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Table rows slide in from left (staggered)
- Competitor names have subtle logos
- Punchline scales up slightly on reveal

### Components Required
- `MarketSizeHero.tsx` -Animated $5.6T counter
- `FourMarketsVenn.tsx` -Interactive market visualization
- `MarketSegmentPanel.tsx` -Slide-out detail panel
- `GapCallout.tsx` -Dramatic gap section
- `CustomerProfile.tsx` -Guest persona card
- `CompetitorTable.tsx` -Why they can't copy grid

### Data Requirements
```typescript
interface MarketSegment {
  name: string;
  size: string;        // "$27-33B"
  growth: string;      // "12-15%"
  description: string;
  offerings: string[];
  gap: string;         // What they're missing
}
```

### Success Metrics
- User explores at least 2 market segments
- Time on page > 60 seconds
- Click-through to Model page > 35%

---

# PAGE 3: MODEL
## Route: `/model`

### Purpose
Show exactly how the business works. The 8 segments. The guest journey. The programs and pricing. Make it feel comprehensive and proven.

### Page Structure

#### Section 3.1: Eight Segments Wheel
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        THE OPERATING MODEL                                  │
│                        ──────────────────                                   │
│                                                                             │
│                  Eight integrated segments. One transformation.             │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │                       ┌─────────────────┐                             │ │
│  │                      │    MEDICAL      │                             │ │
│  │                      │   OVERSIGHT     │                             │ │
│  │                       └────────┬────────┘                             │ │
│  │                                │                                       │ │
│  │    ┌──────────┐                │                ┌──────────┐          │ │
│  │   │ PRE-CARE │────────────────┼────────────────│POST-CARE │          │ │
│  │    └──────────┘                │                └──────────┘          │ │
│  │          \                     │                     /                 │ │
│  │           \            ┌───────────────┐            /                  │ │
│  │            \          │               │          /                   │ │
│  │  ┌──────────┐\        │   THE GUEST   │        /┌──────────┐         │ │
│  │ │ DIGITAL   │─\───────│               │───────/─│  PLANT   │         │ │
│  │ │ ECOSYSTEM │  \      │               │      /  │ MEDICINE │         │ │
│  │  └──────────┘   \      └───────────────┘     /   └──────────┘         │ │
│  │                  \            │            /                          │ │
│  │                   \           │           /                           │ │
│  │       ┌──────────┐ \          │          / ┌──────────┐               │ │
│  │      │   BIO-    │──\─────────┼─────────/──│  TRAUMA  │               │ │
│  │      │OPTIMIZATION│   \       │       /   │INTEGRATION│               │ │
│  │       └──────────┘     \      │      /     └──────────┘               │ │
│  │                         \     │     /                                 │ │
│  │                          \    │    /                                  │ │
│  │                           └───┴───┘                                   │ │
│  │                          HOSPITALITY                                  │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                      Click any segment to explore                          │ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Interaction:**
- Segments glow on hover
- Click opens detail panel
- Center "THE GUEST" pulses gently
- Connective lines animate on load

---

#### Section 3.2: Segment Detail Panels (8 total)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [SEGMENT 1: MEDICAL & SCIENTIFIC OVERSIGHT]                               │
│  ─────────────────────────────────────────────                             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  [ICON: Medical cross]                                             │   │
│  │                                                                     │   │
│  │  24/7 Medical Team On-Site                                         │   │
│  │  ───────────────────────────                                       │   │
│  │                                                                     │   │
│  │  ✓ Full medical team on-site around the clock                      │   │
│  │  ✓ Hospital-grade monitoring and equipment                         │   │
│  │  ✓ Cardiac screening mandatory before plant medicine               │   │
│  │  ✓ Outcome tracking with validated clinical scales                 │   │
│  │  ✓ JCI-accredited hospital partnership                             │   │
│  │                                                                     │   │
│  │  ─────────────────────────────────────────────────────────────     │   │
│  │                                                                     │   │
│  │  "Safety is not negotiable. Every guest receives                   │   │
│  │   the same medical rigor as a cardiac patient."                    │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  [Similar panels for segments 2-8...]                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 3.3: Guest Journey Timeline
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          THE GUEST JOURNEY                                  │
│                          ─────────────────                                  │
│                                                                             │
│      This is not a retreat. It's a full-arc transformation.               │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │   AWAKENING        IMMERSION         INTEGRATION      EMBODIMENT     │ │
│  │   ─────────        ─────────         ───────────      ──────────     │ │
│  │   Pre-Retreat      On-Site           Post-Retreat     Lifetime       │ │
│  │   4-8 weeks        7-28 days         3-12 months      Ongoing        │ │
│  │                                                                       │ │
│  │   ┌─────────┐     ┌─────────┐       ┌─────────┐      ┌─────────┐    │ │
│  │   │         │────▶│         │──────▶│         │─────▶│         │    │ │
│  │   │ PREPARE │     │TRANSFORM│       │INTEGRATE│      │  LIVE   │    │ │
│  │   │         │     │         │       │         │      │         │    │ │
│  │   │• Screen │     │• Heal   │       │• Anchor │      │• Alumni │    │ │
│  │   │• Ready  │     │• Reset  │       │• Grow   │      │• Return │    │ │
│  │   │• Intend │     │• Open   │       │• Apply  │      │• Mentor │    │ │
│  │   │         │     │         │       │         │      │         │    │ │
│  │   └─────────┘     └─────────┘       └─────────┘      └─────────┘    │ │
│  │                                                                       │ │
│  │   ════════════════════════════════════════════════════════════════   │ │
│  │   ●─────────────────●─────────────────●─────────────────●            │ │
│  │   Discovery         Arrival           Departure         Forever      │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Timeline draws itself left to right
- Phases fade in sequentially
- Arrows animate on connection
- Current phase highlights on scroll

---

#### Section 3.4: Program Pricing Cards
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          PROGRAM OFFERINGS                                  │
│                          ─────────────────                                  │
│                                                                             │
│                        Base Rate: $2,000/day                                │
│                        (All-Inclusive)                                      │
│                                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │             │  │             │  │             │  │             │       │
│  │   RESET     │  │INTERRUPTION │  │RECALIBRATION│  │TRANSFORMATION│       │
│  │   ───────   │  │  ─────────  │  │ ───────────│  │ ────────────│       │
│  │             │  │             │  │             │  │             │       │
│  │   7 days    │  │   14 days   │  │   21 days   │  │   28 days   │       │
│  │             │  │             │  │             │  │             │       │
│  │   $14,000   │  │   $28,000   │  │   $42,000   │  │   $56,000   │       │
│  │             │  │             │  │             │  │             │       │
│  │ ─────────── │  │ ─────────── │  │ ─────────── │  │ ─────────── │       │
│  │             │  │             │  │             │  │             │       │
│  │ First-time  │  │ ★ MOST     │  │Comprehensive│  │Complete arc │       │
│  │ journeyers  │  │   POPULAR   │  │ full reset  │  │Major life   │       │
│  │ Busy execs  │  │ Deep work   │  │             │  │transitions  │       │
│  │ NS reset    │  │             │  │             │  │             │       │
│  │             │  │             │  │             │  │             │       │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│  WHAT'S INCLUDED:                                                          │
│                                                                             │
│  ✓ Private villa accommodations          ✓ All bio-optimization modalities │
│  ✓ Michelin-quality functional meals     ✓ Daily therapeutic massage       │
│  ✓ Medical oversight 24/7                ✓ Post-care program (by duration) │
│  ✓ All therapeutic sessions              ✓ Lifetime app & community access │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Cards slide up on scroll (staggered)
- "MOST POPULAR" badge pulses
- Prices count up from $0
- Included list reveals with checkmarks

### Components Required
- `EightSegmentsWheel.tsx` -Interactive segment diagram
- `SegmentDetailPanel.tsx` -Expandable segment info
- `GuestJourneyTimeline.tsx` -Animated 4-phase timeline
- `ProgramCard.tsx` -Pricing card with hover effects
- `IncludedList.tsx` -Animated checklist

---

# PAGE 4: EXPANSION
## Route: `/expansion`

### Purpose
Show this isn't one property, it's 30 locations worldwide. Create excitement about the scale. Make investors see the global vision.

### Page Structure

#### Section 4.1: Globe Hero
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        GLOBAL EXPANSION                                     │
│                        ────────────────                                     │
│                                                                             │
│                    30 Epicenters Worldwide by Year 10                       │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │                                                                       │ │
│  │                      [3D ROTATING GLOBE]                              │ │
│  │                                                                       │ │
│  │                          ⬤ Mexico                                     │ │
│  │                           \                                           │ │
│  │                            ⬤ Jamaica                                  │ │
│  │                             \                                         │ │
│  │                    ⬤ Portugal                                         │ │
│  │                       \                                               │ │
│  │                        ⬤ South Africa                                 │ │
│  │                                                                       │ │
│  │                      (Markers pulse, globe rotates slowly)            │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                       Click any location to explore                        │
│                                                                             │
│              ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐               │
│              │ TIER 1 │  │ TIER 2 │  │ TIER 3 │  │ TIER 4 │               │
│              │   3    │  │   7    │  │  12    │  │   8+   │               │
│              └────────┘  └────────┘  └────────┘  └────────┘               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Interaction:**
- Globe auto-rotates slowly
- Click marker → globe spins to location
- Popup shows location details
- Tier filter buttons at bottom
- Drag to manually rotate

---

#### Section 4.2: Expansion Timeline
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        EXPANSION ROADMAP                                    │
│                        ─────────────────                                    │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │   YEAR 1              YEAR 2              YEAR 3-4         YEAR 5-10  │ │
│  │   ──────              ──────              ────────         ─────────  │ │
│  │   FOUNDATION          OPTIMIZATION        EXPANSION        NETWORK    │ │
│  │                                                                       │ │
│  │   ┌─────────┐        ┌─────────┐         ┌─────────┐      ┌─────────┐│ │
│  │   │    1    │        │    1    │         │   3-5   │      │   30+   ││ │
│  │   │ Mexico  │───────▶│ Refined │────────▶│ Europe  │─────▶│ Global  ││ │
│  │   │Flagship │        │Protocols│         │ Asia    │      │ Network ││ │
│  │   └─────────┘        └─────────┘         │ Americas│      └─────────┘│ │
│  │                                          └─────────┘                  │ │
│  │                                                                       │ │
│  │   • Launch Q.R.      • Data-driven       • Regional      • 30+ sites │ │
│  │     flagship           refinement          hubs          • Research  │ │
│  │   • Establish        • Build             • Training        institute │ │
│  │     protocols          reputation          academy       • Category  │ │
│  │   • Platform MVP     • Expansion         • Licensing       leader    │ │
│  │                        playbook            model                      │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 4.3: Location Tier Cards
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  TIER 1: FLAGSHIP LOCATIONS                                                │
│  ─────────────────────────────                                             │
│                                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐ │
│  │                     │  │                     │  │                     │ │
│  │  🇲🇽 QUINTANA ROO    │  │  🇵🇹 ALENTEJO       │  │  🇿🇦 CAPE TOWN      │ │
│  │     MEXICO          │  │     PORTUGAL        │  │     SOUTH AFRICA    │ │
│  │                     │  │                     │  │                     │ │
│  │  Score: 94/100      │  │  Score: 86/100      │  │  Score: 82/100      │ │
│  │  Status: ACTIVE     │  │  Status: PLANNED    │  │  Status: PLANNED    │ │
│  │                     │  │                     │  │                     │ │
│  │  ✓ Ibogaine legal   │  │  ✓ Decriminalized   │  │  ✓ Ibogaine legal   │ │
│  │  ✓ 2-4 hr US flights│  │  ✓ EU gateway       │  │  ✓ Africa gateway   │ │
│  │  ✓ JCI hospital     │  │  ✓ Luxury infra     │  │  ✓ Medical tourism  │ │
│  │                     │  │                     │  │                     │ │
│  │  [EXPLORE →]        │  │  [EXPLORE →]        │  │  [EXPLORE →]        │ │
│  │                     │  │                     │  │                     │ │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘ │
│                                                                             │
│  [Similar cards for TIER 2, 3, 4...]                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 4.4: Regulatory Landscape
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    MEDICINE LEGALITY BY REGION                              │
│                    ───────────────────────────                              │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  ● IBOGAINE LEGAL                                                     │ │
│  │    Mexico, Portugal (decrim), South Africa, Bahamas, St. Vincent      │ │
│  │                                                                       │ │
│  │  ● PSILOCYBIN LEGAL                                                   │ │
│  │    Jamaica (LEGAL), Netherlands (truffles), Australia (research)      │ │
│  │                                                                       │ │
│  │  ● AYAHUASCA ACCESSIBLE                                               │ │
│  │    Peru (legal), Costa Rica (grey), Portugal (grey)                   │ │
│  │                                                                       │ │
│  │  ● BIO-OPTIMIZATION ONLY                                              │ │
│  │    Singapore, Dubai, Switzerland (premium longevity market)           │ │
│  │                                                                       │ │
│  │  ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │  This multi-jurisdictional strategy creates regulatory resilience.   │ │
│  │  If one market changes, others continue operating.                   │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                     [ VIEW FIRST PROPERTIES → ]                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Components Required
- `Globe3D.tsx` -React-Globe.gl implementation
- `LocationMarker.tsx` -Clickable map marker
- `LocationPopup.tsx` -Marker detail popup
- `ExpansionTimeline.tsx` -Roadmap visualization
- `LocationTierCard.tsx` -Location summary card
- `RegulatoryLegend.tsx` -Legal status display

---

# PAGE 5: PROPERTIES
## Route: `/properties`

### Purpose
Deep dive into the Mexico properties we're evaluating. Show the rigorous analysis. Present the recommendation.

### Page Structure

#### Section 5.1: Mexico Introduction
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [HERO IMAGE: Aerial Quintana Roo coastline]                               │
│                                                                             │
│                      QUINTANA ROO, MEXICO                                   │
│                      First Epicenter Location                               │
│                      ─────────────────────                                  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │   WHY MEXICO FIRST:                                                   │ │
│  │                                                                       │ │
│  │   ✓ Ibogaine legal and established                                   │ │
│  │   ✓ 2-4 hour flight from major US cities                             │ │
│  │   ✓ Strong medical infrastructure (Galenia Hospital)                 │ │
│  │   ✓ Proven luxury wellness market                                    │ │
│  │   ✓ Regulatory clarity                                               │ │
│  │                                                                       │ │
│  │   ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │   We've evaluated 4 properties. Here's what we found.                │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5.2: Property Grid
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────┐     ┌─────────────────────────────┐       │
│  │                             │     │                             │       │
│  │  [PROPERTY IMAGE]           │     │  [PROPERTY IMAGE]           │       │
│  │                             │     │                             │       │
│  │  HOTEL ALEA TULUM           │     │  HACIENDA CARACOL           │       │
│  │  ─────────────────          │     │  ─────────────────          │       │
│  │                             │     │                             │       │
│  │  📍 Bahía de Solimán        │     │  📍 Soliman Bay             │       │
│  │  💰 $6.4M asking            │     │  💰 $4.9M asking            │       │
│  │  🛏️ 21 rooms (17 beds)      │     │  🛏️ 10 rooms (8 beds)       │       │
│  │  📊 75/100                  │     │  📊 76/100                  │       │
│  │  💵 $19.04M total           │     │  💵 $13.91M total           │       │
│  │  📈 29.54% IRR              │     │  📈 18% IRR                 │       │
│  │  🎯 HNW Market              │     │  🎯 U-HNW Market            │       │
│  │  💎 $62.1M 5yr rev          │     │  💎 $32.3M 5yr rev          │       │
│  │                             │     │                             │       │
│  │  ✅ SHORTLIST               │     │  ⏸️ HOLD                    │       │
│  │  (Top Candidate)            │     │  (Pending Medical)          │       │
│  │                             │     │                             │       │
│  │  [VIEW CUT SHEET →]         │     │  [VIEW CUT SHEET →]         │       │
│  │                             │     │                             │       │
│  └─────────────────────────────┘     └─────────────────────────────┘       │
│                                                                             │
│  ┌─────────────────────────────┐     ┌─────────────────────────────┐       │
│  │                             │     │                             │       │
│  │  MINI HOTEL CANCÚN          │     │  CASA SUEÑO DE MAR          │       │
│  │  ─────────────────          │     │  ─────────────────          │       │
│  │                             │     │                             │       │
│  │  📍 Cancún, Q.R.            │     │  📍 Akumal/Tulum CC         │       │
│  │  💰 $1.1M asking            │     │  💰 $3.99M asking           │       │
│  │  🛏️ 20 rooms (16 beds)      │     │  🛏️ 7 rooms (6 beds)        │       │
│  │  💵 $10.52M total           │     │  💵 $11.48M total           │       │
│  │  📈 -15% IRR                │     │  📈 2% IRR                  │       │
│  │  ⚠️ Brand mismatch          │     │  ⚠️ Zoning blocked          │       │
│  │                             │     │                             │       │
│  │  ❌ PASS (Urban Location)   │     │  ❌ PASS (Residential)      │       │
│  │                             │     │                             │       │
│  │  [VIEW ANALYSIS →]          │     │  [VIEW ANALYSIS →]          │       │
│  │                             │     │                             │       │
│  └─────────────────────────────┘     └─────────────────────────────┘       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Animation:**
- Cards animate in on scroll (staggered)
- Status badges pulse gently
- Hover: slight lift, shadow increase
- SHORTLIST card has subtle gold border

---

#### Section 5.3: Comparison Matrix
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    QUICK COMPARISON MATRIX                                  │
│                    ─────────────────────                                    │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  Metric          │ Hotel Alea │ Hacienda │ Mini Hotel │ Casa Sueño  │ │
│  │  ───────────────────────────────────────────────────────────────────  │ │
│  │  Asking Price    │   $6.4M    │  $4.9M   │   $1.1M    │   $3.99M    │ │
│  │  Total Rooms     │     21     │    10    │     20     │      7      │ │
│  │  Treatment Beds  │     17     │     8    │     16     │      6      │ │
│  │  Total Investment│  $19.04M   │ $13.91M  │  $10.52M   │  $11.48M    │ │
│  │  Cost/Room       │   $906K    │  $1.39M  │   $526K    │   $1.64M    │ │
│  │  Target Market   │    HNW     │   U-HNW  │    HNW     │    HNW      │ │
│  │  Avg Daily Rate  │  $2,321    │  $3,157  │  $2,321    │   $2,321    │ │
│  │  5-Year IRR      │  29.54%    │   18%    │   -15%     │     2%      │ │
│  │  MOIC            │   2.61x    │  1.85x   │   0.65x    │   1.05x     │ │
│  │  5-Year Revenue  │  $62.1M    │ $32.3M   │    N/A     │    N/A      │ │
│  │  Score           │   75/100   │  76/100  │   79/100   │   66/100    │ │
│  │  ───────────────────────────────────────────────────────────────────  │ │
│  │  VERDICT         │ ✅ SHORTLIST│ ⏸️ HOLD  │ ❌ PASS    │ ❌ PASS     │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│                       [DOWNLOAD COMPARISON CSV]                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Interaction:**
- Column headers are sortable
- Click row → expand to see more detail
- Hover row → highlight
- Sticky header on scroll

### Components Required
- `PropertyCard.tsx` -Summary card with metrics
- `PropertyGrid.tsx` -2x2 responsive grid
- `ComparisonMatrix.tsx` -Sortable data table
- `PropertyDetail.tsx` -Full cut sheet page

---

# PAGE 5a: PROPERTY CUT SHEET (Dynamic)
## Route: `/properties/[slug]`

### Purpose
Comprehensive single-property view with all details an investor needs. Export-ready.

### Page Structure

#### Section 5a.1: Hero
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [FULL-WIDTH PROPERTY HERO IMAGE]                                          │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  ✅ SHORTLIST                                                         │ │
│  │                                                                       │ │
│  │  HOTEL ALEA TULUM                                                     │ │
│  │  ═══════════════════                                                  │ │
│  │                                                                       │ │
│  │  Bahía de Solimán, Tulum, Quintana Roo, Mexico                       │ │
│  │                                                                       │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                 │ │
│  │  │  $6.4M   │ │ 21 Rooms │ │  75/100  │ │ 29.54%   │                 │ │
│  │  │  Asking  │ │  17 Beds │ │  Score   │ │   IRR    │                 │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘                 │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  [GALLERY THUMBNAILS - Click to expand]                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5a.2: Pass/Fail Gates
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          PASS/FAIL GATES                                    │
│                          ───────────────                                    │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  ✅ JCI Hospital Access        -70 min to Galenia (Cancún)           │ │
│  │  ✅ Commercial Zoning          -Verified operational                 │ │
│  │  ✅ Utilities Available        -Full infrastructure                  │ │
│  │  ⚠️ Airport Access             -2 hours from CUN (TQO closer)        │ │
│  │  ✅ Privacy & Security         -Gated, private beach                 │ │
│  │  ✅ Natural Environment        -Direct ocean access                  │ │
│  │  ⚠️ Existing Structures        -Full renovation required             │ │
│  │  ✅ Legal Status               -Clear title                          │ │
│  │  ⚠️ Price Alignment            -Above comparable market              │ │
│  │                                                                       │ │
│  │  ─────────────────────────────────────────────────────────────────   │ │
│  │                                                                       │ │
│  │  PASS: 6/9    CONDITIONAL: 3/9    FAIL: 0/9                          │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5a.3: Scoring Radar Chart
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          SCORING BREAKDOWN                                  │
│                          ─────────────────                                  │
│                                                                             │
│  ┌─────────────────────────────────┬───────────────────────────────────┐   │
│  │                                 │                                   │   │
│  │         [RADAR CHART]           │  Category           Score        │   │
│  │                                 │  ────────────────────────────    │   │
│  │         Medical ●               │  Medical Infrastructure  10/20   │   │
│  │           /    \                │  Location & Access       11/15   │   │
│  │          /      \               │  Property & Building     14/15   │   │
│  │    Privacy ●────●── Location    │  Privacy & Security      12/12   │   │
│  │          \      /               │  Regulatory & Legal       7/10   │   │
│  │           \    /                │  Infrastructure           7/8    │   │
│  │         Natural ●               │  Financial                4/8    │   │
│  │                                 │  Natural Environment      6/6    │   │
│  │                                 │  Risk Factors             2/4    │   │
│  │                                 │  Strategic Fit            2/2    │   │
│  │                                 │  ────────────────────────────    │   │
│  │                                 │  TOTAL                   75/100  │   │
│  │                                 │                                   │   │
│  └─────────────────────────────────┴───────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5a.4: Financial Summary
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        FINANCIAL SUMMARY                                    │
│                        ─────────────────                                    │
│                                                                             │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐              │
│  │                 │ │                 │ │                 │              │
│  │   $19,036,750   │ │    $906,512     │ │     29.54%      │              │
│  │   ─────────────│ │   ─────────────│ │   ─────────────│              │
│  │   Total Project │ │   Cost Per      │ │   5-Year IRR    │              │
│  │      Cost       │ │     Room        │ │   (Base Case)   │              │
│  │                 │ │                 │ │                 │              │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘              │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │   COST BREAKDOWN                                                    │   │
│  │   ──────────────                                                    │   │
│  │                                                                     │   │
│  │   Acquisition:        $6,774,000   ████████████████░░░░░  36%       │   │
│  │   Renovation:         $5,350,000   ████████████░░░░░░░░░  28%       │   │
│  │   Equipment:          $1,600,000   █████░░░░░░░░░░░░░░░░   8%       │   │
│  │   Soft Costs:         $3,935,000   ██████████░░░░░░░░░░░  21%       │   │
│  │   Contingency:        $1,377,750   ████░░░░░░░░░░░░░░░░░   7%       │   │
│  │   ─────────────────────────────────────────────────────────────    │   │
│  │   TOTAL:             $19,036,750                                    │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│  SCENARIO ANALYSIS                                                         │
│  ─────────────────                                                         │
│                                                                             │
│  [Toggle: Conservative / Base / Aggressive]                                │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │   5-YEAR REVENUE PROJECTION                                          │ │
│  │   ─────────────────────────                                          │ │
│  │                                                                       │ │
│  │   $15M ┤                                           ▲ $15.3M          │ │
│  │        │                                        ╱                     │ │
│  │   $12M ┤                                     ╱                        │ │
│  │        │                                  ╱                           │ │
│  │    $9M ┤                               ╱                              │ │
│  │        │                            ╱                                 │ │
│  │    $6M ┤                         ╱                                    │ │
│  │        │                      ╱                                       │ │
│  │    $3M ┤                   ╱                                          │ │
│  │        │                ●  $7.6M                                      │ │
│  │    $0M ┼───────────────────────────────────────────────────────      │ │
│  │            Y1       Y2       Y3       Y4       Y5                    │ │
│  │                                                                       │ │
│  │   5-Year Total: $62,109,066                                          │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5a.5: Strengths & Concerns
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌───────────────────────────────┐  ┌───────────────────────────────────┐  │
│  │                               │  │                                   │  │
│  │   KEY STRENGTHS               │  │   KEY CONCERNS                    │  │
│  │   ─────────────               │  │   ────────────                    │  │
│  │                               │  │                                   │  │
│  │   ✓ Perfect brand alignment   │  │   ⚠️ Medical infrastructure gap   │  │
│  │     Eco-boutique matches      │  │     JCI hospital 70+ min away    │  │
│  │     healing positioning       │  │     No cardiac cath <30 min      │  │
│  │                               │  │                                   │  │
│  │   ✓ Exceptional natural       │  │   ⚠️ Premium pricing              │  │
│  │     setting: jungle,          │  │     $305K/room acquisition vs    │  │
│  │     mangrove, beach           │  │     $55K for Cancún property     │  │
│  │                               │  │                                   │  │
│  │   ✓ Maximum privacy           │  │   ⚠️ Hurricane/flood exposure    │  │
│  │     Secluded with natural     │  │     Coastal mangrove location    │  │
│  │     barriers                  │  │     increases natural risks      │  │
│  │                               │  │                                   │  │
│  │   ✓ Operating hotel           │  │                                   │  │
│  │     Established infra,        │  │                                   │  │
│  │     permits, staff            │  │                                   │  │
│  │                               │  │                                   │  │
│  │   ✓ Adequate capacity         │  │                                   │  │
│  │     21 rooms meets Tier 1     │  │                                   │  │
│  │     flagship requirements     │  │                                   │  │
│  │                               │  │                                   │  │
│  └───────────────────────────────┘  └───────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### Section 5a.6: Verdict & Next Steps
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                              VERDICT                                        │
│                              ───────                                        │
│                                                                             │
│  ╔═══════════════════════════════════════════════════════════════════════╗ │
│  ║                                                                       ║ │
│  ║   ✅ SHORTLIST -Top Candidate                                        ║ │
│  ║                                                                       ║ │
│  ║   Hotel Alea Tulum is our recommended first Transformational          ║ │
│  ║   Epicenter location. The property offers the best combination        ║ │
│  ║   of brand alignment, capacity, natural environment, and              ║ │
│  ║   financial returns.                                                  ║ │
│  ║                                                                       ║ │
│  ║   NEXT STEPS:                                                         ║ │
│  ║   ─────────────                                                       ║ │
│  ║   □ Verify Hospital Joya Tulum cardiac capabilities                   ║ │
│  ║   □ Confirm helipad permitting feasibility                            ║ │
│  ║   □ Conduct detailed title search                                     ║ │
│  ║   □ Negotiate letter of intent                                        ║ │
│  ║   □ Complete full due diligence                                       ║ │
│  ║                                                                       ║ │
│  ╚═══════════════════════════════════════════════════════════════════════╝ │
│                                                                             │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐      │
│  │ [DOWNLOAD PDF]    │  │ [DOWNLOAD CSV]    │  │ [BACK TO LIST]    │      │
│  └───────────────────┘  └───────────────────┘  └───────────────────┘      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Components Required
- `PropertyHero.tsx` -Hero with gallery
- `PassFailGates.tsx` -Checklist visualization
- `ScoringRadar.tsx` -Radar chart (Recharts)
- `FinancialSummary.tsx` -Cost breakdown
- `RevenueChart.tsx` -Projection chart
- `ScenarioToggle.tsx` -Scenario selector
- `StrengthsConcerns.tsx` -Two-column comparison
- `VerdictSection.tsx` -Final recommendation
- `PDFExport.tsx` -Generate downloadable PDF

---

# PAGES 6-16: ABBREVIATED SPECIFICATIONS

Due to document length, the remaining pages follow similar detailed patterns:

---

## PAGE 6: FINANCIALS (`/financials`)

### Key Sections
1. **Metrics Hero** -$30K/guest, 70% occupancy, 29%+ IRR
2. **Revenue Trajectory Chart** -5-year projection with scenario toggle
3. **Investment Strategy Comparison** -Single vs dual property
4. **Unit Economics Breakdown** -Per-guest analysis
5. **Scenario Analysis Table** -Conservative/Base/Aggressive

### Key Components
- `MetricsHero.tsx`
- `RevenueTrajectory.tsx`
- `StrategyComparison.tsx`
- `UnitEconomicsCards.tsx`
- `ScenarioTable.tsx`

---

## PAGE 7: TEAM (`/team`)

### Key Sections
1. **Founding Team Hero** -Photos, bios, backgrounds
2. **Key Hires** -Positions being filled
3. **Advisory Board** -Planned advisors
4. **Culture & Values** -Team philosophy
5. **Join Us CTA** -For potential team members

### Key Components
- `TeamHero.tsx`
- `FounderCard.tsx`
- `KeyHireCard.tsx`
- `AdvisorGrid.tsx`
- `CultureSection.tsx`

---

## PAGE 8: RISKS (`/risks`)

### Key Sections
1. **Risk Matrix Hero** -"We've thought through everything"
2. **Five Risk Cards** -Interactive expandable cards
3. **Mitigation Strategies** -Detailed responses
4. **Insurance Coverage** -Summary of protections
5. **Crisis Protocol** -How we respond

### Key Components
- `RiskMatrixHero.tsx`
- `RiskCard.tsx`
- `MitigationPanel.tsx`
- `InsuranceSummary.tsx`

---

## PAGE 9: MOAT (`/moat`)

### Key Sections
1. **Five Moats Visualization** -Layered defense diagram
2. **Moat Details** -Expandable explanations
3. **Competitor Comparison Matrix** -4-pillar grid
4. **Category Creation** -Why we're not competing
5. **Defensibility Timeline** -How moats compound

### Key Components
- `MoatVisualization.tsx`
- `MoatCard.tsx`
- `CompetitorMatrix.tsx`
- `CategoryCreation.tsx`

---

## PAGE 10: EXIT (`/returns`)

### Key Sections
1. **Return Pathways Hero** -3 paths to liquidity
2. **Strategic Acquisition** -Most likely path
3. **IPO/SPAC Path** -Ambitious scenario
4. **Dividend Recapitalization** -Ongoing returns
5. **Comparable Exits** -Industry examples
6. **Projected Returns Calculator** -Interactive

### Key Components
- `ReturnPathways.tsx`
- `ExitCard.tsx`
- `ComparableExits.tsx`
- `ReturnsCalculator.tsx`

---

## PAGE 11: TIMELINE (`/timeline`)

### Key Sections
1. **24-Month Roadmap** -Interactive Gantt chart
2. **Quarterly Milestones** -Key deliverables
3. **Success Metrics Dashboard** -KPIs
4. **Dependencies** -What must happen when
5. **Year 2-5 Vision** -Longer term roadmap

### Key Components
- `GanttRoadmap.tsx`
- `MilestoneCard.tsx`
- `KPIDashboard.tsx`
- `DependencyMap.tsx`

---

## PAGE 12: LEGAL (`/legal`)

### Key Sections
1. **Corporate Structure** -Org chart visualization
2. **Investment Vehicle** -SAFE/Equity details
3. **Regulatory Framework** -Why Mexico is legal
4. **Compliance Checklist** -All requirements
5. **Insurance Coverage** -Full list
6. **Legal Counsel** -Team members

### Key Components
- `CorporateStructure.tsx`
- `InvestmentVehicle.tsx`
- `RegulatoryFramework.tsx`
- `ComplianceChecklist.tsx`
- `InsuranceGrid.tsx`

---

## PAGE 13: OUTCOMES (`/outcomes`)

### Key Sections
1. **Measurement Philosophy** -"We prove it works"
2. **Clinical Scales** -PCL-5, PHQ-9, GAD-7 explainers
3. **Biometric Tracking** -HRV, sleep, blood panels
4. **Measurement Timeline** -8 checkpoints
5. **Outcome Targets** -What success looks like
6. **Research Partnerships** -Academic connections

### Key Components
- `ClinicalScales.tsx`
- `BiometricCards.tsx`
- `MeasurementTimeline.tsx`
- `OutcomeTargets.tsx`

---

## PAGE 14: DATA ROOM (`/data-room`)

### Key Sections
1. **Data Room Overview** -What's available
2. **Folder Navigation** -8 categories
3. **Document List** -With descriptions
4. **Access Request Form** -Password protection
5. **Download Tracking** -Analytics

### Key Components
- `DataRoomNav.tsx`
- `FolderCard.tsx`
- `DocumentList.tsx`
- `AccessRequestForm.tsx`

---

## PAGE 15: FAQ (`/faq`)

### Key Sections
1. **Search Bar** -Find answers quickly
2. **Category Filters** -Legal, Financial, Operational, etc.
3. **FAQ Accordion** -15+ questions
4. **Still Have Questions** -Contact CTA
5. **Quick Links** -To relevant sections

### Key Components
- `FAQSearch.tsx`
- `FAQAccordion.tsx`
- `FAQCategory.tsx`
- `ContactCTA.tsx`

---

## PAGE 16: INVEST (`/invest`)

### Key Sections
1. **The Ask Hero** -$5,000,000
2. **Use of Funds Visualization** -Allocation chart
3. **Investment Thesis** -6 reasons
4. **Deal Terms** -Summary
5. **Next Steps CTA** -Request access, schedule call
6. **Contact Information** -Multiple channels

### Key Components
- `TheAskHero.tsx`
- `UseOfFundsChart.tsx`
- `InvestmentThesis.tsx`
- `DealTerms.tsx`
- `NextStepsCTA.tsx`
- `ContactForm.tsx`

---

# TECHNICAL REQUIREMENTS

## Performance Targets
- Lighthouse Score: 90+ all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 500KB (gzipped)

## Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation throughout
- Screen reader optimized
- Color contrast ratios met
- Focus indicators visible

## Browser Support
- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Analytics & Tracking
- Page views per section
- Time on page
- Scroll depth
- CTA clicks
- Data room access requests
- Meeting scheduler conversions

---

*Document Version: 1.0*
*Created: January 2026*
*Companion to: TECHNICAL_PLAN.md v3.0*
*Purpose: Complete page-by-page design and development specifications*
