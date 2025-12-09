const fs = require("fs");
const path = require("path");

// Sitemap-Konfiguration
const domain = "https://lumencat.de";
const htmlFiles = [
  { url: "/", file: "index.html", priority: "1.0", changefreq: "monthly" },
  {
    url: "/shop.html",
    file: "shop.html",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    url: "/kontakt.html",
    file: "kontakt.html",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    url: "/insights.html",
    file: "insights.html",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    url: "/impressum.html",
    file: "impressum.html",
    priority: "0.3",
    changefreq: "yearly",
  },
  {
    url: "/datenschutz.html",
    file: "datenschutz.html",
    priority: "0.3",
    changefreq: "yearly",
  },
];

// Aktuelles Datum als Fallback
const today = new Date().toISOString().split("T")[0];

// XML-Sitemap generieren
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

htmlFiles.forEach((page) => {
  const filePath = path.join(__dirname, "..", page.file);

  // Hole Datei-Änderungsdatum (mtime)
  let lastmod = today;
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    lastmod = stats.mtime.toISOString().split("T")[0];
  }

  xml += `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

xml += `</urlset>`;

// Sitemap speichern
const sitemapPath = path.join(__dirname, "..", "sitemap.xml");
fs.writeFileSync(sitemapPath, xml, "utf-8");

console.log(`✅ Sitemap generiert: ${sitemapPath}`);
console.log(
  `📄 ${htmlFiles.length} URLs hinzugefügt (mit dynamischen lastmod-Daten)`
);
console.log(`📅 Fallback-Datum: ${today}`);
