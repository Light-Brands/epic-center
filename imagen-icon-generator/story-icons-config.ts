/**
 * Story pages icon generation config.
 *
 * Many concepts already have icons in public/icons/ (model-*, diff-*, phase-*, program-*).
 * This config generates ONLY the new icons needed for the 6 story pages.
 *
 * Reusable existing icons (do NOT regenerate):
 *   diff-medical       → Medical / Stethoscope
 *   model-leaf         → Plant medicine / Nature
 *   model-activity     → Bio-optimization / Energy
 *   diff-luxury        → Luxury / Premium
 *   model-brain        → Brain / Cognitive / Psychiatric
 *   model-heart        → Heart / Cardiovascular / Compassion
 *   model-sparkles     → Transformation / Magic
 *   model-shield       → Safety / Protection / Emergency
 *   model-users        → Community / People / Team
 *   model-clock        → Time / Preparation / Clock
 *   diff-integrated    → Integration / Combined
 *   diff-aftercare     → Aftercare / Post-care
 *   diff-evidence      → Evidence / Science / Research
 *   diff-location      → Location / Geography / Map
 *   phase-assessment   → Assessment / Screening
 *   phase-preparation  → Preparation
 *   phase-treatment    → Treatment / Ceremony
 *   phase-integration  → Integration
 *   program-ibogaine   → Ibogaine plant
 *   program-bio        → Bio-optimization
 *
 * Run: npx tsx generate-section-icons.ts ./story-icons-config.ts
 */

export const outputDir = "public/icons";

export const icons = [
  // ── Origin page: market pillars ──
  {
    name: "story-biohacking",
    subject:
      "Artistic lightning bolt intertwined with circuit-like organic lines, biohacking and human performance optimization, technological energy meeting biology",
  },
  {
    name: "story-gem",
    subject:
      "Artistic faceted gemstone or diamond with organic flowing lines radiating outward, luxury and premium quality, refined elegance",
  },

  // ── Origin page: values ──
  {
    name: "story-excellence",
    subject:
      "Artistic star or north star with flowing elegant rays, excellence and highest quality standard, aspirational achievement",
  },
  {
    name: "story-layers",
    subject:
      "Artistic stacked organic layers or overlapping leaf-like planes, integration and holistic approach, depth and continuity",
  },

  // ── Experience page: segments ──
  {
    name: "story-hospitality",
    subject:
      "Artistic table setting with organic flowing utensils and a delicate plate, five-star hospitality and nourishment, concierge care and fine dining",
  },
  {
    name: "story-digital",
    subject:
      "Artistic interconnected nodes forming an organic network pattern, digital ecosystem and connected technology, flowing data streams",
  },
  {
    name: "story-trauma",
    subject:
      "Artistic human silhouette with gentle flowing waves emanating from the chest area, nervous system restoration and trauma healing, somatic release",
  },

  // ── Science page ──
  {
    name: "story-lab",
    subject:
      "Artistic laboratory flask or Erlenmeyer flask with organic flowing liquid and subtle bubbles, scientific testing and analysis, clinical precision",
  },
  {
    name: "story-substance",
    subject:
      "Artistic pill capsule opening with organic flowing particles emerging, substance assessment and medication review, pharmacological evaluation",
  },
  {
    name: "story-ecg",
    subject:
      "Artistic heart rhythm ECG line with organic flowing peaks and valleys, continuous cardiac monitoring, medical precision and vital signs",
  },
  {
    name: "story-nursing",
    subject:
      "Artistic pair of caring hands cupping a small heart, dedicated nursing care and compassionate medical attention, gentle healing presence",
  },
  {
    name: "story-outcomes",
    subject:
      "Artistic upward trending bar chart with organic flowing tops, outcomes measurement and clinical data, evidence-based results tracking",
  },

  // ── Sanctuary page: design principles ──
  {
    name: "story-biophilic",
    subject:
      "Artistic tree or plant growing through architectural arches, biophilic design and nature integration, organic forms meeting structure",
  },
  {
    name: "story-acoustic",
    subject:
      "Artistic concentric sound waves flowing outward from a center point, acoustic sanctuary and sound design, peaceful vibrations",
  },
  {
    name: "story-light",
    subject:
      "Artistic sun with organic flowing rays and gentle warmth lines, light as medicine and circadian rhythm, natural healing illumination",
  },
  {
    name: "story-materials",
    subject:
      "Artistic palette or swatch of organic textures showing wood grain and stone, conscious materials and artisan craftsmanship, sustainable beauty",
  },

  // ── Sanctuary page: healing spaces ──
  {
    name: "story-ceremony",
    subject:
      "Artistic sacred circle or mandala with gentle organic flowing petals, ceremony space and ritual container, spiritual depth and reverence",
  },
  {
    name: "story-dining",
    subject:
      "Artistic open-air pavilion silhouette with flowing organic leaves and vines, dining pavilion and community nourishment, gathering space",
  },
  {
    name: "story-movement",
    subject:
      "Artistic human figure in a graceful yoga or movement pose with flowing organic lines, movement studio and body practice, somatic awareness",
  },
  {
    name: "story-pool",
    subject:
      "Artistic flowing water ripples with organic gentle curves, therapeutic pool and water features, liquid healing and tranquility",
  },
  {
    name: "story-gardens",
    subject:
      "Artistic winding garden path with flowing organic plants on either side, gardens and nature trails, walking meditation and grounding",
  },

  // ── Programs page: inclusions ──
  {
    name: "story-accommodation",
    subject:
      "Artistic private villa or casita with organic flowing roof lines and plants, luxury accommodation and private sanctuary, restful retreat space",
  },
  {
    name: "story-cuisine",
    subject:
      "Artistic organic leaf wrapping around a chef's plate, functional cuisine and food as medicine, nourishing and healing nutrition",
  },
  {
    name: "story-massage",
    subject:
      "Artistic hands performing therapeutic touch with flowing energy lines, massage and therapeutic bodywork, healing touch and somatic care",
  },
];
