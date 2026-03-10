const CACHE_NAME = 'rimay-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    // Intenta buscar en internet primero (para que siempre tengas la app actualizada)
    fetch(event.request).catch(() => {
      // Si no hay internet (falla el fetch), busca en el caché
      return caches.match(event.request);
    })
  );
});