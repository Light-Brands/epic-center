# Transformational Epicenter
## Investment Platform - Design System v1.0

---

## Brand Essence

**Transformational Epicenter** represents the intersection of:
- **Medical Excellence** -Trust, precision, safety
- **Luxury Hospitality** -Warmth, care, sophistication
- **Spiritual Depth** -Reverence, meaning, transformation
- **Natural Healing** -Organic, grounded, alive

The design must feel **premium without pretension**, **clinical without coldness**, **spiritual without woo**.

---

## Color Palette

### Primary Colors

```
OCEAN DEEP          EARTH GOLD           HEALING GREEN
#0A1628             #C4A77D              #2D5A4A
━━━━━━━━━━          ━━━━━━━━━━           ━━━━━━━━━━
Primary             Accent               Secondary
backgrounds,        CTAs, highlights,    Nature, growth,
headers, text       premium touches      wellness

RGB: 10, 22, 40     RGB: 196, 167, 125   RGB: 45, 90, 74
```

### Secondary Colors

```
SOFT WHITE          WARM SAND            MIST GREY
#F8F6F3             #E8E2D9              #6B7280
━━━━━━━━━━          ━━━━━━━━━━           ━━━━━━━━━━
Backgrounds,        Cards, sections,     Body text,
breathing room      soft backgrounds     secondary info

RGB: 248, 246, 243  RGB: 232, 226, 217   RGB: 107, 114, 128
```

### Accent Colors

```
GOLD HIGHLIGHT      SUCCESS GREEN        ALERT AMBER        ERROR RED
#D4AF37             #22C55E              #F59E0B            #EF4444
━━━━━━━━━━          ━━━━━━━━━━           ━━━━━━━━━━         ━━━━━━━━━━
Premium emphasis,   Pass states,         Warnings,          Errors,
numbers, CTAs       confirmations        cautions           failures
```

### Gradients

```css
/* Hero Gradient - Dark to Light */
.gradient-hero {
  background: linear-gradient(
    180deg,
    #0A1628 0%,
    #1A2F4A 50%,
    #2D5A4A 100%
  );
}

/* Warm Glow - For reveals */
.gradient-warm {
  background: linear-gradient(
    135deg,
    #C4A77D 0%,
    #D4AF37 50%,
    #E8C547 100%
  );
}

/* Soft Overlay - For text on images */
.gradient-overlay {
  background: linear-gradient(
    0deg,
    rgba(10, 22, 40, 0.9) 0%,
    rgba(10, 22, 40, 0.5) 50%,
    rgba(10, 22, 40, 0) 100%
  );
}
```

---

## Typography

### Font Stack

```css
/* Headlines - Elegant, editorial */
font-family: 'Playfair Display', Georgia, serif;

/* Body - Clean, readable */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Accents - Modern, technical */
font-family: 'Space Grotesk', 'SF Mono', monospace;
```

### Type Scale

```
Display      │ 72px / 80px   │ Playfair Display │ 600   │ Hero headlines
═════════════════════════════════════════════════════════════════════════
H1           │ 48px / 56px   │ Playfair Display │ 600   │ Page titles
H2           │ 36px / 44px   │ Playfair Display │ 600   │ Section headers
H3           │ 24px / 32px   │ Inter            │ 600   │ Subsection headers
H4           │ 20px / 28px   │ Inter            │ 600   │ Card titles
H5           │ 18px / 24px   │ Inter            │ 600   │ Small headers
H6           │ 16px / 20px   │ Inter            │ 600   │ Labels
─────────────────────────────────────────────────────────────────────────
Body Large   │ 18px / 28px   │ Inter            │ 400   │ Lead paragraphs
Body         │ 16px / 24px   │ Inter            │ 400   │ Default text
Body Small   │ 14px / 20px   │ Inter            │ 400   │ Secondary text
Caption      │ 12px / 16px   │ Inter            │ 400   │ Captions, footnotes
─────────────────────────────────────────────────────────────────────────
Accent       │ 14px / 20px   │ Space Grotesk    │ 500   │ Stats, metrics
Mono         │ 14px / 20px   │ Space Grotesk    │ 400   │ Data, code
```

### Type Styles

```css
/* Display Quote */
.text-display-quote {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

/* Stat Number */
.text-stat {
  font-family: 'Space Grotesk', monospace;
  font-size: 56px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.03em;
}

/* Button Text */
.text-button {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
```

---

## Spacing System

### Base Unit: 4px

```
Space 1    │ 4px    │ 0.25rem   │ Tight internal spacing
Space 2    │ 8px    │ 0.5rem    │ Small gaps
Space 3    │ 12px   │ 0.75rem   │ Default internal padding
Space 4    │ 16px   │ 1rem      │ Standard spacing
Space 5    │ 20px   │ 1.25rem   │ Comfortable gaps
Space 6    │ 24px   │ 1.5rem    │ Section padding
Space 8    │ 32px   │ 2rem      │ Large gaps
Space 10   │ 40px   │ 2.5rem    │ Component separation
Space 12   │ 48px   │ 3rem      │ Section margins
Space 16   │ 64px   │ 4rem      │ Major section gaps
Space 20   │ 80px   │ 5rem      │ Page section breaks
Space 24   │ 96px   │ 6rem      │ Hero spacing
Space 32   │ 128px  │ 8rem      │ Maximum whitespace
```

### Container Widths

```css
.container-sm   { max-width: 640px; }   /* Text-heavy content */
.container-md   { max-width: 768px; }   /* Readable content */
.container-lg   { max-width: 1024px; }  /* Standard content */
.container-xl   { max-width: 1280px; }  /* Wide content */
.container-full { max-width: 1440px; }  /* Full-width sections */
```

---

## Component Library

### Buttons

#### Primary Button
```
┌─────────────────────────────────────┐
│                                     │
│        EXPLORE THE OPPORTUNITY      │
│                                     │
└─────────────────────────────────────┘

Background: #C4A77D (Earth Gold)
Text: #0A1628 (Ocean Deep)
Padding: 16px 32px
Border-radius: 4px
Font: Inter 16px 600 uppercase
Letter-spacing: 0.02em

Hover: Background #D4AF37, scale 1.02
Active: scale 0.98
```

#### Secondary Button
```
┌─────────────────────────────────────┐
│                                     │
│          VIEW CUT SHEET →           │
│                                     │
└─────────────────────────────────────┘

Background: transparent
Border: 1px solid #C4A77D
Text: #C4A77D
Padding: 16px 32px

Hover: Background rgba(196, 167, 125, 0.1)
```

#### Ghost Button
```
          LEARN MORE →

Text: #C4A77D
Underline on hover
Arrow slides right on hover
```

### Cards

#### Property Card
```
┌─────────────────────────────────────────────┐
│                                             │
│  [IMAGE - 16:9 ratio, object-fit: cover]   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ✅ SHORTLIST                   ← Status badge
│                                             │
│  HOTEL ALEA TULUM               ← H4
│  ───────────────────────────               │
│                                             │
│  📍 Bahía de Solimán            ← Body small
│                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐    ← Metric chips
│  │$6.4M │ │21 rm │ │29% IRR│              │
│  └──────┘ └──────┘ └──────┘              │
│                                             │
│  [VIEW CUT SHEET →]             ← Ghost button
│                                             │
└─────────────────────────────────────────────┘

Background: #F8F6F3
Border-radius: 8px
Shadow: 0 4px 6px rgba(10, 22, 40, 0.1)
Hover: Shadow 0 8px 25px rgba(10, 22, 40, 0.15), translateY(-4px)
```

#### Metric Card
```
┌─────────────────────────────┐
│                             │
│         $30,000             │  ← Space Grotesk 48px
│         ─────────           │
│     Avg Revenue             │  ← Inter 14px
│       Per Guest             │
│                             │
└─────────────────────────────┘

Background: rgba(196, 167, 125, 0.1)
Border: 1px solid rgba(196, 167, 125, 0.3)
Border-radius: 8px
Padding: 24px
Text-align: center
```

#### Risk Card
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  REGULATORY RISK                        LIKELIHOOD: ⬤⬤○    │
│  ─────────────────                                         │
│                                                             │
│  Risk: Regulatory change in key jurisdictions              │
│                                                             │
│  [▼ EXPAND FOR MITIGATION]                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

─── EXPANDED STATE ───

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  REGULATORY RISK                        LIKELIHOOD: ⬤⬤○    │
│  ─────────────────                                         │
│                                                             │
│  Risk: Regulatory change in key jurisdictions              │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  MITIGATION:                                               │
│                                                             │
│  ✓ Multi-country strategy (30 locations)                   │
│  ✓ Diversified medicine offerings                          │
│  ✓ Government relationships in each market                 │
│  ✓ Wellness-only programs as fallback                      │
│                                                             │
│  [▲ COLLAPSE]                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Navigation

#### Header (Scrolled)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [LOGO]                                              [SECTIONS ▼] [INVEST] │
│                                                                             │
│  ════════════════════════════════════════════════════════════════════════  │
│  ●────●────●────●────●────●────●────●────●────●────●────●────●────●────○    │
│                          ↑                                                  │
│                    Current section                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Background: rgba(10, 22, 40, 0.95)
Backdrop-filter: blur(10px)
Height: 72px
Position: sticky top
Progress bar: 2px gold
```

#### Section Dropdown
```
┌─────────────────────────────┐
│  THE OPPORTUNITY            │
│  ───────────────            │
│  1. Vision          ●       │
│  2. Market                  │
│  3. Model                   │
│  4. Expansion               │
│                             │
│  THE ASSETS                 │
│  ───────────                │
│  5. Properties              │
│  6. Financials              │
│  ...                        │
└─────────────────────────────┘

Background: #0A1628
Border: 1px solid rgba(196, 167, 125, 0.2)
Border-radius: 8px
Shadow: 0 8px 30px rgba(0, 0, 0, 0.3)
```

### Charts

#### Revenue Line Chart
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  5-YEAR REVENUE PROJECTION                                                  │
│                                                                             │
│  $16M ┤                                                    ▲ Aggressive    │
│       │                                                 ╱──                │
│  $12M ┤                                              ╱──   ▲ Base         │
│       │                                           ╱──   ╱──                │
│   $8M ┤                                        ╱──   ╱──    ▲ Conservative│
│       │                                     ╱──   ╱──   ╱──                │
│   $4M ┤                                  ╱──   ╱──   ╱──                   │
│       │                               ●──   ╱──   ╱──                      │
│   $0M ┼────────────────────────────────────────────────────────────────   │
│           Y1       Y2       Y3       Y4       Y5                          │
│                                                                             │
│  Legend: ─── Base    ╱╱╱ Aggressive    ─ ─ Conservative                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Library: Recharts
Colors: Base #C4A77D, Aggressive #22C55E, Conservative #6B7280
Animation: Lines draw from left to right
Interaction: Hover shows value tooltip
```

#### Radar Chart (Scoring)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                           PROPERTY SCORING                                  │
│                                                                             │
│                              Medical                                        │
│                                 ●                                           │
│                                /|\                                          │
│                               / | \                                         │
│                    Privacy ●──  │  ──● Location                            │
│                              \  │  /                                        │
│                               \ │ /                                         │
│                           Legal ●─● Financial                               │
│                                 │                                           │
│                              Natural                                        │
│                                                                             │
│                        Score: 75/100                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Library: Recharts RadarChart
Fill: rgba(196, 167, 125, 0.3)
Stroke: #C4A77D
Grid: rgba(255, 255, 255, 0.1)
```

### Status Badges

```
✅ SHORTLIST                 │ Background: rgba(34, 197, 94, 0.1)
                            │ Border: 1px solid #22C55E
                            │ Text: #22C55E

⏸️ HOLD                      │ Background: rgba(245, 158, 11, 0.1)
                            │ Border: 1px solid #F59E0B
                            │ Text: #F59E0B

❌ PASS                      │ Background: rgba(239, 68, 68, 0.1)
                            │ Border: 1px solid #EF4444
                            │ Text: #EF4444

● ACTIVE                    │ Background: rgba(34, 197, 94, 0.2)
                            │ Text: #22C55E
                            │ Pulsing dot animation

○ PLANNED                   │ Background: rgba(196, 167, 125, 0.1)
                            │ Text: #C4A77D
```

---

## Animation Guidelines

### Principles
1. **Purposeful** -Every animation communicates something
2. **Subtle** -Enhance, don't distract
3. **Responsive** -Respect reduced-motion preferences
4. **Performant** -GPU-accelerated transforms only

### Timing

```
Instant     │ 0ms        │ Immediate feedback
Fast        │ 150ms      │ Micro-interactions, hovers
Normal      │ 300ms      │ Standard transitions
Slow        │ 500ms      │ Page transitions, reveals
Dramatic    │ 800ms      │ Hero animations
```

### Easing

```css
/* Default - Smooth and natural */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Bounce - For success states */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Linear - For continuous animations */
--ease-linear: linear;
```

### Common Animations

```css
/* Fade Up (scroll reveal) */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Count Up (numbers) */
/* Use Framer Motion's useSpring with duration 800ms */

/* Draw Line (timelines) */
@keyframes drawLine {
  from { stroke-dashoffset: 100%; }
  to { stroke-dashoffset: 0; }
}

/* Pulse (CTAs, markers) */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
```

### Scroll Triggers

```javascript
// Using Framer Motion
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// Trigger at 20% visibility
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUpVariants}
>
```

---

## Responsive Breakpoints

```css
/* Mobile First */
/* Base styles: 0 - 639px */

/* Tablet */
@media (min-width: 640px) { /* sm */ }

/* Tablet Landscape */
@media (min-width: 768px) { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Large Desktop */
@media (min-width: 1280px) { /* xl */ }

/* Extra Large */
@media (min-width: 1536px) { /* 2xl */ }
```

### Mobile Adaptations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero video | Full video | Static image |
| Globe | 3D interactive | 2D map |
| Property grid | 2x2 | 1 column |
| Comparison table | Full | Horizontal scroll |
| Navigation | Inline | Hamburger menu |
| Charts | Full size | Simplified |
| Radar chart | Full | Simplified bars |

---

## Iconography

### Icon Style
- **Library**: Lucide React (consistent, clean)
- **Size**: 24px default, 20px in compact contexts
- **Weight**: 1.5px stroke
- **Color**: Inherit from text

### Common Icons
```
Navigation:     ChevronDown, ChevronRight, Menu, X
Actions:        Download, ExternalLink, Mail, Calendar
Status:         Check, X, AlertTriangle, Info
Properties:     MapPin, Bed, DollarSign, TrendingUp
Segments:       Heart, Activity, Sparkles, Users, Globe, Shield, Clock, MessageCircle
```

---

## Image Guidelines

### Aspect Ratios
```
Hero:           16:9 or 21:9
Property cards: 16:9
Galleries:      4:3 or 3:2
Team photos:    1:1 (square)
Thumbnails:     1:1 or 4:3
```

### Image Optimization
- Format: WebP with JPEG fallback
- Sizes: 640w, 1024w, 1440w, 1920w
- Loading: Lazy load below fold
- Placeholder: LQIP (Low Quality Image Placeholder)

### Photography Style
- Cinematic, aspirational
- Natural lighting preferred
- Warm color grading
- Human moments (not stock-feeling)
- Nature: ocean, jungle, healing environments
- Details: luxury touches, craft, care

---

## Accessibility

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Large text meets AA (3:1 minimum)
- Interactive elements clearly visible

### Focus States
```css
/* All interactive elements */
:focus-visible {
  outline: 2px solid #C4A77D;
  outline-offset: 2px;
}
```

### Screen Readers
- All images have descriptive alt text
- Icon-only buttons have aria-labels
- Charts have data tables as fallback
- Progress indicators are announced

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode (Future)

Currently, the platform uses a dark-primary theme. If light mode is added:

```css
:root {
  --bg-primary: #0A1628;
  --bg-secondary: #1A2F4A;
  --text-primary: #F8F6F3;
  --text-secondary: #A0AEC0;
  --accent: #C4A77D;
}

[data-theme="light"] {
  --bg-primary: #F8F6F3;
  --bg-secondary: #FFFFFF;
  --text-primary: #0A1628;
  --text-secondary: #6B7280;
  --accent: #C4A77D;
}
```

---

*Document Version: 1.0*
*Created: January 2026*
*Companion to: PAGE_SPECIFICATIONS.md*
