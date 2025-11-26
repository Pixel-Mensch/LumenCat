<p align="center">
  <img src="Bilder/lumencatLogo.png" alt="Lumencat Logo" width="260">
</p>

<h1 align="center">✨ LumenCat ✨</h1>

<p align="center">
  <strong>Webdesign • Automationen • KI</strong><br>
  Moderne Websites, effiziente Workflows & intelligente Systeme – aus einer Hand.
</p>

---

## 🐾 Über LumenCat

**LumenCat** ist ein modernes Webdesign- und Automationsprojekt mit Fokus auf:

- **moderne Websites** (Landingpages, Firmenseiten, Portfolios)
- **Automationen** (n8n, Mailflows, Workflow-Optimierung)
- **KI-Assistenten** (FAQ-Bots, Angebotsberater, Termin-Helper)
- **digitale Tools** (kleine Produkte, Checklisten & Automationskits)

Ziel ist es, Selbstständigen und kleinen Unternehmen eine **effiziente, visuell starke und technisch moderne Online-Präsenz** zu geben.

---

## 🚀 Features (aktuell / geplant)

### ✅ Aktuell

- Grundstruktur der Website
- Dark-Theme + Light-Theme Vorbereitung
- Basis-Navigation & Layout
- Saubere Ordnerstruktur
- Vollständiger Bildsatz (Hero, Hintergrund, Logo)

### 🔧 In Arbeit

- Finale Landingpage
- Animationssystem (IntersectionObserver)
- Theme-Toggle
- Automations-Demo (Flow-Infografik)
- Erste digitale

---

## 🖼️ Assets & Optimierung (Anleitung)

Dieses Projekt enthält Hilfsskripte, um Bilder in optimierte Formate (WebP/AVIF) und in unterschiedliche Größen zu konvertieren sowie einfache Minifizierungs-Skripte für CSS und JS.

Schritte zur lokalen Optimierung:

- Abhängigkeiten installieren:

```powershell
npm install
```

- Bilder konvertieren (Ausgabe: `Bilder/optimized`):

```powershell
npm run img:convert
```

- Minifizierte CSS- und JS-Dateien erzeugen (erstellt `css/styles.min.css` und `js/main.min.js`):

```powershell
npm run build:css
npm run build:js
```

- Oder das kombinierte Build-Skript ausführen:

```powershell
npm run build
```

Hinweise:

- Der Bildkonverter verwendet `sharp` (Node.js). Falls die Installation unter Windows fehlschlägt, stelle bitte sicher, dass die benötigten Build-Tools installiert sind, oder nutze eine vorgefertigte Umgebung.
- Die Skripte legen einen Ordner `Bilder/optimized` an. Verwende diese Dateien in deinem Produktions-`srcset`/`<picture>`-Markup.
