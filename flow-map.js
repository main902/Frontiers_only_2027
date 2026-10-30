/* 流れ図の「見る流れ」ボタン／ことば表の開閉と検索（全ページ共通） */
(function(){
  var btns=document.querySelectorAll('.fbtn');
  var groups=document.querySelectorAll('svg.map g[data-k]');
  function show(k){
    btns.forEach(function(b){b.setAttribute('aria-pressed', b.dataset.k===k ? 'true':'false');});
    groups.forEach(function(g){
      var ks=g.dataset.k.split(' ');
      var isEdge=g.classList.contains('ed');
      g.classList.remove('dim','on');
      if(k==='all') return;
      if(ks.indexOf('always')>=0){ if(isEdge) g.classList.add('dim'); return; }
      if(ks.indexOf(k)>=0){ if(isEdge) g.classList.add('on'); } else { g.classList.add('dim'); }
    });
  }
  btns.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.k);});});
})();

(function(){
  var g=document.getElementById('glgrid'), b=document.getElementById('gltoggle');
  if(!g||!b) return;
  function set(open){ g.classList.toggle('hide',!open); b.setAttribute('aria-expanded',open?'true':'false'); b.textContent=open?'ことば表を閉じる':'ことば表を開く（'+g.querySelectorAll('li').length+'のことば）'; }
  set(window.innerWidth>=760);
  b.addEventListener('click',function(){ set(g.classList.contains('hide')); });
  document.querySelectorAll('a.term').forEach(function(a){ a.addEventListener('click',function(){ set(true); }); });
})();
(function(){
  var q=document.getElementById('glq'); if(!q) return;
  q.addEventListener('input',function(){
    var v=q.value.trim().toLowerCase();
    document.querySelectorAll('ul.gl li').forEach(function(li){ li.style.display=(!v||(li.dataset.q||li.textContent).toLowerCase().indexOf(v)>=0)?'':'none'; });
    document.querySelectorAll('.glgroup').forEach(function(g){ g.style.display=g.querySelector('li:not([style*="none"])')?'':'none'; });
  });
})();
