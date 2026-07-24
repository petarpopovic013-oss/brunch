import type { Metadata } from "next";
import { CocktailGallery } from "@/src/components/sections/CocktailGallery";
import { EventsFooter } from "@/src/components/sections/EventsFooter";
import { HeaderHero } from "@/src/components/sections/HeaderHero";
import { MenuSections } from "@/src/components/sections/MenuSections";
import { StoryExperience } from "@/src/components/sections/StoryExperience";
import { MobileParallax } from "@/src/components/site/MobileParallax";
import { getCities, getLocations } from "@/src/data/locations";
import { localeAlternates, localeMeta, localizedPath, type Locale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import {
  absoluteUrl,
  brandLogoPath,
  brandName,
  brandSocialProfiles,
  siteUrl,
} from "@/src/seo";

export function getHomeMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.homeTitle,
    description: dictionary.metadata.homeDescription,
    alternates: {
      canonical: localizedPath(locale, "/"),
      languages: localeAlternates("/"),
    },
    openGraph: {
      type: "website",
      url: localizedPath(locale, "/"),
      locale: localeMeta[locale].ogLocale,
      alternateLocale: Object.values(localeMeta)
        .map((item) => item.ogLocale)
        .filter((item) => item !== localeMeta[locale].ogLocale),
      siteName: dictionary.metadata.siteName,
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      images: [{
        url: "/images/brunch/hero-guests.webp",
        width: 2400,
        height: 1600,
        alt: dictionary.story.imageOneAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      images: ["/images/brunch/hero-guests.webp"],
    },
  };
}

export function HomeContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const locations = getLocations(locale);
  const cities = getCities(locale);
  const homePath = localizedPath(locale, "/");
  const homeUrl = absoluteUrl(homePath);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: brandName,
        alternateName: ["Brunch", "Brunch Srbija"],
        inLanguage: localeMeta[locale].htmlLang,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brandName,
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(brandLogoPath),
        },
        image: absoluteUrl("/images/brunch/hero-guests.webp"),
        description: dictionary.metadata.siteDescription,
        sameAs: brandSocialProfiles,
        areaServed: ["Novi Sad", "Beograd", "Nova Pazova"],
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}#locations`,
        name: dictionary.locations.titleEmphasis,
        numberOfItems: locations.length,
        itemListElement: locations.map((location, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: location.name,
          url: absoluteUrl(localizedPath(locale, `/lokacije/${location.slug}/`)),
          image: absoluteUrl(location.image),
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <MobileParallax />
      <HeaderHero locale={locale} dictionary={dictionary} locations={locations} cities={cities} />
      <div id="about">
        <StoryExperience dictionary={dictionary} />
      </div>
      <CocktailGallery dictionary={dictionary} />
      <MenuSections locale={locale} dictionary={dictionary} locations={locations} cities={cities} />
      <div id="contact">
        <EventsFooter dictionary={dictionary} cityNames={cities.map((city) => city.label)} />
      </div>
    </main>
  );
}
