import FeaturedEvent from "../components/sections/FeaturedEvent";
import PhotoStrip from "../components/sections/PhotoStrip";
import UpcomingEvents from "../components/sections/UpcomingEvents";
import CtaBand from "../components/ui/CtaBand";
import OutlineButton from "../components/ui/OutlineButton";
import PageBanner from "../components/ui/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import { getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";

const cateredSlugs = ["buffet-line", "gold-domes-spread", "plate-in-hand", "swallow-and-jollof"];

export default function EventsPage() {
  usePageTitle(
    "Events",
    "Upcoming FOODBYHYBEK events and tickets, plus events we have catered in Edmonton.",
  );

  return (
    <>
      <PageBanner
        title="Events"
        subtitle="Come and eat with us, and see the events we have catered."
        image={getGalleryItem("stew-station-team")?.photo}
      />
      <FeaturedEvent />
      <UpcomingEvents />

      <section className="bg-black px-6 py-24 sm:py-28">
        <SectionHeading title="Events we have catered" subtitle="Weddings, corporate events and private parties." />
        <div className="mt-14">
          <PhotoStrip slugs={cateredSlugs} />
        </div>
        <div className="mt-12 text-center">
          <OutlineButton href="/gallery">See the full gallery</OutlineButton>
        </div>
      </section>

      <CtaBand title="Hosting your own event?" />
    </>
  );
}
