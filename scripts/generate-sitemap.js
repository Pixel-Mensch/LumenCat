const fs = require("fs");
const path = require("path");

// Sitemap-Konfiguration
const domain = "https://lumencat.de";
const htmlFiles = [
  { url: "/", priority: "1.0", changefreq: "monthly" },
  { url: "/shop.html", priority: "0.9", changefreq: "monthly" },
  { url: "/kontakt.html", priority: "0.8", changefreq: "monthly" },
  { url: "/blog.html", priority: "0.7", changefreq: "weekly" },
  { url: "/impressum.html", priority: "0.3", changefreq: "yearly" },
  { url: "/datenschutz.html", priority: "0.3", changefreq: "yearly" },
];

// Aktuelle Datumsstempel
const lastmod = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// XML-Sitemap generieren
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

htmlFiles.forEach((file) => {
  xml += `  <url>
    <loc>${domain}${file.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${file.changefreq}</changefreq>
    <priority>${file.priority}</priority>
  </url>
`;
});

xml += `</urlset>`;

// Sitemap speichern
const sitemapPath = path.join(__dirname, "..", "sitemap.xml");
fs.writeFileSync(sitemapPath, xml, "utf-8");

console.log(`✅ Sitemap generiert: ${sitemapPath}`);
console.log(`📄 ${htmlFiles.length} URLs hinzugefügt`);
console.log(`📅 Letzte Aktualisierung: ${lastmod}`);
