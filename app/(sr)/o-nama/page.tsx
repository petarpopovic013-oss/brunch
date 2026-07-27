import { AboutContent, getAboutMetadata } from "@/src/components/pages/EditorialPages";

export const metadata = getAboutMetadata("sr");

export default function SerbianAboutPage() {
  return <AboutContent locale="sr" />;
}

