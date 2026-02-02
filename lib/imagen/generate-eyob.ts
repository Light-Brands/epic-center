/**
 * Generate Eyob's portrait image with reference photo
 * Run with: npx tsx --env-file=.env.local lib/imagen/generate-eyob.ts
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
  console.log("Generating Eyob's portrait image...\n");

  const fs = await import("fs/promises");
  await fs.mkdir("public/images/team", { recursive: true });

  const referenceImage = "reference-images/eyob-mebrahtu.png";
  
  // Check if reference exists
  try {
    await fs.access(referenceImage);
    console.log(`Using reference image: ${referenceImage}`);
  } catch {
    console.error(`Reference image not found: ${referenceImage}`);
    return;
  }

  const prompt = `Portrait illustration of Eyob Mebrahtu, Head of Marketing. Dark-skinned man in his 30s-40s with short dark tightly curled hair, neat short beard, confident direct gaze, slight gentle smile. Wearing dark charcoal grey blazer over white V-neck t-shirt, arms crossed in confident pose. Marketing leader specializing in luxury wellness and transformation brands. Creative, strategic, brand-focused. Professional portrait showing marketing expertise and brand cultivation.

${TEAM_PORTRAIT_STYLE}`;

  const result = await generate({ 
    prompt, 
    aspectRatio: "1:1", 
    raw: true,
    referenceImage,
  });

  if (result.success) {
    const filepath = `public/images/team/eyob-mebrahtu.jpg`;
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
