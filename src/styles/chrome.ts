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
    width:27px; height:27px; border-radius:7px; flex:0 0 auto;
    background:var(--ink, #12151A);
    display:flex; align-items:flex-end; justify-content:center; gap:2px; padding-bottom:7px;
  }
  .sn-mark i{ width:2.5px; background:#fff; border-radius:2px; display:block }

  .sn-links{ display:flex; gap:22px; align-items:center }
  .sn-links a{
    font-size:14px; font-weight:500; color:var(--ink-2, #2A3038);
    position:relative; padding:4px 0; white-space:nowrap;
  }
  .sn-links a:hover{ color:var(--v-mid, #12151A) }
  .sn-links a[aria-current="page"]{ font-weight:700; color:var(--v-mid, #12151A) }
  .sn-links a[aria-current="page"]::after{
    content:""; position:absolute; left:0; right:0; bottom:-21px; height:2px;
    background:var(--v, #12151A);
  }

  .sn-cta{
    flex:0 0 auto; background:var(--ink, #12151A); color:#fff !important;
    font-weight:700; font-size:13.5px; padding:10px 18px; border-radius:8px;
  }

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

  @media (max-width: 1080px){ .sn-links{ gap:16px } .sn-links a{ font-size:13.5px } }
  @media (max-width: 900px){
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
    display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:34px;
    padding-bottom:30px;
  }
  .sf-brand{
    display:flex; align-items:center; gap:10px;
    font-weight:800; font-size:15.5px; letter-spacing:-.03em; color:#fff; margin-bottom:12px;
  }
  .sf-mark{
    width:26px; height:26px; border-radius:7px; flex:0 0 auto;
    background:rgba(255,255,255,.14);
    display:flex; align-items:flex-end; justify-content:center; gap:2px; padding-bottom:7px;
  }
  .sf-mark i{ width:2.5px; background:#fff; border-radius:2px; display:block }
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

  @media (max-width: 900px){
    .sf-grid{ grid-template-columns:1fr 1fr; gap:26px }
    .sf-brandcol{ grid-column:1 / -1 }
  }
`;
