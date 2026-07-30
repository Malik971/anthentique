import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedMenuSection } from "@/components/sections/FeaturedMenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OpeningHoursSection } from "@/components/sections/OpeningHoursSection";
import { QuickInfoSection } from "@/components/sections/QuickInfoSection";
import { SocialSection } from "@/components/sections/SocialSection";

export default function Home() {
  return (
    <>
      <main id="contenu">
        <HeroSection />
        <QuickInfoSection />
        <FeaturedMenuSection />
        <ExperienceSection />
        <GallerySection />
        <OpeningHoursSection />
        <SocialSection />
      </main>
      <MobileActionBar />
    </>
  );
}
