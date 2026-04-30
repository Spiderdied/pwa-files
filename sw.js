self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("blog-cache").then(cache => {
      return cache.addAll([
        "https://ubad34.blogspot.com/"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
