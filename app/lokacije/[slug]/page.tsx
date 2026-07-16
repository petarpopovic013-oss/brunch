import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPlaceholder } from "@/src/components/site/LocationPlaceholder";
import { getLocation, locations } from "@/src/data/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) return {};

  return {
    title: `${location.name} | Brunch ${location.city}`,
    description: `${location.heroCopy} Pogledajte jelovnik, adresu, radno vreme i kontakt.`,
    openGraph: {
      title: `${location.name} | Brunch ${location.city}`,
      description: location.heroCopy,
      images: [{ url: location.heroImage }],
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: location.name,
    description: location.description,
    telephone: location.phoneHref.replace("tel:", ""),
    ...(location.email ? { email: location.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      postalCode: location.postalCode,
      addressLocality: location.city,
      addressCountry: "RS",
    },
    hasMap: location.mapsUrl,
    servesCuisine: ["Internacionalna", "Mediteranska", "Italijanska"],
    priceRange: "RSD",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <LocationPlaceholder location={location} />
    </>
  );
}
