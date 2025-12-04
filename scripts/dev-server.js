// Einfacher Dev-Server für lokales Testing
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const ROOT = path.join(__dirname, "..");

const MIME_TYPES = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  avif: "image/avif",
  webp: "image/webp",
  ico: "image/x-icon",
  xml: "application/xml",
  txt: "text/plain",
};

http
  .createServer((req, res) => {
    let filePath = path.join(ROOT, req.url === "/" ? "index.html" : req.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
        return;
      }

      const ext = path.extname(filePath).slice(1);
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  })
  .listen(PORT);

console.log(`✅ Dev-Server läuft auf http://localhost:${PORT}`);
console.log("Drücke Ctrl+C zum Beenden");
