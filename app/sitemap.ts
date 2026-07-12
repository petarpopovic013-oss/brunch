import type { MetadataRoute } from "next";
import { locations } from "@/src/data/locations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locations.map((location) => ({
      url: `${siteUrl}/lokacije/${location.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
