export type Item = { n: string; p: string; d?: string };
export type Group = { name?: string; items: Item[] };
export type Chapter = {
  id: string;
  label: string;
  /** Hand-lettered title traced from the menu, when it has one. */
  script?: string[];
  art?: { src: string; w: number; h: number };
  groups: Group[];
  wide?: boolean;
};

export const FOOD: Chapter[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    art: { src: "/art/croissant.svg", w: 303, h: 175 },
    groups: [
      {
        items: [
          { n: "CROISSANT", p: "$5.5", d: "Freshly baked croissant, available plain or chocolate" },
          { n: "BREAD & JAM", p: "$7", d: "Homemade brick-oven-baked bread served with butter, apricot jam and strawberry jam" },
          { n: "SUNNY SIDE UP EGGS", p: "$6.5", d: "Two free-range sunny-side-up eggs served with green salad" },
          { n: "OMELETTE", p: "$8.5", d: "Two free-range eggs served with green salad, with your choice of additions" },
          { n: "YOGURT WITH BOILED EGGS", p: "$14", d: "Yogurt served with boiled eggs" },
          { n: "GRILLED HALLOUMI SANDWICH", p: "$11", d: "Sourdough bread with pesto, tomato and grilled halloumi, served with green salad" },
          { n: "CROQUE MONSIEUR", p: "$10", d: "Sourdough bread with ham, cheese and béchamel" },
          { n: "CAPRESE STYLE CROISSANT", p: "$12", d: "Fresh croissant with mozzarella, tomato and pesto" },
          { n: "HAM & CHEESE CROISSANT", p: "$12", d: "Fresh croissant with ham, cheese and rocket" },
        ],
      },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    art: { src: "/art/tomatoes.svg", w: 431, h: 350 },
    groups: [
      {
        items: [
          { n: "CHIPS", p: "$5", d: "Chips served with truffle dip" },
          { n: "EDAMAME", p: "$8", d: "Edamame served with spicy kimchi garlic sauce" },
          { n: "TRUFFLE FRIES", p: "$10", d: "French fries with parmesan and truffle dip" },
          { n: "FRENCH FRIES", p: "$6.5" },
          { n: "CUISSES DE GRENOUILLE PERSILLÉES", p: "$22", d: "Tender frog legs sautéed in a classic French style with garlic, fresh herbs, butter and a touch of lemon" },
          { n: "ESCARGOTS À LA BOURGUIGNONNE", p: "$24", d: "Traditional Burgundy-style snails baked with garlic, parsley and herb butter" },
          { n: "NEW STYLE SALMON SASHIMI", p: "$17", d: "Thinly sliced fresh salmon with ponzu, sesame sauce and a yuzu-pickled accompaniment" },
          { n: "BRUSCHETTA STRACCIATELLA", p: "$18", d: "Bruschetta topped with creamy stracciatella, honey and cherry tomatoes" },
          { n: "BRUSCHETTA SMOKED SALMON", p: "$22", d: "Homemade bruschetta topped with smoked salmon and mascarpone" },
          { n: "CRISPY FRESH OCTOPUS", p: "$24", d: "Fresh crispy octopus with rosemary, potatoes, garlic and cherry tomatoes" },
          { n: "JAPANESE DYNAMITE SHRIMP", p: "$10", d: "Crispy shrimp coated in creamy Japanese dynamite sauce" },
        ],
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    groups: [
      {
        items: [
          { n: "BURRATA SALAD", p: "$22", d: "Burrata with a selection of tomatoes, rocket and pesto dressing" },
          { n: "CAESAR SALAD", p: "$16", d: "Crisp lettuce with soft-boiled eggs and shaved parmesan" },
          { n: "ADD CHICKEN", p: "$4" },
          { n: "CHICKEN FREEKEH SALAD", p: "$18", d: "Freekeh salad with grilled chicken, fresh greens, pomegranate, almonds, with lemon oil dressing" },
          { n: "GRILLED HALLOUMI SALAD", p: "$16", d: "Grilled halloumi with rocket, cherry tomatoes, cucumber and avocado, with balsamic dressing" },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas & pastas",
    art: { src: "/art/pizza.webp", w: 144, h: 138 },
    groups: [
      {
        name: "PIZZAS",
        items: [
          { n: "MARGHERITA PIZZA", p: "$12", d: "Tomato sauce, mozzarella and fresh basil" },
          { n: "BRESAOLA PIZZA", p: "$18", d: "Tomato sauce and mozzarella topped with sliced bresaola, wild rocket and parmesan" },
          { n: "TRUFFLE PIZZA", p: "$15", d: "Creamy truffle sauce, mozzarella, rocket leaves and parmesan" },
          { n: "PEPPERONI PIZZA", p: "$15", d: "Tomato sauce, mozzarella and pepperoni" },
        ],
      },
      {
        name: "PASTAS",
        items: [
          { n: "RIGATONI TRUFFLE", p: "$19", d: "Rigatoni pasta with creamy truffle sauce and mushrooms" },
          { n: "CASARECCE TOMATO WITH STRACCIATELLA CHEESE", p: "$18", d: "Casarecce pasta with tomato sauce, creamy stracciatella, fresh basil and extra virgin olive oil" },
        ],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    art: { src: "/art/burger.webp", w: 176, h: 147 },
    groups: [
      {
        items: [
          { n: "CHICKEN SANDO", p: "$15", d: "Crispy golden chicken served in Japanese milk bread" },
          { n: "CLASSIC MINI BURGER", p: "$17", d: "3 mini burgers with house special sauce, pickles, lettuce and cheese" },
          { n: "TRUFFLE MINI BURGER", p: "$19", d: "3 mini burgers with homemade truffle and parmesan cream" },
          { n: "FISH & CHIPS", p: "$26", d: "Fried white fish served with potato wedges and sautéed green peas" },
          { n: "HALF ROASTED CHICKEN", p: "$28", d: "Marinated half chicken, slow-roasted and served with crispy roasted potato wedges" },
          { n: "GRILLED SALMON", p: "$30", d: "Grilled salmon fillet served with sautéed vegetables" },
          { n: "BEEF TAGLIATA STYLE BLACK ANGUS MB2+", p: "$54", d: "Sliced grilled Black Angus MB2+ tenderloin served with sautéed mushrooms and creamy parmesan sauce" },
          { n: "STEAK ET FRITES", p: "$28", d: "Steak served with French fries and house special sauce" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    groups: [
      {
        items: [
          { n: "FONDANT AU CHOCOLAT", p: "$12", d: "Homemade chocolate fondant served with vanilla ice cream" },
          { n: "CHOCOLATE TIRAMISU", p: "$10" },
          { n: "MOCHI ICE CREAM (1 PC)", p: "$4.5" },
          { n: "LIMONCELLO LEMON BASIL SORBET", p: "$8", d: "Frozen lemon filled with lemon-basil sorbet and a touch of limoncello" },
        ],
      },
    ],
  },
];

export const SIGNATURES: Item[] = [
  { n: "BONJOUR PARIS", p: "$13", d: "A rich and aromatic combination of almond sweetness and roasted coffee" },
  { n: "BISOUS", p: "$13", d: "A bright and elegant gin cocktail combining fresh strawberry, delicate rose and vibrant citrus" },
  { n: "CHIC ET FÉMININE", p: "$13", d: "A delicate and aromatic vodka cocktail with floral lavender and the bright citrus oils of oleo saccharum" },
  { n: "MR. JACQUES", p: "$15", d: "A refined, spirit-forward cocktail balancing Japanese whisky with vermouth and soft honey" },
  { n: "28°", p: "$13", d: "A bold rum cocktail where ripe banana and roasted coffee add depth and complexity" },
];

export const CLASSICS: Item[] = [
  { n: "NEGRONI", p: "$12.5" },
  { n: "APEROL SPRITZ", p: "$12" },
  { n: "BLOODY MARY", p: "$13" },
  { n: "BOULEVARDIER", p: "$14" },
  { n: "MANHATTAN", p: "$14" },
  { n: "VIEUX CARRÉ", p: "$14" },
  { n: "OLD FASHIONED", p: "$13" },
  { n: "DIRTY MARTINI", p: "$12" },
  { n: "DRY MARTINI", p: "$13" },
  { n: "ESPRESSO MARTINI", p: "$12" },
  { n: "FRENCH 75", p: "$13" },
  { n: "GIMLET", p: "$13" },
  { n: "VODKA SOUR", p: "$12" },
  { n: "GIN SOUR", p: "$12.5" },
  { n: "WHISKEY SOUR", p: "$14" },
  { n: "HUGO SPRITZ", p: "$13" },
  { n: "MARGARITA", p: "$12" },
  { n: "MEZCAL MARGARITA", p: "$20" },
  { n: "PASSION FRUIT MARTINI", p: "$14" },
  { n: "GIN BASIL", p: "$13" },
  { n: "MOSCOW MULE", p: "$12" },
];

export const DRINKS: Chapter[] = [
  {
    id: "cocktails",
    label: "Cocktails",
    script: ["/art/title-beverages.svg", "/art/title-menu.svg"],
    art: { src: "/art/cheers.svg", w: 488, h: 530 },
    groups: [
      { name: "SIGNATURE COCKTAILS", items: SIGNATURES },
      { name: "OUR CLASSICS", items: CLASSICS },
    ],
  },
  {
    id: "bubbles",
    label: "Champagne & prosecco",
    script: ["/art/title-champagne.svg"],
    groups: [
      {
        name: "CHAMPAGNE",
        items: [
          { n: "MOËT ET CHANDON BRUT", p: "$190" },
          { n: "MOËT ET CHANDON BRUT ROSÉ", p: "$250" },
        ],
      },
      {
        name: "PROSECCO",
        items: [
          { n: "PICCINI PROSECCO TREVISO EXTRA DRY", p: "$45" },
          { n: "MARTINI PROSECCO EXTRA DRY", p: "$50" },
          { n: "ASTORIA PROSECCO TREVISO EXTRA DRY", p: "$55" },
        ],
      },
    ],
  },
  {
    id: "local-wine",
    label: "Local wine",
    script: ["/art/title-local-wine.svg"],
    art: { src: "/art/wine-hand.svg", w: 270, h: 376 },
    groups: [
      {
        name: "RED",
        items: [
          { n: "DOMAINE DE TOURELLES (BEKAA)", p: "$35" },
          { n: "CINSAULT - DOMAINE DE TOURELLES (BEKAA)", p: "$40" },
          { n: "IXSIR ALTITUDES (NORTH LEBANON)", p: "$45" },
          { n: "IXSIR GRANDE RESERVE (NORTH LEBANON)", p: "$60" },
          { n: "ATIBAIA (NORTH LEBANON)", p: "$120" },
        ],
      },
      {
        name: "WHITE",
        items: [
          { n: "DOMAINE DE TOURELLES (BEKAA)", p: "$35" },
          { n: "IXSIR ALTITUDES (NORTH LEBANON)", p: "$45" },
          { n: "IXSIR GRANDE RESERVE (NORTH LEBANON)", p: "$60" },
          { n: "ATIBAIA (NORTH LEBANON)", p: "$90" },
        ],
      },
      {
        name: "ROSÉ",
        items: [
          { n: "DOMAINE DE TOURELLES (BEKAA)", p: "$35" },
          { n: "SUNSET - KSARA (BEKAA)", p: "$40" },
        ],
      },
    ],
  },
  {
    id: "foreign-wine",
    label: "Foreign wine & beer",
    script: ["/art/title-foreign-wine.svg"],
    groups: [
      {
        name: "RED",
        items: [
          { n: "CABERNET SAUVIGNON - BELLARETTA (ABRUZZO, ITALY)", p: "$45" },
          { n: "PINOT NOIR - LA PETITE PERRIÈRE (LOIRE, FRANCE)", p: "$50" },
          { n: "MERLOT - GUFO (ABRUZZO, ITALY)", p: "$55" },
          { n: "CHIANTI - VALVIRGINIO (TOSCANA, ITALY)", p: "$60" },
          { n: "MERLOT/CABERNET - VALLE D'ORO (CHIETI, ITALY)", p: "$90" },
        ],
      },
      {
        name: "WHITE",
        items: [
          { n: "PINOT GRIGIO - PRIMO FIORE (VENETO, ITALY)", p: "$45" },
          { n: 'GAVI "IL FORTE" - PRODUTTORI DEL GAVI (PIEMONTE, ITALY)', p: "$70" },
          { n: "FONTE DELLE DONNE - FATTORIA FIBBIANO (TOSCANA, ITALY)", p: "$90" },
        ],
      },
      {
        name: "BEER",
        items: [
          { n: "ALMAZA", p: "$5" },
          { n: "ALMAZA LIGHT", p: "$6.5" },
          { n: "CORONA", p: "$7" },
          { n: "HEINEKEN", p: "$7" },
        ],
      },
    ],
  },
  {
    id: "spirits",
    label: "Spirits",
    script: ["/art/title-spirits.svg"],
    wide: true,
    groups: [
      {
        name: "SINGLE MALT",
        items: [
          { n: "LAGAVULIN 8", p: "$18" },
          { n: "LAGAVULIN 16", p: "$25" },
          { n: "SINGLETON 12", p: "$12" },
          { n: "GLENMORANGIE 10", p: "$17" },
          { n: "GLENMORANGIE 12", p: "$16" },
          { n: "MACALLAN 12", p: "$25" },
          { n: "MACALLAN 15", p: "$45" },
          { n: "MACALLAN 18", p: "$110" },
          { n: "GLENFIDDICH 12", p: "$14" },
          { n: "GLENFIDDICH 15", p: "$18" },
          { n: "GLENFIDDICH 18", p: "$22" },
          { n: "LAPHROAIG 10", p: "$18" },
        ],
      },
      { name: "BLENDED MALT", items: [{ n: "MONKEY SHOULDER", p: "$12" }] },
      {
        name: "JAPANESE WHISKY",
        items: [
          { n: "NIKKA DAYS", p: "$14" },
          { n: "NIKKA FROM THE BARREL", p: "$20" },
        ],
      },
      {
        name: "IRISH WHISKEY",
        items: [
          { n: "JAMESON", p: "$10" },
          { n: "JAMESON BLACK BARREL", p: "$13" },
        ],
      },
      {
        name: "BLENDED SCOTCH",
        items: [
          { n: "JW BLACK LABEL", p: "$13" },
          { n: "JW BLACK RUBY", p: "$13" },
          { n: "JW DOUBLE BLACK", p: "$15" },
          { n: "JW GOLD LABEL", p: "$16" },
          { n: "JW GREEN LABEL", p: "$16" },
          { n: "JW BLUE LABEL", p: "$55" },
          { n: "J&B RARE", p: "$10" },
          { n: "J&B RESERVE", p: "$15" },
          { n: "OLD PARR 12YR", p: "$14" },
          { n: "CHIVAS REGAL 12YR", p: "$12" },
          { n: "CHIVAS XV", p: "$15" },
          { n: "CHIVAS REGAL 18YR", p: "$19" },
        ],
      },
      {
        name: "AMERICAN WHISKEY",
        items: [
          { n: "JACK DANIEL'S", p: "$12" },
          { n: "JACK DANIEL'S TENNESSEE HONEY", p: "$12" },
        ],
      },
      {
        name: "BOURBON WHISKEY",
        items: [
          { n: "BULLEIT BOURBON", p: "$13" },
          { n: "BULLEIT RYE", p: "$15" },
        ],
      },
      {
        name: "VODKA",
        items: [
          { n: "KETEL ONE", p: "$10" },
          { n: "BELVEDERE", p: "$20" },
          { n: "CIROC", p: "$18" },
          { n: "GREY GOOSE", p: "$15" },
          { n: "TITO'S", p: "$12" },
          { n: "NIKKA COFFEY", p: "$15" },
        ],
      },
      {
        name: "RUM",
        items: [
          { n: "RON ZACAPA 23", p: "$21" },
          { n: "ZACAPA XO", p: "$48" },
          { n: "ANGOSTURA 5Y CARIBBEAN RUM", p: "$12" },
        ],
      },
      {
        name: "TEQUILA",
        items: [
          { n: "DON JULIO BLANCO", p: "$17" },
          { n: "DON JULIO REPOSADO", p: "$20" },
          { n: "DON JULIO AÑEJO", p: "$25" },
          { n: "DON JULIO 1942", p: "$60" },
          { n: "DON JULIO CRISTALINO", p: "$35" },
          { n: "CASAMIGOS BLANCO", p: "$16" },
          { n: "CASAMIGOS REPOSADO", p: "$19" },
          { n: "CASAMIGOS AÑEJO", p: "$22" },
          { n: "1800 SILVER", p: "$14" },
          { n: "1800 REPOSADO", p: "$18" },
          { n: "1800 AÑEJO", p: "$21" },
        ],
      },
      {
        name: "GIN",
        items: [
          { n: "TANQUERAY LONDON DRY", p: "$10" },
          { n: "TANQUERAY N°10", p: "$13" },
          { n: "TANQUERAY SEVILLA", p: "$11" },
          { n: "TANQUERAY RANGPUR LIME", p: "$11" },
          { n: "GIN MARE", p: "$14" },
          { n: "HENDRICK'S", p: "$14" },
          { n: "MONKEY 47", p: "$19" },
        ],
      },
      { name: "MEZCAL", items: [{ n: "LA ESCONDIDA REPOSADO", p: "$25" }] },
      {
        name: "COGNAC",
        items: [
          { n: "HENNESSY VS", p: "$16" },
          { n: "COURVOISIER VS", p: "$17" },
        ],
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    art: { src: "/art/coffee.webp", w: 497, h: 303 },
    groups: [
      {
        items: [
          { n: "ESPRESSO", p: "$3" },
          { n: "DOPPIO", p: "$4" },
          { n: "AMERICANO", p: "$4" },
          { n: "MACCHIATO", p: "$4" },
          { n: "CAPPUCCINO", p: "$5" },
          { n: "LATTE", p: "$5" },
          { n: "LATTE MACCHIATO", p: "$5" },
        ],
      },
    ],
  },
];

export const CHAPTERS = [...FOOD, ...DRINKS];
