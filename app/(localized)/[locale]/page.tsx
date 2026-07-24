import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeContent, getHomeMetadata } from "@/src/components/pages/HomeContent";
import { isTranslatedLocale } from "@/src/i18n/config";

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};

  return getHomeMetadata(locale);
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();

  return <HomeContent locale={locale} />;
}
