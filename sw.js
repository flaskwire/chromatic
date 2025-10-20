self.addEventListener("install", () => console.log("[SW] installed"));
self.addEventListener("fetch", e => console.log("[SW] fetch:", e.request.url));
