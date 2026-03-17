# ARCHITECTURE.md – Technische Dokumentation

Projekt: **Lumencat** – Webdesign, n8n-Automationen und KI-Assistenten für Selbstständige
Version: `1.0.1` | Stack: Vanilla HTML/CSS/JS + PHP | Hosting: Hetzner

---

## Dateiübersicht

### HTML-Seiten (Root)

| Datei | Beschreibung | Status |
|---|---|---|
| `index.html` | Hauptseite – Hero, Services, Portfolio, Kontaktformular | Live |
| `kontakt.html` | Dedizierte Kontaktseite | Live |
| `shop.html` | Pakete & Preise | Live |
| `insights.html` | Blog / Insights-Übersicht | In Arbeit |
| `impressum.html` | Pflichtangaben | Live |
| `datenschutz.html` | DSGVO-Datenschutzerklärung | Live |

### CSS-Architektur (`css/`)

```
css/
├── styles.css          Entry-Point – nur @imports
├── styles.min.css      Minifizierter Production-Build (auto-generiert, nicht editieren)
├── modules/
│   ├── variables.css   KERNCODE – alle CSS Custom Properties
│   ├── base.css        Reset, body, focus-styles, background-attachment
│   ├── typography.css  Headings, text utilities, kicker styles
│   ├── header.css      Sticky header, backdrop-filter
│   ├── navigation.css  Desktop/Mobile Nav, Hamburger, Theme-Toggle
│   ├── hero.css        Hero-Sektionen, parallax support
│   ├── sections.css    Section-Layouts, Grid-Systeme, CTA-Sections
│   ├── buttons.css     Button-Varianten (primary, ghost, small, cta)
│   ├── forms.css       Input-Styles, Textarea, Labels
│   ├── cards.css       Project-, Process-, Why-, Service-Cards
│   ├── footer.css      Footer-Layout
│   ├── animations.css  Scroll-Reveal, Parallax, CTA-Pulse
│   └── utilities.css   Skip-Link, Spacing, Flexbox, Display, Text-Utils
└── pages/
    ├── shop.css        Shop-spezifische Styles (Pricing, Testimonials, Bots)
    └── blog.css        Blog-Grid, Cards
```

**Größen:** Original: 37.14 KB → Minifiziert: 30.62 KB (−27.6 %, Gzip: ~8.5 KB)

### JavaScript (`js/`)

| Datei | Beschreibung |
|---|---|
| `js/main.js` | Haupt-Bundle – alle Frontend-Logik (234 Zeilen) |
| `js/main.min.js` | Minifizierter Production-Build (auto-generiert) |

### PHP Backend (`scripts/`)

| Datei | Beschreibung |
|---|---|
| `scripts/contact.php` | Kontaktformular – CSRF, Rate-Limit, Validierung, Mail + n8n-Webhook |
| `scripts/csrf-token.php` | CSRF-Token-Generator (Session-basiert, mit Cache-Control-Headers) |

### Build-Scripts (`scripts/`)

| Datei | Befehl | Zweck |
|---|---|---|
| `scripts/minify-css.js` | `npm run build:css` | @imports auflösen, CSS inline & minifizieren → `styles.min.css` |
| `scripts/minify-js.js` | `npm run build:js` | Comments/Leerzeilen entfernen → `main.min.js` |
| `scripts/convert-images.js` | `npm run img:convert` | AVIF/WebP + Responsive-Varianten (480, 800, 1200px) via Sharp |
| `scripts/generate-sitemap.js` | `npm run sitemap` | `sitemap.xml` aus allen HTML-Dateien generieren |
| `scripts/generate-favicon.js` | – | Favicon-Generierung |
| `scripts/dev-server.js` | `node scripts/dev-server.js` | Lokaler Dev-Server (Port 8000) |
| `scripts/run-lighthouse.js` | – | Lighthouse Performance-Audit |
| `scripts/convert-logo-to-svg.js` | – | Logo-Konvertierungshelfer |
| `scripts/logo-converter.js` | `npm run logo:info` | Logo-Info/Analyse |
| `scripts/png-to-svg.py` | `python scripts/png-to-svg.py` | PNG→SVG Konvertierung (Python) |

### Assets (`Bilder/`)

```
Bilder/
├── logo.svg                    Haupt-Logo (SVG, skalierbar)
├── lumencatLogo.png            PNG-Fallback für PWA-Manifest
├── Hintergrund.png             Dark-Theme Background
├── Hintergrund_Hell.png        Light-Theme Background
├── favicon.ico / .png (16/32)
├── apple-touch-icon.png
├── android-chrome-192x192.png / 512x512.png
├── optimized/                  Auto-generiert (in .gitignore)
│   ├── HeroMain-480.avif
│   ├── HeroMain-800.avif
│   └── ...
├── blog/                       Blog-Post-Bilder
├── projekte/                   Portfolio-Projekt-Dateien (lokale Subseiten)
│   ├── lueftungsbau-meier/
│   ├── bistro-aurora/
│   └── physiovital/
└── en/                         Assets für englische Version (geplant)
```

### Konfiguration

| Datei | Beschreibung |
|---|---|
| `package.json` | npm-Scripts + Dependencies (`sharp ^0.32.5`) |
| `manifest.json` | PWA-Manifest (Icons, Shortcuts, Theme-Color) |
| `sw.js` | Service Worker – Caching-Strategien (Version: `lumencat-v1.0.6`) |
| `robots.txt` | Crawler-Direktiven |
| `sitemap.xml` | Auto-generiert |
| `.gitignore` | Schließt `.env`, `node_modules/`, `Bilder/optimized/`, `*.min.*` aus |
| `.github/copilot-instructions.md` | Copilot-Anweisungen |
| `.claude/settings.local.json` | Claude-IDE-Settings |

---

## CSS Custom Properties

Alle Variablen definiert in `css/modules/variables.css`.

### Farben – Dark Theme (`:root`, Standard)

```css
--color-bg: #000000
--color-bg-soft: #090914
--color-surface: #111322
--color-text: #eaf2ff
--color-text-soft: #a5b0c7
--color-accent-cyan: #19f7ff
--color-accent-purple: #8a2bff
--shadow-neon: 0 0 18px rgba(25,247,255,0.35), 0 0 32px rgba(138,43,255,0.4)
```

### Farben – Light Theme (`:root.theme-light`)

```css
--color-bg: #f7faff
--color-bg-soft: #e5eaf3
--color-surface: #ffffff
--color-text: #161622
--color-text-soft: #4a5060
```

### Spacing-Skala

```css
--space-xs: 0.25rem
--space-sm: 0.5rem
--space-md: 1rem
--space-lg: 1.5rem
--space-xl: 2rem
--space-2xl: 3rem
--space-3xl: 4rem
```

### Border Radius

```css
--radius-sm: 0.5rem
--radius-md: 1rem
--radius-lg: 1.5rem
--radius-full: 999px
```

### Transitions

```css
--transition-fast: 0.12s ease
--transition-base: 0.16s ease
--transition-slow: 0.3s ease
--transition-smooth: 520ms cubic-bezier(0.22, 0.8, 0.22, 1)
```

---

## JavaScript-Module (`js/main.js`)

Alle Funktionen in einer Datei, strukturiert in logische Blöcke:

| Block | Zuständigkeit |
|---|---|
| **Theme Management** | Dark/Light Toggle, `localStorage`-Persistenz, System-Präferenz, FOUC-Prevention |
| **Mobile Navigation** | Hamburger-Toggle, ARIA-Attribute, Close-on-Link-Click |
| **Scroll Animations** | `IntersectionObserver` für `.reveal`/`.reveal-fade`, `prefers-reduced-motion` |
| **Parallax** | Hero-Hintergrundbild Parallax via `requestAnimationFrame` (nur Desktop) |
| **Contact Form** | `fetch()`-Submission, CSRF-Token laden, Client-Validierung, Feedback-Messages |

---

## PHP Backend

### `scripts/contact.php` – Verarbeitungsreihenfolge

1. Session starten
2. CSRF-Token validieren (`hash_equals`)
3. Rate-Limit prüfen (3 Requests/60s per Session)
4. Nur POST akzeptieren
5. Honeypot prüfen (`website`-Feld muss leer sein)
6. Felder validieren (name, email, message required; email via `FILTER_VALIDATE_EMAIL`)
7. Header-Injection verhindern (Regex auf `\r\n`)
8. PHP `mail()` senden an `$_ENV['CONTACT_TO_EMAIL']`
9. Optional: n8n-Webhook POST mit JSON-Payload

### Environment-Variablen (`.env` auf Server, nicht in Git)

```
CONTACT_TO_EMAIL=hello@lumencat.de
CONTACT_FROM_EMAIL=no-reply@lumencat.de
N8N_WEBHOOK_URL=https://...   # optional
```

---

## Service Worker (`sw.js`)

Cache-Version: `lumencat-v1.0.6`

| Anfrage-Typ | Strategie | Grund |
|---|---|---|
| Navigation (`mode === "navigate"`) | Network-first + Cache-Fallback | Immer frischen HTML-Inhalt liefern |
| `/scripts/*` und non-GET | Immer Netzwerk | PHP-Endpoints nicht cachen |
| `localhost`/`127.0.0.1` | Network-first | Lokale Entwicklung |
| `styles.min.css`, `main.min.js` | Network-first + Cache-Update | Immer aktuelle Assets |
| Alles andere (Bilder, Fonts) | Cache-first + Network-Fallback | Offline-Fähigkeit, Bandbreite sparen |

**Gecachte Assets (Install):**
`/`, `/index.html`, `/css/styles.min.css`, `/js/main.min.js`, `/Bilder/logo.svg`, `/Bilder/optimized/HeroMain-800.avif`, `/Bilder/optimized/HeroMain-480.avif`

---

## Externe Abhängigkeiten & Dienste

| Dienst | Wo | Pflicht? | Zweck |
|---|---|---|---|
| **Hetzner Webhosting** | Server | Ja | PHP 7.4+, Hosting |
| **n8n** | `contact.php` via `N8N_WEBHOOK_URL` | Nein | Automations-Workflows für Lead-Management |
| **PHP `mail()`** | `contact.php` | Ja | E-Mail-Versand nach Formular-Submit |
| **Plausible Analytics** | `index.html` (DNS-Prefetch) | Nein | Privacy-first Analytics (kein Cookie-Banner nötig) |
| **Sharp** | Build-Scripts | Nein (nur lokal) | AVIF/WebP-Bildoptimierung |
| **OpenAI API** | n8n-Workflows (nicht direkt im Code) | Nein | KI-gestützte Lead-Klassifizierung |
| **Google Sheets** | n8n-Workflows | Nein | Datenspeicherung für Leads |

---

## Bekannte technische Schulden

| # | Problem | Priorität | Aufwand |
|---|---|---|---|
| 1 | **DRY-Verletzung:** Navigation und Footer in allen 6 HTML-Dateien dupliziert. Akzeptabel bis ~10 Seiten. Lösung: PHP-Includes oder SSG (Eleventy) | Mittel | Hoch |
| 2 | **FOUC-Prevention-Script** inline in jeder HTML-Datei dupliziert (Sicherheitsabwägung: Inline verhindert Flash, externe Datei würde FOUC riskieren) | Niedrig | Mittel |
| 3 | **Kein CSP-Header** – muss nach Deployment in `.htaccess` auf Hetzner konfiguriert werden | Mittel | Gering |
| 4 | **Kein Autoprefixer** – CSS-Vendor-Prefixes müssen manuell gepflegt werden | Niedrig | Mittel |
| 5 | **`insights.html` / Blog** – Seite existiert, hat aber noch keinen echten Content | Hoch | Hoch |
| 6 | **Responsive Bilder in `/projekte/`-Subseiten** – nicht geprüft ob alle Bilder optimiert sind | Niedrig | Mittel |

---

## CSS-Migrations-Historie

Die CSS wurde am **29.11.2025** von einer monolithischen 1958-Zeilen-Datei in 16 spezialisierte Module aufgeteilt. Das Build-Script (`minify-css.js`) löst alle `@import`-Statements auf und inlinet sie zu `styles.min.css`. Kompression: 37.14 KB → 30.62 KB (−27.6 %).

---

## Breakpoints

| Wert | Verwendung |
|---|---|
| `720px` | Mobile/Desktop-Nav-Umschaltung |
| `900px` | Process-Grid (4 Spalten), mittlere Layouts |
| `1024px` | Haupt-Layout-Breakpoint (Desktop) |
| `1200px` | Wide-Layouts, Section-Grids |
| `1600px` | Max-Width-Container |
