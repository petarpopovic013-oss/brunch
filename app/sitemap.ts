import type { MetadataRoute } from "next";
import { getEditorialCopy } from "@/src/data/editorial";
import { locations } from "@/src/data/locations";
import { localeAlternates, locales, localizedPath, locationPath } from "@/src/i18n/config";
import { absoluteUrl } from "@/src/seo";

export const dynamic = "force-static";

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
      images: [
        absoluteUrl("/images/brunch/hero-guests.webp"),
        absoluteUrl("/images/brunch/story-moment.webp"),
        absoluteUrl("/images/brunch/story-plate.webp"),
      ],
      alternates: { languages: absoluteAlternates("/") },
    })),
    ...locales.flatMap((locale) => [
      {
        url: absoluteUrl(localizedPath(locale, "/o-nama/")),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        images: [
          absoluteUrl(getEditorialCopy(locale).about.heroImage),
          ...getEditorialCopy(locale).about.inlineImages.map((image) => absoluteUrl(image.src)),
        ],
        alternates: { languages: absoluteAlternates("/o-nama/") },
      },
      {
        url: absoluteUrl(localizedPath(locale, "/blog/")),
        changeFrequency: "weekly" as const,
        priority: 0.8,
        images: getEditorialCopy(locale).posts.map((post) => absoluteUrl(post.heroImage)),
        alternates: { languages: absoluteAlternates("/blog/") },
      },
      ...getEditorialCopy(locale).posts.map((post) => ({
        url: absoluteUrl(localizedPath(locale, `/blog/${post.slug}/`)),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: [absoluteUrl(post.heroImage), absoluteUrl(post.inlineImage)],
        alternates: {
          languages: absoluteAlternates(`/blog/${post.slug}/`),
        },
      })),
    ]),
    ...locales.flatMap((locale) =>
      locations.map((location) => ({
        url: absoluteUrl(locationPath(locale, location.slug)),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: [
          absoluteUrl(location.heroImage),
          ...location.gallery.map((image) => absoluteUrl(image.src)),
        ],
        alternates: {
          languages: absoluteAlternates(`/lokacije/${location.slug}/`),
        },
      })),
    ),
  ];
}
