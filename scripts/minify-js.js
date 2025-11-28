const fs = require("fs");
const path = require("path");

// Simple JS minifier (basic implementation)
function minifyJS(js) {
  return (
    js
      // Remove single-line comments (but keep URLs)
      .replace(/(?<![:"'])\/\/.*$/gm, "")
      // Remove multi-line comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Remove leading/trailing whitespace
      .replace(/^\s+|\s+$/gm, "")
      // Remove empty lines
      .replace(/\n+/g, "\n")
      .trim()
  );
}

// Read JS file
const jsPath = path.join(__dirname, "..", "js", "main.js");
const minPath = path.join(__dirname, "..", "js", "main.min.js");

console.log("📦 Minifying JavaScript...");

const js = fs.readFileSync(jsPath, "utf-8");
const minified = minifyJS(js);

// Write minified file
fs.writeFileSync(minPath, minified, "utf-8");

const originalSize = (js.length / 1024).toFixed(2);
const minifiedSize = (minified.length / 1024).toFixed(2);
const savings = (((js.length - minified.length) / js.length) * 100).toFixed(1);

console.log(`✅ JavaScript minifiziert: ${minPath}`);
console.log(`📊 Original: ${originalSize} KB`);
console.log(`📊 Minified: ${minifiedSize} KB`);
console.log(`💾 Ersparnis: ${savings}%`);
