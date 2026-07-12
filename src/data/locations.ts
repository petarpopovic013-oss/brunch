export type BrunchLocation = {
  slug: string;
  name: string;
  shortName: string;
  city: "Novi Sad" | "Beograd" | "Nova Pazova";
  area: string;
  image: string;
  imageAlt: string;
  phone: string;
  phoneHref: string;
};

export const locations: BrunchLocation[] = [
  {
    slug: "brunch-masinac-novi-sad",
    name: "Brunch Mašinac",
    shortName: "Mašinac",
    city: "Novi Sad",
    area: "Univerzitetski kampus",
    image: "/images/brunch/masinac.webp",
    imageAlt: "Karakterističan zeleni enterijer lokala Brunch Mašinac",
    phone: "+381 60 123 45 01",
    phoneHref: "tel:+381601234501",
  },
  {
    slug: "brunch-lounge-mercator-novi-sad",
    name: "Brunch Lounge Mercator",
    shortName: "Mercator",
    city: "Novi Sad",
    area: "Mercator centar",
    image: "/images/brunch/mercator-ns.webp",
    imageAlt: "Svetao enterijer Brunch Lounge lokala u Mercator centru",
    phone: "+381 60 123 45 02",
    phoneHref: "tel:+381601234502",
  },
  {
    slug: "brunch-tc-big-novi-sad",
    name: "Brunch TC BIG",
    shortName: "TC BIG",
    city: "Novi Sad",
    area: "BIG Novi Sad",
    image: "/images/brunch/big-ns.webp",
    imageAlt: "Prostrani enterijer Brunch restorana u TC BIG Novi Sad",
    phone: "+381 60 123 45 03",
    phoneHref: "tel:+381601234503",
  },
  {
    slug: "brunch-big-fashion-novi-sad",
    name: "Brunch BIG Fashion",
    shortName: "BIG Fashion",
    city: "Novi Sad",
    area: "BIG Fashion Novi Sad",
    image: "/images/brunch/big-fashion-ns.webp",
    imageAlt: "Gošće uz piće u Brunch BIG Fashion restoranu",
    phone: "+381 60 123 45 04",
    phoneHref: "tel:+381601234504",
  },
  {
    slug: "brunch-big-nova-pazova",
    name: "Brunch TC BIG Nova Pazova",
    shortName: "TC BIG",
    city: "Nova Pazova",
    area: "BIG Nova Pazova",
    image: "/images/brunch/big-nova-pazova.webp",
    imageAlt: "Brunch sto sa ručkom i koktelom u Novoj Pazovi",
    phone: "+381 60 123 45 05",
    phoneHref: "tel:+381601234505",
  },
  {
    slug: "brunch-mercator-beograd",
    name: "Brunch Mercator Beograd",
    shortName: "Mercator",
    city: "Beograd",
    area: "Mercator centar",
    image: "/images/brunch/mercator-bg.webp",
    imageAlt: "Servirano jelo u Brunch Mercator restoranu u Beogradu",
    phone: "+381 60 123 45 06",
    phoneHref: "tel:+381601234506",
  },
  {
    slug: "brunch-beo-shopping-centar",
    name: "Brunch BEO Shopping Center",
    shortName: "BEO Shopping Center",
    city: "Beograd",
    area: "BEO Shopping Center",
    image: "/images/brunch/beo.webp",
    imageAlt: "Brunch burger poslužen u BEO Shopping Center lokalu",
    phone: "+381 60 123 45 07",
    phoneHref: "tel:+381601234507",
  },
];

export const cities = ["Novi Sad", "Beograd", "Nova Pazova"] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
