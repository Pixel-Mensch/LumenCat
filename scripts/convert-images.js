const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Dieses Skript konvertiert alle PNG/JPG-Bilder im Ordner `Bilder` zu
// WebP und AVIF und erzeugt zusätzlich skalierte Varianten. Die Ausgaben
// werden in `Bilder/optimized` geschrieben.

const INPUT_DIR = path.join(__dirname, "..", "Bilder");
const OUT_DIR = path.join(INPUT_DIR, "optimized");
const widths = [480, 800, 1200];

if (!fs.existsSync(INPUT_DIR)) {
  console.error("Input directory not found:", INPUT_DIR);
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

const exts = [".png", ".jpg", ".jpeg"];

async function processFile(file) {
  const inputPath = path.join(INPUT_DIR, file);
  const ext = path.extname(file).toLowerCase();
  if (!exts.includes(ext)) return;

  const name = path.basename(file, ext);

  try {
    // Originalgröße als WebP
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(path.join(OUT_DIR, `${name}.webp`));
    // Originalgröße als AVIF
    await sharp(inputPath)
      .avif({ quality: 50 })
      .toFile(path.join(OUT_DIR, `${name}.avif`));

    // Skalierte Varianten
    for (const w of widths) {
      const outWebp = path.join(OUT_DIR, `${name}-${w}.webp`);
      const outAvif = path.join(OUT_DIR, `${name}-${w}.avif`);
      await sharp(inputPath)
        .resize({ width: w })
        .webp({ quality: 78 })
        .toFile(outWebp);
      await sharp(inputPath)
        .resize({ width: w })
        .avif({ quality: 45 })
        .toFile(outAvif);
    }

    console.log("Konvertiert:", file);
  } catch (err) {
    console.error("Fehler beim Konvertieren", file, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(INPUT_DIR);
  for (const f of files) {
    await processFile(f);
  }
  console.log("Fertig. Optimierte Bilder sind in:", OUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
