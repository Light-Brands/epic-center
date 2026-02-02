/**
 * Image Generation Package - Gemini 2.5 Flash Image ("Nano Banana")
 *
 * Portable - copy this folder to any project
 *
 * Setup:
 * 1. npm install @google/generative-ai
 * 2. Set GOOGLE_API_KEY in .env
 *
 * Usage:
 *   import { generate, quickPrompt } from "@/lib/imagen";
 *   const result = await generate(quickPrompt.hero("Luxury retreat entrance"));
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPrompt, quickPrompt, IMAGE_STYLES } from "./styles";

export { buildPrompt, quickPrompt, IMAGE_STYLES };

export type ImageType = keyof typeof IMAGE_STYLES;

export interface GenerateOptions {
  prompt: string;
  aspectRatio?: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  raw?: boolean; // Skip style system, use prompt as-is
  referenceImage?: string; // Path to reference image (optional; used by scripts)
}

export interface ImageResult {
  success: boolean;
  imageBase64?: string;
  mimeType?: string;
  error?: string;
}

/**
 * Generate an image with Gemini 2.5 Flash Image
 */
export async function generate(options: GenerateOptions | string): Promise<ImageResult> {
  const opts = typeof options === "string" ? { prompt: options } : options;
  const { prompt, aspectRatio = "1:1", raw = false } = opts;

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return { success: false, error: "GOOGLE_API_KEY not set" };
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });

    const finalPrompt = aspectRatio !== "1:1"
      ? `${prompt} Image aspect ratio: ${aspectRatio}.`
      : prompt;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
      // @ts-expect-error - responseModalities not in types yet
      generationConfig: { responseModalities: ["Text", "Image"] },
    });

    const parts = result.response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return {
            success: true,
            imageBase64: part.inlineData.data,
            mimeType: part.inlineData.mimeType,
          };
        }
      }
    }

    return { success: false, error: "No image in response" };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

/**
 * Generate with built-in style system
 */
export async function generateStyled(
  type: ImageType,
  subject: string,
  variant?: string,
  aspectRatio?: GenerateOptions["aspectRatio"]
): Promise<ImageResult> {
  const prompt = buildPrompt(type, subject, variant);
  return generate({ prompt, aspectRatio });
}

/**
 * Save base64 image to file
 */
export async function saveImage(result: ImageResult, filepath: string): Promise<boolean> {
  if (!result.success || !result.imageBase64) return false;
  try {
    const fs = await import("fs/promises");
    await fs.writeFile(filepath, Buffer.from(result.imageBase64, "base64"));
    return true;
  } catch {
    return false;
  }
}

/**
 * Get data URL for React/browser use
 */
export function toDataUrl(result: ImageResult): string | null {
  if (!result.success || !result.imageBase64 || !result.mimeType) return null;
  return `data:${result.mimeType};base64,${result.imageBase64}`;
}
