(function(){
  const STORAGE_KEYS = {
    chants: 'kidsworship_chants',
    chantsEn: 'kidsworship_chants_en'
  };

  function safeJSONParse(str, fallback){
    try{ return JSON.parse(str) }catch{ return fallback }
  }

  const YouTube = {
    extractId(url){
      if(!url) return null;
      try{
        const u = new URL(url);
        if(u.hostname.includes('youtu.be')){
          return u.pathname.slice(1);
        }
        if(u.searchParams.get('v')){
          return u.searchParams.get('v');
        }
        // playlist embeds or share links are allowed as-is via iframe src
        return null;
      }catch{ return null }
    },
    embedUrl(idOrUrl){
      if(!idOrUrl) return null;
      // if full url is passed and already looks like embed/playlist
      if(/^https?:\/\/.+youtube\.com\//.test(idOrUrl) && idOrUrl.includes('/embed')) return idOrUrl;
      if(idOrUrl.startsWith('http')){
        const id = YouTube.extractId(idOrUrl);
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      return `https://www.youtube.com/embed/${idOrUrl}`;
    }
  };

  const Store = {
    getChants(lang='ko'){
      const raw = localStorage.getItem(lang==='en'?STORAGE_KEYS.chantsEn:STORAGE_KEYS.chants);
      return safeJSONParse(raw, []);
    },
    setChants(items, lang='ko'){
      localStorage.setItem(lang==='en'?STORAGE_KEYS.chantsEn:STORAGE_KEYS.chants, JSON.stringify(items||[]));
    }
  };

  function registerServiceWorker(swPath){
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register(swPath).catch(()=>{});
    }
  }

  window.KidsApp = { YouTube, Store, registerServiceWorker };
})();