import type { Locale } from "@/src/i18n/config";
import { cityLabels, locationTranslations } from "@/src/i18n/locationTranslations";

export type CityId = "beograd" | "novi-sad" | "nova-pazova";

export type BrunchLocation = {
  slug: string;
  locationNumber: string;
  name: string;
  shortName: string;
  cityId: CityId;
  city: string;
  area: string;
  areaLocative: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  menuPdf: string;
  heroCopy: string;
  description: string;
  galleryCopy: string;
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
  logo?: { src: string; alt: string };
};

export const locations: BrunchLocation[] = [
  {
    slug: "brunch-masinac-novi-sad",
    locationNumber: "01",
    name: "Brunch Mašinac",
    shortName: "Mašinac",
    cityId: "novi-sad",
    city: "Novi Sad",
    area: "Trg Dositeja Obradovića 6",
    areaLocative: "Univerzitetskom Kampusu",
    image: "/images/brunch/masinac.webp",
    imageAlt: "Karakterističan zeleni enterijer lokala Brunch Mašinac",
    heroImage: "/images/locations/brunch-masinac-novi-sad/hero.jpg",
    heroImageAlt: "Ulaz i bašta lokala Brunch Mašinac u univerzitetskom kampusu",
    logo: {
      src: "/images/Logo/brunch-masinac-white (1).png",
      alt: "Brunch Mašinac",
    },
    menuPdf: "/menus/brunch-masinac.pdf",
    heroCopy: "Doručak, kafa i ručak tik uz novosadski univerzitetski kampus.",
    description: "Na Trgu Dositeja Obradovića, neposredno uz Fakultet tehničkih nauka, Brunch Mašinac je praktično mesto za jutarnju kafu, doručak pre obaveza ili opušten ručak. Zelena bašta i topao enterijer daju mu prepoznatljiv karakter i tokom mirnih jutara i u vreme studentske gužve.",
    galleryCopy: "Zelena bašta, upečatljive boje i opuštena atmosfera po kojoj je Mašinac prepoznatljiv.",
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
    features: ["Trg Dositeja Obradovića 6", "Kafa i doručak", "Bašta uz kampus"],
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
    cityId: "novi-sad",
    city: "Novi Sad",
    area: "Bulevar oslobođenja 102",
    areaLocative: "Mercatoru u Novom Sadu",
    image: "/images/brunch/mercator-ns.webp",
    imageAlt: "Svetao enterijer Brunch Lounge lokala u Mercator centru",
    heroImage: "/images/locations/brunch-lounge-mercator-novi-sad/hero.jpg",
    heroImageAlt: "Prostran enterijer Brunch Lounge Mercator Novi Sad sa pogledom na grad",
    menuPdf: "/menus/brunch-mercator-novi-sad.pdf",
    heroCopy: "Kafa, ručak i mediteranski ukusi u Mercatoru, u srcu Limana.",
    description: "Brunch Lounge se nalazi na Bulevaru oslobođenja 102, u novosadskom Mercatoru. Otvoren enterijer sa galerijom i pogledom na grad odgovara brzoj kafi, porodičnom ručku ili dužem druženju uz pice, paste, burgere i deserte.",
    galleryCopy: "Otvoren prostor, zelenilo i detalji koji užurbanu pauzu u Mercatoru pretvaraju u pravi predah.",
    address: "Bulevar oslobođenja 102, TC Mercator",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Merkator+Bulevar+oslobodjenja+102+Novi+Sad",
    phone: "+381 21 636 91 11",
    phoneHref: "tel:+381216369111",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 21:30" }],
    features: ["Bulevar oslobođenja 102", "Mediteranska kuhinja", "Galerija sa pogledom"],
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
    cityId: "novi-sad",
    city: "Novi Sad",
    area: "Sentandrejski put 11",
    areaLocative: "BIG-u u Novom Sadu",
    image: "/images/brunch/big-ns.webp",
    imageAlt: "Prostrani enterijer Brunch restorana u TC BIG Novi Sad",
    heroImage: "/images/locations/brunch-tc-big-novi-sad/hero.jpg",
    heroImageAlt: "Gošća za stolom uz jelo u Brunch TC BIG Novi Sad",
    menuPdf: "/menus/brunch-big-novi-sad.pdf",
    heroCopy: "Celodnevni meni za doručak, porodični ručak ili večernje piće.",
    description: "Na Sentandrejskom putu 11, u okviru BIG Novi Sad centra, ovaj Brunch prati ceo dnevni ritam — od doručka i prve kafe do ručka i večernjeg pića. Prostran ambijent, parking centra i duže radno vreme petkom i subotom čine ga praktičnim za porodice i veća društva.",
    galleryCopy: "Od konkretnog ručka do kafe, deserta i koktela — sve za predah tokom dana.",
    address: "Sentandrejski put 11, BIG Novi Sad",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BIG+Novi+Sad+Sentandrejski+put+11",
    phone: "+381 21 223 65 03",
    phoneHref: "tel:+381212236503",
    hours: [
      { days: "Ponedeljak — četvrtak", time: "08:00 — 22:00" },
      { days: "Petak — subota", time: "08:00 — 23:00" },
      { days: "Nedelja", time: "08:00 — 22:00" },
    ],
    features: ["Sentandrejski put 11", "Porodični ručak", "Petak i subota do 23h"],
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
    cityId: "novi-sad",
    city: "Novi Sad",
    area: "Bulevar oslobođenja 119",
    areaLocative: "BIG Fashion-u u Novom Sadu",
    image: "/images/brunch/big-fashion-ns.webp",
    imageAlt: "Gošće uz piće u Brunch BIG Fashion restoranu",
    heroImage: "/images/locations/brunch-big-fashion-novi-sad/hero.jpg",
    heroImageAlt: "Ispunjen i svetao enterijer Brunch BIG Fashion Novi Sad",
    menuPdf: "/menus/brunch-big-fashion-novi-sad.pdf",
    heroCopy: "Doručak, ručak i piće u BIG Fashion centru na Bulevaru oslobođenja.",
    description: "Brunch BIG Fashion nalazi se na Bulevaru oslobođenja 119 i odgovara doručku, poslovnom sastanku, pauzi od kupovine ili dužem druženju. Svetao prostor i celodnevna ponuda obuhvataju doručke, sendviče, burgere, pice, paste, glavna jela i deserte.",
    galleryCopy: "Svetao gradski ambijent za kafu, ručak i druženje koje ne mora da se završi posle kupovine.",
    address: "Bulevar oslobođenja 119, BIG Fashion Novi Sad",
    postalCode: "21000",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BIG+Fashion+Bulevar+oslobodjenja+119+Novi+Sad",
    phone: "+381 21 382 25 99",
    phoneHref: "tel:+381213822599",
    email: "sasabiljetina86@gmail.com",
    emailHref: "mailto:sasabiljetina86@gmail.com",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 22:00" }],
    features: ["Bulevar oslobođenja 119", "Celodnevni meni", "Pogled na grad"],
    gallery: [
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-01.jpg", alt: "Gošća u Brunch BIG Fashion Novi Sad", caption: "Dobra atmosfera tokom celog dana" },
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-02.jpg", alt: "Gošća sa pićem u Brunch BIG Fashion Novi Sad", caption: "Predah od gradske gužve" },
      { src: "/images/locations/brunch-big-fashion-novi-sad/gallery-03.jpg", alt: "Dve gošće za stolom u Brunch BIG Fashion Novi Sad", caption: "Mesto za duže druženje" },
    ],
  },
  {
    slug: "brunch-big-nova-pazova",
    locationNumber: "05",
    name: "Brunch TC BIG Nova Pazova",
    shortName: "TC BIG",
    cityId: "nova-pazova",
    city: "Nova Pazova",
    area: "Vojački put 1A",
    areaLocative: "BIG-u u Novoj Pazovi",
    image: "/images/brunch/big-nova-pazova.webp",
    imageAlt: "Brunch sto sa ručkom i koktelom u Novoj Pazovi",
    heroImage: "/images/locations/brunch-big-nova-pazova/hero.jpg",
    heroImageAlt: "Jelo i koktel servirani u Brunch TC BIG Nova Pazova",
    menuPdf: "/menus/brunch-nova-pazova.pdf",
    heroCopy: "Prostran porodični restoran sa igraonicom, parkingom i celodnevnim menijem.",
    description: "Na Vojačkom putu 1A, u BIG centru u Novoj Pazovi, nalazi se prostran porodični Brunch sa 250 mesta i velikom dečijom igraonicom pogodnom i za proslave. Na raspolaganju su doručci, pice, paste, rižota, glavna jela i deserti, uz besplatan parking i mogućnost rezervacije.",
    galleryCopy: "Opušten porodični ambijent uz raznovrsna jela, osvežavajuća pića i dovoljno prostora za druženje.",
    address: "Vojački put 1A, TC BIG",
    postalCode: "22330",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Vojacki+put+1A+Nova+Pazova",
    phone: "+381 22 210 53 52",
    phoneHref: "tel:+381222105352",
    email: "modenarestorani@gmail.com",
    emailHref: "mailto:modenarestorani@gmail.com",
    hours: [{ days: "Ponedeljak — nedelja", time: "08:00 — 22:00" }],
    features: ["Dečija igraonica", "Prostor za proslave", "Besplatan parking"],
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
    cityId: "beograd",
    city: "Beograd",
    area: "Bulevar umetnosti 4",
    areaLocative: "Mercator Centru u Beogradu",
    image: "/images/brunch/mercator-bg.webp",
    imageAlt: "Servirano jelo u Brunch Mercator restoranu u Beogradu",
    heroImage: "/images/locations/brunch-mercator-beograd/hero.jpg",
    heroImageAlt: "Dve gošće za stolom u Brunch Mercator Beograd",
    menuPdf: "/menus/brunch-mercator-beograd.pdf",
    heroCopy: "Brunch na Novom Beogradu za jutarnju kafu, poslovni ručak i predah tokom dana.",
    description: "Na Bulevaru umetnosti 4, u srcu Bloka 31, Brunch Mercator je lako dostupan iz poslovnog i stambenog dela Novog Beograda. Lokacija odgovara jutarnjoj kafi, poslovnom sastanku, ručku ili opuštenoj pauzi tokom dana.",
    galleryCopy: "Miran predah na Novom Beogradu, bilo da dolazite na kratku kafu, poslovni ručak ili druženje.",
    address: "Bulevar umetnosti 4, Mercator Centar Beograd",
    postalCode: "11070",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+Lounge+Mercator+Bulevar+umetnosti+4+Beograd",
    phone: "+381 11 423 52 69",
    phoneHref: "tel:+381114235269",
    hours: [{ days: "Ponedeljak — nedelja", time: "09:00 — 22:00" }],
    features: ["Bulevar umetnosti 4", "Novi Beograd · Blok 31", "Poslovni ručak"],
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
    cityId: "beograd",
    city: "Beograd",
    area: "Vojislava Ilića 141",
    areaLocative: "BEO Shopping Centru u Beogradu",
    image: "/images/brunch/beo.webp",
    imageAlt: "Brunch burger poslužen u BEO Shopping Center lokalu",
    heroImage: "/images/locations/brunch-beo-shopping-centar/hero.jpg",
    heroImageAlt: "Jelo i osvežavajuće piće u Brunch BEO Shopping Center",
    menuPdf: "/menus/brunch-beo.pdf",
    heroCopy: "Doručak, ručak i domaći favoriti u BEO Shopping Centru na Zvezdari.",
    description: "Brunch BEO nalazi se na adresi Vojislava Ilića 141, u BEO Shopping Centru na Zvezdari. Ponuda spaja internacionalna jela i domaće specijalitete, pa lokal odgovara doručku, pauzi tokom kupovine, neformalnom sastanku ili celodnevnom obroku.",
    galleryCopy: "Udoban ambijent za doručak, sveže ceđeni sok, ručak ili pauzu sa prijateljima na Zvezdari.",
    address: "Vojislava Ilića 141, BEO Shopping Center",
    postalCode: "11050",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brunch+BEO+Shopping+Center+Vojislava+Ilica+141+Beograd",
    phone: "+381 11 453 50 25",
    phoneHref: "tel:+381114535025",
    hours: [{ days: "Ponedeljak — nedelja", time: "10:00 — 22:00" }],
    features: ["Vojislava Ilića 141", "Domaća i internacionalna jela", "Pauza tokom kupovine"],
    gallery: [
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-01.jpg", alt: "Dve gošće za stolom u Brunch BEO Shopping Center", caption: "Pauza koja traje duže" },
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-02.jpg", alt: "Doručak serviran u Brunch BEO Shopping Center", caption: "Doručak na Zvezdari" },
      { src: "/images/locations/brunch-beo-shopping-centar/gallery-03.jpg", alt: "Sveže ceđeni sok u Brunch BEO Shopping Center", caption: "Od ceđenog soka do ručka" },
    ],
  },
];

const cityOrder: CityId[] = ["beograd", "novi-sad", "nova-pazova"];

export function getCities(locale: Locale) {
  return cityOrder.map((id) => ({ id, label: cityLabels[locale][id] }));
}

export function getLocations(locale: Locale): BrunchLocation[] {
  if (locale === "sr") return locations;

  return locations.map((location) => {
    const translation = locationTranslations[locale][location.slug];

    return {
      ...location,
      ...translation,
      hours: location.hours.map((entry, index) => ({
        ...entry,
        days: translation.hoursDays[index],
        time: translation.hoursTimes?.[index] ?? entry.time,
      })),
      gallery: location.gallery.map((image, index) => ({
        ...image,
        ...translation.gallery[index],
      })),
    };
  });
}

export function getLocation(slug: string, locale: Locale = "sr") {
  return getLocations(locale).find((location) => location.slug === slug);
}
