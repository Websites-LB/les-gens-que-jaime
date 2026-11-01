import Image from "next/image";

import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="wrap visit__grid">
        <div>
          <h2 className="display visit__title" data-reveal>
            Ici, on se retrouve.
          </h2>
          <dl className="visit__facts" data-reveal>
            <div>
              <dt>Where</dt>
              <dd>
                <a className="link" href={SITE.maps} target="_blank" rel="noreferrer">
                  {SITE.place}
                </a>
              </dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>{SITE.hours}</dd>
            </div>
            <div>
              <dt>Call or WhatsApp</dt>
              <dd>
                <a className="link" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
          <div className="visit__cta" data-reveal>
            <a className="btn btn--paper" href={SITE.book} target="_blank" rel="noreferrer">
              Book a table
            </a>
            <a className="btn btn--paper-line" href={SITE.maps} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>

        <div className="visit__photo stepped" data-reveal>
          <Image data-drift src="/photos/terrace.jpg" alt="The terrace in the Old Souk at night, full of guests under string lights" fill sizes="(max-width: 860px) 100vw, 40vw" />
        </div>
      </div>

      <footer className="wrap footer">
        <Logo className="footer__logo" />
        <p>{SITE.line}</p>
        <a className="link" href={SITE.instagram} target="_blank" rel="noreferrer">
          {SITE.handle}
        </a>
      </footer>
    </section>
  );
}
