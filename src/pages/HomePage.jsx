import CtaBand from "../components/ui/CtaBand";
import FeaturedDishes from "../components/sections/FeaturedDishes";
import GalleryStrip from "../components/sections/GalleryStrip";
import Hero from "../components/sections/Hero";
import ServicesTeaser from "../components/sections/ServicesTeaser";
import Story from "../components/sections/Story";
import Welcome from "../components/sections/Welcome";
import usePageTitle from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle(
    "",
    "FOODBYHYBEK: Nigerian and Ghanaian catering for weddings, corporate events and private parties in Edmonton, Alberta.",
  );

  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedDishes />
      <ServicesTeaser />
      <Story variant="teaser" />
      <GalleryStrip />
      <CtaBand showWhatsApp />
    </>
  );
}
