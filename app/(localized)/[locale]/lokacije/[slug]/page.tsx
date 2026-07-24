import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationContent, getLocationMetadata } from "@/src/components/pages/LocationContent";
import { locations } from "@/src/data/locations";
import { isTranslatedLocale } from "@/src/i18n/config";

type LocalizedLocationPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocalizedLocationPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) return {};

  return getLocationMetadata(locale, slug);
}

export default async function LocalizedLocationPage({ params }: LocalizedLocationPageProps) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) notFound();

  return <LocationContent locale={locale} slug={slug} />;
}
