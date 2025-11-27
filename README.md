# 🌌 Lumencat

**Webdesign. Automationen. KI.**

<p align="center">
  <img src="Bilder/lumencatLogo.png" alt="Lumencat Logo" width="260">
</p>

<p align="center">
  <strong>Moderne Websites, intelligente Workflows und smarte Bots für Selbstständige & kleine Unternehmen.</strong>
</p>

---

## 🐾 Über Lumencat

**Lumencat** ist ein Dienstleistungs- und Tool-Hub, der Unternehmen dabei unterstützt, **online sichtbar**, **effizienter** und **automatisierter** zu werden.

Von Webdesign bis KI-Assistenten – alles aus einer Hand. Das Projekt kombiniert moderne Frontend-Technologien mit Backend-Automationen und KI-gestützten Workflows, um digitale Erlebnisse zu schaffen, die nicht nur gut aussehen, sondern auch intelligent funktionieren.

---

## 🚀 Features

### 🖥️ Webdesign & Branding

- **Moderne, mobile-first Websites** mit responsivem Design
- **Hochperformante statische Seiten** (optimierte Ladezeiten, AVIF/WebP-Bildformate)
- **Animierte, interaktive Elemente** (Intersection Observer, Neon-UI, Scroll-Reveal)
- **Dark/Light Theme-System** mit FOUC-Prävention und System-Präferenz-Erkennung
- **CI-optimierte Gestaltung** mit konsistentem Branding
- **SEO-Grundoptimierung** inklusive Meta-Tags, Open Graph, Twitter Cards

### 🤖 Automationen & Bots (n8n)

- **Kontaktformular-Flows**: Formular → E-Mail / Google Sheets / CRM
- **Automatische Lead-Erfassung** und -Weiterleitung
- **Reminder-Bots** für Termine und Follow-ups
- **Multi-Channel-Benachrichtigungen**: WhatsApp / Telegram / E-Mail
- **KI-gestützte Anfragenanalyse**: Automatische Kategorisierung und Priorisierung
- **Erweiterte Workflows**: PDF-Generierung, Social-Media-Planung, Rechnungsautomatisierung

### 🤝 KI-Assistenten

- **Website-Chatbots** für FAQ, Angebote und Entscheidungshilfe
- **Automatische Textanalyse** & Kategorisierung von Kontaktanfragen
- **Individuell trainierte Modelle** basierend auf Kundeninhalten
- **Flexible Integration**: n8n-Webhooks oder direkte API-Anbindung
- **Einsatzgebiete**: Kundenservice, Lead-Qualifizierung, Content-Erstellung

---

## 📦 Projektstruktur

```text
lumencat_site/
│
├── index.html              # Hauptseite / Landingpage
├── kontakt.html            # Kontaktformular
├── shop.html               # Dienstleistungen & Preise
├── impressum.html          # Impressum
├── datenschutz.html        # Datenschutzerklärung
│
├── css/
│   └── styles.css          # Hauptstyles (Neon-UI, Dark/Light Mode, Animationen)
│
├── js/
│   └── main.js             # Theme-Toggle, Scroll-Animationen, Menü-Logik, Parallax
│
├── Bilder/
│   ├── lumencatLogo.png    # Hauptlogo
│   └── optimized/          # Optimierte Bilder (AVIF/WebP, responsive Größen)
│
├── scripts/
│   ├── contact.php         # Kontaktformular-Processing & Webhook-Integration
│   └── convert-images.js   # Node.js-Skript für Bildoptimierung
│
├── package.json            # NPM-Abhängigkeiten & Build-Skripte
├── robots.txt              # SEO: Crawler-Anweisungen
├── sitemap.xml             # SEO: Sitemap
└── README.md               # Diese Datei
```

---

## 🔧 Technologien

### Frontend

- **HTML5**: Semantisches Markup, SEO-optimiert
- **CSS3**: Mobile-first Design, CSS Custom Properties, Grid & Flexbox
- **Vanilla JavaScript (ES6+)**: Theme-System, IntersectionObserver, Motion-Safe-Präferenzen
- **Bildoptimierung**: AVIF/WebP mit PNG-Fallbacks, responsive `srcset`

### Backend

- **PHP 7.4+**: Formularverarbeitung mit Validierung und Spam-Schutz (Honeypot)
- **n8n**: Workflow-Automationen, Webhooks, KI-Integration

### Weitere Tools

- **Git / GitHub**: Versionskontrolle (Repository: Pixel-Mensch/LumenCat, Branch: dev)
- **Hetzner Webhosting**: Deployment-Ziel (PHP, SSL, E-Mail)
- **Node.js & Sharp**: Bildkonvertierung und Build-Prozesse
- **Google Sheets**: Datenhaltung für Automationen

---

## 📨 Kontaktformular & Automationen

Das Kontaktformular (`kontakt.html` → `contact.php`) unterstützt:

- **Spam-Schutz**: Honeypot-Feld
- **Validierung**: Server-seitige Prüfung aller Pflichtfelder
- **JSON-Responses**: Saubere API-Antworten für AJAX-Handling
- **Multi-Channel-Weiterleitung**:
  - E-Mail-Versand an konfigurierte Inbox
  - n8n Webhook für KI-Analyse & Lead-Pipelines
  - Google Sheets für strukturierte Datenhaltung

### Typischer Automation-Flow

```text
Besucher füllt Formular aus
        ↓
contact.php validiert & verarbeitet
        ↓
n8n Webhook empfängt Daten
        ↓
KI kategorisiert Anfrage (z.B. OpenAI)
        ↓
Lead wird in CRM/Sheets gespeichert
        ↓
Automatische E-Mail-Bestätigung an Kunde
        ↓
Benachrichtigung an Team (Telegram/Slack)
```

---

## 🖼️ Bildoptimierung

Dieses Projekt enthält ein Node.js-Skript (`scripts/convert-images.js`), um Bilder in optimierte Formate und responsive Größen zu konvertieren.

### Installation & Ausführung

```powershell
# Abhängigkeiten installieren
npm install

# Bilder konvertieren (Ausgabe: Bilder/optimized/)
npm run img:convert

# Optional: CSS/JS minifizieren
npm run build:css
npm run build:js

# Oder alles zusammen
npm run build
```

**Hinweise:**

- Verwendet `sharp` (Node.js-Bibliothek für Bildverarbeitung)
- Erzeugt AVIF/WebP-Formate in 480px, 800px, 1200px Breiten
- Windows-Nutzer: ggf. Build-Tools erforderlich (`npm install --global windows-build-tools`)

---

## 📁 Installation & Deployment

### 1. Repository klonen

```powershell
git clone https://github.com/Pixel-Mensch/LumenCat.git
cd LumenCat
```

### 2. Lokale Entwicklung

```powershell
# Node.js-Abhängigkeiten installieren (für Build-Skripte)
npm install

# Bilder optimieren
npm run img:convert

# Lokalen Server starten (z.B. mit Python)
python -m http.server 8000
# Oder mit PHP
php -S localhost:8000
```

Website ist dann erreichbar unter `http://localhost:8000`

### 3. Deployment auf Webspace

**Voraussetzungen:**

- Webspace mit PHP 7.4+ (z.B. Hetzner Webhosting S)
- FTP/SFTP-Zugang oder SSH
- Domain mit DNS-Einstellungen

**Schritte:**

1. **Dateien hochladen**

   ```powershell
   # Per FTP/SFTP ins Webroot (z.B. /public_html) kopieren
   # NICHT hochladen: node_modules/, package.json, scripts/
   ```

2. **Domain verbinden & SSL aktivieren**

   - Domain-DNS auf Webspace-IP/CNAME zeigen lassen
   - In Hetzner konsoleH → SSL-Manager → Let's Encrypt aktivieren

3. **contact.php konfigurieren**

   ```php
   // Zeile ~10 in contact.php anpassen
   $to = "hello@lumencat.de";  // Empfänger-E-Mail
   $from = "noreply@lumencat.de";  // Absender-E-Mail

   // Optional: n8n Webhook aktivieren (Zeile ~100)
   $webhookUrl = "https://n8n.beispiel.de/webhook/lumencat-contact";
   ```

4. **Testen**
   - Kontaktformular ausfüllen und absenden
   - E-Mail-Eingang prüfen
   - n8n-Workflow testen (falls konfiguriert)

### 4. n8n Webhook einrichten (optional)

1. n8n-Instanz erstellen (Cloud oder Self-Hosted)
2. Neuen Workflow mit Webhook-Trigger anlegen
3. Webhook-URL in `contact.php` eintragen
4. Flow bauen: Webhook → KI-Analyse → CRM → E-Mail

**Beispiel-Flow:**

- **Trigger**: Webhook empfängt Formulardaten
- **Node 1**: OpenAI kategorisiert Anfrage
- **Node 2**: Google Sheets speichert Lead
- **Node 3**: E-Mail-Bestätigung an Kunde
- **Node 4**: Telegram-Benachrichtigung an Team

---

## 🎨 Theme-System

Das Projekt verwendet ein fortgeschrittenes Dark/Light-Theme-System:

### Features

- **FOUC-Prävention**: `:root.theme-light` CSS-Klasse verhindert Flash of Unstyled Content
- **System-Präferenz**: Automatische Erkennung via `prefers-color-scheme`
- **localStorage**: Theme-Auswahl bleibt gespeichert
- **Accessibility**: ARIA-Attribute, Keyboard-Navigation
- **Smooth Transitions**: Sanfte Übergänge zwischen Themes

### Verwendung

```javascript
// Theme manuell wechseln
document.body.classList.toggle("theme-light");

// Aktuelles Theme abrufen
const currentTheme = localStorage.getItem("theme") || "dark";
```

---

## 🎬 Animationssystem

### Scroll-Reveal-Animationen

- **IntersectionObserver**: Performance-optimierte Scroll-Trigger
- **prefers-reduced-motion**: Respektiert Betriebssystem-Einstellung
- **Delay-Klassen**: Gestaffelte Animationen (`.reveal-delay-1`, `.reveal-delay-2`, etc.)

### Parallax-Effekte

- **Motion-Safe**: Deaktiviert bei `prefers-reduced-motion`
- **requestAnimationFrame**: Smooth 60fps-Performance
- **Hero-Sektion**: Subtiler Parallax-Scroll-Effekt

---

## 💡 Roadmap

### Phase 1 (In Arbeit)

- [x] Vollständige Landingpage mit Brand-Content
- [x] Shop-Seite mit Preisen & Paketen
- [x] Theme-System mit FOUC-Prevention
- [ ] Blog-System (statisch oder CMS-Integration)
- [ ] Projekt-Portfolio mit Case Studies

### Phase 2 (Geplant)

- [ ] **Vollautomatisierter KI-Lead-Classifier**: Anfragen automatisch nach Priorität sortieren
- [ ] **Kundenbereich / Dashboard**: Login für Kunden mit Projekt-Übersicht
- [ ] **Verkauf eigener Tools im Shop**: Digitale Produkte (Templates, Automations-Kits)
- [ ] **Dynamische Inhalte per JSON**: CMS-ähnliche Content-Verwaltung ohne Backend

### Phase 3 (Vision)

- [ ] **Voll individualisierbarer KI-Website-Assistent**: No-Code-Tool für Kunden
- [ ] **API für Drittanbieter-Integration**: Lumencat-Services als API
- [ ] **Mehrsprachigkeit**: EN/DE-Versionen
- [ ] **A/B-Testing-Framework**: Conversion-Optimierung

---

## 🧪 Testing & Qualitätssicherung

### Browser-Kompatibilität

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

### Performance-Optimierung

- **Lighthouse-Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bildoptimierung**: AVIF/WebP mit Fallbacks
- **CSS/JS-Minifizierung**: Produktions-Builds verfügbar
- **Lazy Loading**: Bilder außerhalb des Viewports

### Accessibility (WCAG 2.1 Level AA)

- Semantic HTML
- ARIA-Labels wo nötig
- Keyboard-Navigation
- `prefers-reduced-motion` Support
- Farbkontraste geprüft

---

## 📄 Lizenz & Nutzung

**© 2025 Lumencat / Pixel-Mensch**

Dieses Projekt ist proprietär. Alle Rechte vorbehalten.

- **Code**: Nicht zur kommerziellen Nutzung ohne Genehmigung
- **Branding**: Logo, Design und Markennamen sind geschützt
- **Lernzwecke**: Code-Ansicht für Portfolio/Referenz erlaubt

Für Lizenzen oder Nutzungsanfragen: `hello@lumencat.de`

---

## 📫 Kontakt

**Website**: [https://lumencat.de](https://lumencat.de)  
**E-Mail**: hello@lumencat.de  
**GitHub**: [Pixel-Mensch/LumenCat](https://github.com/Pixel-Mensch/LumenCat)

---

## 🙏 Credits

- **Entwicklung & Design**: Marc Kommer
- **Technologien**: PHP, JavaScript, n8n, Sharp
- **Hosting**: Hetzner
- **KI-Integration**: OpenAI API (optional)

---

<p align="center">
  <strong>Made with ☕ and 💡 by Lumencat</strong><br>
  <em>High-Tech Websites, die im Dunkeln leuchten.</em>
</p>
