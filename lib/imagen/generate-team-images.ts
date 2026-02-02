/**
 * Generate team member portrait images with reference photos
 *
 * Setup:
 * 1. Create a `reference-images/` directory in the project root
 * 2. Add reference photos for each team member (JPG, PNG, or WebP)
 * 3. Name them: nicholas-courchesne.jpg, jason-sparks.jpg, etc.
 * 4. Run: npx tsx --env-file=.env.local lib/imagen/generate-team-images.ts
 *
 * The script will:
 * - Only generate images for team members that have reference images
 * - Skip team members without reference images
 * - Generate botanical green monochromatic illustrations matching property style
 */

import { generate, saveImage } from "./index";

// Artistic portrait illustration style matching property images
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

const teamMembers = [
  {
    name: "nicholas-courchesne",
    slug: "nicholas-courchesne",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. Visionary leader and master relationship builder. Confident, warm, approachable presence. Professional business portrait showing strategic vision and heartfelt purpose.`,
    referenceImage: "reference-images/nicholas-courchesne.jpg", // Path to reference photo
  },
  {
    name: "jason-sparks",
    slug: "jason-sparks",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. Seasoned hospitality executive with operational excellence. Analytical yet warm, hands-on leader. Professional portrait showing operational mastery and service excellence.`,
    referenceImage: "reference-images/jason-sparks.jpg", // Path to reference photo
  },
  {
    name: "dan-lawless",
    slug: "dan-lawless",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. Seasoned full-stack developer with 20+ years experience. Thoughtful, technical leader. Professional portrait showing visionary tech leadership.`,
    referenceImage: "reference-images/dan-lawless.jpg", // Path to reference photo
  },
  {
    name: "mariana-hoyo",
    slug: "mariana-hoyo",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. General Physician with Master's in Healthcare Management. Warm, caring, professional medical presence. Professional portrait showing holistic care expertise and medical authority.`,
    referenceImage: "reference-images/mariana-hoyo.jpg", // Path to reference photo
  },
  {
    name: "eyob-mebrahtu",
    slug: "eyob-mebrahtu",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. Marketing leader specializing in luxury wellness and transformation brands. Creative, strategic, brand-focused. Professional portrait showing marketing expertise and brand cultivation.`,
    referenceImage: "reference-images/eyob-mebrahtu.png", // Path to reference photo
  },
  {
    name: "julien-leblanc",
    slug: "julien-leblanc",
    subject: `Create a portrait illustration matching the person in the reference image. Maintain their facial features, expression, and character. Professional MMA fighter and passionate advocate for plant medicine. Strong, determined, authentic presence. Professional portrait showing advocacy and transformation testimony.`,
    referenceImage: "reference-images/julien-leblanc.jpg", // Path to reference photo
  },
];

async function main() {
  console.log("Generating team member portrait images...\n");

  // Ensure the directory exists
  const fs = await import("fs/promises");
  await fs.mkdir("public/images/team", { recursive: true });

  // Filter to only members with existing reference images
  const membersToGenerate = [];
  for (const member of teamMembers) {
    if (member.referenceImage) {
      try {
        await fs.access(member.referenceImage);
        membersToGenerate.push(member);
      } catch {
        console.log(`  ⏭ Skipping ${member.name} - reference image not found: ${member.referenceImage}`);
      }
    }
  }

  if (membersToGenerate.length === 0) {
    console.log("No reference images found. Please add reference images to the reference-images/ folder.");
    return;
  }

  console.log(`Found ${membersToGenerate.length} reference image(s). Generating portraits...\n`);

  for (const member of membersToGenerate) {
    console.log(`Generating ${member.name}...`);

    const prompt = `${member.subject}\n\n${TEAM_PORTRAIT_STYLE}`;
    
    console.log(`  Using reference image: ${member.referenceImage}`);

    const result = await generate({ 
      prompt, 
      aspectRatio: "1:1", 
      raw: true,
      referenceImage: member.referenceImage,
    });

    if (result.success) {
      const filepath = `public/images/team/${member.slug}.jpg`;
      const saved = await saveImage(result, filepath);
      if (saved) {
        console.log(`  ✓ Saved to ${filepath}`);
      } else {
        console.error(`  ✗ Failed to save ${member.name}`);
      }
    } else {
      console.error(`  ✗ Generation failed: ${result.error}`);
    }
  }

  console.log("\nDone!");
}

main().catch(console.error);
