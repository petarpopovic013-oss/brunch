import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent, getPostMetadata } from "@/src/components/pages/EditorialPages";
import { getEditorialCopy } from "@/src/data/editorial";
import { isTranslatedLocale, translatedLocales } from "@/src/i18n/config";

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.flatMap((locale) =>
    getEditorialCopy(locale).posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) return {};
  return getPostMetadata(locale, slug);
}

export default async function LocalizedBlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <BlogPostContent locale={locale} slug={slug} />;
}

