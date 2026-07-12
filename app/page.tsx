import type { Metadata } from "next";
import { CocktailGallery } from "@/src/components/sections/CocktailGallery";
import { EventsFooter } from "@/src/components/sections/EventsFooter";
import { HeaderHero } from "@/src/components/sections/HeaderHero";
import { MenuSections } from "@/src/components/sections/MenuSections";
import { StoryExperience } from "@/src/components/sections/StoryExperience";
import { MobileParallax } from "@/src/components/site/MobileParallax";

export const metadata: Metadata = {
  title: "Brunch Srbija | Restorani za svaki deo dana",
  description: "Pronađite svoj Brunch restoran u Novom Sadu, Beogradu ili Novoj Pazovi. Dobra hrana, omiljena kafa i atmosfera kojoj se vraćate.",
};

export default function Home() {
  return (
    <main>
      <MobileParallax />
      <HeaderHero />
      <div id="about">
        <StoryExperience />
      </div>
      <CocktailGallery />
      <MenuSections />
      <div id="contact">
        <EventsFooter />
      </div>
    </main>
  );
}
