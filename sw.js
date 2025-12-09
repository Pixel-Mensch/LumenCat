// Lumencat Service Worker - PWA Support
const CACHE_NAME = "lumencat-v1.0.3";
const urlsToCache = [
  "/",
  "/index.html",
  "/shop.html",
  "/kontakt.html",
  "/insights.html",
  "/impressum.html",
  "/datenschutz.html",
  "/css/styles.min.css",
  "/js/main.min.js",
  "/Bilder/logo.svg",
  "/Bilder/optimized/HeroMain-800.avif",
  "/Bilder/optimized/HeroMain-480.avif",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching static assets");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Development mode: Network-first strategy for localhost
  const isDevelopment =
    event.request.url.includes("localhost") ||
    event.request.url.includes("127.0.0.1");

  if (isDevelopment) {
    // Network-first: Always fetch fresh content in development
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Network-first für versionierte Assets (styles.min.css?v=X, main.min.js?v=X)
  if (
    url.pathname.includes("styles.min.css") ||
    url.pathname.includes("main.min.js")
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            // Cache nur erfolgreiche Responses
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback zu gecachter Version
          return caches.match(event.request);
        })
    );
    return;
  }

  // Production mode: Cache-first strategy für andere Assets
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return cached response
      if (response) {
        return response;
      }

      // Clone request for network fetch
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone response for caching
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
