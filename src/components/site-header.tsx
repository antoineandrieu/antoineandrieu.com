"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import type { HomeContent } from "@/content/home";

export function SiteHeader({ t }: { t: HomeContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  function navigate(id: string) {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
    }
  }

  function rememberLang() {
    try { localStorage.setItem("aa-lang", t.otherLang.lang); } catch {}
  }

  return (
    <header
      ref={header}
      className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="header-inner">
        <Link href={t.home} className="header-brand" aria-label={t.header.brandAria}>
          <Logo width={92} height={60} />
          <span className="brand-name">Antoine<br />Andrieu<span className="brand-period">.</span></span>
        </Link>
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
            onClick={rememberLang}
          >
            {t.otherLang.label}
          </a>
          <a href="#contact" aria-label={t.header.contactAria} className="header-contact" onClick={() => { if (open) navigate("contact"); }}>
            <span>{t.header.contactCta}</span><span className="header-arrow" aria-hidden="true">↗</span>
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navigation mobile" hidden={!open}>
        <p className="mobile-nav-label">{t.header.mobileLabel}</p>
        {t.header.nav.map(([id, label], index) => (
          <a href={`#${id}`} key={id} onClick={() => navigate(id)}>
            <span className="mobile-nav-number" aria-hidden="true">0{index + 1}</span>
            <span>{label}</span><span className="mobile-nav-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
        <a href="#contact" className="mobile-contact" onClick={() => navigate("contact")}>
          {t.header.mobileContact} <span aria-hidden="true">↗</span>
        </a>
        <a
          href={t.otherLang.href}
          className="lang-switch mobile-lang-switch"
          aria-label={t.otherLang.aria}
          hrefLang={t.otherLang.lang}
          onClick={rememberLang}
        >
          {t.otherLang.aria} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
