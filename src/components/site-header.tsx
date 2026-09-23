import { Logo } from "./logo";
import type { HomeContent } from "@/content/home";

/**
 * Header behaviours, as one small inline script.
 *
 * The page is fully static. Making this a client component hydrates React (and
 * react-dom) for ~50 lines of DOM logic, which accounted for most of the site's
 * JavaScript. Plain DOM calls keep the same interactions: glass capsule state on
 * scroll, mobile menu open/close, outside click, Escape, focus handoff to the
 * target section, and remembering the manual language choice.
 */
export const headerScript = `(function(){
var h=document.querySelector(".site-header");if(!h)return;
var t=h.querySelector(".menu-toggle");
var n=document.getElementById("mobile-navigation");
var d=window.matchMedia("(min-width: 900px)");
function setOpen(o){
  if(n)n.hidden=!o;
  h.classList.toggle("menu-open",o);
  if(t){t.setAttribute("aria-expanded",o?"true":"false");
    t.setAttribute("aria-label",(o?t.dataset.labelClose:t.dataset.labelOpen)||"");}
}
function close(){setOpen(false)}
function onScroll(){h.classList.toggle("is-scrolled",window.scrollY>24)}
onScroll();
window.addEventListener("scroll",onScroll,{passive:true});
if(t)t.addEventListener("click",function(){setOpen(n?n.hidden:false)});
document.addEventListener("pointerdown",function(e){if(!h.contains(e.target))close()});
h.addEventListener("focusout",function(e){if(!h.contains(e.relatedTarget))close()});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"&&n&&!n.hidden){close();if(t)t.focus();}
});
d.addEventListener("change",function(e){if(e.matches)close()});
h.addEventListener("click",function(e){
  var el=e.target;
  var a=el&&el.closest?el.closest("a"):null;
  if(!a)return;
  var sw=a.closest(".lang-switch");
  if(sw){try{localStorage.setItem("aa-lang",sw.getAttribute("hreflang")||"")}catch(err){}}
  var href=a.getAttribute("href")||"";
  if(href.charAt(0)!=="#")return;
  var target=document.getElementById(href.slice(1));
  if(target){target.tabIndex=-1;target.focus({preventScroll:true});}
  close();
});
})();`;

export function SiteHeader({ t }: { t: HomeContent }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href={t.home} className="header-brand" aria-label={t.header.brandAria}>
          <Logo width={92} height={60} />
          <span className="brand-name">Anto<span className="wordmark-i">i</span>ne<br />Andrieu</span>
        </a>
        <nav className="header-desktop-nav" aria-label="Navigation principale">
          {t.header.nav.map(([id, label]) => (
            <a href={`#${id}`} className="header-link" key={id}>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href={t.otherLang.href}
            className="lang-switch"
            aria-label={t.otherLang.aria}
            hrefLang={t.otherLang.lang}
          >
            {t.otherLang.label}
          </a>
          <a href="#contact" aria-label={t.header.contactAria} className="header-contact">
            <span>{t.header.contactCta}</span><span className="header-arrow" aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded="false"
            aria-controls="mobile-navigation"
            aria-label={t.header.menuOpen}
            data-label-open={t.header.menuOpen}
            data-label-close={t.header.menuClose}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navigation mobile" hidden>
        <p className="mobile-nav-label">{t.header.mobileLabel}</p>
        {t.header.nav.map(([id, label], index) => (
          <a href={`#${id}`} key={id}>
            <span className="mobile-nav-number" aria-hidden="true">0{index + 1}</span>
            <span>{label}</span><span className="mobile-nav-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
        <a href="#contact" className="mobile-contact">
          {t.header.mobileContact} <span aria-hidden="true">↗</span>
        </a>
        <a
          href={t.otherLang.href}
          className="lang-switch mobile-lang-switch"
          aria-label={t.otherLang.aria}
          hrefLang={t.otherLang.lang}
        >
          {t.otherLang.aria} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
