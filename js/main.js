// Lumencat – Main JS
// Theme-Toggle, Mobile-Menü, Scroll-Animationen & dezenter Parallax-Hero

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // -----------------------------
  // Theme-Handling
  // -----------------------------
  const applyTheme = (theme) => {
    const isLight = theme === "light";

    // Klassen auf <html> (für :root.theme-light) UND <body> (bestehende Styles)
    html.classList.remove("theme-light", "theme-dark");
    body.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${theme}`);
    body.classList.add(`theme-${theme}`);

    // Toggle-Icon aktualisieren
    if (themeToggle) {
      themeToggle.textContent = isLight ? "☀️" : "🌙";
      themeToggle.setAttribute(
        "aria-label",
        isLight
          ? "Darstellung auf dunkel wechseln"
          : "Darstellung auf hell wechseln"
      );
      themeToggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    }
  };

  const getInitialTheme = () => {
    // 1) gespeicherter Wert
    const savedTheme = window.localStorage.getItem("lumencat-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    // 2) System-Preference fallback
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  };

  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isCurrentlyLight = body.classList.contains("theme-light");
      const nextTheme = isCurrentlyLight ? "dark" : "light";
      applyTheme(nextTheme);
      window.localStorage.setItem("lumencat-theme", nextTheme);
    });
  }

  // -----------------------------
  // Mobile-Menü
  // -----------------------------
  if (navToggle && navLinks) {
    const isOpenOnLoad = navLinks.classList.contains("nav__links--open");
    navToggle.setAttribute("aria-expanded", isOpenOnLoad ? "true" : "false");

    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav__links--open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav__links--open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // -----------------------------
  // Scroll-Animationen (reveal)
  // -----------------------------
  const revealElements = document.querySelectorAll(".reveal, .reveal-fade");

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Animationen für Nutzer*innen mit reduzierter Bewegung einfach deaktivieren
    revealElements.forEach((el) => {
      el.classList.add("reveal--visible");
    });
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            // Standard: nur einmal einblenden, nicht beim Scrollen ständig an/aus
            const once = entry.target.getAttribute("data-reveal-once");
            if (once !== "false") {
              obs.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // -----------------------------
  // Leichter Parallax-Effekt im Hero
  // -----------------------------
  const hero = document.querySelector(".hero");
  if (hero && !prefersReducedMotion) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const offset = scrollY * 0.05;
          hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --- Kontaktformular-Handling ---
  const contactForm = document.getElementById("contactForm");
  const contactHint = document.getElementById("contactHint");

  if (contactForm && contactHint) {
    contactForm.addEventListener("submit", async (event) => {
      // Ich verhindere den normalen Formular-Submit,
      // damit ich alles schön per fetch machen kann.
      event.preventDefault();

      contactHint.textContent = "Ich sende deine Nachricht...";
      contactHint.style.color = ""; // Standardfarbe

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          contactHint.textContent =
            data.message || "Danke für deine Nachricht!";
          contactHint.style.color = "#19f7ff";
          // Formular leeren
          contactForm.reset();
        } else {
          contactHint.textContent =
            data.message ||
            "Da ist etwas schiefgelaufen. Bitte prüf deine Eingaben.";
          contactHint.style.color = "#ff9494";
        }
      } catch (error) {
        console.error("Kontaktformular-Fehler:", error);
        contactHint.textContent =
          "Ich konnte deine Nachricht gerade nicht senden. Bitte versuch es später noch einmal oder schreib direkt an hello@lumencat.de.";
        contactHint.style.color = "#ff9494";
      }
    });
  }
});
