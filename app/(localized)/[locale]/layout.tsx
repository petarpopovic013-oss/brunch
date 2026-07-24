import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cormorant } from "@/src/fonts";
import { isTranslatedLocale, localeMeta, translatedLocales } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import "../../globals.css";

type LocalizedLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};

  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs"),
    title: {
      default: dictionary.metadata.siteName,
      template: "%s",
    },
    description: dictionary.metadata.siteDescription,
    openGraph: {
      type: "website",
      locale: localeMeta[locale].ogLocale,
      siteName: dictionary.metadata.siteName,
      images: [{ url: "/images/brunch/hero-guests.webp", width: 2400, height: 1600 }],
    },
  };
}

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={cormorant.variable}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
