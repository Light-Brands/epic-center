/**
 * Generate Joe McVeen's portrait image with reference photo
 * Run with: npx tsx --env-file=.env.local lib/imagen/generate-joe-mcveen.ts
 */

import { generate, saveImage } from "./index";

const TEAM_PORTRAIT_STYLE = `
Elegant hand-drawn portrait illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
The sophistication of editorial illustration meets professional portrait.
Soft watercolor-like washes with fine ink line details.
Confident, professional portrait showing the person's character and presence.
No text, labels, or UI elements - just pure portrait illustration.
Square orientation, 1:1 aspect ratio composition suitable for profile images.
Stylized but recognizable portrait capturing the essence of the person.
`;

async function main() {
  console.log("Generating Joe McVeen's portrait image...\n");

  const fs = await import("fs/promises");
  await fs.mkdir("public/images/team", { recursive: true });

  const referenceImage = "reference-images/joe-mcveen.jpg";

  // Check if reference exists
  try {
    await fs.access(referenceImage);
    console.log(`Using reference image: ${referenceImage}`);
  } catch {
    console.error(`Reference image not found: ${referenceImage}`);
    return;
  }

  const prompt = `Professional portrait of a marketing executive for a luxury wellness brand, Head of Marketing. Confident, strategic, brand-focused presence. Professional portrait showing marketing expertise and brand cultivation.

${TEAM_PORTRAIT_STYLE}`;

  const result = await generate({
    prompt,
    aspectRatio: "1:1",
    raw: true,
    referenceImage,
  });

  if (result.success) {
    const filepath = `public/images/team/joe-mcveen.jpg`;
    const saved = await saveImage(result, filepath);
    if (saved) {
      console.log(`✓ Saved to ${filepath}`);
    } else {
      console.error(`✗ Failed to save`);
    }
  } else {
    console.error(`✗ Generation failed: ${result.error}`);
  }
}

main().catch(console.error);
