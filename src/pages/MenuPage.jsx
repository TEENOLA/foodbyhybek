import MenuCatalog from "../components/sections/MenuCatalog";
import CtaBand from "../components/ui/CtaBand";
import PageBanner from "../components/ui/PageBanner";
import { getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";

export default function MenuPage() {
  usePageTitle(
    "Menu",
    "Nigerian and Ghanaian dishes from FOODBYHYBEK: jollof, soups, grills, small chops and more, catered in Edmonton.",
  );

  return (
    <>
      <PageBanner
        title="The Menu"
        subtitle="Every event is different. Pricing depends on your guest count and menu."
        image={getGalleryItem("gold-domes-spread")?.photo}
      />
      <MenuCatalog />
      <CtaBand
        title="Ready to plan your menu?"
        text="Tell us about your event and the dishes you have in mind, and we'll build a custom quote around your guest count."
        backgroundClass="bg-black"
      />
    </>
  );
}
