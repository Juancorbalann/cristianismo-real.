
const CACHE='cr-v3.9';const ASSETS=['/','/index.html','/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;
e.respondWith(caches.match(req).then(res=>res||fetch(req).then(fres=>{const copy=fres.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});return fres}).catch(()=>res))) });
