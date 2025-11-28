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

// Read CSS file
const cssPath = path.join(__dirname, "..", "css", "styles.css");
const minPath = path.join(__dirname, "..", "css", "styles.min.css");

console.log("📦 Minifying CSS...");

const css = fs.readFileSync(cssPath, "utf-8");
const minified = minifyCSS(css);

// Write minified file
fs.writeFileSync(minPath, minified, "utf-8");

const originalSize = (css.length / 1024).toFixed(2);
const minifiedSize = (minified.length / 1024).toFixed(2);
const savings = (((css.length - minified.length) / css.length) * 100).toFixed(
  1
);

console.log(`✅ CSS minifiziert: ${minPath}`);
console.log(`📊 Original: ${originalSize} KB`);
console.log(`📊 Minified: ${minifiedSize} KB`);
console.log(`💾 Ersparnis: ${savings}%`);
