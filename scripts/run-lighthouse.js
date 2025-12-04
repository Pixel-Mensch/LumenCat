// Lighthouse Performance Test Runner
const { exec } = require("child_process");

const url = "http://localhost:8000";
const outputPath = "lighthouse-report-new.html";

console.log("🔍 Starte Lighthouse-Test...");
console.log(`URL: ${url}`);
console.log("");

// Prüfe ob Server läuft
const http = require("http");
http
  .get(url, (res) => {
    if (res.statusCode === 200) {
      console.log("✅ Server antwortet");

      // Lighthouse ausführen
      const cmd = `npx lighthouse ${url} --output=html --output-path=${outputPath} --quiet --chrome-flags="--headless"`;

      console.log(
        "⏳ Führe Lighthouse-Analyse durch (dauert ca. 30-60 Sekunden)...\n"
      );

      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error("❌ Fehler beim Lighthouse-Test:", error.message);
          return;
        }

        console.log("\n✅ Lighthouse-Report erstellt:", outputPath);
        console.log(
          "📊 Öffne den Report im Browser, um die Ergebnisse zu sehen.\n"
        );

        if (stdout) console.log(stdout);
      });
    } else {
      console.error(
        `❌ Server antwortet nicht korrekt (Status: ${res.statusCode})`
      );
    }
  })
  .on("error", (err) => {
    console.error(
      "❌ Kann Server nicht erreichen. Stelle sicher, dass der Dev-Server läuft:"
    );
    console.error("   node scripts/dev-server.js\n");
  });
