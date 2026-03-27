import { GoogleGenAI } from "@google/genai";

export async function generateBrandGuideline() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = `A professional brand guideline board for a premium painting services brand named 'Shubham Colour House'. 
  Style: Clean, minimal, premium, modern UI branding presentation. 
  Background: Soft off-white (#F8F8FA) with subtle gradient wave overlays.
  Layout: 
  - Logo and Brand title at the top.
  - A long horizontal gradient bar transitioning smoothly from Cyan (#12C2E9) to Blue (#5E3BFF) to Purple (#FE3A83) to Pink (#F931B6) to Orange (#F97316).
  - Primary color swatches as circles with HEX codes (#12C2E9, #5E3BFF, #FE3A83, #F931B6, #F97316).
  - Typography preview section with modern sans-serif fonts.
  - UI elements: rounded cards with soft shadows, buttons with pink-to-orange gradient and white text.
  Visual Details: Fresh, creative, high-end, and trustworthy mood. Professional and elegant (not playful). No harsh rainbow or neon transitions. Controlled color balance.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: [{ parts: [{ text: prompt }] }],
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: "1K"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
