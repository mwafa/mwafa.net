var CACHE = 'wafa-cache-v1';
var urlsToCache = [
  './',
  '/index.html',
  '/asset/avatar.jpg',
  '/asset/wafa.jpg',
  '/asset/home.jpg',
  '/asset/home.css',
  '/asset/home.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css',
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
  'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
];

// On install, cache some resources.
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

  // Ask the service worker to keep installing until the returning promise
  // resolves.
  evt.waitUntil(precache());
});

// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  // You can use `respondWith()` to answer immediately, without waiting for the
  // network response to reach the service worker...
  evt.respondWith(fromCache(evt.request));
  // ...and `waitUntil()` to prevent the worker from being killed until the
  // cache is updated.
  evt.waitUntil(update(evt.request));
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.

function precache() {
  return caches.open(CACHE).then(function(cache) {
      return cache.addAll(urlsToCache);
  });
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
      return cache.match(request).then(function(matching) {
          return matching || Promise.reject('no-match');
      });
  });
}

// Update consists in opening the cache, performing a network request and
// storing the new response data.

function update(request) {
  return caches.open(CACHE).then(function(cache) {
      return fetch(request).then(function(response) {
          return cache.put(request, response);
      });
  });
}