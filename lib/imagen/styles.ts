/**
 * Image Generation Style System
 *
 * Consistent visual language for Transformational Epicenter
 * "Refined Sanctuary" - Clinical precision meets organic luxury
 */

export const BRAND_FOUNDATION = {
  palette: {
    primary: "#1F483A",      // Deep botanical green
    accent: "#D4724D",       // Terracotta copper
    gold: "#D4A63B",         // Warm investment gold
    canvas: "#FDFBF7",       // Cream background
    neutral: "#2A2722",      // Warm charcoal
  },

  // Apple aesthetic DNA woven throughout
  appleAesthetic: `
Apple product photography and keynote presentation aesthetic.
Pristine negative space, subjects floating in clean environments.
Soft gradient backgrounds with subtle depth, never flat.
Perfect lighting: soft, diffused, wrapping around subjects naturally.
Hero framing: single focal point, dramatic but not busy.
Colors precise and intentional, never muddy or oversaturated.
The "one more thing" reveal quality - every image feels significant.
Shot with the precision of a product launch, the warmth of a lifestyle brand.
  `.trim(),

  mood: [
    "serene authority",
    "clinical warmth",
    "organic luxury",
    "transformational hope",
    "premium simplicity",
  ],

  references: [
    "Apple keynote photography",
    "Apple product hero shots",
    "Jony Ive design philosophy",
    "Aman Resorts editorial",
    "Kinfolk magazine",
  ],

  globalAvoid: [
    "stock photo artificiality",
    "cluttered compositions",
    "busy backgrounds",
    "harsh shadows",
    "oversaturated colors",
    "generic corporate feel",
    "obvious AI artifacts",
    "visual noise of any kind",
  ],
};

export const IMAGE_STYLES = {

  // ═══════════════════════════════════════════════════════════════════
  // HUMAN PORTRAITS - For team, testimonials, transformation stories
  // ═══════════════════════════════════════════════════════════════════
  portrait: {
    base: `Apple keynote human photography - the style used when introducing "the team behind the product."
Subject isolated against pristine gradient background (white to subtle warm gray).
Soft wraparound lighting with no harsh shadows, as if lit by a giant softbox.
Medium format precision, 85mm at f/2.8, subject sharp, background silky smooth.
Ultra-realistic skin texture - every pore visible but beautiful, never retouched plastic.
Expression: quiet confidence, inner peace, the look of someone who has solved hard problems.
Color grading: clean, neutral, skin tones warm but not orange, whites pristine.
The portrait should feel like it belongs on apple.com/leadership.`,

    keywords: ["intimate", "transformative", "ultra-realistic", "documentary authenticity", "peaceful clarity"],

    variants: {
      meditation: "Eyes gently closed, face in profile or three-quarter view, deep inner peace",
      confident: "Direct soft gaze, slight knowing smile, grounded and assured",
      candid: "Natural moment captured, genuine micro-expression, unposed authenticity",
    },

    avoid: ["fake smiles", "posed stiffness", "heavy makeup", "dramatic shadows", "plastic skin"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // PROPERTY & ARCHITECTURE - For retreat spaces, rooms, facilities
  // ═══════════════════════════════════════════════════════════════════
  architecture: {
    base: `Apple Park meets luxury wellness retreat - architectural photography with tech precision and organic warmth.
Hero framing: the building or space as the product, floating in its environment.
Pristine composition with generous negative space, sky or landscape providing breathing room.
Soft, even lighting - overcast golden hour, no harsh shadows breaking the forms.
Clean lines and organic curves coexisting, materials visible and tactile (wood grain, stone texture, glass reflection).
Color palette: warm neutrals, botanical greens, terracotta accents, cream stone.
The precision of an Apple Store exterior shot combined with Four Seasons warmth.
Every image could be a hero slide in a keynote presentation.`,

    keywords: ["sanctuary", "biophilic", "warm minimalism", "indoor-outdoor flow", "Mexican modernism"],

    variants: {
      exterior: "Building facade with landscaping, dramatic sky, sense of arrival and anticipation",
      interior: "Room or space showcasing design details, natural light, and livability",
      detail: "Close-up of material texture, craftsmanship, or design element",
      aerial: "Drone perspective showing property in landscape context, scale and setting",
    },

    avoid: ["cold empty spaces", "harsh flash lighting", "wide-angle distortion", "real estate generic"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // WELLNESS & TREATMENT - For services, therapies, medical procedures
  // ═══════════════════════════════════════════════════════════════════
  wellness: {
    base: `Wellness photography that elevates clinical into aspirational without losing authenticity.
Soft, diffused lighting - never harsh or clinical fluorescent.
Muted, sophisticated color palette: sage greens, warm whites, natural wood, soft terracotta.
Human element always present but often partial: hands, silhouettes, peaceful profiles.
Treatments shown with reverence and expertise - precision tools, clean surfaces, caring touch.
Negative space used intentionally to create breathing room and calm.
The feeling of a spa that happens to have world-class medical capabilities.
Shot with medium telephoto 85-135mm to compress and flatter, shallow depth of field.`,

    keywords: ["clinical warmth", "healing atmosphere", "expert care", "serene precision", "transformational"],

    variants: {
      treatment: "Practitioner hands performing therapy, focus on skill and care",
      environment: "Treatment room or wellness space, ready and waiting, calm anticipation",
      product: "Medical or wellness products arranged with editorial styling",
      moment: "Patient in peaceful state during or after treatment, genuine relief",
    },

    avoid: ["sterile hospital aesthetic", "cheesy spa clichés", "stock photo hands", "before/after implications"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // NATURE & LANDSCAPE - For location context, environmental beauty
  // ═══════════════════════════════════════════════════════════════════
  landscape: {
    base: `Landscape photography in the style of National Geographic meets luxury travel editorial.
Golden hour or blue hour lighting preferred, dramatic but not overdone.
Composition follows classical rules: rule of thirds, leading lines, foreground interest.
Mexican and tropical environments: agave fields, Pacific coast, Sierra mountains, jungle canopy.
Color grading warm but natural - never oversaturated Instagram filters.
Sense of scale with human element when appropriate (distant figure, building for reference).
Shot on medium format or high-end full frame, 24-70mm range, deep depth of field.
The land as a character - ancient, healing, transformative.`,

    keywords: ["epic scale", "healing landscape", "Mexican terrain", "golden light", "timeless"],

    variants: {
      vista: "Wide panoramic view, dramatic sky, sense of possibility",
      intimate: "Close natural detail - plants, water, texture, light through leaves",
      journey: "Path, road, or walkway leading somewhere, invitation to explore",
      aerial: "Drone shot showing landscape patterns, property in context",
    },

    avoid: ["HDR overprocessing", "cliché sunset filters", "tourist snapshot feel", "empty generic scenery"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // FOOD & LIFESTYLE - For dining, amenities, daily life at retreat
  // ═══════════════════════════════════════════════════════════════════
  lifestyle: {
    base: `Lifestyle photography with Kinfolk magazine editorial sensibility.
Natural light only - window light, dappled shade, golden hour.
Muted, earthy color palette with pops of natural color from food and botanicals.
Overhead and 45-degree angles for food, eye-level for moments.
Styling is abundant but not precious - the beauty of real life elevated.
Hands in frame when showing activity - cooking, arranging, reaching.
Linen textures, ceramic vessels, weathered wood surfaces, fresh ingredients.
Shot on 35-50mm for environmental context, 85mm for intimate details.`,

    keywords: ["artisanal", "abundant simplicity", "nourishing", "slow living", "tactile warmth"],

    variants: {
      dining: "Table setting or meal, emphasis on fresh ingredients and beautiful vessels",
      moment: "Candid lifestyle activity - reading, yoga, walking, conversation",
      detail: "Close-up of object, texture, or arrangement with intentional styling",
      hands: "Human hands engaged in activity - preparing, holding, creating",
    },

    avoid: ["food photography clichés", "overly styled perfection", "empty calories aesthetic", "influencer staging"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // ICONS & ABSTRACT - For UI elements, section headers, concepts
  // ═══════════════════════════════════════════════════════════════════
  icon: {
    base: `SF Symbols meets organic wellness - Apple's icon design philosophy with natural warmth.
Single shape, perfectly centered, floating in pristine negative space.
Subtle gradient or soft shadow giving depth - never flat, never busy.
Line weight consistent and confident, corners slightly rounded (Apple's signature).
Colors from brand palette: botanical green (#1F483A), terracotta (#D4724D), gold (#D4A63B).
Organic forms preferred: leaves, flowing water, gentle curves, natural shapes.
The icon should feel like it belongs in iOS Settings or Apple Health app.
Clean enough to work at 24px, beautiful enough to hero at 200px.`,

    keywords: ["minimal", "organic symbol", "brand-aligned", "scalable", "warm simplicity"],

    variants: {
      symbol: "Single iconic object or shape representing a concept",
      pattern: "Repeating organic motif for backgrounds or textures",
      abstract: "Non-representational form suggesting movement, growth, or transformation",
      badge: "Contained shape suitable for logos, stamps, or markers",
    },

    avoid: ["clipart quality", "cold geometric", "trendy gradients", "generic icons", "busy complexity"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // DATA VISUALIZATION - For charts, graphs, financial imagery
  // ═══════════════════════════════════════════════════════════════════
  data: {
    base: `Apple Fitness+ or Stocks app data visualization aesthetic.
Smooth gradients under line charts, subtle glow on key metrics.
Minimal chrome - no gridlines, no axis clutter, just the essential data.
Brand colors: green (#1F483A) for growth, gold (#D4A63B) for highlights, clean white space.
Numbers large and confident, SF Pro Display style typography.
Animated feel even in still image - the sense of live, updating data.
Charts float on clean backgrounds with ample padding.
The sophistication of Bloomberg wrapped in Apple's consumer-friendly clarity.`,

    keywords: ["sophisticated finance", "growth trajectory", "clean data", "investor confidence", "premium analytics"],

    variants: {
      chart: "Line or bar chart showing growth, stylized and brand-colored",
      metric: "Single number or KPI presented with visual impact",
      comparison: "Side-by-side or before/after data visualization",
      flow: "Sankey or flow diagram showing process or allocation",
    },

    avoid: ["Excel default styling", "cluttered dashboards", "misleading scales", "corporate cliché"],
  },
};

/**
 * Build a complete prompt for any image type
 */
export function buildPrompt(
  type: keyof typeof IMAGE_STYLES,
  subject: string,
  variant?: string
): string {
  const style = IMAGE_STYLES[type];
  const variantText = variant && style.variants[variant as keyof typeof style.variants]
    ? ` ${style.variants[variant as keyof typeof style.variants]}.`
    : "";

  const avoidText = [...BRAND_FOUNDATION.globalAvoid, ...style.avoid].join(", ");

  return `${subject}.${variantText}

${BRAND_FOUNDATION.appleAesthetic}

${style.base}

Mood: ${BRAND_FOUNDATION.mood.join(", ")}.
Avoid: ${avoidText}.`;
}

/**
 * Quick prompt builder for common use cases
 */
export const quickPrompt = {
  hero: (subject: string) => buildPrompt("architecture", subject, "exterior"),
  teamMember: (description: string) => buildPrompt("portrait", description, "confident"),
  testimonial: (description: string) => buildPrompt("portrait", description, "meditation"),
  room: (roomType: string) => buildPrompt("architecture", roomType, "interior"),
  treatment: (treatment: string) => buildPrompt("wellness", treatment, "treatment"),
  location: (scene: string) => buildPrompt("landscape", scene, "vista"),
  food: (dish: string) => buildPrompt("lifestyle", dish, "dining"),
  icon: (concept: string) => buildPrompt("icon", concept, "symbol"),
};
