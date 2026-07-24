import type { MetadataRoute } from "next";
import { locations } from "@/src/data/locations";
import { localeAlternates, locales, localizedPath, locationPath } from "@/src/i18n/config";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs").replace(/\/$/, "");

export const dynamic = "force-static";

function absoluteUrl(pathname: string) {
  return `${siteUrl}${pathname}`;
}

function absoluteAlternates(pathname: string) {
  return Object.fromEntries(
    Object.entries(localeAlternates(pathname)).map(([locale, path]) => [locale, absoluteUrl(path)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, "/")),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: { languages: absoluteAlternates("/") },
    })),
    ...locales.flatMap((locale) =>
      locations.map((location) => ({
        url: absoluteUrl(locationPath(locale, location.slug)),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: absoluteAlternates(`/lokacije/${location.slug}/`),
        },
      })),
    ),
  ];
}
