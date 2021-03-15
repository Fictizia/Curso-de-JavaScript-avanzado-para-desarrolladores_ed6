const CACHE = 'heroes-v1.0';

const archivos = [
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
    '/ejemplos/clase19/sw/style.css',
    '/ejemplos/clase19/sw/script.js'
]

self.addEventListener('install', function(evt) {
  console.log('El service worker se está instalando');
  evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
  console.log('El service worker está devolviento el archivo');
  evt.respondWith(fromNetwork(evt.request, 50).catch(function () {
    return fromCache(evt.request);
  }));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(archivos);
  });
}

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {
      const timeoutId = setTimeout(reject, timeout);
      fetch(request).then(function (response) {
        clearTimeout(timeoutId);
        fulfill(response);
      }, reject);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
