const CACHE = 'balloni-v1';

// Alle wichtigen Ressourcen cachen
const PRECACHE = [
  '/',
  '/index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/@ericblade/quagga2@1.2.6/dist/quagga.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Nur GET-Requests – Firebase/Google immer direkt (kein Cache)
  if (e.request.method !== 'GET') return;
  const url = e.request.url;
  if (url.includes('firebasedatabase') ||
      url.includes('firebaseio') ||
      url.includes('googleapis.com/identitytoolkit') ||
      url.includes('securetoken')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Gültige Antwort im Cache aktualisieren
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => {
        // Offline: aus Cache laden
        return caches.match(e.request)
          .then(cached => cached || new Response('Offline – bitte App vorher mit Internet öffnen.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          }));
      })
  );
});
