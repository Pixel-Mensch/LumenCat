# TASK_QUEUE.md – Aufgaben-Warteschlange

Format: `[ ] Aufgabe · Priorität · Datei(en)`

---

## NEXT UP

<!-- Priorisierte Aufgaben die als nächstes angegangen werden -->

- [ ] Footer-Description in allen HTML-Seiten vereinheitlichen · Mittel · `index.html`, `kontakt.html`, `services.html`, `impressum.html`, `datenschutz.html`, `insights.html`
- [ ] "n8n Workflows" → "n8n-Workflows" global ersetzen · Niedrig · alle HTML
- [ ] CSP-Header in `.htaccess` konfigurieren (nach Hetzner-Deployment) · Mittel · `.htaccess`
- [ ] Blog/Insights-Seite mit erstem Content befüllen · Hoch · `insights.html`, `css/pages/blog.css`
- [ ] `/projekte/`-Subseiten auf Vollständigkeit prüfen und deployen · Hoch · `Bilder/projekte/`

---

## IN PROGRESS

<!-- Aufgaben die gerade bearbeitet werden -->

---

## DONE

<!-- Erledigte Aufgaben -->

- [x] CSS-Modularisierung (1 Datei → 16 Module) · `css/modules/`
- [x] CSRF-Schutz implementieren · `scripts/contact.php`, `scripts/csrf-token.php`
- [x] Rate-Limiting im Kontaktformular · `scripts/contact.php`
- [x] PWA: Service Worker + Manifest · `sw.js`, `manifest.json`
- [x] Bildoptimierung: AVIF/WebP responsive · `scripts/convert-images.js`
- [x] Build-Pipeline: npm scripts für CSS + JS · `package.json`
- [x] Cache-Busting via Query-Parameter (`?v=1.0.1`) · alle HTML
- [x] Skip-Link mit clip-path-Animation · `css/modules/utilities.css`, `index.html`
- [x] Mobile: background-attachment scroll fix · `css/modules/base.css`
- [x] Process-Grid Breakpoint auf 900px · `css/modules/sections.css`
- [x] Projektlinks auf lokale `/projekte/...`-Pfade umgestellt · `index.html`
- [x] SW v1.0.6: navigate-Strategie, /scripts/-Bypass · `sw.js`
- [x] CSRF-Prüfung in contact.php nach vorne verschoben · `scripts/contact.php`
- [x] csrf-token.php: Cache-Control-Header ergänzt · `scripts/csrf-token.php`
- [x] AI-Workflow-Docs erstellt (AGENTS.md, ARCHITECTURE.md, PROJECT_STATE.md) · Root
