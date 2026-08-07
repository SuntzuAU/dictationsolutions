/**
 * Chrome CSS as a string.
 *
 * Emitted via <style is:inline set:html={...}> rather than a component
 * <style> block. Astro 4 fails to build any page that has its own
 * `is:inline` style AND imports a component carrying a scoped style —
 * esbuild throws `Expected ":" but found "lang"`. All 13 legacy pages
 * have inline styles, so the chrome must stay out of that path.
 *
 * Class names are namespaced .sn-* and .sf-* so they cannot collide
 * with legacy page CSS.
 */

export const navCss = `
.sn{
    position:sticky; top:0; z-index:100;
    background:rgba(255,255,255,.97); backdrop-filter:blur(12px);
    border-bottom:1px solid var(--line, #E5E8ED);
    font-family:var(--font, Figtree, system-ui, sans-serif);
  }
  .sn-wrap{
    max-width:var(--container, 1180px); margin:0 auto;
    padding:0 var(--gutter, 44px);
    display:flex; align-items:center; justify-content:space-between; gap:18px;
    height:64px;
  }
  .sn a{ text-decoration:none; color:inherit }

  .sn-brand{
    display:flex; align-items:center; gap:10px; flex:0 0 auto;
    font-weight:800; font-size:16px; letter-spacing:-.03em;
    color:var(--ink, #12151A);
  }
  .sn-mark{
    display:flex; align-items:center; gap:2.5px; height:24px; flex:0 0 auto;
  }
  .sn-mark i{
    width:2.5px; border-radius:2px; display:block;
    background:var(--ink, #12151A);
  }
  .sn-word{
    display:flex; flex-direction:column; line-height:1;
    font-weight:800; font-size:16px; letter-spacing:-.035em; color:var(--ink, #12151A);
  }
  .sn-word em{
    font-style:normal; font-size:8.5px; font-weight:700;
    letter-spacing:.26em; text-transform:uppercase;
    color:var(--muted, #5A6473); margin-top:3px;
  }

  .sn-links{ display:flex; gap:20px; align-items:stretch }

  .sn-cta{
    flex:0 0 auto; background:var(--ink, #12151A); color:#fff !important;
    font-weight:700; font-size:13.5px; padding:10px 18px; border-radius:8px;
  }


  /* --- dropdown groups --- */
  .sn-group{ position:relative; display:flex; align-items:center }
  .sn-top{
    display:flex; align-items:center; gap:5px;
    font-size:14px; font-weight:500; color:var(--ink-2, #2A3038);
    position:relative; padding:21px 0; white-space:nowrap;
  }
  .sn-top:hover{ color:var(--v-mid, #12151A) }
  .sn-top svg{ opacity:.5; transition:transform .15s }
  .sn-group:hover .sn-top svg{ transform:rotate(180deg) }
  .sn-top[aria-current="page"]{ font-weight:700; color:var(--v-mid, #12151A) }
  .sn-top[aria-current="page"]::after{
    content:""; position:absolute; left:0; right:0; bottom:0; height:2px;
    background:var(--v, #12151A);
  }
  .sn-menu{
    display:none; position:absolute; top:100%; left:-14px; min-width:288px;
    background:#fff; border:1px solid var(--line, #E5E8ED);
    border-top:2px solid var(--v, #12151A); border-radius:0 0 12px 12px;
    box-shadow:0 14px 44px rgba(18,21,26,.14); padding:7px; z-index:200;
  }
  .sn-group:hover .sn-menu, .sn-group:focus-within .sn-menu{ display:block }
  .sn-menu a{ display:block; padding:9px 12px; border-radius:8px }
  .sn-menu a:hover{ background:var(--v-tint, #F7F8FA) }
  .sn-menu b{
    display:block; font-size:14px; font-weight:700; color:var(--ink, #12151A);
    letter-spacing:-.01em; margin-bottom:1px;
  }
  .sn-menu a:hover b{ color:var(--v-mid, #12151A) }
  .sn-menu span{ display:block; font-size:12.5px; color:var(--muted, #5A6473); line-height:1.4 }

  /* --- mobile drawer groups --- */
  .sn-dgroup{ padding:6px 0 4px; border-bottom:1px solid var(--line, #E5E8ED) }
  .sn-dgroup:last-of-type{ border-bottom:none }
  .sn-dgroup p{
    margin:0 0 2px; padding:6px 12px 2px; font-size:10.5px; font-weight:800;
    letter-spacing:.11em; text-transform:uppercase; color:var(--muted, #5A6473);
  }
  .sn-dgroup a{ padding-left:12px }
  .sn-dtop{ font-weight:700 }

  /* mobile — CSS only, no JS */
  .sn-mobile{ display:none; position:relative }
  .sn-mobile summary{
    list-style:none; cursor:pointer; padding:8px 4px;
    display:flex; flex-direction:column; gap:5px;
  }
  .sn-mobile summary::-webkit-details-marker{ display:none }
  .sn-mobile summary span{
    display:block; width:22px; height:2px; border-radius:2px;
    background:var(--ink, #12151A);
  }
  .sn-drawer{
    position:absolute; right:0; top:calc(100% + 10px); min-width:216px;
    background:#fff; border:1px solid var(--line, #E5E8ED); border-radius:11px;
    box-shadow:0 12px 40px rgba(18,21,26,.14); padding:8px; z-index:120;
  }
  .sn-drawer a{
    display:block; padding:10px 12px; font-size:14.5px; font-weight:600;
    color:var(--ink-2, #2A3038); border-radius:7px;
  }
  .sn-drawer a:hover{ background:var(--v-tint, #F7F8FA); color:var(--v-mid, #12151A) }
  .sn-drawer-cta{
    margin-top:6px; background:var(--ink, #12151A); color:#fff !important; text-align:center;
  }

  @media (max-width: 1180px){ .sn-links{ gap:14px } .sn-top{ font-size:13px } }
  @media (max-width: 1000px){
    .sn-links, .sn-cta{ display:none }
    .sn-mobile{ display:block }
    .sn-wrap{ height:58px }
  }
`;

export const footerCss = `
.sf{
    background:var(--ink, #12151A); color:rgba(255,255,255,.55);
    padding:44px 0 30px; font-family:var(--font, Figtree, system-ui, sans-serif);
    font-size:14px; line-height:1.6;
  }
  .sf-wrap{ max-width:var(--container, 1180px); margin:0 auto; padding:0 var(--gutter, 44px) }
  .sf a{ text-decoration:none; color:inherit }
  .sf a:hover{ color:#fff }

  .sf-grid{
    display:grid; grid-template-columns:1.25fr 1fr 1fr 1fr 1fr; gap:26px;
    padding-bottom:30px;
  }
  .sf-brand{
    display:flex; align-items:center; gap:10px;
    font-weight:800; font-size:15.5px; letter-spacing:-.03em; color:#fff; margin-bottom:12px;
  }
  .sf-mark{ display:flex; align-items:center; gap:2.5px; height:22px; flex:0 0 auto }
  .sf-mark i{ width:2.5px; border-radius:2px; display:block; background:#fff; opacity:.9 }
  .sf-word{
    display:flex; flex-direction:column; line-height:1;
    font-weight:800; font-size:15.5px; letter-spacing:-.035em; color:#fff;
  }
  .sf-word em{
    font-style:normal; font-size:8px; font-weight:700;
    letter-spacing:.26em; text-transform:uppercase;
    color:rgba(255,255,255,.5); margin-top:3px;
  }
  .sf-blurb{ margin:0 0 14px; max-width:30ch; font-size:13.5px }
  .sf-phone{ font-weight:700; color:#fff !important; font-size:15px; letter-spacing:-.01em }

  .sf h3{
    margin:0 0 12px; font-size:11px; font-weight:800; letter-spacing:.12em;
    text-transform:uppercase; color:rgba(255,255,255,.4);
  }
  .sf ul{ margin:0; padding:0; list-style:none }
  .sf li{ margin-bottom:8px }
  .sf li a{ font-size:13.5px }

  .sf-legal{
    font-size:11px; color:rgba(255,255,255,.34); line-height:1.65;
    margin:0; padding-top:18px; border-top:1px solid rgba(255,255,255,.1);
  }
  .sf-copy{ font-size:11.5px; color:rgba(255,255,255,.34); margin:12px 0 0 }

  @media (max-width: 1000px){
    .sf-grid{ grid-template-columns:1fr 1fr; gap:26px }
    .sf-brandcol{ grid-column:1 / -1 }
  }
`;
