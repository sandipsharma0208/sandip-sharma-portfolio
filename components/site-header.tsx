"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const light = savedTheme ? savedTheme === "light" : true;
    document.documentElement.classList.toggle("light", light);
    document.documentElement.classList.toggle("dark", !light);

    const frame = window.requestAnimationFrame(() => setIsLight(light));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function updateActiveSection() {
      const headerOffset = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
      const activeOffset = window.scrollY + headerOffset + 80;
      let nextActiveHref: string = "#home";

      for (const item of navigation) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top + window.scrollY <= activeOffset) {
          nextActiveHref = item.href;
        }
      }

      setActiveHref(nextActiveHref);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function toggleTheme() {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.classList.toggle("light", nextIsLight);
    document.documentElement.classList.toggle("dark", !nextIsLight);
    window.localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  }

  return (
    <header className="site-header">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)] header-inner">
        <a className="brand" href="#home" aria-label="Sandip Sharma, home" onClick={() => setMenuOpen(false)}><span className="brand-mark" aria-hidden="true">{profile.initials}</span><span>Sandip Sharma</span></a>
        <nav className="desktop-nav hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">{navigation.map((item) => <a aria-current={activeHref === item.href ? "location" : undefined} href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label={`Switch to ${isLight ? "dark" : "light"} theme`} title={`Switch to ${isLight ? "dark" : "light"} theme`} onClick={toggleTheme}>{isLight ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}</button>
          <a className="header-resume hidden items-center gap-2 xs:inline-flex" href="/Sandip_Sharma_Resume.pdf" download>Resume <ArrowDownToLine size={14} aria-hidden="true" /></a>
          <button className="menu-button grid lg:hidden" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}</button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav absolute left-0 right-0 top-full z-50 flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-t border-[var(--line)] bg-[var(--page)] px-4 py-3 shadow-xl lg:hidden" id="mobile-navigation" aria-label="Mobile navigation">{navigation.map((item) => <a aria-current={activeHref === item.href ? "location" : undefined} className="rounded px-2 py-2 text-sm text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--ink)]" href={item.href} key={item.href} onClick={() => { setActiveHref(item.href); setMenuOpen(false); }}>{item.label}</a>)}<a className="rounded px-2 py-2 text-sm text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--ink)]" href="/Sandip_Sharma_Resume.pdf" download onClick={() => setMenuOpen(false)}>Download resume</a></nav>}
    </header>
  );
}