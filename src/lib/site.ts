export const SITE = {
  name: "Les gens que j'aime",
  kind: "Bistro bar",
  line: "Pour les sourires, les moments et les gens que j'aime.",
  place: "Old Souk, Byblos",
  hours: "Every day from 10:00",
  phone: "+961 71 844 099",
  book: "https://dinestyapp.com/reserve/les-gens-que-jaime",
  whatsapp: "https://wa.me/96171844099",
  maps: "https://maps.app.goo.gl/Ef3Fmy2JUcTQfKL19",
  instagram: "https://www.instagram.com/lesgens_quejaime/",
  handle: "@lesgens_quejaime",
  menuPdf: "https://brandonideas.com/lgqj/menu.pdf",
};

export type TimeOfDay = "day" | "night";

/** Runs before paint so the hero opens on the hour it actually is in Byblos. */
export const TIME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');var h=10;try{h=+new Intl.DateTimeFormat('en-GB',{hour:'2-digit',hourCycle:'h23',timeZone:'Asia/Beirut'}).format(new Date())}catch(e){}d.dataset.time=h>=5&&h<17?'day':'night'})()`;
