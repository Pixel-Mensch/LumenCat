# AGENTS.md – Regeln für Claude Code & KI-Assistenten

Dieses Dokument definiert, was KI-Assistenten (Claude Code, Copilot, etc.) in diesem Projekt dürfen und was nicht.

---

## Branch-Strategie

| Branch | Zweck                                  |
| ------ | -------------------------------------- |
| `main` | Stable / Production – nur Merges aus `dev` |
| `dev`  | Working branch – alle Änderungen hier  |

**Regel:** Niemals direkt auf `main` committen. Immer auf `dev` arbeiten, dann nach `main` mergen.

---

## Kerncode – Niemals ohne Rückfrage anfassen

Diese Dateien sind geschäftskritisch. Vor jeder Änderung explizit bestätigen lassen:

| Datei | Grund |
|---|---|
| `scripts/contact.php` | CSRF, Rate-Limiting, n8n-Webhook, E-Mail-Versand |
| `scripts/csrf-token.php` | Session-Sicherheit |
| `sw.js` | PWA-Caching – Fehler können die ganze Site offline machen |
| `css/modules/variables.css` | Globales Design-System – Änderungen wirken auf alles |
| `manifest.json` | PWA-Konfiguration |
| `sitemap.xml` | SEO |
| `.htaccess` (wenn vorhanden) | Server-Konfiguration, CSP-Header |

---

## Frei bearbeitbare Dateien

Diese Dateien können ohne gesonderte Rückfrage bearbeitet werden:

- `index.html`, `kontakt.html`, `shop.html`, `impressum.html`, `datenschutz.html`, `insights.html` – Content-Änderungen
- `css/modules/*.css` (außer `variables.css`) – Styling-Anpassungen
- `css/pages/*.css` – Seiten-spezifische Styles
- `js/main.js` – Feature-Erweiterungen (kein Breaking Change)
- Build-Scripts (`scripts/minify-*.js`, `scripts/generate-*.js`, etc.) – Tooling-Verbesserungen
- `robots.txt` – SEO-Anpassungen
- `AGENTS.md`, `ARCHITECTURE.md`, `PROJECT_STATE.md`, `TASK_QUEUE.md` – Dokumentation

---

## Code-Stil-Regeln

### Technologie-Stack
- **Vanilla JS / CSS** – kein Framework (kein React, Vue, Svelte, etc.)
- **Kein Build-Tool** außer den vorhandenen npm scripts (`npm run build`)
- **Kein neues npm-Package** ohne explizite Zustimmung
- **Kein TypeScript** – pures ES2020+

### CSS
- **Modular:** Jede neue Komponente bekommt ihr eigenes Modul in `css/modules/`
- **BEM-ähnlich:** `.component__element--modifier`
- **Nur CSS Custom Properties** aus `variables.css` für Farben, Spacing, Radii, Transitions
- **Mobile-First:** `@media (min-width: ...)` – nie `max-width` als Hauptbreakpoint
- Breakpoints: `720px` (mobile/desktop-Nav), `900px`, `1024px`, `1200px`, `1600px`
- Nach Änderungen an CSS-Modulen: `npm run build:css` ausführen

### JavaScript
- **Kein `var`** – nur `const`/`let`
- **Keine globalen Variablen** – alles in Funktions-Scope oder IIFE
- **Keine `console.log()`** in Production-Code (nur im Error-Handling mit Kommentar)
- Event-Listener immer mit `addEventListener`, nie `onclick`-Attribute in HTML
- Nach JS-Änderungen: `npm run build:js` ausführen

### PHP
- **Sicherheit zuerst:** Jede User-Eingabe validieren und sanitizen
- `hash_equals()` für Token-Vergleiche (timing-safe)
- Keine Credentials im Code – immer über `$_ENV` oder `.env`

### HTML
- **Semantisches HTML** – kein `<div>`-Soup
- `aria-*`-Attribute bei interaktiven Elementen
- `alt`-Text bei allen `<img>`-Tags
- Kein Inline-JS oder Inline-CSS (außer FOUC-Prevention-Script und dynamische JS-Styles)

---

## Naming Conventions

| Kontext | Sprache |
|---|---|
| Variablen, Funktionen, CSS-Klassen | Englisch |
| HTML `id` und `class` | Englisch |
| Dateinamen | Englisch (kebab-case) |
| Content-Texte (sichtbar auf der Website) | Deutsch |
| Code-Kommentare | Englisch oder Deutsch (einheitlich pro Datei) |
| Git Commit Messages | Englisch mit Konventional-Commit-Format (`feat:`, `fix:`, `docs:`, etc.) |

---

## Was KI-Assistenten grundsätzlich nicht tun dürfen

1. **Keine Frameworks installieren** (React, Vue, Tailwind, Bootstrap, etc.)
2. **Keine Änderungen an Sicherheitslogik** ohne explizite Anfrage (CSRF, Rate-Limiting, Honeypot)
3. **Keinen Code auf `main` pushen** – immer nur `dev`
4. **Kein Force-Push** (`git push --force`)
5. **Keine `.env`-Datei committen**
6. **Keine optimierten Build-Artefakte committen** (`*.min.css`, `*.min.js`, `Bilder/optimized/`)
7. **Keine Packages hinzufügen** ohne Rückfrage
8. **Keine externen CDN-Links** für JS/CSS-Bibliotheken einfügen

---

## Build-Workflow

```bash
# CSS neu bauen (nach CSS-Änderungen)
npm run build:css

# JS neu bauen (nach JS-Änderungen)
npm run build:js

# Bilder optimieren (nach neuen Bildern)
npm run img:convert

# Sitemap neu generieren (nach neuen Seiten)
npm run sitemap

# Alles auf einmal
npm run build
```

---

## Commit-Format

```
<type>: <kurze Beschreibung>

[Optionaler Body]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`
