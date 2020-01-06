var CACHE_NAME = 'wafa-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/asset/avatar.jpg',
  '/asset/wafa.jpg',
  '/asset/home.jpg',
  '/asset/home.css',
  '/asset/home.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {   
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});