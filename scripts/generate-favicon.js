#!/usr/bin/env node
/**
 * Favicon Generator for LumenCat
 * Generates multiple favicon sizes from the logo
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicons() {
  const inputPath = path.join(
    __dirname,
    "../Bilder/LumenCatWithoutBackground.png"
  );
  const outputDir = path.join(__dirname, "../Bilder");

  try {
    console.log("🎨 Generating favicons...");

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error("❌ Error: LumenCatWithoutBackground.png not found");
      process.exit(1);
    }

    // First trim the image to remove empty space
    console.log("✂️  Trimming transparent borders...");
    const trimmedBuffer = await sharp(inputPath)
      .trim({
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        threshold: 10,
      })
      .toBuffer();

    const sizes = [
      { size: 16, name: "favicon-16x16.png" },
      { size: 32, name: "favicon-32x32.png" },
      { size: 180, name: "apple-touch-icon.png" },
      { size: 192, name: "android-chrome-192x192.png" },
      { size: 512, name: "android-chrome-512x512.png" },
    ];

    for (const { size, name } of sizes) {
      await sharp(trimmedBuffer)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(path.join(outputDir, name));

      console.log(`✅ Created: ${name} (${size}x${size}px)`);
    }

    // Generate main favicon.ico (32x32)
    await sharp(trimmedBuffer)
      .resize(32, 32, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(path.join(outputDir, "favicon.ico"));

    console.log("✅ Created: favicon.ico (32x32px)");
    console.log("🎉 All favicons generated successfully!");
  } catch (error) {
    console.error("❌ Error generating favicons:", error.message);
    process.exit(1);
  }
}

generateFavicons();
