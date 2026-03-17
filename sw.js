// Lumencat Service Worker - PWA Support
const CACHE_NAME = "lumencat-v1.0.7";

const urlsToCache = [
  "/",
  "/index.html",
  "/css/styles.min.css",
  "/js/main.min.js",
  "/assets/images/logo.svg",
  "/assets/images/optimized/HeroMain-800.avif",
  "/assets/images/optimized/HeroMain-480.avif",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching static assets");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== "GET" || url.pathname.startsWith("/scripts/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  const isDevelopment =
    event.request.url.includes("localhost") ||
    event.request.url.includes("127.0.0.1");

  // 1) Seitenaufrufe: immer zuerst Netzwerk, Cache nur als Fallback
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request) || caches.match("/index.html");
        })
    );
    return;
  }

  // 2) Development: immer Netzwerk zuerst
  if (isDevelopment) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  // 3) CSS und JS: Netzwerk zuerst, Cache als Fallback
  if (
    url.pathname.includes("styles.min.css") ||
    url.pathname.includes("main.min.js")
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // 4) Rest: Cache zuerst, dann Netzwerk
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
