#!/usr/bin/env node
/**
 * PNG to SVG Converter for LumenCat Logo
 * Converts LumenCatWithoutBackground.png to SVG format
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function convertLogoToSVG() {
  const inputPath = path.join(
    __dirname,
    "../Bilder/LumenCatWithoutBackground.png"
  );
  const outputPath = path.join(__dirname, "../Bilder/logo.svg");

  try {
    console.log("🔄 Converting PNG to SVG...");
    console.log(`📂 Input: ${inputPath}`);

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error("❌ Error: LumenCatWithoutBackground.png not found");
      process.exit(1);
    }

    // Read the PNG and get metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`📏 Original size: ${metadata.width}x${metadata.height}px`);
    console.log(`🎨 Has Alpha Channel: ${metadata.hasAlpha}`);

    // Trim transparent pixels to remove empty space around the logo
    const trimmedBuffer = await sharp(inputPath)
      .trim({
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        threshold: 10,
      })
      .toBuffer();

    const trimmedMetadata = await sharp(trimmedBuffer).metadata();
    console.log(
      `✂️  Trimmed size: ${trimmedMetadata.width}x${trimmedMetadata.height}px`
    );

    // Ensure PNG has transparency preserved
    const pngBuffer = await sharp(trimmedBuffer)
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        force: true,
      })
      .toBuffer();

    const base64Image = pngBuffer.toString("base64");

    // Create SVG with embedded PNG and explicit transparent background
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="${trimmedMetadata.width}" height="${trimmedMetadata.height}" 
     viewBox="0 0 ${trimmedMetadata.width} ${trimmedMetadata.height}"
     preserveAspectRatio="xMidYMid meet">
  <image width="${trimmedMetadata.width}" height="${trimmedMetadata.height}" 
         preserveAspectRatio="xMidYMid meet"
         xlink:href="data:image/png;base64,${base64Image}"/>
</svg>`;

    // Write SVG file
    fs.writeFileSync(outputPath, svgContent);

    const svgSize = fs.statSync(outputPath).size;
    console.log(`✅ SVG created: ${outputPath}`);
    console.log(`📦 File size: ${(svgSize / 1024).toFixed(2)} KB`);
    console.log("✨ Logo successfully converted!");
  } catch (error) {
    console.error("❌ Error during conversion:", error.message);
    process.exit(1);
  }
}

// Run the conversion
convertLogoToSVG();
