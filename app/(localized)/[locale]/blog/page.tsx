import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndexContent, getBlogMetadata } from "@/src/components/pages/EditorialPages";
import { isTranslatedLocale } from "@/src/i18n/config";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) return {};
  return getBlogMetadata(locale);
}

export default async function LocalizedBlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <BlogIndexContent locale={locale} />;
}

