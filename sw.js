/* 《完整加註版奇蹟課程》術語詞彙表知識庫 · Phase A Demo v1.2.0
 * Precaches readonly local glossary. CE reader is a separate origin and stays online-only.
 */
const CACHE_PREFIX = 'acimce-glossary-phase-a-';
const CACHE_NAME = 'acimce-glossary-phase-a-v1.2.0';
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./assets/brand/golden-lily-1254.png",
  "./assets/brand/share-card-1200x630.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/favicon-16x16.png",
  "./assets/icons/favicon-32x32.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-192-maskable.png",
  "./assets/icons/icon-512-maskable.png"
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response.ok) { const copy=response.clone(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put('./index.html',copy))); }
      return response;
    }).catch(async () => await caches.match('./index.html') || Response.error()));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response.ok) { const copy=response.clone(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(req,copy))); }
    return response;
  })));
});
