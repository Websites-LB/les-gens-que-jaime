"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/logo";
import { SITE, type TimeOfDay } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

type Face = { src: string; alt: string; caption: string; position?: string; video?: string };

// Captions are the restaurant's own, from the Instagram post each picture came from.
const DECK: { night: Face; day: Face }[] = [
  {
    night: { src: "/photos/couple.jpg", alt: "Two friends laughing at the bar with a glass of white wine", caption: "The kind of moment that comes back to haunt you at 3 AM." },
    day: { src: "/photos/spritz.jpg", alt: "A hand holding a coupe with a citrus twist above a marble table", caption: "A little swirl before the first sip." },
  },
  {
    night: { src: "/photos/glasses.jpg", alt: "A guest smiling behind two cocktails held up to the camera", caption: "Plenty to cheers to!" },
    day: { src: "/photos/ampm.jpg", alt: "Two friends sharing croissants and coffee at breakfast", caption: "Bonjour, bonsoir, les gens que j'aime.", position: "50% 0%" },
  },
  {
    night: { src: "/photos/pour.jpg", video: "/photos/pour-540.mp4", alt: "A bartender pouring a stirred cocktail from a crystal mixing glass", caption: "Meet Rob Roy. We think you'll get along." },
    day: { src: "/photos/breakfast.jpg", alt: "Eggs in spiced yogurt with bread, an iced coffee and a croissant on the branded paper", caption: "Breakfast is looking good." },
  },
  {
    night: { src: "/photos/waiter.jpg", alt: "A smiling waiter carrying a plate across the terrace at night", caption: "Pick your favorite waiter." },
    day: { src: "/photos/coffee.jpg", alt: "Two spoons in a shared tiramisu between two espresso martinis", caption: "“We'll share dessert.” Famous last words." },
  },
  {
    night: { src: "/photos/terrace.jpg", alt: "The terrace in the Old Souk at night, full of guests under string lights", caption: "C'est toujours mieux ici." },
    day: { src: "/photos/fish.jpg", alt: "Fish and chips with a glass of white wine", caption: "Fish and chips have arrived at LGQJ's table." },
  },
];

// A string of lights like the ones over their terrace: two swags pinned to the top edge.
const BULBS = Array.from({ length: 19 }, (_, i) => {
  const t = i / 18;
  const swag = t < 0.5 ? t * 2 : (t - 0.5) * 2;
  return { x: t * 1440, y: 12 + 96 * 4 * swag * (1 - swag), delay: (i * 0.73) % 4 };
});
const WIRE = "M0 12 Q360 204 720 12 Q1080 204 1440 12";

function CardFace({ face, side, sizes }: { face: Face; side: TimeOfDay; sizes: string }) {
  return (
    <figure className={`card__face card__face--${side}`}>
      <Image src={face.src} alt={face.alt} fill sizes={sizes} loading="eager" decoding="sync" style={{ objectPosition: face.position }} />
      {face.video && <video data-pour className="card__video" src={face.video} poster={face.src} muted loop playsInline preload="metadata" aria-hidden />}
      <figcaption className="card__caption">{face.caption}</figcaption>
    </figure>
  );
}

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLElement>(null);
  const ground = useRef<HTMLDivElement>(null);
  const wipe = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<TimeOfDay>("night");
  const turning = useRef(false);

  // The pour only plays while it's the face you can see.
  useEffect(() => {
    const video = root.current?.querySelector<HTMLVideoElement>("[data-pour]");
    if (!video) return;
    if (time === "night" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [time]);

  useEffect(() => {
    setTime(document.documentElement.dataset.time === "day" ? "day" : "night");
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const slots = gsap.utils.toArray<HTMLElement>("[data-deal]", el);
      const center = (slots.length - 1) / 2;

      // Opening shot: the name is written, the cards are dealt, the lights come on.
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro.set("[data-logo]", { autoAlpha: 1 });
      intro.fromTo("[data-logo-rect]", { attr: { width: 0 } }, { attr: { width: 544 }, duration: 1.1, ease: "power2.inOut", stagger: 0.11 }, 0.1);
      slots.forEach((slot, i) => {
        const offset = i - center;
        intro.fromTo(
          slot,
          { autoAlpha: 0, y: "90vh", x: `${-offset * 100}%`, rotation: -offset * 8 },
          { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 1.5 },
          0.35 + Math.abs(offset) * 0.09,
        );
      });
      intro.fromTo("[data-in]", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.9);
      intro.fromTo("[data-bulb]", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.05 }, 1);

      // Scroll: the hand spreads open as the menu is laid on top of it.
      const spread = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top top", end: "50% top", scrub: 0.6 },
      });
      gsap.utils.toArray<HTMLElement>("[data-spread]", el).forEach((slot, i) => {
        const offset = i - center;
        spread.to(slot, { xPercent: offset * 62, yPercent: -18 + Math.abs(offset) * 14, rotation: offset * 5, scale: offset === 0 ? 1.12 : 0.96 }, 0);
      });
      spread.to("[data-top]", { yPercent: -28, autoAlpha: 0 }, 0);
      spread.to("[data-lights]", { yPercent: -60, autoAlpha: 0 }, 0);

      // Pointer: each card leans by its own depth, then eases back.
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const tilts = gsap.utils.toArray<HTMLElement>("[data-tilt]", el).map((node, i) => ({
          depth: 1 - Math.abs(i - center) * 0.22,
          x: gsap.quickTo(node, "x", { duration: 0.9, ease: "power3" }),
          y: gsap.quickTo(node, "y", { duration: 0.9, ease: "power3" }),
          rx: gsap.quickTo(node, "rotationX", { duration: 0.9, ease: "power3" }),
          ry: gsap.quickTo(node, "rotationY", { duration: 0.9, ease: "power3" }),
        }));
        const glowX = gsap.quickTo("[data-glow]", "x", { duration: 1.4, ease: "power3" });
        const glowY = gsap.quickTo("[data-glow]", "y", { duration: 1.4, ease: "power3" });
        const lightsX = gsap.quickTo("[data-lights-inner]", "x", { duration: 1.6, ease: "power3" });

        const move = (px: number, py: number) => {
          tilts.forEach((t) => {
            t.x(px * 18 * t.depth);
            t.y(py * 10 * t.depth);
            t.rx(-py * 7 * t.depth);
            t.ry(px * 9 * t.depth);
          });
          glowX(px * 220);
          glowY(py * 140);
          lightsX(-px * 14);
        };
        const stageEl = stage.current!;
        const onMove = (e: PointerEvent) => {
          const r = stageEl.getBoundingClientRect();
          move((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
        };
        const onLeave = () => move(0, 0);
        stageEl.addEventListener("pointermove", onMove);
        stageEl.addEventListener("pointerleave", onLeave);
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const turn = (next: TimeOfDay, origin: HTMLElement) => {
    if (next === document.documentElement.dataset.time || turning.current) return;
    setTime(next);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !wipe.current || !ground.current || !stage.current) {
      document.documentElement.dataset.time = next;
      return;
    }

    turning.current = true;
    const box = stage.current.getBoundingClientRect();
    const from = origin.getBoundingClientRect();
    const cx = from.left + from.width / 2 - box.left;
    const cy = from.top + from.height / 2 - box.top;
    const radius = Math.hypot(Math.max(cx, box.width - cx), Math.max(cy, box.height - cy));
    const held = getComputedStyle(ground.current).backgroundColor;

    gsap.set(ground.current, { backgroundColor: held });
    gsap.set(wipe.current, {
      left: cx - radius,
      top: cy - radius,
      width: radius * 2,
      height: radius * 2,
      backgroundColor: next === "day" ? "var(--paper)" : "var(--green)",
      scale: 0,
      autoAlpha: 1,
    });

    gsap
      .timeline({
        onComplete: () => {
          gsap.set(ground.current, { clearProps: "backgroundColor" });
          gsap.set(wipe.current, { autoAlpha: 0 });
          turning.current = false;
        },
      })
      .to(wipe.current, { scale: 1, duration: 1.1, ease: "expo.inOut" }, 0)
      .call(() => { document.documentElement.dataset.time = next; }, undefined, 0.42);
  };

  return (
    <div ref={root} className="hero-track">
      <section ref={stage} className="hero" aria-label={SITE.name}>
        <div ref={ground} className="hero__ground" />
        <div ref={wipe} className="hero__wipe" />
        <div data-glow className="hero__glow" />

        <div data-lights className="hero__lights" aria-hidden>
          <svg data-lights-inner viewBox="0 0 1440 220" preserveAspectRatio="xMidYMin slice">
            <defs>
              <radialGradient id="bulb-glow">
                <stop offset="0" stopColor="var(--bulb)" stopOpacity=".85" />
                <stop offset=".18" stopColor="var(--bulb)" stopOpacity=".32" />
                <stop offset="1" stopColor="var(--bulb)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path className="hero__wire" d={WIRE} />
            {BULBS.map((bulb, i) => (
              <g key={i} data-bulb transform={`translate(${bulb.x} ${bulb.y + 7})`}>
                <circle className="hero__halo" r="34" fill="url(#bulb-glow)" style={{ animationDelay: `${bulb.delay}s` }} />
                <circle className="hero__bulb" r="4" />
              </g>
            ))}
          </svg>
        </div>

        <div data-top className="hero__top">
          <div data-in className="hero__intro">
            <p className="hero__line">{SITE.line}</p>
            <p className="hero__place">
              {SITE.kind}, {SITE.place}
            </p>
          </div>

          <h1 className="hero__title">
            <span data-logo className="hero__logo-wrap">
              <Logo animated className="hero__logo" />
            </span>
          </h1>

          <div data-in className="hero__actions">
            <div className="switch" role="group" aria-label="Time of day">
              <span className="switch__thumb" aria-hidden />
              <button type="button" aria-pressed={time === "day"} onClick={(e) => turn("day", e.currentTarget)}>
                Bonjour
              </button>
              <button type="button" aria-pressed={time === "night"} onClick={(e) => turn("night", e.currentTarget)}>
                Bonsoir
              </button>
            </div>
            <div className="hero__cta">
              <a className="btn" href={SITE.book} target="_blank" rel="noreferrer">
                Book a table
              </a>
              <a className="btn btn--line" href="#menu">
                See the menu
              </a>
            </div>
          </div>
        </div>

        <div className="fan">
          {DECK.map((card, i) => (
            <div key={card.night.src} className="fan__slot" style={{ "--i": i - 2 } as React.CSSProperties}>
              <div data-spread className="fan__spread">
                <div data-deal className="fan__deal">
                  <div data-tilt className="fan__tilt">
                    <div className="card">
                      <CardFace face={card.night} side="night" sizes="(max-width: 860px) 40vw, 22vw" />
                      <CardFace face={card.day} side="day" sizes="(max-width: 860px) 40vw, 22vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
