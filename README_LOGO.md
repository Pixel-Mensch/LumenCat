# 🎨 LumenCat Logo Guide

## Aktuelle Logo-Dateien

### Produktions-Logo (SVG)

- **Datei**: `Bilder/logo.svg`
- **Verwendung**: Alle HTML-Seiten (Header, Footer, Favicon)
- **Vorteile**:
  - Verlustfrei skalierbar
  - Kleine Dateigröße
  - Perfekt für alle Bildschirmgrößen
  - SEO-optimiert

### Backup (PNG)

- **Datei**: `Bilder/LumenCatWithoutBackground.png`
- **Verwendung**: PWA Manifest (als Fallback für ältere Geräte)

## SVG-Logo verbessern

Das aktuelle `logo.svg` ist ein **Platzhalter**. Für ein professionelles Logo hast du folgende Optionen:

### Option 1: Online-Konverter (Empfohlen) ⭐

1. Besuche [pngtosvg.com](https://www.pngtosvg.com/)
2. Lade `Bilder/LumenCatWithoutBackground.png` hoch
3. Wähle "High Quality" Einstellungen
4. Lade das optimierte SVG herunter
5. Ersetze `Bilder/logo.svg` mit der neuen Datei

### Option 2: Adobe Illustrator

1. Öffne `LumenCatWithoutBackground.png` in Illustrator
2. Wähle **Image Trace** → **High Fidelity Photo**
3. **Expand** → **Object** → **Image Trace**
4. **File** → **Export** → **SVG**
5. Optimiere mit **SVGO** oder [SVGOMG](https://jakearchibald.github.io/svgomg/)

### Option 3: Inkscape (Kostenlos)

1. Öffne PNG in [Inkscape](https://inkscape.org/)
2. **Path** → **Trace Bitmap**
3. Wähle "Autotrace" mit hoher Qualität
4. **File** → **Save As** → SVG (optimiert)

### Option 4: Python-Script

```bash
# Installiere Dependencies
pip install pillow potrace

# Führe Converter aus
python scripts/png-to-svg.py
```

## Logo-Positionen im Projekt

Alle Logo-Referenzen wurden automatisch aktualisiert:

### HTML-Dateien

- ✅ `index.html` - Header, Footer, Meta Tags, JSON-LD
- ✅ `shop.html` - Header, Footer, Meta Tags
- ✅ `kontakt.html` - Header, Footer, Meta Tags
- ✅ `blog.html` - Header, Footer, Favicon
- ✅ `impressum.html` - Header, Footer
- ✅ `datenschutz.html` - Header, Footer

### Weitere Dateien

- ✅ `manifest.json` - PWA Icons (SVG + PNG Fallback)
- ✅ `sw.js` - Service Worker Cache

## SEO & Performance

### Vorteile von SVG:

- 📈 **Schnellere Ladezeiten** (ca. 5-10 KB vs. 100+ KB PNG)
- 🎯 **Perfekte Darstellung** auf Retina/4K Displays
- 📱 **Responsive** ohne mehrere Bildgrößen
- 🔍 **SEO-freundlich** (durchsuchbarer Code)

### Optimierung-Tipps:

```bash
# SVG weiter optimieren mit SVGO
npm install -g svgo
svgo Bilder/logo.svg -o Bilder/logo.optimized.svg
```

## Farben im Logo

Verwende die LumenCat Brand-Farben:

- **Primary Cyan**: `#19f7ff`
- **Secondary Blue**: `#1a8fff`
- **Dark Background**: `#000000`

## Troubleshooting

### Logo wird nicht angezeigt?

1. Cache leeren: `Ctrl + Shift + R`
2. Pfad prüfen: `Bilder/logo.svg` korrekt?
3. SVG-Syntax prüfen: Öffne in Browser direkt

### Logo zu groß/klein?

CSS anpassen in `styles.css`:

```css
.logo img {
  height: 50px; /* Anpassen nach Bedarf */
  width: auto;
}
```

### PWA-Logo nicht sichtbar?

- PNG-Fallback wird verwendet: `LumenCatWithoutBackground.png`
- Für beste Ergebnisse: 512x512px PNG erstellen

## Deployment Checklist

Vor dem Live-Gang prüfen:

- ✅ `logo.svg` ist optimiert und getestet
- ✅ Alle HTML-Dateien referenzieren `logo.svg`
- ✅ `manifest.json` hat PNG-Fallback
- ✅ Service Worker cached Logo korrekt
- ✅ Logo auf Mobile getestet

---

**Hinweis**: Das aktuelle `logo.svg` ist ein Platzhalter-Template. Nutze eine der oben genannten Methoden, um dein echtes Logo zu konvertieren! 🚀
