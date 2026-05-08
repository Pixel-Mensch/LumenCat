# LumenCat

Public website and lead-generation frontend for Lumencat, a freelance web design and digital solutions business.

This repository contains the live multi-page site, the pricing page with an interactive calculator, the blog content, the legal pages, and the PHP form flow used to turn enquiries into email and optional webhook submissions.

Live site: `https://lumencat.de`

## At a glance

- What it is: a production-minded business website, not a design mockup
- Who it is for: freelancers, local service businesses, and small companies
- What it does: presents services, shows reference previews, publishes blog content, and captures project enquiries
- Stack: HTML5, modular CSS, vanilla JavaScript, PHP, Node.js helper scripts
- Language model: English-first markup with a client-side German toggle

## Current scope

- `index.html`: homepage with positioning, services, maintenance, process, tool highlights, testimonials, and reference previews
- `services.html`: packages, add-ons, maintenance plans, hosting setup, and an interactive pricing calculator
- `kontakt.html`: dedicated contact page with AJAX form submission
- `insights.html`: blog index
- `impressum.html` and `datenschutz.html`: legal pages
- `blog/`: four published articles plus one snippet file used for content/layout work

## Implemented functionality

- Dark/light theme toggle with persisted preference
- English/German UI toggle via `js/i18n.js`
- Mobile navigation, reveal animations, reduced-motion handling, and hero parallax
- Contact form with client-side validation, CSRF token loading, honeypot protection, session-based rate limiting, mail delivery, and optional `n8n` webhook forwarding
- Interactive pricing calculator on `services.html` with direct enquiry handoff to the same PHP endpoint
- SEO baseline: canonical URLs, Open Graph/Twitter metadata, `robots.txt`, JSON-LD on the homepage, and sitemap generation
- PWA baseline: `manifest.json` and `sw.js`

## Why it is useful as a portfolio project

- It combines interface work, content structure, form handling, SEO, and deployment concerns in one codebase.
- It shows practical, framework-free implementation with HTML, CSS, JavaScript, and PHP close to the platform.
- It includes user-facing flows that go beyond brochure content: a working contact backend, multilingual UI handling, and a price calculator tied to lead capture.

## Repository layout

```text
.
├─ index.html
├─ services.html
├─ kontakt.html
├─ insights.html
├─ impressum.html
├─ datenschutz.html
├─ blog/
│  ├─ webdesign-lokale-unternehmen.html
│  ├─ website-vs-social-media.html
│  ├─ seo-sichtbarkeit.html
│  ├─ saas-tools-kleine-betriebe.html
│  └─ insights-cards-snippet.html
├─ css/
│  ├─ modules/
│  └─ pages/
├─ js/
│  ├─ main.js
│  └─ i18n.js
├─ assets/
│  └─ images/
└─ scripts/
   ├─ contact.php
   ├─ csrf-token.php
   ├─ dev-server.js
   ├─ minify-css.js
   ├─ minify-js.js
   ├─ generate-sitemap.js
   └─ ...
```

## Local setup

`css/styles.min.css` is generated and not versioned. Build the frontend assets before opening the site locally.

```bash
npm install
npm run build:css
npm run build:js
npm run sitemap
```

For a static preview:

```bash
node scripts/dev-server.js
```

To test the PHP form endpoints locally:

```bash
php -S localhost:8000
```

## Notes

- The repository includes source files and helper scripts, plus generated artifacts that are intentionally ignored in Git.
- The README only describes functionality and structure that are present in the current repository tree.
