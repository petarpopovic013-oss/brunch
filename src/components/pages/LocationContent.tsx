import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPlaceholder } from "@/src/components/site/LocationPlaceholder";
import { getCities, getLocation } from "@/src/data/locations";
import { localeAlternates, localeMeta, locationPath, type Locale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import {
  absoluteUrl,
  brandLogoPath,
  brandSocialProfiles,
  siteUrl,
} from "@/src/seo";

const cityNameTokens = [
  "Novi Sad",
  "Beograd",
  "Belgrade",
  "Nova Pazova",
  "Нови-Сад",
  "Белград",
  "Нова-Пазова",
];

function getLocationSeoTitle(location: NonNullable<ReturnType<typeof getLocation>>, suffix: string) {
  const name = cityNameTokens.some((city) => location.name.includes(city))
    ? location.name
    : `${location.name} ${location.city}`;

  return `${name} | ${suffix}`;
}

export function getLocationMetadata(locale: Locale, slug: string): Metadata {
  const dictionary = getDictionary(locale);
  const location = getLocation(slug, locale);

  if (!location) return {};

  const pathname = `/lokacije/${location.slug}/`;
  const title = getLocationSeoTitle(location, dictionary.metadata.locationTitleSuffix);
  const description = `${location.heroCopy} ${dictionary.metadata.locationDescriptionSuffix} ${location.address}, ${location.city}.`;

  return {
    title,
    description,
    alternates: {
      canonical: locationPath(locale, location.slug),
      languages: localeAlternates(pathname),
    },
    openGraph: {
      type: "website",
      url: locationPath(locale, location.slug),
      locale: localeMeta[locale].ogLocale,
      alternateLocale: Object.values(localeMeta)
        .map((item) => item.ogLocale)
        .filter((item) => item !== localeMeta[locale].ogLocale),
      siteName: dictionary.metadata.siteName,
      title,
      description,
      images: [{
        url: location.heroImage,
        alt: location.heroImageAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [location.heroImage],
    },
  };
}

export function LocationContent({ locale, slug }: { locale: Locale; slug: string }) {
  const dictionary = getDictionary(locale);
  const location = getLocation(slug, locale);

  if (!location) notFound();

  const pageUrl = absoluteUrl(locationPath(locale, location.slug));
  const menuUrl = absoluteUrl(location.menuPdf);
  const pageTitle = getLocationSeoTitle(location, dictionary.metadata.locationTitleSuffix);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: location.heroCopy,
        inLanguage: localeMeta[locale].htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${pageUrl}#restaurant` },
        primaryImageOfPage: absoluteUrl(location.heroImage),
      },
      {
        "@type": "Restaurant",
        "@id": `${pageUrl}#restaurant`,
        url: pageUrl,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        name: location.name,
        description: location.description,
        image: [
          absoluteUrl(location.heroImage),
          ...location.gallery.map((image) => absoluteUrl(image.src)),
        ],
        logo: absoluteUrl(location.logo?.src ?? brandLogoPath),
        telephone: location.phoneHref.replace("tel:", ""),
        ...(location.email ? { email: location.email } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address,
          postalCode: location.postalCode,
          addressLocality: location.city,
          addressCountry: "RS",
        },
        areaServed: location.city,
        hasMap: location.mapsUrl,
        menu: menuUrl,
        hasMenu: menuUrl,
        openingHoursSpecification: location.openingHours.map((entry) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: entry.days,
          opens: entry.opens,
          closes: entry.closes,
        })),
        servesCuisine: dictionary.metadata.cuisines,
        priceRange: "RSD",
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        sameAs: brandSocialProfiles,
      },
    ],
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
