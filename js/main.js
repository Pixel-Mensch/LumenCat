// Lumencat – Main JS
// Hier kümmere ich mich um Theme-Toggle und das mobile Menü.

// Ich lade das, sobald das DOM bereit ist.
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Thema aus localStorage lesen
  const savedTheme = window.localStorage.getItem("lumencat-theme");
  if (savedTheme === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    body.classList.add("theme-dark");
    if (themeToggle) themeToggle.textContent = "🌙";
  }

  // Theme-Toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.contains("theme-light");
      if (isLight) {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
        themeToggle.textContent = "🌙";
        window.localStorage.setItem("lumencat-theme", "dark");
      } else {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        themeToggle.textContent = "☀️";
        window.localStorage.setItem("lumencat-theme", "light");
      }
    });
  }

  // Mobile-Menü
  if (navToggle && navLinks) {
    // Ensure initial aria-expanded reflects current state
    const isOpenOnLoad = navLinks.classList.contains("nav__links--open");
    navToggle.setAttribute("aria-expanded", isOpenOnLoad ? "true" : "false");

    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav__links--open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Wenn ich auf einen Link im mobilen Menü klicke, schließe ich es wieder.
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav__links--open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll Animations – Nordic Flow + leichter Parallax-Hero
  // Reveal-Animationen (jedes Mal, wenn sichtbar)
  const revealElements = document.querySelectorAll(".reveal, .reveal-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
        } else {
          // Wenn aus Sicht verschwindet, Animation zurücksetzen
          entry.target.classList.remove("reveal--visible");
        }
      });
    },
    {
      threshold: 0.16, // etwas früher, wirkt smoother
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Leichter Parallax-Effekt im Hero (sehr dezent)
  const hero = document.querySelector(".hero");
  if (hero) {
    // Throttle with requestAnimationFrame for better performance
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const offset = scrollY * 0.05; // Sehr dezent
          hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }
});
