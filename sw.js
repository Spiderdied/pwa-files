// اسم الكاش
const CACHE_NAME = "ubad-app-v1";

// الملفات اللي تتحفظ
const urlsToCache = [
  "/",
  "https://ubad34.blogspot.com/"
];

// تثبيت
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// تشغيل
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
