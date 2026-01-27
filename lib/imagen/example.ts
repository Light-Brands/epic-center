/**
 * Example usage
 * Run: npx tsx lib/imagen/example.ts
 */

import { generate, generateStyled, quickPrompt, saveImage, toDataUrl } from "./index";

async function main() {
  // Method 1: Quick prompts (easiest)
  const hero = await generate({
    prompt: quickPrompt.hero("Grand entrance of luxury wellness retreat"),
    aspectRatio: "16:9",
  });
  if (hero.success) await saveImage(hero, "public/generated/hero.png");

  // Method 2: Styled generation with type + variant
  const portrait = await generateStyled("portrait", "Female wellness director, 40s", "confident");
  if (portrait.success) console.log("Portrait ready:", toDataUrl(portrait)?.slice(0, 50));

  // Method 3: Raw prompt (no style system)
  const raw = await generate("A simple blue circle on white background");
  if (raw.success) await saveImage(raw, "public/generated/raw.png");

  // All quick prompt helpers:
  // quickPrompt.hero(subject)       - Property exteriors
  // quickPrompt.teamMember(desc)    - Confident portraits
  // quickPrompt.testimonial(desc)   - Peaceful meditation portraits
  // quickPrompt.room(roomType)      - Interior spaces
  // quickPrompt.treatment(name)     - Wellness/medical imagery
  // quickPrompt.location(scene)     - Landscape vistas
  // quickPrompt.food(dish)          - Dining/lifestyle
  // quickPrompt.icon(concept)       - Minimal icons
}

main().catch(console.error);
