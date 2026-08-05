const CACHE="fsd-visitor-management-v1.1";
const ASSETS=["./","./index.html","./manifest.json","./fsd-logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
