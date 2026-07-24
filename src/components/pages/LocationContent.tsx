import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPlaceholder } from "@/src/components/site/LocationPlaceholder";
import { getCities, getLocation } from "@/src/data/locations";
import { localeAlternates, localeMeta, locationPath, type Locale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs").replace(/\/$/, "");

export function getLocationMetadata(locale: Locale, slug: string): Metadata {
  const dictionary = getDictionary(locale);
  const location = getLocation(slug, locale);

  if (!location) return {};

  const pathname = `/lokacije/${location.slug}/`;
  const title = `${location.name} | Brunch ${location.city}`;
  const description = `${location.heroCopy} ${dictionary.metadata.locationDescriptionSuffix}`;

  return {
    title,
    description,
    alternates: {
      canonical: locationPath(locale, location.slug),
      languages: localeAlternates(pathname),
    },
    openGraph: {
      type: "website",
      locale: localeMeta[locale].ogLocale,
      alternateLocale: Object.values(localeMeta)
        .map((item) => item.ogLocale)
        .filter((item) => item !== localeMeta[locale].ogLocale),
      siteName: dictionary.metadata.siteName,
      title,
      description: location.heroCopy,
      images: [{ url: location.heroImage }],
    },
  };
}

export function LocationContent({ locale, slug }: { locale: Locale; slug: string }) {
  const dictionary = getDictionary(locale);
  const location = getLocation(slug, locale);

  if (!location) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}${locationPath(locale, location.slug)}`,
    url: `${siteUrl}${locationPath(locale, location.slug)}`,
    inLanguage: localeMeta[locale].htmlLang,
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
    servesCuisine: dictionary.metadata.cuisines,
    priceRange: "RSD",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <LocationPlaceholder
        locale={locale}
        dictionary={dictionary}
        location={location}
        cities={getCities(locale)}
      />
    </>
  );
}
