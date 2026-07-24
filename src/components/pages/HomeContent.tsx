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
      locale: localeMeta[locale].ogLocale,
      alternateLocale: Object.values(localeMeta)
        .map((item) => item.ogLocale)
        .filter((item) => item !== localeMeta[locale].ogLocale),
      siteName: dictionary.metadata.siteName,
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      images: [{ url: "/images/brunch/hero-guests.webp", width: 2400, height: 1600 }],
    },
  };
}

export function HomeContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const locations = getLocations(locale);
  const cities = getCities(locale);

  return (
    <main>
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
