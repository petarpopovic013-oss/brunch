import { HomeContent, getHomeMetadata } from "@/src/components/pages/HomeContent";

export const metadata = getHomeMetadata("sr");

export default function SerbianHomePage() {
  return <HomeContent locale="sr" />;
}
