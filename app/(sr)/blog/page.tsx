import { BlogIndexContent, getBlogMetadata } from "@/src/components/pages/EditorialPages";

export const metadata = getBlogMetadata("sr");

export default function SerbianBlogPage() {
  return <BlogIndexContent locale="sr" />;
}

