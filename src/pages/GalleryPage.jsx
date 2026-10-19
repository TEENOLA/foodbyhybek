import GalleryGrid from "../components/sections/GalleryGrid";
import CtaBand from "../components/ui/CtaBand";
import PageBanner from "../components/ui/PageBanner";
import { getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";

export default function GalleryPage() {
  usePageTitle(
    "Gallery",
    "Photos from FOODBYHYBEK events: weddings, corporate events and private parties in Edmonton.",
  );

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Weddings, corporate events and private parties."
        image={getGalleryItem("buffet-line")?.photo}
      />
      <GalleryGrid />
      <CtaBand />
    </>
  );
}
