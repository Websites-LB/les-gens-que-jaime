import Image from "next/image";

import { CLASSICS, SIGNATURES } from "@/lib/menu";

export function Bar() {
  // Written out twice so the ticker can loop without a seam.
  const ticker = [...CLASSICS, ...CLASSICS];

  return (
    <section id="bar" className="bar">
      <div className="wrap bar__grid">
        <div className="bar__photo stepped" data-reveal>
          <Image data-drift src="/photos/glasses.jpg" alt="A guest smiling behind two cocktails held up to the camera" fill sizes="(max-width: 860px) 100vw, 42vw" />
        </div>

        <div>
          <h2 className="display bar__title" data-reveal>
            Meet Mr. Jacques.
          </h2>
          <p className="bar__lead" data-reveal>
            We think you&rsquo;ll get along. He&rsquo;s one of five house cocktails, and every one of them has a personality.
          </p>
          <ol className="bar__list">
            {SIGNATURES.map((drink) => (
              <li key={drink.n} className="drink" data-reveal>
                <span className="drink__name">{drink.n}</span>
                <span className="drink__price">{drink.p}</span>
                <span className="drink__desc">{drink.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="ticker" aria-label="Our classics">
        <div className="ticker__run">
          {ticker.map((drink, i) => (
            <span key={i} aria-hidden={i >= CLASSICS.length}>
              {drink.n}
            </span>
          ))}
        </div>
      </div>

      <p className="wrap bar__close display" data-reveal>
        Plenty to cheers to. Better with the right people.
      </p>
    </section>
  );
}
