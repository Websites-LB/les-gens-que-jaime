import Image from "next/image";

import { SITE } from "@/lib/site";

const PRINTS = [
  { src: "/photos/waiter.jpg", alt: "A smiling waiter carrying a plate across the terrace at night", caption: "Pick your favorite waiter.", slot: "a" },
  { src: "/photos/breakfast.jpg", alt: "Eggs in spiced yogurt with bread, an iced coffee and a croissant on the branded paper", caption: "Breakfast is looking good.", slot: "b" },
  { src: "/photos/spritz.jpg", alt: "A hand holding a coupe with a citrus twist above a marble table", caption: "A little swirl before the first sip.", slot: "c" },
  { src: "/photos/table.jpg", alt: "A table for two seen from above", caption: "Et quelque chose de bon.", slot: "d" },
];

export function Gens() {
  return (
    <section id="gens" className="gens">
      <div className="wrap">
        <h2 className="display gens__title" data-reveal>
          C&rsquo;est toujours mieux ici.
        </h2>

        <div className="gens__grid">
          {PRINTS.map((print) => (
            <figure key={print.src} className={`print print--${print.slot}`} data-reveal>
              <div className="print__frame stepped">
                <Image data-drift src={print.src} alt={print.alt} fill sizes="(max-width: 860px) 90vw, 36vw" />
              </div>
              <figcaption>{print.caption}</figcaption>
            </figure>
          ))}

          <figure className="confession" data-reveal>
            <blockquote className="display">&ldquo;Layla, kill me now. I just waved at someone who wasn&rsquo;t waving at me.&rdquo;</blockquote>
            <figcaption>Confession #545</figcaption>
          </figure>
        </div>

        <p className="gens__foot" data-reveal>
          <a className="link" href={SITE.instagram} target="_blank" rel="noreferrer">
            More faces on {SITE.handle}
          </a>
        </p>
      </div>
    </section>
  );
}
