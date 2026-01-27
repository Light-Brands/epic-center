/**
 * Generate 15 unique icons for the Model page
 *
 * Run with: npx tsx lib/imagen/generate-model-icons-v2.ts
 */

import { generate, saveImage } from "./index";

// Artistic monochromatic icons on white background
const ICON_STYLE = `
Elegant hand-drawn illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
Subtle artistic details - not flat or corporate, but not overly complex.
The sophistication of editorial illustration meets icon simplicity.
No background shapes, circles, or containers - just the icon floating on white.
Centered composition with balanced negative space.
`;

const icons = [
  // === MODEL PHASES (4) ===
  {
    name: "phase-assessment",
    subject: "Artistic clipboard with medical checklist and stethoscope, careful evaluation and screening",
  },
  {
    name: "phase-preparation",
    subject: "Artistic lotus flower opening with flowing petals, intention setting and emotional readiness",
  },
  {
    name: "phase-treatment",
    subject: "Artistic hands cupping a glowing orb of light, guided healing ceremony and care",
  },
  {
    name: "phase-integration",
    subject: "Artistic butterfly emerging from cocoon with flowing wings, transformation and new beginning",
  },

  // === TREATMENT PROGRAMS (4) ===
  {
    name: "program-ibogaine",
    subject: "Artistic iboga plant root with flowing organic tendrils, deep earth medicine",
  },
  {
    name: "program-psilocybin",
    subject: "Artistic mushroom with elegant cap and flowing spores, consciousness expansion",
  },
  {
    name: "program-5meo",
    subject: "Artistic cosmic starburst with radiating light rays, ego dissolution and infinite connection",
  },
  {
    name: "program-bio",
    subject: "Artistic DNA helix intertwined with flowing energy waves, cellular optimization",
  },

  // === DIFFERENTIATORS (6) ===
  {
    name: "diff-medical",
    subject: "Artistic heartbeat ECG line flowing into a protective medical cross, cardiac monitoring",
  },
  {
    name: "diff-integrated",
    subject: "Artistic three overlapping circles with flowing connections, synergy of combined approaches",
  },
  {
    name: "diff-luxury",
    subject: "Artistic elegant key with ornate flowing details, premium hospitality and comfort",
  },
  {
    name: "diff-aftercare",
    subject: "Artistic calendar with flowing path extending into future, long-term support journey",
  },
  {
    name: "diff-evidence",
    subject: "Artistic magnifying glass over data points with flowing connections, research and outcomes",
  },
  {
    name: "diff-location",
    subject: "Artistic palm tree with ocean waves and sun, tropical healing sanctuary",
  },

  // === UTILITY (1) ===
  {
    name: "util-clock",
    subject: "Artistic hourglass with flowing sand particles, passage of time and duration",
  },
];

async function main() {
  console.log("Generating 15 unique Model page icons...\n");

  for (const icon of icons) {
    console.log(`Generating ${icon.name}...`);

    const prompt = `${icon.subject}. ${ICON_STYLE}`;
    const result = await generate({ prompt, aspectRatio: "1:1", raw: true });

    if (result.success) {
      const filepath = `public/icons/${icon.name}.png`;
      const saved = await saveImage(result, filepath);
      if (saved) {
        console.log(`  ✓ Saved to ${filepath}`);
      } else {
        console.error(`  ✗ Failed to save ${icon.name}`);
      }
    } else {
      console.error(`  ✗ Generation failed: ${result.error}`);
    }
  }

  console.log("\nDone!");
}

main().catch(console.error);
