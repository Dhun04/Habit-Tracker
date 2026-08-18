const CACHE_NAME = "habit-tracker-v1";
const ASSETS = [
  "./app.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192-maskable.png",
  "./icon-512-maskable.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for the app shell/icons, falling back to network, and falling
// back to the cached app shell if fully offline and the exact resource
// hasn't been cached yet. AI/auth calls (Firebase/Google) always go to the
// network since they're not part of ASSETS.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => {
            try { cache.put(e.request, copy); } catch (err) {}
          });
          return res;
        })
        .catch(() => caches.match("./app.html"));
    })
  );
});
