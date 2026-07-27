import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutContent, getAboutMetadata } from "@/src/components/pages/EditorialPages";
import { isTranslatedLocale } from "@/src/i18n/config";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  return getAboutMetadata(locale);
}

export default async function LocalizedAboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <AboutContent locale={locale} />;
}

