# PROJECT_STATE.md – Aktueller Entwicklungsstand

Stand: 2026-03-17 | Branch: `dev`

---

## Seiten-Status

### `index.html` – Hauptseite
**Status: Live / Production-Ready**

Was funktioniert:
- Hero mit parallax Hintergrundbild (AVIF/WebP responsive)
- Theme-Toggle (Dark/Light mit localStorage-Persistenz)
- Mobile Navigation (Hamburger)
- Scroll-Reveal-Animationen (`IntersectionObserver`)
- Services-, Why-, Process-, Portfolio-Sektionen
- Integriertes Kontaktformular mit CSRF-Schutz und Fetch-Submission
- Skip-Link für Keyboard-Navigation (neu: clip-path-Animation)
- SEO: Open Graph, Twitter Cards, JSON-LD LocalBusiness
- PWA: Service Worker + manifest.json

Was fehlt / zu prüfen:
- Projektlinks zeigen jetzt auf lokale `/projekte/...`-Subseiten statt GitHub Pages → Subseiten müssen vollständig deployed sein

---

### `kontakt.html` – Kontaktseite
**Status: Live / Production-Ready**

Was funktioniert:
- Kontaktformular (name, email, phone, projectType, message)
- CSRF-Token-Lade via `scripts/csrf-token.php`
- Honeypot-Feld (`website`)
- Rate-Limiting (3 Requests/60s)
- n8n-Webhook-Integration (optional, via `.env`)
- Echtzeit-Feedback-Nachrichten

Was fehlt:
- Kein Spam-Reporting / reCAPTCHA (bei Bedarf nachrüstbar)

---

### `services.html` – Pakete & Preise
**Status: Live / Inhaltlich aktuell**

Was funktioniert:
- Pricing-Tiers dargestellt
- Service-Beschreibungen
- CTA-Buttons

Was fehlt / zu prüfen:
- Footer-Description war inkonsistent (3 Varianten in alten Dateien) – ggf. noch harmonisieren
- Bindestriche in Komposita ("n8n Workflows" → "n8n-Workflows") noch nicht global korrigiert

---

### `insights.html` – Blog / Insights
**Status: Platzhalter / Ausbau offen**

Was funktioniert:
- Seite existiert und lädt korrekt

Was fehlt:
- Kein echter Content / Blog-Beiträge
- Kein dynamisches Blog-System (statisch oder CMS steht zur Entscheidung)
- `css/pages/blog.css` vorhanden, aber Inhalt minimal

---

### `impressum.html` – Pflichtangaben
**Status: Live / Pflegefrei**

Kein Handlungsbedarf. Statischer Inhalt.

---

### `datenschutz.html` – Datenschutzerklärung
**Status: Live / Gelegentlich aktualisieren**

Kein unmittelbarer Handlungsbedarf.
Zu prüfen bei: Neue externe Dienste einbinden, Änderungen am Formular-Handling oder Analytics.

---

## Was funktioniert (global)

- PWA: Service Worker, Manifest, Offline-Fallback
- Build-Pipeline: `npm run build` (CSS + JS minifizieren)
- Bildoptimierung: AVIF/WebP via Sharp
- CSRF-Schutz: Session-basierte Tokens mit Cache-Control-Headers
- Accessibility: ARIA, Semantic HTML, `prefers-reduced-motion`, Skip-Link
- SEO: Sitemap, robots.txt, Meta-Tags, Structured Data
- Theme-System: Dark/Light mit CSS Custom Properties
- Plausible Analytics (Privacy-first, kein Cookie-Banner)

---

## Was fehlt / broken

| Problem | Seite | Priorität |
|---|---|---|
| Projektlinks zeigen auf lokale Subseiten (`/projekte/...`) – Subseiten müssen deployed + vollständig sein | `index.html` | Hoch |
| Blog/Insights hat keinen echten Content | `insights.html` | Hoch |
| CSP-Header fehlen – erst auf Hetzner `.htaccess` konfigurierbar | Server | Mittel |
| Footer-Texts in allen Seiten noch nicht vollständig harmonisiert | Alle HTML | Mittel |
| Bindestriche in Komposita noch nicht global korrigiert ("n8n Workflows" → "n8n-Workflows") | Mehrere HTML | Niedrig |
| Kein Autoprefixer in Build-Pipeline | Build | Niedrig |
| Keine E2E-Tests (Playwright) | – | Niedrig |

---

## Offene TODOs aus dem Code

Keine aktiven `TODO` oder `FIXME`-Kommentare im Produktions-Code gefunden (Stand 2026-03-17).

Einzige Fundstelle: `lighthouse-report.html` (auto-generiert, kein eigener Code).

---

## Technische Schulden (Kurzform)

Vollständige Übersicht → [ARCHITECTURE.md](ARCHITECTURE.md#bekannte-technische-schulden)

1. Navigation + Footer in allen HTML-Dateien dupliziert (DRY-Problem)
2. FOUC-Script inline-dupliziert (bewusstes Trade-off gegen Flash)
3. CSP-Header noch nicht konfiguriert
4. `insights.html` ohne Content

---

## Deployment-Checkliste (vor nächstem Live-Push)

- [ ] `npm run build` ausführen (CSS + JS neu bauen)
- [ ] `/projekte/`-Subseiten auf Vollständigkeit prüfen
- [ ] Footer-Descriptions in allen Seiten vereinheitlichen
- [ ] "n8n Workflows" → "n8n-Workflows" global ersetzen
- [ ] `.env` auf Hetzner-Server aktuell halten
- [ ] CSP-Header in `.htaccess` konfigurieren
- [ ] Kontaktformular auf Staging testen (CSRF + n8n-Webhook)
- [ ] Lighthouse-Test auf Production: `npx lighthouse https://lumencat.de --view`

---

## Roadmap (grob)

**Phase 1 (aktuell):**
- Blog/Insights ausbauen
- Projektseiten vervollständigen

**Phase 2:**
- KI-Lead-Klassifizierer via n8n
- Kunden-Dashboard / Login-Bereich
- Digitale Produkte (Templates, Automation-Kits)

**Phase 3:**
- Mehrsprachigkeit (DE/EN)
- KI-Website-Assistent als konfigurierbares No-Code-Tool
- A/B-Testing für CTAs
