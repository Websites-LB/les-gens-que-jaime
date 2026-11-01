"use client";

import { useEffect, useRef } from "react";

import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#bar", label: "The bar" },
  { href: "#gens", label: "Les gens" },
  { href: "#visit", label: "Find us" },
];

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => ref.current?.classList.toggle("is-past", window.scrollY > window.innerHeight * 0.88);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className="site-header">
      <nav aria-label="Main" className="site-header__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="site-header__book" href={SITE.book} target="_blank" rel="noreferrer">
        Book a table
      </a>
    </header>
  );
}
