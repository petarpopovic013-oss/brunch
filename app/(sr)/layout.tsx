import type { Metadata } from "next";
import { cormorant } from "@/src/fonts";
import { localeMeta } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import "../globals.css";

const dictionary = getDictionary("sr");

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs"),
  title: {
    default: dictionary.metadata.siteName,
    template: "%s",
  },
  description: dictionary.metadata.siteDescription,
  openGraph: {
    type: "website",
    locale: localeMeta.sr.ogLocale,
    siteName: dictionary.metadata.siteName,
    images: [{ url: "/images/brunch/hero-guests.webp", width: 2400, height: 1600 }],
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
