// Lumencat – i18n system
// English is the HTML base. German translations stored here.
// Caches original EN text on first load for round-trip toggling.

(function () {
  "use strict";

  // ── German translations ──────────────────────────────────────────
  var DE = {
    // Shared – nav & footer
    skip_link: "Zum Hauptinhalt springen",
    "nav.aria_label": "Hauptnavigation",
    "nav.toggle_aria": "Menü öffnen",
    "nav.features": "Leistungen",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "footer.nav_heading": "Navigation",
    "footer.features": "Leistungen",
    "footer.projects": "Projekte",
    "footer.contact_nav": "Kontakt",
    "footer.services_heading": "Leistungen",
    "footer.service_1": "Landingpages & Business-Websites",
    "footer.service_2": "SaaS-Tools & digitale Lösungen",
    "footer.service_3": "Website-Wartung",
    "footer.service_4": "Hosting-Setup (Hetzner)",
    "footer.contact_heading": "Kontakt",
    "footer.contact_form_label": "Kontaktformular:",
    "footer.contact_page_link": "Kontaktseite öffnen",
    "footer.availability": "Projekte nach Absprache von Montag bis Freitag.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.legal_notice": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.tagline": "Webdesign. SaaS-Tools. Digitale Lösungen.",
    "footer.description":
      "Fertige Tools und moderne Websites für Selbstständige und lokale Unternehmen. Klarer Code, ehrliche Beratung, wenig Blabla.",

    // ── index.html ──
    "page.title.home":
      "Lumencat \u2013 Webdesign & SaaS-Tools f\u00fcr lokale Unternehmen",
    "page.desc.home":
      "Lumencat entwickelt fertige SaaS-Tools und professionelle Websites f\u00fcr lokale Unternehmen. Direkt einsetzbar, schnell deployed, ehrliche Beratung.",
    "hero.kicker": "Webdesign \u2022 SaaS-Tools \u2022 Digitale L\u00f6sungen",
    "hero.title": "High-Tech Websites, die im Dunkeln leuchten.",
    "hero.subtitle":
      "Lumencat entwickelt fertige Tools f\u00fcr lokale Unternehmen und baut Websites, die professionell wirken und neue Kunden bringen.",
    "hero.cta_primary": "Projekt starten",
    "hero.cta_ghost": "Beispiele ansehen",
    "hero.note":
      "F\u00fcr Selbstst\u00e4ndige, lokale Unternehmen und moderne Marken.",
    "features.heading": "Was Lumencat f\u00fcr Unternehmen entwickelt",
    "features.subheading":
      "Drei Leistungsbereiche, eine klare Ausrichtung: fertige Tools, individuelle Websites und verl\u00e4ssliche Betreuung. Kein Baukasten, kein Agenturblabla.",
    "features.saas.title": "Fertige SaaS-Tools",
    "features.saas.text":
      "Sofort einsetzbare digitale Werkzeuge f\u00fcr lokale Unternehmen. Du kaufst, wir deployen, du nutzt. Keine langen Projektphasen, keine Einarbeitung. Aktuell verf\u00fcgbar: Angebotsrechner f\u00fcr Entr\u00fcmpelungsbetriebe.",
    "features.saas.cta": "Tools ansehen",
    "features.websites.title": "Websites & Markenauftritt",
    "features.websites.text":
      "Professionelle Websites, die mobil schnell laden und Vertrauen aufbauen. Individuell entwickelt, klar strukturiert und auf seri\u00f6sen Auftritt ausgelegt \u2013 damit neue Kunden dich finden und direkt Kontakt aufnehmen.",
    "features.maintenance.title": "Wartung & Betreuung",
    "features.maintenance.text":
      "Deine Website bleibt nicht nur online \u2013 sie bleibt aktuell. Monatliche Checks, kleine Text\u00e4nderungen und Statusmeldungen sorgen daf\u00fcr, dass du dich auf dein Kerngesch\u00e4ft konzentrieren kannst.",
    "pakete.heading": "Pakete und Preise im \u00dcberblick",
    "pakete.text":
      "Du m\u00f6chtest wissen, womit du ungef\u00e4hr rechnen kannst? Statt versteckter Kosten gibt es bei Lumencat klare Pakete f\u00fcr Websites, Wartung und Tools. Alle aktuellen Angebote mit Richtpreisen findest du auf der Seite \u201ePakete & Preise\u201c.",
    "pakete.cta": "Pakete & Preise ansehen",
    "wartung.heading": "Wartung & Betreuung",
    "wartung.subheading":
      "Damit deine Website nicht nur online geht \u2013 sondern online bleibt.",
    "wartung.basic.title": "Website-Wartung",
    "wartung.basic.subtitle": "F\u00fcr laufende Lumencat-Projekte.",
    "wartung.basic.li1": "Monatlicher Check deiner Website",
    "wartung.basic.li2":
      "Kleine Text\u00e4nderungen (z.\u00a0B. \u00d6ffnungszeiten, Preise)",
    "wartung.basic.li3": "Backup oder Export nach Absprache",
    "wartung.basic.li4": "Sichtpr\u00fcfung auf Erreichbarkeit und Funktionen",
    "wartung.basic.li5":
      "Kurze Statusnotiz \u201eOK\u201c oder \u201e\u00c4nderung n\u00f6tig\u201c",
    "wartung.basic.note":
      "Die genauen Konditionen findest du in den Paketen & Preisen.",
    "wartung.basic.cta": "Zu den Paketen",
    "wartung.extended.title": "Erweiterte Wartung",
    "wartung.extended.subtitle":
      "F\u00fcr Websites mit mehr Technik und integrierten Tools.",
    "wartung.extended.li1": "Alles aus der Website-Wartung",
    "wartung.extended.li2": "Regelm\u00e4\u00dfige Updates von Systemen und Plugins",
    "wartung.extended.li3": "Pr\u00fcfung der Mailzustellung und Kontaktformulare",
    "wartung.extended.li4": "Optional: einfache SEO- oder Content-Checks",
    "wartung.extended.note":
      "Details und Preise stehen in den Paketen & Preisen.",
    "wartung.extended.cta": "Zu den Paketen",
    "projects.heading": "Projekte & Referenzen",
    "projects.subheading":
      "Beispiele und Demos, die zeigen, wie Lumencat arbeitet. Die Projekte decken verschiedene Branchen ab und geben dir ein Gef\u00fchl daf\u00fcr, wie deine eigene Website oder L\u00f6sung aussehen kann.",
    "projects.lueftungsbau.text":
      "Seri\u00f6se Website f\u00fcr ein Handwerksunternehmen. Klare Struktur, verst\u00e4ndliche Leistungen und ein direkter Weg zur Kontaktaufnahme. Ziel ist es, Vertrauen aufzubauen und Anfragen so einfach wie m\u00f6glich zu machen.",
    "projects.lueftungsbau.tag": "B2B \u2022 Mehrseitige Firmenwebsite",
    "projects.bistro.text":
      "Atmosph\u00e4rische Website f\u00fcr ein Bistro mit starken Bildern und klarer Navigation. G\u00e4ste finden \u00d6ffnungszeiten, Speisekarte und Kontakt auf einen Blick und k\u00f6nnen sich schon vor dem Besuch ein Gef\u00fchl f\u00fcr den Ort holen.",
    "projects.bistro.tag": "Gastronomie \u2022 Storytelling Website",
    "projects.physio.text":
      "Website f\u00fcr eine Physiotherapie Praxis mit Fokus auf Vertrauen und \u00dcbersicht. Leistungen werden klar erkl\u00e4rt, das Team vorgestellt und Patienten finden schnell alle Infos zu \u00d6ffnungszeiten und Kontakt. Ideal f\u00fcr Menschen, die sich vor dem ersten Termin ein Bild von der Praxis machen wollen.",
    "projects.physio.tag": "Gesundheit \u2022 Praxiswebsite",
    "why.heading": "Warum Lumencat?",
    "why.subheading":
      "Lumencat steht f\u00fcr klare, moderne Websites und pragmatische Technik. Kein Hype, sondern L\u00f6sungen, die funktionieren, verst\u00e4ndlich erkl\u00e4rt sind und deinen Alltag leichter machen.",
    "why.focus.title": "Fokus auf deinen Alltag",
    "why.focus.text":
      "Im Zentrum steht nicht die Technik, sondern dein Tagesgesch\u00e4ft. Website und Tools werden so geplant, dass sie zu deiner Branche, deinem Team und deinen Abl\u00e4ufen passen. Ziel ist, dass du weniger erkl\u00e4ren, nachfassen und sortieren musst.",
    "why.tech.title": "Saubere Technik, verst\u00e4ndlich erkl\u00e4rt",
    "why.tech.text":
      "Lumencat nutzt moderne Webstandards und fertige L\u00f6sungen, wenn sie f\u00fcr dein Unternehmen Sinn ergeben. Viele Bausteine basieren auf bew\u00e4hrten Mustern, werden aber gezielt kombiniert und angepasst. Du bekommst ein System, das dokumentiert ist, nachvollziehbar bleibt und sp\u00e4ter erweitert werden kann.",
    "why.custom.title": "Individuell statt Baukasten",
    "why.custom.text":
      "Es gibt keine Einheitsl\u00f6sung f\u00fcr alle. Jede Website und jedes Tool wird individuell geplant. Struktur, Inhalte und Funktionen orientieren sich an deinem Unternehmen und deinen Kundinnen und Kunden. So entsteht ein Auftritt, der zu dir passt und langfristig mitwachsen kann.",
    "process.heading": "So l\u00e4uft ein Projekt mit Lumencat ab",
    "process.subheading":
      "Von der ersten Nachricht bis zur fertigen Website bleibt der Ablauf klar, transparent und entspannt f\u00fcr dich. Du wei\u00dft immer, was der n\u00e4chste Schritt ist und worum ich mich k\u00fcmmere.",
    "process.step1.title": "Kickoff und Analyse",
    "process.step1.text":
      "Wir sprechen \u00fcber dein Unternehmen, deine Ziele und deine aktuelle Situation. Danach fasse ich zusammen, was du wirklich brauchst und welche Ergebnisse dir am meisten helfen. Auf dieser Basis bekommst du eine klare Empfehlung und auf Wunsch ein passendes Angebot.",
    "process.step2.title": "Konzept und Struktur",
    "process.step2.text":
      "Wir legen die Struktur deiner Website fest, planen die Inhalte und kl\u00e4ren, welche Funktionen du wirklich brauchst. Navigation, Seitenaufbau und erste Textideen entstehen in dieser Phase. Du siehst fr\u00fch, wie sich alles anf\u00fchlt und kannst ohne Fachbegriffe mitreden.",
    "process.step3.title": "Umsetzung und Einrichtung",
    "process.step3.text":
      "Ich setze das Design in sauberen Code um, richte dein Kontaktformular ein und deploye bei Bedarf fertige Tools f\u00fcr dein Unternehmen. Du bekommst Zwischenst\u00e4nde zu sehen und kannst Feedback geben, bevor alles final wird.",
    "process.step4.title": "Start und Begleitung",
    "process.step4.text":
      "Wir testen Funktionen, Formular Versand und Darstellung auf Handy und Desktop. Danach geht deine Website an den Start. Auf Wunsch \u00fcbernehme ich Betreuung und kleine Anpassungen, damit alles aktuell, sicher und erreichbar bleibt. Du bekommst eine kurze \u00dcbersicht, wie du Inhalte selbst anpassen kannst.",
    "tools.heading": "Fertige Tools f\u00fcr dein Unternehmen",
    "tools.subheading":
      "Direkt einsetzbar. Keine langen Projektphasen. Du kaufst, wir deployen, du nutzt.",
    "tools.entruempler.title": "Entr\u00fcmpler-Kalkulator",
    "tools.entruempler.status": "Verf\u00fcgbar",
    "tools.entruempler.text":
      "Interessenten bekommen auf Smartphone oder Desktop eine Kostensch\u00e4tzung f\u00fcr ihr Entr\u00fcmpelungsprojekt. Du bekommst strukturierte Anfragen statt unklarer Anrufe.",
    "tools.entruempler.li1": "Mobiler Preisrechner",
    "tools.entruempler.li2": "Admin-Dashboard",
    "tools.entruempler.li3": "PDF-Zusammenfassung",
    "tools.entruempler.li4": "Editierbare Preislogik",
    "tools.entruempler.li5": "Lead-\u00dcbersicht",
    "tools.entruempler.note": "Sofort einsetzbar \u00b7 Einzelinstanz",
    "tools.entruempler.cta": "Tool ansehen",
    "tools.leads.title": "Leads-Generator",
    "tools.leads.text":
      "Automatisierte Lead-Erfassung f\u00fcr lokale Dienstleister. Mehr Anfragen, weniger manuelle Arbeit.",
    "tools.leads.features": "Features: Kommt bald.",
    "tools.leads.note": "In Entwicklung",
    "testimonials.heading": "Was Kunden sagen",
    "testimonials.subheading":
      "Echte Projekte, echte Ergebnisse \u2013 hier siehst du, wie Lumencat anderen Unternehmen geholfen hat.",
    "testimonials.sarah.text":
      "\u201eDie neue Website ist genau das, was wir brauchten: modern, schnell und \u00fcbersichtlich. Unsere Anfragen haben sich verdoppelt.\u201c",
    "testimonials.sarah.role": "Inhaberin, Bistro Aurora",
    "testimonials.thomas.text":
      "\u201eDas Tool spart uns t\u00e4glich Zeit. Anfragen kommen strukturiert rein \u2013 wir m\u00fcssen kaum noch nachfragen.\u201c",
    "testimonials.thomas.role": "Gesch\u00e4ftsf\u00fchrer, KlimaTech Solutions",
    "testimonials.maria.text":
      "\u201eProfessionelle Beratung und schnelle Umsetzung. Die Website wirkt hochwertig und hebt uns von der Konkurrenz ab.\u201c",
    "testimonials.maria.role": "Gr\u00fcnderin, Physio Vital",
    "cta.heading": "Bereit f\u00fcr den n\u00e4chsten Schritt?",
    "cta.text":
      "Lumencat entwickelt Websites und Systeme, die dir Zeit sparen, Anfragen sortieren und deinen Alltag \u00fcbersichtlicher machen. Wenn du Klarheit statt Fachchinesisch m\u00f6chtest, lass uns unverbindlich \u00fcber dein Projekt sprechen.",
    "cta.primary": "Projekt starten",
    "cta.ghost": "Leistungen ansehen",

    // ── kontakt.html ──
    "page.title.contact": "Kontakt \u2013 Lumencat",
    "page.desc.contact":
      "Kontakt zu Lumencat: Starte dein Projekt f\u00fcr moderne Websites, Automationen und KI-Assistenten. Schnell, pers\u00f6nlich, transparent.",
    "contact.heading": "Kontakt",
    "contact.subtitle":
      "Erz\u00e4hl mir kurz von deinem Projekt \u2013 ich melde mich in der Regel innerhalb von 1\u20132 Werktagen.",
    "form.honeypot.label": "Bitte dieses Feld nicht ausf\u00fcllen",
    "form.name.label": "Name *",
    "form.name.placeholder": "Wie darf ich dich ansprechen?",
    "form.email.label": "E-Mail *",
    "form.email.placeholder": "Wohin soll ich antworten?",
    "form.phone.label": "Telefon (optional)",
    "form.phone.placeholder": "F\u00fcr R\u00fcckfragen (optional)",
    "form.project.label": "Worum geht es?",
    "form.project.placeholder":
      "z.B. neue Website, Relaunch, Automationen, KI-Bot\u2026",
    "form.message.label": "Nachricht *",
    "form.message.placeholder":
      "Was soll die Website / Automation f\u00fcr dich tun?",
    "form.hint":
      "Felder mit * sind Pflicht. Deine Daten werden nur zur Bearbeitung der Anfrage verwendet.",
    "form.submit": "Anfrage senden",

    // ── insights.html ──
    "page.title.blog": "Blog \u2013 Lumencat",
    "page.desc.blog":
      "Lumencat Blog \u2013 Einblicke aus der Praxis zu Webdesign, SaaS-Tools und digitaler Umsetzung f\u00fcr lokale Unternehmen.",
    "blog.heading": "Blog",
    "blog.subtitle":
      "Gelegentliche Einblicke aus meiner Arbeit mit Webdesign und digitalen L\u00f6sungen f\u00fcr lokale Unternehmen.",
    "blog.card1.category": "Webdesign",
    "blog.card1.title":
      "Warum lokale Unternehmen eine professionelle Website brauchen",
    "blog.card1.excerpt":
      "Eine eigene Website ist mehr als ein digitales Aussh\u00e4ngeschild \u2013 sie ist der Grundstein f\u00fcr Vertrauen, Sichtbarkeit und nachhaltiges Wachstum.",
    "blog.card1.date": "M\u00e4rz 2025",
    "blog.card1.read": "5 Min. Lesezeit",
    "blog.card2.category": "Strategie",
    "blog.card2.title":
      "Eigene Website vs. Social Media \u2013 Warum beides z\u00e4hlt, aber eines davon geh\u00f6rt dir",
    "blog.card2.excerpt":
      "Instagram kann dich sperren. Deine Website nicht. Warum du beide Kan\u00e4le brauchst \u2013 und welcher der wichtigere ist.",
    "blog.card2.date": "Februar 2025",
    "blog.card2.read": "6 Min. Lesezeit",
    "blog.card3.category": "SEO",
    "blog.card3.title":
      "Lokales SEO: So wirst du in deiner Stadt gefunden \u2013 ohne Agenturbudget",
    "blog.card3.excerpt":
      "Gefunden werden, ohne tausende Euro f\u00fcr Agenturen auszugeben. Die wichtigsten SEO-Hebel f\u00fcr lokale Unternehmen erkl\u00e4rt.",
    "blog.card3.date": "Januar 2025",
    "blog.card3.read": "7 Min. Lesezeit",
    "blog.card4.category": "SaaS & Tools",
    "blog.card4.title":
      "Welche SaaS-Tools sich f\u00fcr kleine Betriebe wirklich lohnen \u2013 und welche nicht",
    "blog.card4.excerpt":
      "Nicht jedes Tool braucht jeder. Eine ehrliche \u00dcbersicht der SaaS-Tools, die kleinen Betrieben tats\u00e4chlich Zeit und Geld sparen.",
    "blog.card4.date": "Dezember 2024",
    "blog.card4.read": "6 Min. Lesezeit",
    "blog.more":
      "Neue Einblicke folgen, sobald es etwas Spannendes zu teilen gibt. \uD83D\uDCA1",

    // ── services.html ──
    "page.title.services": "Lumencat \u2013 Pakete & Preise",
    "page.desc.services":
      "Pakete & Preise f\u00fcr Websites, SaaS-Tools und Wartung. Fair, transparent und modular \u2013 starte klein und erweitere sp\u00e4ter.",
    "services.hero.kicker": "Pakete & Preise",
    "services.hero.title": "Klare Pakete. Faire Preise.",
    "services.hero.lead":
      "Alle Preise sind ehrliche Richtwerte. Der genaue Betrag h\u00e4ngt von Umfang und Wunschfunktionen ab. Du bekommst vor Beginn ein klares Angebot.",
    "services.hero.cta_primary": "Webseiten-Pakete ansehen",
    "services.hero.cta_ghost": "SaaS-Tools ansehen",
    "services.web.heading": "Webseiten-Pakete",
    "services.web.subheading":
      "Websites und Systeme, die im Hintergrund f\u00fcr dich arbeiten.",
    "services.lp.title": "Landingpage / One-Pager",
    "services.lp.subtitle":
      "F\u00fcr Selbstst\u00e4ndige, die professionell auftreten wollen.",
    "services.lp.li1": "Eine Seite mit allen wichtigen Infos",
    "services.lp.li2": "Mobile-first, performant & suchmaschinenfreundlich",
    "services.lp.li3": "Kontaktformular inkl. Mail-Weiterleitung",
    "services.lp.li4": "Grundlegende SEO-Basics (Titel, Meta, Struktur)",
    "services.lp.li5": "Technische Einrichtung auf deinem Hosting",
    "services.lp.cta": "Projekt anfragen",
    "services.lp.calc": "Preis berechnen \u2192",
    "services.biz.title": "Business-Website",
    "services.biz.pages": "3 bis 6 Seiten",
    "services.biz.subtitle": "F\u00fcr Unternehmen mit mehr Inhalt & Struktur.",
    "services.biz.li1":
      "Bis zu 6 Seiten (z.\u00a0B. Start, Leistungen, \u00dcber uns, Referenzen, Blog, Kontakt)",
    "services.biz.li2": "Individuelles Design nach Marke / Branding",
    "services.biz.li3":
      "Kontaktformular mit strukturierter Weiterleitung (z.\u00a0B. per Mail)",
    "services.biz.li4": "Erweiterte SEO-Basics & sinnvolle Struktur",
    "services.biz.cta": "Kennlern-Call vereinbaren",
    "services.biz.calc": "Preis berechnen \u2192",
    "services.premium.title": "Premium-Website",
    "services.premium.pages": "6+ Seiten, komplexe Struktur",
    "services.premium.badge": "Auf Anfrage",
    "services.premium.subtitle":
      "Website mit erweiterten Features und klarer Struktur.",
    "services.premium.li1": "Ma\u00dfgeschneiderte Seitenstruktur & UX",
    "services.premium.li2":
      "Individuelles Design mit Fokus auf Markenidentit\u00e4t",
    "services.premium.li3": "Erweiterte Funktionen nach Bedarf",
    "services.premium.li4": "Optional erweiterbar um Tools und Integrationen",
    "services.premium.li5":
      "Kurze technische Doku der Website und Funktionen",
    "services.premium.li6":
      "Vorbereitung f\u00fcr Wartungsvertrag & Erweiterungen",
    "services.premium.cta": "Unverbindliches Angebot",
    "services.premium.calc": "Preis berechnen \u2192",
    "services.redesign.title": "Redesign / Relaunch",
    "services.redesign.subtitle":
      "Bestehende Website auffrischen oder neu aufsetzen.",
    "services.redesign.li1": "Analyse der bestehenden Website",
    "services.redesign.li2": "Modernes Design mit verbesserter Nutzf\u00fchrung",
    "services.redesign.li3": "Performance-Optimierung",
    "services.redesign.li4": "SEO-Basics auffrischen",
    "services.redesign.li5": "\u00dcbernahme vorhandener Inhalte",
    "services.redesign.cta": "Redesign anfragen",
    "services.redesign.calc": "Preis berechnen \u2192",
    "services.prices_note":
      "Alle Preise sind Richtwerte. Du erh\u00e4ltst immer ein individuelles Angebot, passend zu deinem Projekt und deinem Budget.",
    "services.overview.heading": "Services im \u00dcberblick",
    "services.overview.subheading":
      "Konkrete, klar definierte Leistungen, die du direkt buchen kannst.",
    "services.check.title": "Website-Check & Performance-Audit",
    "services.check.subtitle":
      "Technischer und inhaltlicher Check deiner bestehenden Website.",
    "services.check.li1": "Analyse von Ladezeit, Struktur & UX",
    "services.check.li2": "Kurz-SEO-Check (Titel, \u00dcberschriften, Inhalt)",
    "services.check.li3":
      "PDF-Report mit konkreten Handlungsempfehlungen",
    "services.check.li4": "Optional: 30\u00a0Min. Call zur Durchsprache",
    "services.check.cta": "Website-Check anfragen",
    "services.check.calc": "Preis berechnen \u2192",
    "services.consulting.title": "Beratung & Struktur",
    "services.consulting.subtitle":
      "F\u00fcr alles, was sich nicht in ein Paket pressen l\u00e4sst.",
    "services.consulting.text":
      "Wir schauen gemeinsam auf deine aktuelle Lage, Tools, Abl\u00e4ufe und Ziele \u2013 ich helfe dir, eine sinnvolle Reihenfolge und Struktur zu finden.",
    "services.consulting.cta": "Beratungstermin anfragen",
    "services.consulting.calc": "Preis berechnen \u2192",
    "services.extras.heading": "Zusatzleistungen f\u00fcr deine Website",
    "services.extras.subheading":
      "Nicht jede Website braucht alles \u2013 diese Bausteine kannst du bei Bedarf erg\u00e4nzen.",
    "services.perf.title": "Performance-Optimierung",
    "services.perf.text":
      "Ladezeiten verbessern, Bilder optimieren, CSS/JS aufr\u00e4umen. Ideal f\u00fcr bestehende Seiten, die tr\u00e4ge wirken.",
    "services.seo.title": "SEO-Basisoptimierung",
    "services.seo.text":
      "Saubere Keyword-Struktur, Titles, Descriptions, ALT-Texte \u2013 Grundlage f\u00fcr bessere Auffindbarkeit.",
    "services.textcreation.title": "Texterstellung",
    "services.textcreation.text":
      "Du bringst Rohtexte, Stichpunkte oder alte Inhalte mit \u2013 ich mache daraus klare, verst\u00e4ndliche Texte mit rotem Faden und Fokus auf deine Wunschkund*innen.",
    "services.wartung.heading": "Wartung & laufende Betreuung",
    "services.wartung.subheading":
      "Deine Website soll nicht nur online gehen \u2013 sie soll online bleiben und zuverl\u00e4ssig laufen.",
    "services.maint.title": "Website-Wartung",
    "services.maint.price": "25\u00a0\u20ac pro Monat",
    "services.maint.subtitle": "F\u00fcr laufende Lumencat-Projekte.",
    "services.maint.li1": "Monatlicher Check deiner Website",
    "services.maint.li2":
      "Kleine Text\u00e4nderungen (z.\u00a0B. \u00d6ffnungszeiten, Preise)",
    "services.maint.li3": "Backup oder Export nach Absprache",
    "services.maint.li4":
      "Sichtpr\u00fcfung auf Erreichbarkeit & Funktionen",
    "services.maint.li5":
      "Kurze Statusnotiz \u201eOK\u201c oder \u201e\u00c4nderung n\u00f6tig\u201c",
    "services.maint.cta": "Wartung anfragen",
    "services.maint.calc": "Preis berechnen \u2192",
    "services.ext.title": "Erweiterte Wartung",
    "services.ext.price": "ab 49\u00a0\u20ac pro Monat",
    "services.ext.subtitle":
      "F\u00fcr Websites mit mehr Technik und integrierten Tools.",
    "services.ext.li1": "Alles aus der Website-Wartung",
    "services.ext.li2": "Regelm\u00e4\u00dfige Updates von Systemen und Plugins",
    "services.ext.li3": "Pr\u00fcfung der Mailzustellung und Kontaktformulare",
    "services.ext.li4": "Optional: einfache SEO- oder Content-Checks",
    "services.ext.cta": "Individuelles Wartungspaket",
    "services.ext.calc": "Preis berechnen \u2192",
    "services.hosting.heading": "Hosting & Domain (Hetzner)",
    "services.hosting.subheading":
      "Du m\u00f6chtest dich nicht um Server, SSL und Domain k\u00fcmmern? \u00dcbernehme ich f\u00fcr dich.",
    "services.hosting.title": "Hosting-Einrichtung & Domain-Setup",
    "services.hosting.li1": "Domain verbinden",
    "services.hosting.li2": "SSL-Zertifikat aktivieren",
    "services.hosting.li3":
      "E-Mail-Adresse(n) einrichten (falls gew\u00fcnscht)",
    "services.hosting.li4": "Ordnerstruktur anlegen",
    "services.hosting.li5": "Projekt auf den Server hochladen",
    "services.hosting.hint":
      "<strong>Hinweis:</strong> Die laufenden Hosting-Kosten zahlst du direkt beim Anbieter. Ich verdiene daran nichts, sondern empfehle dir nur, was technisch und finanziell zu dir passt.",
    "services.additional.heading": "Weitere Services",
    "services.additional.subheading":
      "Kleine Bausteine, die dein Gesamtpaket abrunden \u2013 vor allem f\u00fcr lokale Sichtbarkeit.",
    "services.gbp.title": "Google Business Profil",
    "services.gbp.text":
      "Einrichtung oder Optimierung deines Google-Profils f\u00fcr bessere lokale Auffindbarkeit.",
    "services.gmaps.title": "Google Maps Integration",
    "services.gmaps.text":
      "Einbindung einer Karte auf deiner Website, inkl. Verlinkung zu deinem Standort.",
    "services.ai.title": "KI-Bilder (Hero, Team, R\u00e4ume)",
    "services.ai.price": "20 \u2013 60\u00a0\u20ac pro Paket",
    "services.ai.text":
      "Auf deinen Stil angepasste KI-Bilder, damit deine Website auch visuell zusammenpasst.",
    "services.included.heading": "Immer inklusive: Einf\u00fchrung & \u00dcbergabe",
    "services.included.subheading":
      "Egal welches Paket du buchst \u2013 du bekommst eine saubere \u00dcbergabe und wei\u00dft, wie du mit deiner Website umgehen kannst.",
    "services.included.what.title": "Was du bekommst",
    "services.included.what.li1": "Erkl\u00e4rung der Projektstruktur",
    "services.included.what.li2":
      "Wie du Texte & Bilder selbst austauschst",
    "services.included.what.li3": "Hinweise, was du selbst tun kannst",
    "services.included.what.li4":
      "Was du lieber mir \u00fcberlassen solltest",
    "services.included.data.title": "Daten & Transparenz",
    "services.included.data.li1": "Vollst\u00e4ndige Daten\u00fcbergabe",
    "services.included.data.li2": "Bild- und Dateiliste",
    "services.included.data.li3": "Hinweise zu Backups & Sicherheit",
    "services.included.data.li4": "Keine versteckten Abos",
    "services.included.price.title": "Preis",
    "services.included.price.note":
      "Die Einf\u00fchrung ist immer Teil des Projekts. Kein Aufpreis, keine extra Position.",
    "services.calc.heading": "Was kostet dein Projekt?",
    "services.calc.subheading":
      "Beantworte 3 kurze Fragen und sieh sofort eine realistische Preisspanne \u2013 ohne Registrierung, ohne Haken.",
    "services.transparency.heading":
      "Noch kein gro\u00dfes Portfolio \u2014 aber einen klaren Anspruch",
    "services.transparency.text":
      "Lumencat ist ein junges Projekt. Die gezeigten Referenzen sind Demo-Arbeiten, die zeigen wie ich arbeite \u2014 nicht abgeschlossene Kundenprojekte. Das bedeutet f\u00fcr dich: Du bekommst volle Aufmerksamkeit, faire Preise und einen direkten Draht zum Entwickler. Kein Agentur-Overhead, kein Weiterdelegieren.",
    "services.transparency.cta": "Projekt besprechen",
    "services.cta.heading":
      "Nicht sicher, welches Paket zu dir passt?",
    "services.cta.text":
      "Schreib kurz, wo du stehst und was du dir w\u00fcnschst. Ich melde mich mit einer Empfehlung und einem klaren Vorschlag.",
    "services.cta.primary": "Jetzt Kontakt aufnehmen",
    "services.cta.ghost": "Zur Startseite",

    // ── Calculator UI ──
    "calc.step1.meta": "Schritt 1 von 4",
    "calc.step1.headline": "Welche Art von Website brauchst du?",
    "calc.step1.next": "Weiter \u2192",
    "calc.step2.meta": "Schritt 2 von 4",
    "calc.step2.headline": "Welche Zusatzleistungen ben\u00f6tigst du?",
    "calc.step2.basis": "Basis",
    "calc.step2.back": "\u2190 Zur\u00fcck",
    "calc.step2.next": "Weiter \u2192",
    "calc.step3.meta": "Schritt 3 von 4",
    "calc.step3.headline": "M\u00f6chtest du einen Wartungsvertrag?",
    "calc.step3.so_far": "Bisher",
    "calc.step3.back": "\u2190 Zur\u00fcck",
    "calc.step3.next": "Preis anzeigen \u2192",
    "calc.step4.meta": "Schritt 4 von 4 \u2013 Ergebnis",
    "calc.step4.headline": "Deine Preisspanne",
    "calc.step4.price_label":
      "Einmalige Projektkosten (netto zzgl. MwSt.)",
    "calc.step4.breakdown_title": "Aufschl\u00fcsselung",
    "calc.step4.basis_total": "Kalkulationsbasis",
    "calc.step4.included":
      "Einf\u00fchrung & \u00dcbergabe immer inklusive \u2013 0\u00a0\u20ac Aufpreis. Du lernst alles, was du zur Pflege deiner Website wissen musst.",
    "calc.step4.disclaimer":
      "Die Preisspanne (\u221210\u00a0% bis +15\u00a0%) ber\u00fccksichtigt Abstimmungsaufwand, individuelle Komplexit\u00e4t und Revisionen. Alle Preise netto zzgl. MwSt. Der verbindliche Endpreis wird nach dem kostenlosen Erstgespr\u00e4ch festgelegt.",
    "calc.step4.reset": "Neu berechnen",
    "calc.step4.monthly_label": "/Monat",
    "calc.premium.meta": "Premium-Website",
    "calc.premium.headline": "Dein Projekt",
    "calc.premium.price_tag": "Preis",
    "calc.premium.price": "Auf Anfrage",
    "calc.premium.desc":
      "Premium-Websites werden individuell geplant und kalkuliert. Schreib mir kurz, was du dir vorstellst \u2013 ich melde mich mit einer klaren Einsch\u00e4tzung und einem konkreten Angebot.",
    "calc.premium.cta": "Jetzt Kontakt aufnehmen",
    "calc.premium.reset": "Neu berechnen",
    "calc.lead.title": "Direkt anfragen",
    "calc.lead.desc":
      "Optional: Schick mir deine Kalkulation direkt \u2013 ich melde mich mit einem konkreten Angebot und wir kl\u00e4ren gemeinsam alle Details.",
    "calc.lead.honeypot": "Bitte dieses Feld nicht ausf\u00fcllen",
    "calc.lead.name_label": "Name (optional)",
    "calc.lead.name_placeholder": "Wie darf ich dich ansprechen?",
    "calc.lead.email_label": "E-Mail *",
    "calc.lead.email_placeholder": "Wohin soll ich antworten?",
    "calc.lead.extra_label": "Zus\u00e4tzliche Nachricht (optional)",
    "calc.lead.extra_placeholder":
      "z.B. besondere Anforderungen, gew\u00fcnschter Starttermin\u2026",
    "calc.lead.hint":
      "Nur E-Mail ist Pflicht. Deine Daten werden nur zur Bearbeitung der Anfrage verwendet.",
    "calc.lead.submit": "Anfrage senden",
    "calc.lead.success":
      "Danke f\u00fcr deine Anfrage! Ich melde mich so schnell wie m\u00f6glich.",
    "calc.lead.error_email": "Bitte gib deine E-Mail-Adresse an.",
    "calc.lead.sending": "Ich sende deine Anfrage\u2026",
    "calc.lead.error_generic":
      "Da ist etwas schiefgelaufen. Bitte pr\u00fcf deine Eingaben.",
    "calc.summary.prefix": "Preisrechner-Anfrage:\n",
    "calc.summary.type": "Projekttyp: ",
    "calc.summary.basis": "Kalkulationsbasis: ",
    "calc.summary.extras_prefix": "\nZusatzleistungen: ",
    "calc.summary.wartung_prefix": "\nWartung: ",
    "calc.form.name_fallback": "Preisrechner-Anfrage",
    "calc.extra_msg_prefix": "\n\nZus\u00e4tzliche Nachricht:\n",
    "calc.wartung.none_label": "Kein Wartungsvertrag",
    "calc.wartung.basis_label": "Website-Wartung",
    "calc.wartung.basis_desc": "Monatlicher Check, kleine Textanpassungen",
    "calc.wartung.ext_label": "Erweiterte Wartung",
    "calc.wartung.ext_desc": "Inkl. Updates, Formularcheck, SEO-Checks",

    // ── impressum.html ──
    "page.title.impressum": "Impressum \u2013 Lumencat",
    "page.desc.impressum":
      "Impressum von Lumencat \u2013 Webdesign, Automationen & KI.",
    "impressum.heading": "Impressum",
    "impressum.subtitle": "Angaben gem\u00e4\u00df \u00a7 5 TMG.",
    "impressum.responsible.heading":
      "Verantwortlicher Anbieter dieser Website",
    "impressum.contact.heading": "Kontakt",
    "impressum.tax.heading": "Umsatzsteuer",
    "impressum.tax.text":
      "Kleinunternehmer gem\u00e4\u00df \u00a7 19 UStG. Es wird keine Umsatzsteuer ausgewiesen.",
    "impressum.editorial.heading":
      "Verantwortlich f\u00fcr den Inhalt nach \u00a7 55 Abs. 2 RStV",
    "impressum.liability_content.heading": "Haftung f\u00fcr Inhalte",
    "impressum.liability_content.p1":
      "Als Diensteanbieter bin ich gem\u00e4\u00df \u00a7 7 Abs. 1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG bin ich jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen oder nach Umst\u00e4nden zu forschen, die auf eine rechtswidrige T\u00e4tigkeit hinweisen.",
    "impressum.liability_content.p2":
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00fchrt. Eine diesbez\u00fcgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00f6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.",
    "impressum.liability_links.heading": "Haftung f\u00fcr Links",
    "impressum.liability_links.text":
      "Mein Angebot enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich f\u00fcr diese fremden Inhalte auch keine Gew\u00e4hr \u00fcbernehmen. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.",
    "impressum.copyright.heading": "Urheberrecht",
    "impressum.copyright.p1":
      "Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechts bed\u00fcrfen meiner schriftlichen Zustimmung.",
    "impressum.copyright.p2":
      "Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.",

    // ── datenschutz.html ──
    "page.title.privacy": "Datenschutzerkl\u00e4rung \u2013 Lumencat",
    "page.desc.privacy":
      "Datenschutzerkl\u00e4rung f\u00fcr die Website von Lumencat \u2013 Webdesign, Automationen & KI.",
    "privacy.heading": "Datenschutzerkl\u00e4rung",
    "privacy.subtitle":
      "Mit den folgenden Informationen informiere ich dich \u00fcber die Verarbeitung personenbezogener Daten bei Nutzung dieser Website.",
  };

  // ── Engine ───────────────────────────────────────────────────────
  var currentLang = "en";
  var _enTitle = "";
  var _enDesc = "";

  function getLang() {
    try {
      return localStorage.getItem("lumencat-language") === "de" ? "de" : "en";
    } catch (e) {
      return "en";
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem("lumencat-language", lang);
    } catch (e) {}
  }

  function t(key) {
    return DE[key] !== undefined ? DE[key] : key;
  }

  function cacheEN() {
    _enTitle = document.title;
    var descEl = document.querySelector('meta[name="description"]');
    _enDesc = descEl ? descEl.getAttribute("content") || "" : "";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.hasAttribute("data-en-content")) {
        el.setAttribute("data-en-content", el.textContent.trim());
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      if (!el.hasAttribute("data-en-html")) {
        el.setAttribute("data-en-html", el.innerHTML);
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      if (!el.hasAttribute("data-en-placeholder")) {
        el.setAttribute("data-en-placeholder", el.placeholder || "");
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (!el.hasAttribute("data-en-aria")) {
        el.setAttribute("data-en-aria", el.getAttribute("aria-label") || "");
      }
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    var titleKey = document.documentElement.getAttribute("data-i18n-title");
    document.title =
      lang === "de" && titleKey && DE[titleKey] ? DE[titleKey] : _enTitle;

    var descEl = document.querySelector('meta[name="description"]');
    var descKey = document.documentElement.getAttribute("data-i18n-desc");
    if (descEl) {
      descEl.setAttribute(
        "content",
        lang === "de" && descKey && DE[descKey] ? DE[descKey] : _enDesc
      );
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (lang === "de") {
        var val = DE[el.getAttribute("data-i18n")];
        if (val !== undefined) el.textContent = val;
      } else {
        var en = el.getAttribute("data-en-content");
        if (en !== null) el.textContent = en;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      if (lang === "de") {
        var val = DE[el.getAttribute("data-i18n-html")];
        if (val !== undefined) el.innerHTML = val;
      } else {
        var en = el.getAttribute("data-en-html");
        if (en !== null) el.innerHTML = en;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      if (lang === "de") {
        var val = DE[el.getAttribute("data-i18n-placeholder")];
        if (val !== undefined) el.placeholder = val;
      } else {
        var en = el.getAttribute("data-en-placeholder");
        if (en !== null) el.placeholder = en;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (lang === "de") {
        var val = DE[el.getAttribute("data-i18n-aria")];
        if (val !== undefined) el.setAttribute("aria-label", val);
      } else {
        var en = el.getAttribute("data-en-aria");
        if (en !== null) el.setAttribute("aria-label", en);
      }
    });

    var langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.textContent = lang === "en" ? "DE" : "EN";
      langToggle.setAttribute(
        "aria-label",
        lang === "en" ? "Switch to German" : "Auf Englisch wechseln"
      );
      langToggle.setAttribute("aria-pressed", lang === "de" ? "true" : "false");
    }

    try {
      document.dispatchEvent(
        new CustomEvent("lumencat:langchange", { detail: { lang: lang } })
      );
    } catch (e) {}
  }

  function init() {
    cacheEN();
    currentLang = getLang();

    var langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.textContent = currentLang === "en" ? "DE" : "EN";
      langToggle.setAttribute(
        "aria-label",
        currentLang === "en" ? "Switch to German" : "Auf Englisch wechseln"
      );
      langToggle.setAttribute(
        "aria-pressed",
        currentLang === "de" ? "true" : "false"
      );
      langToggle.addEventListener("click", function () {
        var newLang = currentLang === "en" ? "de" : "en";
        saveLang(newLang);
        applyLanguage(newLang);
      });
    }

    if (currentLang === "de") {
      applyLanguage("de");
    }
  }

  window.I18N = {
    t: t,
    get currentLang() {
      return currentLang;
    },
    apply: applyLanguage,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
