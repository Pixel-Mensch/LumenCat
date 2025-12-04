# Security & Performance Updates – 04.12.2025

## ✅ Erfolgreich implementiert

### 1. CSRF-Protection für Kontaktformular

**Dateien:**

- `scripts/csrf-token.php` (NEU): Generiert Session-basierte CSRF-Tokens
- `scripts/contact.php`: Token-Validierung hinzugefügt
- `kontakt.html`: Hidden-Field + AJAX Token-Laden

**Funktionsweise:**

```php
// Token-Generierung (csrf-token.php)
session_start();
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

// Token-Validierung (contact.php)
if ($csrfToken !== $_SESSION['csrf_token']) {
    // Anfrage ablehnen
}

// One-Time-Use: Token nach erfolgreicher Validierung erneuern
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
```

**Sicherheitsverbesserungen:**

- ✅ Schutz vor Cross-Site Request Forgery (CSRF)
- ✅ Session-basierte Token-Verwaltung
- ✅ One-Time-Use Pattern (Token wird nach Verwendung erneuert)
- ✅ Graceful Degradation (verständliche Fehlermeldung)

---

### 2. .gitignore – Sicherheitscheck

**Status:** ✅ Bereits optimal konfiguriert

Die `.gitignore` schließt bereits alle sensiblen Dateien aus:

```gitignore
# Environment Variables
.env
.env.local
.env.development
.env.production
.env.*.local

# Dependencies
node_modules/

# Build Outputs
Bilder/optimized/
*.min.css
*.min.js
```

**Keine Änderungen erforderlich** – Best Practices bereits umgesetzt.

---

### 3. Cache-Busting für CSS/JS

**Implementierung:** Query-Parameter-basiertes Versioning

**Aktualisierte Dateien:**

- `package.json`: Version auf `1.0.1` erhöht
- Alle HTML-Dateien: `styles.min.css?v=1.0.1` und `main.js?v=1.0.1`

**Beispiel:**

```html
<!-- Vorher -->
<link rel="stylesheet" href="css/styles.min.css" />
<script src="js/main.js"></script>

<!-- Nachher -->
<link rel="stylesheet" href="css/styles.min.css?v=1.0.1" />
<script src="js/main.js?v=1.0.1"></script>
```

**Vorteile:**

- ✅ Browser laden neue Versionen nach Updates
- ✅ Alte Versionen bleiben im Cache (Performance)
- ✅ Versionierung über `package.json` zentral verwaltbar
- ✅ Einfaches Increment bei Änderungen: `v=1.0.2`, `v=1.0.3` etc.

**Workflow für zukünftige Updates:**

1. CSS/JS ändern
2. `npm run build` ausführen
3. Version in `package.json` erhöhen (z.B. auf `1.0.2`)
4. Such-/Ersetzungsaktion: `?v=1.0.1` → `?v=1.0.2` in allen HTML-Dateien
5. Deployment

---

### 4. Lighthouse-Test – Anleitung

**Status:** Vorbereitet, manuelle Ausführung erforderlich

#### Lokaler Test (empfohlen für Entwicklung)

**Option A: Mit VS Code Live Server Extension**

1. Live Server Extension installieren (falls nicht vorhanden)
2. `index.html` öffnen → Rechtsklick → "Open with Live Server"
3. Terminal öffnen und Lighthouse ausführen:
   ```powershell
   npx lighthouse http://127.0.0.1:5500 --output=html --output-path=lighthouse-report.html --view
   ```

**Option B: Mit Node.js Dev-Server**

1. Terminal 1 – Server starten:
   ```powershell
   node scripts/dev-server.js
   ```
2. Terminal 2 – Lighthouse ausführen:
   ```powershell
   npx lighthouse http://localhost:8000 --output=html --output-path=lighthouse-report.html --view
   ```

**Option C: Mit VS Code Extension**

1. Extension "Lighthouse" von Google installieren
2. `index.html` öffnen → Rechtsklick → "Lighthouse: Generate report"

#### Produktionstest (für finale Bewertung)

Nach Deployment auf Hetzner:

```powershell
npx lighthouse https://lumencat.de --output=html --output-path=lighthouse-prod-report.html --view
```

**Erwartete Scores (basierend auf bisheriger Optimierung):**

- 🟢 Performance: 90-100 (AVIF/WebP, minified CSS/JS, PWA)
- 🟢 Accessibility: 95-100 (ARIA, semantic HTML, reduced-motion)
- 🟢 Best Practices: 90-100 (HTTPS, CSP headers nach Hetzner-Konfiguration)
- 🟢 SEO: 95-100 (Meta-Tags, Sitemap, robots.txt, Open Graph)

---

## 📁 Neue Dateien

```
scripts/
├── csrf-token.php          # CSRF-Token-Generator (Session-basiert)
├── dev-server.js           # Lokaler Dev-Server für Testing
└── run-lighthouse.js       # Lighthouse-Runner-Skript (optional)
```

---

## 🔄 Nächste Schritte

### Sofort (vor nächstem Deployment)

1. ✅ **CSRF-Token testen:**

   - Formular auf `kontakt.html` testen
   - Prüfen ob Token korrekt geladen wird (Browser DevTools → Network)
   - Submission testen

2. ✅ **Cache-Busting verifizieren:**

   - Browser-Cache leeren
   - Website neu laden
   - DevTools → Network → `styles.min.css?v=1.0.1` sollte sichtbar sein

3. ⏳ **Lighthouse-Test durchführen:**
   - Eine der oben genannten Methoden nutzen
   - Report in Projekt speichern: `lighthouse-report-v1.0.1.html`
   - Bei Problemen: Issues dokumentieren

### Mittelfristig (1-2 Wochen)

4. **CSP-Header auf Hetzner konfigurieren:**

   ```apache
   # .htaccess
   Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline';"
   ```

5. **Playwright E2E-Tests für kritische Flows:**
   - Kontaktformular-Submission
   - Theme-Toggle (dark/light)
   - Mobile Navigation

---

## 🛡️ Sicherheitsverbesserungen (Zusammenfassung)

| Feature                 | Status           | Impact                               |
| ----------------------- | ---------------- | ------------------------------------ |
| CSRF-Protection         | ✅ Implementiert | Hoch – verhindert Formular-Angriffe  |
| .env in .gitignore      | ✅ Bereits aktiv | Hoch – schützt Credentials           |
| Session-basierte Tokens | ✅ Implementiert | Mittel – erhöht Angriffs-Komplexität |
| One-Time-Use Tokens     | ✅ Implementiert | Mittel – verhindert Token-Replay     |
| Honeypot (Spam)         | ✅ Bereits aktiv | Niedrig – Filter für Bots            |

**Fehlende Features (optional):**

- Rate Limiting (Server-seitig)
- reCAPTCHA v3 (falls Spam-Problem auftritt)
- CSP-Header (nach Deployment konfigurierbar)

---

## 📊 Performance-Optimierungen (Zusammenfassung)

| Feature              | Status                 | Impact                             |
| -------------------- | ---------------------- | ---------------------------------- |
| Cache-Busting        | ✅ Implementiert       | Hoch – verhindert veraltete Caches |
| Versionierung        | ✅ package.json v1.0.1 | Mittel – zentrale Verwaltung       |
| AVIF/WebP            | ✅ Bereits aktiv       | Sehr hoch – 60-80% kleinere Bilder |
| CSS Minification     | ✅ Bereits aktiv       | Mittel – 27.6% Reduktion           |
| PWA (Service Worker) | ✅ Bereits aktiv       | Hoch – Offline-Fähigkeit           |

---

## 💡 Testing-Checkliste

Vor Production-Deployment:

- [ ] Kontaktformular: Token wird geladen (DevTools → Network → `csrf-token.php`)
- [ ] Kontaktformular: Submission funktioniert (E-Mail + n8n Webhook)
- [ ] Kontaktformular: Fehler bei fehlendem Token (Token manuell entfernen → Absenden)
- [ ] Cache-Busting: Neue CSS-Version wird geladen nach `?v=1.0.1` Änderung
- [ ] Cache-Busting: Alte Version bleibt im Browser-Cache (ohne `Shift+F5`)
- [ ] Lighthouse-Test: Alle Scores dokumentiert
- [ ] Mobile Ansicht: CSRF-Token funktioniert auch auf Mobile
- [ ] Theme-Wechsel: Funktioniert mit neuer JS-Version

---

## 📝 Deployment-Notizen

**Zu übertragende Dateien (Hetzner FTP/SFTP):**

```
/scripts/csrf-token.php          # NEU
/scripts/contact.php             # AKTUALISIERT
/kontakt.html                    # AKTUALISIERT
/index.html                      # AKTUALISIERT (Cache-Busting)
/shop.html                       # AKTUALISIERT (Cache-Busting)
/blog.html                       # AKTUALISIERT (Cache-Busting)
/impressum.html                  # AKTUALISIERT (Cache-Busting)
/datenschutz.html                # AKTUALISIERT (Cache-Busting)
/css/styles.min.css              # Neu bauen mit `npm run build:css`
/js/main.min.js                  # Neu bauen mit `npm run build:js`
```

**Nicht übertragen:**

```
/scripts/dev-server.js           # Nur lokal
/scripts/run-lighthouse.js       # Nur lokal
```

**Nach Upload testen:**

1. https://lumencat.de/kontakt.html öffnen
2. Browser DevTools → Network Tab
3. Prüfen: `csrf-token.php` wird geladen (Status 200)
4. Formular absenden → Erfolg-Nachricht sollte erscheinen

---

**Update erstellt am:** 04.12.2025  
**Version:** 1.0.1  
**Entwickler:** Lumencat / Copilot
