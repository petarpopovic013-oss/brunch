import type { Metadata } from "next";
import { cormorant } from "@/src/fonts";
import { localeMeta } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import { brandName, siteUrl } from "@/src/seo";
import "../globals.css";

const dictionary = getDictionary("sr");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  title: {
    default: dictionary.metadata.siteName,
    template: "%s",
  },
  description: dictionary.metadata.siteDescription,
  authors: [{ name: brandName, url: siteUrl }],
  creator: brandName,
  publisher: brandName,
  category: "restaurant",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: localeMeta.sr.ogLocale,
    siteName: dictionary.metadata.siteName,
    images: [{
      url: "/images/brunch/hero-guests.webp",
      width: 2400,
      height: 1600,
      alt: "Brunch Lounge atmosfera",
    }],
  },
};

export default function SerbianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={localeMeta.sr.htmlLang}
      className={cormorant.variable}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
