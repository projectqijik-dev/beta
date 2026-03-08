const CACHE_NAME = 'tarih-portali-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Kurulum aşaması: Dosyaları önbelleğe al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// İnternet yokken bile önbellekten dosyaları getir
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Önbellekte varsa onu ver
        }
        return fetch(event.request); // Yoksa internetten çek
      })
  );
});