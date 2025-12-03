const fs = require("fs");
const path = require("path");

// Simple CSS minifier (basic implementation)
function minifyCSS(css) {
  return (
    css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Remove whitespace around selectors and declarations
      .replace(/\s*([{}:;,])\s*/g, "$1")
      // Remove leading/trailing whitespace
      .replace(/^\s+|\s+$/gm, "")
      // Remove empty lines
      .replace(/\n+/g, "")
      // Collapse multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
}

// Resolve CSS imports and inline them
function resolveImports(cssContent, baseDir) {
  return cssContent.replace(
    /@import\s+["']([^"']+)["'];?/g,
    (match, importPath) => {
      const fullPath = path.join(baseDir, importPath);

      if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️  Import not found: ${importPath}`);
        return "";
      }

      const importedContent = fs.readFileSync(fullPath, "utf-8");
      // Recursively resolve nested imports
      return resolveImports(importedContent, path.dirname(fullPath));
    }
  );
}

// Read main CSS file
const cssDir = path.join(__dirname, "..", "css");
const cssPath = path.join(cssDir, "styles.css");
const minPath = path.join(cssDir, "styles.min.css");

console.log("📦 Minifying modular CSS...");

try {
  // Read and resolve all imports
  const css = fs.readFileSync(cssPath, "utf-8");
  const resolvedCSS = resolveImports(css, cssDir);

  // Minify the complete CSS
  const minified = minifyCSS(resolvedCSS);

  // Write minified file
  fs.writeFileSync(minPath, minified, "utf-8");

  const originalSize = (resolvedCSS.length / 1024).toFixed(2);
  const minifiedSize = (minified.length / 1024).toFixed(2);
  const savings = (
    ((resolvedCSS.length - minified.length) / resolvedCSS.length) *
    100
  ).toFixed(1);

  console.log(`✅ CSS minifiziert: ${minPath}`);
  console.log(`📊 Original: ${originalSize} KB`);
  console.log(`📊 Minified: ${minifiedSize} KB`);
  console.log(`💾 Ersparnis: ${savings}%`);
} catch (error) {
  console.error("❌ Fehler beim Minifizieren:", error.message);
  process.exit(1);
}
