import type { Metadata } from "next";
import { BlogPostContent, getPostMetadata } from "@/src/components/pages/EditorialPages";
import { getEditorialCopy } from "@/src/data/editorial";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getEditorialCopy("sr").posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getPostMetadata("sr", slug);
}

export default async function SerbianBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostContent locale="sr" slug={slug} />;
}

