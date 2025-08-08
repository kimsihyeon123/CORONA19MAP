const CACHE = 'kidsworship-v1';
const ASSETS = [
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/js/data.js',
  '/pages/chant.html',
  '/pages/pangpang.html',
  '/pages/resources.html',
  '/pages/english.html'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  const req = e.request;
  e.respondWith(
    caches.match(req).then(res=> res || fetch(req).then(netRes=>{
      if(req.method==='GET' && req.url.startsWith(self.location.origin)){
        const copy = netRes.clone(); caches.open(CACHE).then(c=>c.put(req, copy));
      }
      return netRes;
    }).catch(()=> caches.match('/index.html')))
  );
});