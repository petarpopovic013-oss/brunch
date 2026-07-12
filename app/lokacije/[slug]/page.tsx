import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPlaceholder } from "@/src/components/site/LocationPlaceholder";
import { getLocation, locations } from "@/src/data/locations";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) return {};

  return {
    title: `${location.name} | Brunch ${location.city}`,
    description: `Posetite ${location.name} na lokaciji ${location.area}. Kontakt, radno vreme i informacije o Brunch lokalu u gradu ${location.city}.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  return <LocationPlaceholder location={location} />;
}
