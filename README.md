# Transformational Epicenter

> *Bringing the lost travelers home to gardens of their hearts and souls.*

<div align="center">

[![Status](https://img.shields.io/badge/Status-Phase%200%20Foundation-blue)](#project-status)
[![Docs](https://img.shields.io/badge/Docs-25%2B%20Documents-green)](#-documentation-nav)
[![Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20React%20Native%20%7C%20NestJS-purple)](#technology-stack)

</div>

---

## Quick Nav

| Section | Description |
|---------|-------------|
| [Vision & Strategy](#vision--strategy) | Core philosophy, master plan, pitch materials |
| [The Eight Segments](#the-eight-segments) | Deep dives into our operational framework |
| [Programs](#programs) | 7, 14, 21, and 28-day program structures |
| [Technical Architecture](#technical-architecture) | System design, data, security, infrastructure |
| [Design & Brand](#design--brand) | Design system, brand guidelines |
| [Source Code](#source-code) | Web, mobile, API, admin dashboards |
| [Business & Fundraising](#business--fundraising) | Pitch packet, investor materials |

---

## Documentation Nav

### Vision & Strategy

| Document | Description | Link |
|----------|-------------|------|
| **Vision** | Core philosophy, guest journey, transformation framework | [View](./docs/VISION.md) |
| **Master Plan** | 6-phase implementation roadmap, milestones, timeline | [View](./docs/MASTER_PLAN.md) |
| **Market Research** | Global competitive analysis, pricing strategy, positioning | [View](./docs/MARKET_RESEARCH.md) |
| **Architect Guide** | Development principles, agent profile, coding standards | [View](./ARCHITECT.md) |

---

### The Eight Segments

| # | Segment | Focus | Link |
|---|--------|-------|------|
| 1 | **Medical & Scientific Oversight** | Evidence-based care, safety screening, measurable outcomes | [View](./docs/segments/01_MEDICAL_OVERSIGHT.md) |
| 2 | **Plant Medicine** | Iboga & Ibogaine - medically supervised, trauma-informed ceremonies | [View](./docs/segments/02_PLANT_MEDICINE.md) |
| 3 | **Bio-Optimization** | State-of-the-art modalities for recovery and vitality | [View](./docs/segments/03_BIO_OPTIMIZATION.md) |
| 4 | **Trauma Integration** | Nervous system restoration and lasting change | [View](./docs/segments/04_TRAUMA_INTEGRATION.md) |
| 5 | **Hospitality & Fitness** | Luxury care enabling complete surrender to healing | [View](./docs/segments/05_HOSPITALITY.md) |
| 6 | **Digital Ecosystem** | AI Superintelligent System supporting the complete journey | [View](./docs/segments/06_DIGITAL_ECOSYSTEM.md) |
| 7 | **Pre-Care** | 4-8 weeks of preparation, safety, intention setting | [View](./docs/segments/07_PRE_CARE.md) |
| 8 | **Post-Care** | 3-12+ months of integration, community, longevity | [View](./docs/segments/08_POST_CARE.md) |

---

### Programs

| Program | Duration | Focus | Link |
|---------|----------|-------|------|
| **Overview** | - | Philosophy, structure, pricing approach | [View](./docs/programs/PROGRAM_OVERVIEW.md) |
| **Reset** | 7 days | Nervous system reset, 1 ceremony | [View](./docs/programs/7_DAY_RESET.md) |
| **Interruption** | 14 days | Trauma interruption and integration | [View](./docs/programs/14_DAY_INTERRUPTION.md) |
| **Recalibration** | 21 days | Deep recalibration, extended integration | [View](./docs/programs/21_DAY_RECALIBRATION.md) |
| **Transformation** | 28 days | Full transformation arc | [View](./docs/programs/28_DAY_TRANSFORMATION.md) |

---

### Technical Architecture

| Document | Description | Link |
|----------|-------------|------|
| **System Overview** | Application architecture, microservices, system context | [View](./docs/architecture/SYSTEM_OVERVIEW.md) |
| **Data Architecture** | Database strategy, data classification, PHI handling | [View](./docs/architecture/DATA_ARCHITECTURE.md) |
| **Security & Compliance** | HIPAA/GDPR framework, encryption, audit logging | [View](./docs/architecture/SECURITY_COMPLIANCE.md) |
| **Integration Map** | External systems, APIs, third-party services | [View](./docs/architecture/INTEGRATION_MAP.md) |
| **Infrastructure** | AWS setup, Kubernetes, disaster recovery, scaling | [View](./docs/architecture/INFRASTRUCTURE.md) |

---

### Design & Brand

| Document | Description | Link |
|----------|-------------|------|
| **Design System** | Colors, typography, components, spacing, patterns | [View](./design/DESIGN_SYSTEM.md) |
| **Brand Guidelines** | Logo usage, voice, tone, visual identity | [View](./design/brand/BRAND_GUIDELINES.md) |

---

### Source Code

| Directory | Description | Link |
|-----------|-------------|------|
| **Source Root** | Development setup, monorepo structure | [View](./src/README.md) |
| **Web (Marketing)** | Next.js marketing website | [View](./src/web/README.md) |
| **Mobile (Guest App)** | React Native guest application | [View](./src/mobile/README.md) |
| **API (Backend)** | NestJS backend services | [View](./src/api/README.md) |
| **Admin Dashboard** | Next.js admin interface | [View](./src/admin/README.md) |
| **Shared** | Shared types, utilities, constants | [View](./src/shared/README.md) |

---

### Business & Fundraising

| Document | Description | Link |
|----------|-------------|------|
| **Digital Pitch Packet** | $5M raise strategy, pitch narrative, investor approach | [View](./docs/DIGITAL_PITCH_PACKET.md) |
| **Quick Start** | 10-minute fundraise overview, immediate actions | [View](./docs/pitch-packet/QUICK_START.md) |
| **Investor Portal Spec** | Technical spec for investor web experience | [View](./docs/pitch-packet/INVESTOR_PORTAL_SPEC.md) |
| **Content Checklist** | 107 content items needed for pitch | [View](./docs/pitch-packet/CONTENT_CHECKLIST.md) |
| **Financial Model Guide** | Unit economics, projections, use of funds | [View](./docs/pitch-packet/FINANCIAL_MODEL_GUIDE.md) |

---

## Overview

Transformational Epicenter is a network of medical-based wellness and bio-optimization clinics offering luxury retreat experiences designed to address healing at the root level: physical, neurological, emotional, and spiritual.

**This is not about escaping life. It's about returning to it - transformed.**

---

## Project Structure

```
/epic-center
│
├── README.md                 # You are here - Navigation hub
├── ARCHITECT.md              # Development guide & principles
│
├── /docs                     # Documentation
│   ├── VISION.md             # Core vision and philosophy
│   ├── MASTER_PLAN.md        # Implementation roadmap
│   ├── DIGITAL_PITCH_PACKET.md # Fundraising strategy
│   │
│   ├── /architecture         # Technical architecture (5 docs)
│   ├── /segments             # Eight segment deep dives (8 docs)
│   ├── /programs             # Program structures (5 docs)
│   └── /pitch-packet         # Investor materials (4 docs)
│
├── /src                      # Application source code
│   ├── /web                  # Marketing website (Next.js)
│   ├── /mobile               # Guest app (React Native)
│   ├── /api                  # Backend services (NestJS)
│   ├── /shared               # Shared types and utilities
│   └── /admin                # Admin dashboard (Next.js)
│
├── /design                   # Design system
│   ├── DESIGN_SYSTEM.md      # Design documentation
│   └── /brand                # Brand guidelines
│
└── /infrastructure           # DevOps and infrastructure
    ├── /terraform            # Infrastructure as code
    ├── /kubernetes           # Container orchestration
    └── /monitoring           # Observability configuration
```

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend (Web) | Next.js 14, React 18, TypeScript, Tailwind CSS |
| Frontend (Mobile) | React Native, Expo, TypeScript |
| Backend | NestJS, TypeScript, Node.js |
| Database | PostgreSQL, Redis |
| Authentication | Auth0 (HIPAA-compliant) |
| Cloud | AWS (with HIPAA BAA) |
| Monitoring | DataDog, Sentry |

---

## Key Features

### Guest App
- Medical onboarding and intake
- Pre-care preparation content and practices
- On-site schedule and service booking
- Integration practices and journaling
- Community and messaging
- Progress tracking

### Marketing Website
- Program information and booking
- Application and inquiry flow
- Educational content
- Team and location information

### Admin Dashboard
- Guest management
- Medical records (HIPAA-compliant)
- Scheduling and resources
- Staff coordination
- Analytics and reporting

---

## Security & Compliance

- HIPAA compliance for US guests
- GDPR compliance for EU guests
- Mexican health data regulations
- End-to-end encryption for medical data
- Comprehensive audit logging
- Role-based access control

---

## Project Status

**Current Phase**: Phase 0 - Foundation

| Status | Area |
|--------|------|
| Complete | Documentation framework (25+ docs) |
| Complete | Technical architecture design |
| Complete | Design system foundation |
| Complete | Pitch packet strategy |
| In Progress | Platform development |
| Planned | Facility buildout |
| Planned | Team expansion |

---

## Getting Started

### For Development
1. See [ARCHITECT.md](./ARCHITECT.md) for development principles
2. See [/src/README.md](./src/README.md) for setup instructions

### For Understanding the Vision
1. Start with [VISION.md](./docs/VISION.md)
2. Review the [Eight Segments](#-the-eight-segments)
3. Explore [Program Structures](#-programs)

### For Investors
1. Start with [Digital Pitch Packet](./docs/DIGITAL_PITCH_PACKET.md)
2. Quick overview: [Quick Start](./docs/pitch-packet/QUICK_START.md)
3. Financials: [Financial Model Guide](./docs/pitch-packet/FINANCIAL_MODEL_GUIDE.md)

---

## The Long-Term Vision

30+ Transformational Epicenters globally, aligned under the same ethical, medical, and spiritual framework.

Each location will offer:
- The same eight-segment foundation
- Consistent medical and safety protocols
- Unified digital ecosystem
- Global community connection
- Local cultural integration

---

## Document Index (A-Z)

<details>
<summary>Click to expand full document list</summary>

| Document | Path |
|----------|------|
| 7-Day Reset | [docs/programs/7_DAY_RESET.md](./docs/programs/7_DAY_RESET.md) |
| 14-Day Interruption | [docs/programs/14_DAY_INTERRUPTION.md](./docs/programs/14_DAY_INTERRUPTION.md) |
| 21-Day Recalibration | [docs/programs/21_DAY_RECALIBRATION.md](./docs/programs/21_DAY_RECALIBRATION.md) |
| 28-Day Transformation | [docs/programs/28_DAY_TRANSFORMATION.md](./docs/programs/28_DAY_TRANSFORMATION.md) |
| Admin README | [src/admin/README.md](./src/admin/README.md) |
| API README | [src/api/README.md](./src/api/README.md) |
| Architect Guide | [ARCHITECT.md](./ARCHITECT.md) |
| Bio-Optimization | [docs/segments/03_BIO_OPTIMIZATION.md](./docs/segments/03_BIO_OPTIMIZATION.md) |
| Brand Guidelines | [design/brand/BRAND_GUIDELINES.md](./design/brand/BRAND_GUIDELINES.md) |
| Content Checklist | [docs/pitch-packet/CONTENT_CHECKLIST.md](./docs/pitch-packet/CONTENT_CHECKLIST.md) |
| Data Architecture | [docs/architecture/DATA_ARCHITECTURE.md](./docs/architecture/DATA_ARCHITECTURE.md) |
| Design System | [design/DESIGN_SYSTEM.md](./design/DESIGN_SYSTEM.md) |
| Digital Ecosystem | [docs/segments/06_DIGITAL_ECOSYSTEM.md](./docs/segments/06_DIGITAL_ECOSYSTEM.md) |
| Digital Pitch Packet | [docs/DIGITAL_PITCH_PACKET.md](./docs/DIGITAL_PITCH_PACKET.md) |
| Financial Model Guide | [docs/pitch-packet/FINANCIAL_MODEL_GUIDE.md](./docs/pitch-packet/FINANCIAL_MODEL_GUIDE.md) |
| Hospitality & Fitness | [docs/segments/05_HOSPITALITY.md](./docs/segments/05_HOSPITALITY.md) |
| Infrastructure | [docs/architecture/INFRASTRUCTURE.md](./docs/architecture/INFRASTRUCTURE.md) |
| Integration Map | [docs/architecture/INTEGRATION_MAP.md](./docs/architecture/INTEGRATION_MAP.md) |
| Investor Portal Spec | [docs/pitch-packet/INVESTOR_PORTAL_SPEC.md](./docs/pitch-packet/INVESTOR_PORTAL_SPEC.md) |
| Market Research | [docs/MARKET_RESEARCH.md](./docs/MARKET_RESEARCH.md) |
| Master Plan | [docs/MASTER_PLAN.md](./docs/MASTER_PLAN.md) |
| Medical Oversight | [docs/segments/01_MEDICAL_OVERSIGHT.md](./docs/segments/01_MEDICAL_OVERSIGHT.md) |
| Mobile README | [src/mobile/README.md](./src/mobile/README.md) |
| Plant Medicine | [docs/segments/02_PLANT_MEDICINE.md](./docs/segments/02_PLANT_MEDICINE.md) |
| Post-Care | [docs/segments/08_POST_CARE.md](./docs/segments/08_POST_CARE.md) |
| Pre-Care | [docs/segments/07_PRE_CARE.md](./docs/segments/07_PRE_CARE.md) |
| Program Overview | [docs/programs/PROGRAM_OVERVIEW.md](./docs/programs/PROGRAM_OVERVIEW.md) |
| Quick Start (Pitch) | [docs/pitch-packet/QUICK_START.md](./docs/pitch-packet/QUICK_START.md) |
| Security & Compliance | [docs/architecture/SECURITY_COMPLIANCE.md](./docs/architecture/SECURITY_COMPLIANCE.md) |
| Shared README | [src/shared/README.md](./src/shared/README.md) |
| Source README | [src/README.md](./src/README.md) |
| System Overview | [docs/architecture/SYSTEM_OVERVIEW.md](./docs/architecture/SYSTEM_OVERVIEW.md) |
| Trauma Integration | [docs/segments/04_TRAUMA_INTEGRATION.md](./docs/segments/04_TRAUMA_INTEGRATION.md) |
| Vision | [docs/VISION.md](./docs/VISION.md) |
| Web README | [src/web/README.md](./src/web/README.md) |

</details>

---

## Contributing

This is a private project. See [ARCHITECT.md](./ARCHITECT.md) for development guidelines.

---

**Version**: 1.0.0
**Status**: Phase 0 - Foundation
**Last Updated**: January 2025
