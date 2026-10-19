import OutlineButton from "../ui/OutlineButton";
import SectionHeading from "../ui/SectionHeading";
import PhotoStrip from "./PhotoStrip";

const stripSlugs = ["gold-domes-spread", "stew-station-team", "fbh-domes", "swallow-and-jollof"];

// Four-photo taster of the gallery, for the home page
export default function GalleryStrip() {
  return (
    <section className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title="Gallery" />
      <div className="mt-14">
        <PhotoStrip slugs={stripSlugs} />
      </div>
      <div className="mt-12 text-center">
        <OutlineButton href="/gallery">See all photos</OutlineButton>
      </div>
    </section>
  );
}
