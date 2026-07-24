import type { Metadata } from "next";
import { LocationContent, getLocationMetadata } from "@/src/components/pages/LocationContent";
import { locations } from "@/src/data/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getLocationMetadata("sr", slug);
}

export default async function SerbianLocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  return <LocationContent locale="sr" slug={slug} />;
}
