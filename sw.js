const CACHE_NAME = 'yachakuna-cache-v2';
 
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './índice.html',
        './manifest.json',
        './icono-192.png',
        './icono-512.png'
      ]);
    })
  );
  self.skipWaiting();
});
 
self.addEventListener('activate', event => {
  // Borrar cachés viejos
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    // Intenta internet primero (siempre la versión más nueva)
    fetch(event.request).catch(() => {
      // Sin internet: usar caché
      return caches.match(event.request);
    })
  );
});
 
