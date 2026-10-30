/* 絵文字のような単純な絵（ピクトグラム）。<svg class="pic"><use href="#p-cow"/></svg> で使う。
   色は currentColor（線）と --pic-fill（塗り）。ダークモードでもそのまま見える。 */
(function () {
  var S = 'stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  var F = 'fill="var(--pic-fill,#e6eef3)"';
  var defs = {
    // 牛・子牛・人
    cow: '<g ' + S + '><path ' + F + ' d="M14 28h30a8 8 0 0 1 8 8v6a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4v-6a8 8 0 0 1 2-8z"/><path d="M20 46v10M28 46v10M36 46v10M44 46v10"/><path d="M12 32l-4 8"/><ellipse ' + F + ' cx="50" cy="24" rx="8" ry="7"/><path d="M44 18l-4-5M56 18l4-5"/><circle cx="53" cy="23" r="1.2" fill="currentColor" stroke="none"/></g>',
    calf: '<g ' + S + '><path ' + F + ' d="M20 32h22a6 6 0 0 1 6 6v5a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3v-5a6 6 0 0 1 3-6z"/><path d="M24 46v9M31 46v9M38 46v9M44 46v9"/><ellipse ' + F + ' cx="46" cy="29" rx="6.5" ry="6"/><path d="M41 24l-3-4M51 24l3-4"/><circle cx="48.5" cy="28" r="1.1" fill="currentColor" stroke="none"/><path d="M17 36l-4 6"/></g>',
    vet: '<g ' + S + '><circle ' + F + ' cx="32" cy="15" r="8"/><path ' + F + ' d="M14 58V46a12 12 0 0 1 12-12h12a12 12 0 0 1 12 12v12z"/><path d="M25 34v8a7 7 0 0 0 14 0v-8"/><path d="M39 42v4a5 5 0 0 0 10 0v-2"/><circle ' + F + ' cx="49" cy="40" r="3.5"/></g>',
    farmer: '<g ' + S + '><circle ' + F + ' cx="30" cy="20" r="8"/><path ' + F + ' d="M20 18a10 10 0 0 1 20 0h8z"/><path ' + F + ' d="M12 58V46a12 12 0 0 1 12-12h12a12 12 0 0 1 12 12v12z"/><path d="M52 30v28M48 34h8"/></g>',
    student: '<g ' + S + '><path ' + F + ' d="M8 20l24-10 24 10-24 10z"/><path d="M20 25v10c0 4 24 4 24 0V25M56 20v12"/><circle ' + F + ' cx="32" cy="40" r="6"/><path ' + F + ' d="M20 58v-5a12 12 0 0 1 24 0v5z"/></g>',
    two: '<g ' + S + '><circle ' + F + ' cx="22" cy="20" r="7"/><circle ' + F + ' cx="44" cy="20" r="7"/><path ' + F + ' d="M8 54v-10a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v10z"/><path ' + F + ' d="M30 54v-10a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v10z"/><path d="M26 38l12 0"/></g>',
    // 場所・道具
    barn: '<g ' + S + '><path ' + F + ' d="M10 30L32 12l22 18v26H10z"/><path ' + F + ' d="M24 56V40h16v16"/><path d="M24 48h16M32 40v16"/><path d="M6 30l26-22 26 22"/></g>',
    phone: '<g ' + S + '><rect ' + F + ' x="18" y="6" width="28" height="52" rx="5"/><path d="M28 12h8"/><rect x="24" y="22" width="7" height="7" fill="currentColor" stroke="none"/><rect x="33" y="22" width="7" height="7" fill="currentColor" stroke="none"/><rect x="24" y="31" width="7" height="7" fill="currentColor" stroke="none"/><path d="M33 31h3v3h4v4h-7z" fill="currentColor" stroke="none"/><path d="M26 48h12"/></g>',
    qr: '<g ' + S + '><rect ' + F + ' x="10" y="10" width="44" height="44" rx="4"/><rect x="16" y="16" width="12" height="12" fill="currentColor" stroke="none"/><rect x="36" y="16" width="12" height="12" fill="currentColor" stroke="none"/><rect x="16" y="36" width="12" height="12" fill="currentColor" stroke="none"/><path d="M36 36h5v5h-5zM43 43h5v5h-5zM36 43h4M43 36h5" fill="currentColor" stroke="none"/></g>',
    tube: '<g ' + S + '><path ' + F + ' d="M26 10h12v38a6 6 0 0 1-12 0z"/><rect ' + F + ' x="23" y="6" width="18" height="7" rx="2"/><path d="M26 32h12v16a6 6 0 0 1-12 0z" fill="currentColor" opacity=".35" stroke="none"/></g>',
    swab: '<g ' + S + '><path d="M14 52L40 18"/><ellipse ' + F + ' cx="44" cy="14" rx="7" ry="6" transform="rotate(-40 44 14)"/><path d="M8 58l6-6"/></g>',
    freezer: '<g ' + S + '><rect ' + F + ' x="14" y="8" width="36" height="48" rx="4"/><path d="M14 26h36"/><path d="M32 32v18M24 36l16 10M40 36L24 46M32 14v6"/></g>',
    box: '<g ' + S + '><path ' + F + ' d="M10 24l22-10 22 10v22L32 56 10 46z"/><path d="M10 24l22 10 22-10M32 34v22"/><path d="M21 19l22 10"/></g>',
    truck: '<g ' + S + '><path ' + F + ' d="M6 20h32v24H6z"/><path ' + F + ' d="M38 28h12l8 8v8H38z"/><circle ' + F + ' cx="16" cy="48" r="5"/><circle ' + F + ' cx="48" cy="48" r="5"/><path d="M42 36h10"/></g>',
    plate: '<g ' + S + '><rect ' + F + ' x="8" y="16" width="48" height="32" rx="4"/><g fill="currentColor" stroke="none"><circle cx="18" cy="26" r="2.5"/><circle cx="27" cy="26" r="2.5"/><circle cx="36" cy="26" r="2.5"/><circle cx="45" cy="26" r="2.5"/><circle cx="18" cy="38" r="2.5"/><circle cx="27" cy="38" r="2.5"/><circle cx="36" cy="38" r="2.5"/><circle cx="45" cy="38" r="2.5"/></g></g>',
    lab: '<g ' + S + '><path ' + F + ' d="M26 8h12v16l12 24a4 4 0 0 1-4 6H18a4 4 0 0 1-4-6l12-24z"/><path d="M22 8h20"/><path d="M20 40h24" /></g>',
    chart: '<g ' + S + '><path d="M8 54h48"/><rect ' + F + ' x="14" y="36" width="8" height="18"/><rect ' + F + ' x="28" y="26" width="8" height="28"/><rect ' + F + ' x="42" y="16" width="8" height="38"/><path d="M12 30l18-12 8 6 16-14"/><path d="M46 10h8v8"/></g>',
    yen: '<g ' + S + '><circle ' + F + ' cx="32" cy="32" r="24"/><path d="M22 16l10 14 10-14M32 30v18M24 36h16M24 43h16"/></g>',
    shield: '<g ' + S + '><path ' + F + ' d="M32 6l20 7v16c0 13-9 23-20 29C21 52 12 42 12 29V13z"/><path d="M22 32l7 7 13-14"/></g>',
    heart: '<g ' + S + '><path ' + F + ' d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/><path d="M20 28h8l4-8 4 14 4-6h4"/></g>',
    calendar: '<g ' + S + '><rect ' + F + ' x="8" y="12" width="48" height="44" rx="4"/><path d="M8 24h48M20 6v10M44 6v10"/><g fill="currentColor" stroke="none"><rect x="16" y="30" width="7" height="6"/><rect x="28" y="30" width="7" height="6"/><rect x="40" y="30" width="7" height="6"/><rect x="16" y="42" width="7" height="6"/><rect x="28" y="42" width="7" height="6"/></g></g>',
    clipboard: '<g ' + S + '><rect ' + F + ' x="12" y="10" width="40" height="48" rx="4"/><rect ' + F + ' x="24" y="6" width="16" height="8" rx="2"/><path d="M20 28h24M20 36h24M20 44h14"/></g>',
    profile: '<g ' + S + '><rect ' + F + ' x="10" y="8" width="44" height="48" rx="4"/><path d="M18 20h28"/><rect x="18" y="28" width="10" height="20" fill="currentColor" opacity=".5" stroke="none"/><rect x="31" y="34" width="6" height="14" fill="currentColor" opacity=".5" stroke="none"/><rect x="40" y="26" width="6" height="22" fill="currentColor" opacity=".5" stroke="none"/><path d="M18 48h28"/></g>',
    steth: '<g ' + S + '><path d="M18 8v18a12 12 0 0 0 24 0V8"/><path d="M30 38v6a10 10 0 0 0 20 0v-8"/><circle ' + F + ' cx="50" cy="30" r="5"/><path d="M14 8h8M38 8h8"/></g>',
    tape: '<g ' + S + '><circle ' + F + ' cx="24" cy="30" r="16"/><circle cx="24" cy="30" r="5"/><path d="M40 30h18v10H30"/><path d="M44 30v5M50 30v5M56 30v5"/></g>',
    trough: '<g ' + S + '><path ' + F + ' d="M8 28h48l-4 22H12z"/><path d="M14 36c6-4 12 4 18 0s12-4 18 0"/><path d="M12 28V18M52 28V18"/></g>',
    video: '<g ' + S + '><rect ' + F + ' x="8" y="18" width="34" height="28" rx="4"/><path ' + F + ' d="M42 28l14-8v24l-14-8z"/><circle cx="18" cy="28" r="3"/></g>',
    mic: '<g ' + S + '><rect ' + F + ' x="24" y="8" width="16" height="28" rx="8"/><path d="M16 30a16 16 0 0 0 32 0M32 46v10M22 56h20"/></g>',
    thermo: '<g ' + S + '><rect ' + F + ' x="26" y="6" width="12" height="36" rx="6"/><circle ' + F + ' cx="32" cy="48" r="9"/><path d="M32 20v28" stroke-width="4"/><path d="M42 14h8M42 22h8M42 30h8"/></g>',
    bottle: '<g ' + S + '><path ' + F + ' d="M26 8h12v10l6 8v28a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V26l6-8z"/><path d="M22 36h20" /><path d="M24 40h16v14H24z" fill="currentColor" opacity=".35" stroke="none"/></g>',
    bag: '<g ' + S + '><path ' + F + ' d="M16 20h32l4 36H12z"/><path d="M22 20v-6a10 10 0 0 1 20 0v6"/><path d="M22 34c4 6 16 6 20 0"/></g>',
    poop: '<g ' + S + '><path ' + F + ' d="M14 52c-6 0-6-10 2-10-4-6 2-12 8-10-2-8 10-12 14-4 8-2 12 6 8 12 8 0 8 12 0 12z"/><circle cx="26" cy="40" r="1.5" fill="currentColor" stroke="none"/><circle cx="38" cy="40" r="1.5" fill="currentColor" stroke="none"/></g>',
    sensor: '<g ' + S + '><rect ' + F + ' x="18" y="22" width="28" height="34" rx="4"/><path d="M24 36h16M24 44h10"/><path d="M20 14a17 17 0 0 1 24 0M14 8a26 26 0 0 1 36 0"/></g>',
    arrowr: '<g ' + S + '><path d="M10 32h40M38 20l12 12-12 12"/></g>',
    check: '<g ' + S + '><circle ' + F + ' cx="32" cy="32" r="24"/><path d="M20 33l8 8 16-18"/></g>',
    loop: '<g ' + S + '><path d="M50 28a18 18 0 1 0 0 8"/><path d="M50 18v10H40"/></g>',
    coins: '<g ' + S + '><ellipse ' + F + ' cx="26" cy="20" rx="14" ry="6"/><path d="M12 20v8c0 3 6 6 14 6s14-3 14-6v-8"/><path d="M12 28v8c0 3 6 6 14 6s14-3 14-6v-8"/><ellipse ' + F + ' cx="44" cy="40" rx="12" ry="5"/><path d="M32 40v8c0 3 5 5 12 5s12-2 12-5v-8"/></g>',
    handshake: '<g ' + S + '><circle ' + F + ' cx="20" cy="18" r="7"/><path ' + F + ' d="M11 16a9 9 0 0 1 18 0h7z"/><circle ' + F + ' cx="44" cy="18" r="7"/><path d="M37 30v6a6 6 0 0 0 12 0v-6"/><path ' + F + ' d="M6 56V46a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v10z"/><path ' + F + ' d="M30 56V46a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v10z"/><path d="M30 44h4" /></g>',
    vets: '<g ' + S + '><circle ' + F + ' cx="32" cy="14" r="6"/><circle ' + F + ' cx="14" cy="20" r="6"/><circle ' + F + ' cx="50" cy="20" r="6"/><path ' + F + ' d="M22 44V36a10 10 0 0 1 20 0v8z"/><path ' + F + ' d="M2 52v-8a10 10 0 0 1 16-8M62 52v-8a10 10 0 0 0-16-8"/><path ' + F + ' d="M8 58V50a8 8 0 0 1 16 0v8zM40 58v-8a8 8 0 0 1 16 0v8z"/></g>',
    smile: '<g ' + S + '><circle ' + F + ' cx="32" cy="32" r="24"/><path d="M22 40c4 6 16 6 20 0"/><circle cx="24" cy="26" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="26" r="2" fill="currentColor" stroke="none"/></g>',
    season: '<g ' + S + '><circle ' + F + ' cx="32" cy="32" r="12"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6"/></g>'
  };
  var html = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">';
  for (var k in defs) html += '<symbol id="p-' + k + '" viewBox="0 0 64 64">' + defs[k] + '</symbol>';
  html += '</svg>';
  function inject() { var d = document.createElement('div'); d.innerHTML = html; document.body.insertBefore(d.firstChild, document.body.firstChild); }
  if (document.body) inject(); else document.addEventListener('DOMContentLoaded', inject);
})();
