(function(){
  var WA="77029081509";
  function waLinks(){ document.querySelectorAll("a[data-wa]").forEach(function(a){ a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(a.dataset.wa); }); }
  waLinks();
  document.addEventListener("click",function(e){ var a=e.target.closest("[data-goal]"); if(!a) return; try{ if(window.ym&&window.__YM) ym(window.__YM,"reachGoal",a.dataset.goal); }catch(_){} });
  fetch("/content/site.json?ts="+Date.now(),{cache:"no-store"}).then(function(r){return r.ok?r.json():null;}).then(function(d){
    if(!d) return;
    function g(k){ var s=[d.prices||{},d.contacts||{}]; for(var i=0;i<s.length;i++) if(s[i][k]!=null&&s[i][k]!=="") return s[i][k]; }
    function digits(s){ return "+"+String(s).replace(/\D/g,""); }
    document.querySelectorAll("[data-cms]").forEach(function(el){ var v=g(el.dataset.cms); if(v!=null) el.textContent=v; });
    document.querySelectorAll("[data-cms-tel]").forEach(function(el){ var v=g(el.dataset.cmsTel); if(v) el.href="tel:"+digits(v); });
    var wa=g("whatsapp"); if(wa){ WA=String(wa).replace(/\D/g,""); waLinks(); }
  }).catch(function(){});
})();
