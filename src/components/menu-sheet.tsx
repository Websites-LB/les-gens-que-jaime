"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { CHAPTERS, DRINKS, FOOD, type Chapter } from "@/lib/menu";
import { SITE } from "@/lib/site";

export function MenuSheet() {
  const [activeId, setActiveId] = useState("breakfast");
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const active = CHAPTERS.find((chapter) => chapter.id === activeId) ?? CHAPTERS[0];

  // The sheet opens on what you'd order right now: breakfast by day, a drink by night.
  useEffect(() => {
    if (document.documentElement.dataset.time === "night") setActiveId("cocktails");
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    ScrollTrigger.refresh();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lines = panel.current?.querySelectorAll("[data-line]");
    if (lines?.length) {
      gsap.fromTo(lines, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: { amount: 0.35 } });
    }
  }, [activeId]);

  const onKeys = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const at = CHAPTERS.findIndex((chapter) => chapter.id === activeId);
    const next = CHAPTERS[(at + step + CHAPTERS.length) % CHAPTERS.length];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  const tab = (chapter: Chapter) => (
    <button
      key={chapter.id}
      id={`tab-${chapter.id}`}
      type="button"
      role="tab"
      aria-selected={chapter.id === activeId}
      aria-controls="menu-panel"
      tabIndex={chapter.id === activeId ? 0 : -1}
      className="tab"
      onClick={() => setActiveId(chapter.id)}
    >
      {chapter.label}
    </button>
  );

  return (
    <section id="menu" className="menu stepped">
      <div className="wrap">
        <h2 className="display menu__title" data-reveal>
          The gang has made their picks. What&rsquo;s yours?
        </h2>

        <div className="menu__tabs" role="tablist" aria-label="Menu chapters" onKeyDown={onKeys} data-reveal>
          <div className="menu__tabrow">{FOOD.map(tab)}</div>
          <div className="menu__tabrow">{DRINKS.map(tab)}</div>
        </div>

        <div className="sheet" data-reveal>
          <div id="menu-panel" ref={panel} role="tabpanel" aria-labelledby={`tab-${active.id}`} className={`sheet__inner${active.art ? " has-art" : ""}${active.wide ? " is-wide" : ""}`}>
            <div className="sheet__head" data-line>
              {active.script ? (
                <h3 className="sheet__script" aria-label={active.label}>
                  {active.script.map((src) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={src} src={src} alt="" />
                  ))}
                </h3>
              ) : (
                <h3 className="sheet__heading">{active.label.toUpperCase()}</h3>
              )}
            </div>

            <div className="sheet__body">
              {active.groups.map((group, g) => (
                <div key={group.name ?? g} className="sheet__group">
                  {group.name && (
                    <h4 className="sheet__group-name" data-line>
                      {group.name}
                    </h4>
                  )}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.n} className="dish" data-line>
                        <span className="dish__name">{item.n}</span>
                        <span className="dish__price">{item.p}</span>
                        {item.d && <span className="dish__desc">{item.d}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {active.art && (
              <div className="sheet__art" data-line>
                <Image src={active.art.src} alt="" width={active.art.w} height={active.art.h} unoptimized />
              </div>
            )}
          </div>
        </div>

        <p className="menu__foot" data-reveal>
          <a className="link" href={SITE.menuPdf} target="_blank" rel="noreferrer">
            Keep the full menu as a PDF
          </a>
        </p>
      </div>
    </section>
  );
}
