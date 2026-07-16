export type BrunchLocation = {
  slug: string;
  locationNumber: string;
  name: string;
  shortName: string;
  city: "Novi Sad" | "Beograd" | "Nova Pazova";
  area: string;
  areaLocative: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  menuPdf: string;
  heroCopy: string;
  description: string;
  address: string;
  postalCode: string;
  mapsUrl: string;
  phone: string;
  phoneHref: string;
  email?: string;
  emailHref?: string;
  hours: Array<{ days: string; time: string }>;
  features: string[];
  gallery: Array<{ src: string; alt: string; caption: string }>;
};

export const locations: BrunchLocation[] = [
  {
    slug: "brunch-masinac-novi-sad",
    locationNumber: "01",
    name: "Brunch Mašinac",
    shortName: "Mašinac",
    city: "Novi Sad",
    area: "Univerzitetski kampus",
    areaLocative: "univerzitetskom kampusu",
    image: "/images/brunch/masinac.webp",
    imageAlt: "Karakterističan zeleni enterijer lokala Brunch Mašinac",
    heroImage: "/images/locations/brunch-masinac-novi-sad/hero.jpg",
    heroImageAlt: "Ulaz i bašta lokala Brunch Mašinac u univerzitetskom kampusu",
    menuPdf: "/menus/brunch-masinac.pdf",
    heroCopy: "Doručak, ručak i dobra kafa u srcu novosadskog univerzitetskog kampusa.",
    description: "Brunch Mašinac je gradska stanica za rano jutro, pauzu između obaveza i opušten ručak. Smešten uz Fakultet tehničkih nauka, ovaj lokal ima nešto brži dnevni ritam i ponudu koja podjednako dobro prati prvu kafu, konkretan obrok i popodnevni predah.",
    address: "Trg Dositeja Obradovića 6",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Masinac+Trg+Dositeja+Obradovica+6+Novi+Sad",
    phone: "+381 21 303 97 87",
    phoneHref: "tel:+381213039787",
    hours: [
      { days: "Ponedeljak — petak", time: "07:30 — 18:00" },
      { days: "Subota", time: "08:00 — 15:00" },
      { days: "Nedelja", time: "Ne radi" },
    ],
    features: ["Univerzitetski kampus", "Doručak i ručak", "Rezervacije"],
    gallery: [
      { src: "/images/locations/brunch-masinac-novi-sad/gallery-01.jpg", alt: "Gosti u zelenoj bašti lokala Brunch Mašinac", caption: "Bašta u srcu kampusa" },
      { src: "/images/locations/brunch-masinac-novi-sad/gallery-02.jpg", alt: "Topao narandžasto-zeleni enterijer lokala Brunch Mašinac", caption: "Prepoznatljiv Mašinac ambijent" },
      { src: "/images/locations/brunch-masinac-novi-sad/gallery-03.jpg", alt: "Detalj enterijera i ogledala u lokalu Brunch Mašinac", caption: "Detalji koji daju karakter" },
    ],
  },
  {
    slug: "brunch-lounge-mercator-novi-sad",
    locationNumber: "02",
    name: "Brunch Lounge Mercator Novi Sad",
    shortName: "Mercator Novi Sad",
    city: "Novi Sad",
    area: "Mercator Novi Sad",
    areaLocative: "Mercatoru u Novom Sadu",
    image: "/images/brunch/mercator-ns.webp",
    imageAlt: "Svetao enterijer Brunch Lounge lokala u Mercator centru",
    heroImage: "/images/locations/brunch-lounge-mercator-novi-sad/hero.jpg",
    heroImageAlt: "Prostran enterijer Brunch Lounge Mercator Novi Sad sa pogledom na grad",
    menuPdf: "/menus/brunch-mercator-novi-sad.pdf",
    heroCopy: "Mediteranski ukusi, pogled sa galerije i predah u samom srcu Limana.",
    description: "Brunch Lounge Merkator spaja opuštenu atmosferu galerije sa bogatom ponudom mediteranske i italijanske kuhinje. Ovde se dolazi na kafu posle kupovine, porodični ručak, paste, pice, burgere i deserte — uz pogled koji prostoru daje prepoznatljiv, otvoren karakter.",
    address: "Bulevar oslobođenja 102, TC Merkator",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Merkator+Bulevar+oslobodjenja+102+Novi+Sad",
    phone: "+381 21 636 91 11",
    phoneHref: "tel:+381216369111",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 21:30" }],
    features: ["Galerija sa pogledom", "Mediteranska kuhinja", "Dostava i preuzimanje"],
    gallery: [
      { src: "/images/locations/brunch-lounge-mercator-novi-sad/gallery-01.jpg", alt: "Bar i dugačak zajednički sto u Brunch Lounge Mercator Novi Sad", caption: "Otvoren prostor za svaki deo dana" },
      { src: "/images/locations/brunch-lounge-mercator-novi-sad/gallery-02.jpg", alt: "Sto okružen zelenilom u Brunch Lounge Mercator Novi Sad", caption: "Zelenilo iznad gradske vreve" },
      { src: "/images/locations/brunch-lounge-mercator-novi-sad/gallery-03.jpg", alt: "Police sa knjigama u enterijeru Brunch Lounge Mercator Novi Sad", caption: "Lounge detalji sa karakterom" },
    ],
  },
  {
    slug: "brunch-tc-big-novi-sad",
    locationNumber: "03",
    name: "Brunch TC BIG",
    shortName: "TC BIG",
    city: "Novi Sad",
    area: "BIG Novi Sad",
    areaLocative: "BIG-u u Novom Sadu",
    image: "/images/brunch/big-ns.webp",
    imageAlt: "Prostrani enterijer Brunch restorana u TC BIG Novi Sad",
    heroImage: "/images/locations/brunch-tc-big-novi-sad/hero.jpg",
    heroImageAlt: "Gošća za stolom uz jelo u Brunch TC BIG Novi Sad",
    menuPdf: "/menus/brunch-big-novi-sad.pdf",
    heroCopy: "Celodnevni Brunch predah uz šoping, porodični ručak ili večernje piće.",
    description: "Brunch u BIG Novi Sad nalazi se na lokaciji A01 i prati ritam centra od ranog doručka do večernjeg izlaska. Prostran ambijent i produženo radno vreme petkom i subotom čine ga praktičnim izborom za porodični obrok, kafu sa prijateljima ili pauzu tokom kupovine.",
    address: "Sentandrejski put 11, BIG Novi Sad, lokal A01",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BIG+Novi+Sad+Sentandrejski+put+11",
    phone: "+381 21 223 65 03",
    phoneHref: "tel:+381212236503",
    hours: [
      { days: "Ponedeljak — četvrtak", time: "08:00 — 22:00" },
      { days: "Petak — subota", time: "08:00 — 23:00" },
      { days: "Nedelja", time: "08:00 — 22:00" },
    ],
    features: ["Lokal A01", "Produženi vikend", "Besplatan parking centra"],
    gallery: [
      { src: "/images/locations/brunch-tc-big-novi-sad/gallery-01.jpg", alt: "Servirano jelo i vino u Brunch TC BIG Novi Sad", caption: "Celodnevna ponuda" },
      { src: "/images/locations/brunch-tc-big-novi-sad/gallery-02.jpg", alt: "Crveni koktel u Brunch TC BIG Novi Sad", caption: "Piće posle kupovine" },
      { src: "/images/locations/brunch-tc-big-novi-sad/gallery-03.jpg", alt: "Kafa i desert na stolu u Brunch TC BIG Novi Sad", caption: "Vreme za kafu i desert" },
    ],
  },
  {
    slug: "brunch-big-fashion-novi-sad",
    locationNumber: "04",
    name: "Brunch BIG Fashion",
    shortName: "BIG Fashion",
    city: "Novi Sad",
    area: "BIG Fashion Novi Sad",
    areaLocative: "BIG Fashion-u u Novom Sadu",
    image: "/images/brunch/big-fashion-ns.webp",
    imageAlt: "Gošće uz piće u Brunch BIG Fashion restoranu",
    heroImage: "/images/locations/brunch-big-fashion-novi-sad/hero.jpg",
    heroImageAlt: "Ispunjen i svetao enterijer Brunch BIG Fashion Novi Sad",
    menuPdf: "/menus/brunch-big-fashion-novi-sad.pdf",
    heroCopy: "Brunch sa pogledom, na drugom spratu BIG FASHION centra u Novom Sadu.",
    description: "Brunch BIG Fashion je svetao gradski restoran za doručak, poslovni sastanak, pauzu od kupovine ili duže druženje. Na drugom spratu centra, u lokalu S60, čeka vas celodnevna ponuda doručaka, sendviča, burgera, pica, pasti, glavnih jela i deserta.",
    address: "Bulevar oslobođenja 119, BIG FASHION, lokal S60",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BIG+Fashion+Bulevar+oslobodjenja+119+Novi+Sad",
    phone: "+381 21 382 25 99",
    phoneHref: "tel:+381213822599",
    email: "sasabiljetina86@gmail.com",
    emailHref: "mailto:sasabiljetina86@gmail.com",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 22:00" }],
    features: ["Drugi sprat · S60", "Celodnevni meni", "Pogled na grad"],
    gallery: [
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-01.jpg", alt: "Gošća u Brunch BIG Fashion Novi Sad", caption: "Dobra atmosfera na drugom spratu" },
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-02.jpg", alt: "Gošća sa pićem u Brunch BIG Fashion Novi Sad", caption: "Predah od gradske gužve" },
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-03.jpg", alt: "Dve gošće za stolom u Brunch BIG Fashion Novi Sad", caption: "Mesto za duže druženje" },
    ],
  },
  {
    slug: "brunch-big-nova-pazova",
    locationNumber: "05",
    name: "Brunch TC BIG Nova Pazova",
    shortName: "TC BIG",
    city: "Nova Pazova",
    area: "BIG Nova Pazova",
    areaLocative: "BIG-u u Novoj Pazovi",
    image: "/images/brunch/big-nova-pazova.webp",
    imageAlt: "Brunch sto sa ručkom i koktelom u Novoj Pazovi",
    heroImage: "/images/locations/brunch-big-nova-pazova/hero.jpg",
    heroImageAlt: "Jelo i koktel servirani u Brunch TC BIG Nova Pazova",
    menuPdf: "/menus/brunch-nova-pazova.pdf",
    heroCopy: "Prostran porodični restoran sa igraonicom i celodnevnom internacionalnom kuhinjom.",
    description: "Brunch Lounge Nova Pazova je najveći porodični Brunch u lancu, sa 250 mesta i velikom dečijom igraonicom pogodnom i za rođendane. Uz doručak, pice, paste, rižota, glavna jela i deserte, lokal nudi besplatan parking, rezervacije i uslugu poruči i pokupi.",
    address: "Vojački put 1A, TC BIG",
    postalCode: "22330",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Vojacki+put+1A+Nova+Pazova",
    phone: "+381 22 210 53 52",
    phoneHref: "tel:+381222105352",
    email: "modenarestorani@gmail.com",
    emailHref: "mailto:modenarestorani@gmail.com",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 22:00" }],
    features: ["Dečija igraonica", "250 mesta", "Besplatan parking"],
    gallery: [
      { src: "/images/locations/brunch-big-nova-pazova/gallery-01.jpg", alt: "Crveni koktel u Brunch TC BIG Nova Pazova", caption: "Osveženje za svaki deo dana" },
      { src: "/images/locations/brunch-big-nova-pazova/gallery-02.jpg", alt: "Žuti koktel na stolu u Brunch TC BIG Nova Pazova", caption: "Opušten porodični predah" },
      { src: "/images/locations/brunch-big-nova-pazova/gallery-03.jpg", alt: "Sveža salata servirana u Brunch TC BIG Nova Pazova", caption: "Internacionalna kuhinja" },
    ],
  },
  {
    slug: "brunch-mercator-beograd",
    locationNumber: "06",
    name: "Brunch Mercator Beograd",
    shortName: "Mercator Beograd",
    city: "Beograd",
    area: "Mercator Beograd",
    areaLocative: "Mercator Centru u Beogradu",
    image: "/images/brunch/mercator-bg.webp",
    imageAlt: "Servirano jelo u Brunch Mercator restoranu u Beogradu",
    heroImage: "/images/locations/brunch-mercator-beograd/hero.jpg",
    heroImageAlt: "Dve gošće za stolom u Brunch Mercator Beograd",
    menuPdf: "/menus/brunch-mercator-beograd.pdf",
    heroCopy: "Brunch na Novom Beogradu za jutarnju kafu, poslovni ručak i predah tokom dana.",
    description: "Brunch u Mercator Centru Beograd nalazi se na prvom spratu, u srcu Bloka 31. Praktična lokacija između poslovnog dela Novog Beograda i stambenih blokova čini ga prirodnim mestom za sastanak, ručak ili opuštenu pauzu uz celodnevnu ponudu.",
    address: "Bulevar umetnosti 4, Mercator Centar, 1. sprat",
    postalCode: "11070",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Mercator+Bulevar+umetnosti+4+Beograd",
    phone: "+381 11 423 52 69",
    phoneHref: "tel:+381114235269",
    hours: [{ days: "Ponedeljak — nedelja", time: "09:00 — 22:00" }],
    features: ["Prvi sprat", "Novi Beograd · Blok 31", "Poslovni sastanci"],
    gallery: [
      { src: "/images/locations/brunch-mercator-beograd/gallery-01.jpg", alt: "Crveno vino u Brunch Mercator Beograd", caption: "Pauza u srcu Novog Beograda" },
      { src: "/images/locations/brunch-mercator-beograd/gallery-02.jpg", alt: "Vino i jelo kraj prozora u Brunch Mercator Beograd", caption: "Za sastanak ili ručak" },
      { src: "/images/locations/brunch-mercator-beograd/gallery-03.jpg", alt: "Gošća za ručkom u Brunch Mercator Beograd", caption: "Trenutak za sebe" },
    ],
  },
  {
    slug: "brunch-beo-shopping-centar",
    locationNumber: "07",
    name: "Brunch BEO Shopping Center",
    shortName: "BEO Shopping Center",
    city: "Beograd",
    area: "BEO Shopping Center",
    areaLocative: "BEO Shopping Centru u Beogradu",
    image: "/images/brunch/beo.webp",
    imageAlt: "Brunch burger poslužen u BEO Shopping Center lokalu",
    heroImage: "/images/locations/brunch-beo-shopping-centar/hero.jpg",
    heroImageAlt: "Jelo i osvežavajuće piće u Brunch BEO Shopping Center",
    menuPdf: "/menus/brunch-beo.pdf",
    heroCopy: "Internacionalna kuhinja i domaći favoriti na drugom spratu BEO Shopping Centra.",
    description: "Brunch BEO je mesto za pauzu između kupovine, neformalni sastanak ili celodnevni obrok na Zvezdari. Ponuda spaja internacionalnu kuhinju sa domaćim specijalitetima, uz kafe, sveže ceđene sokove i udoban enterijer na drugom spratu centra.",
    address: "Vojislava Ilića 141, BEO Shopping Center, 2. sprat",
    postalCode: "11050",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BEO+Shopping+Center+Vojislava+Ilica+141+Beograd",
    phone: "+381 11 453 50 25",
    phoneHref: "tel:+381114535025",
    hours: [{ days: "Ponedeljak — nedelja", time: "10:00 — 22:00" }],
    features: ["Drugi sprat", "Internacionalna kuhinja", "BEO Shopping Center"],
    gallery: [
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-01.jpg", alt: "Dve gošće za stolom u Brunch BEO Shopping Center", caption: "Pauza koja traje duže" },
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-02.jpg", alt: "Doručak serviran u Brunch BEO Shopping Center", caption: "Doručak na drugom spratu" },
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-03.jpg", alt: "Sveže ceđeni sok u Brunch BEO Shopping Center", caption: "Od ceđenog soka do ručka" },
    ],
  },
];

export const cities = ["Novi Sad", "Beograd", "Nova Pazova"] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
