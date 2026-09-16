"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  ["about", "À propos"],
  ["expertise", "Expertise"],
  ["experience", "Expérience"],
  ["projects", "Projets"],
] as const;

export function SiteHeader() {
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
        <Link href="/" className="header-brand" aria-label="Antoine Andrieu — accueil">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span className="brand-name">Antoine<br />Andrieu<span className="brand-period">.</span></span>
        </Link>
        <nav className="header-desktop-nav" aria-label="Navigation principale">
          {links.map(([id, label]) => (
            <a href={`#${id}`} className="header-link" key={id}>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" aria-label="Parlons de votre projet" className="header-contact" onClick={() => { if (open) navigate("contact"); }}>
            <span>Parlons projet</span><span className="header-arrow" aria-hidden="true">↗</span>
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navigation mobile" hidden={!open}>
        <p className="mobile-nav-label">Explorer</p>
        {links.map(([id, label], index) => (
          <a href={`#${id}`} key={id} onClick={() => navigate(id)}>
            <span className="mobile-nav-number" aria-hidden="true">0{index + 1}</span>
            <span>{label}</span><span className="mobile-nav-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
        <a href="#contact" className="mobile-contact" onClick={() => navigate("contact")}>
          Parlons de votre projet <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
