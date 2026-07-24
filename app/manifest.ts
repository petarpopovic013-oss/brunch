import type { MetadataRoute } from "next";
import { brandName } from "@/src/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brandName} Srbija`,
    short_name: brandName,
    description: "Brunch Lounge restorani u Novom Sadu, Beogradu i Novoj Pazovi.",
    start_url: "/",
    display: "standalone",
    background_color: "#11100d",
    theme_color: "#dd5903",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
