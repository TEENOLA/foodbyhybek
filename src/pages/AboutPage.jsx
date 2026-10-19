import PhotoStrip from "../components/sections/PhotoStrip";
import Story from "../components/sections/Story";
import CtaBand from "../components/ui/CtaBand";
import PageBanner from "../components/ui/PageBanner";
import Reveal from "../components/ui/Reveal";
import logoMark from "../assets/logo-mark.png";
import { PLACEHOLDERS, getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";
import { SERIF } from "../styles/tokens";

export default function AboutPage() {
  usePageTitle("About", "Meet Hybek, owner of FOODBYHYBEK, and the story behind the food.");

  return (
    <>
      <PageBanner
        title={`Meet ${PLACEHOLDERS.ownerName}`}
        subtitle={`${PLACEHOLDERS.ownerTitle}, ${PLACEHOLDERS.businessName}`}
        image={getGalleryItem("speaking-banners")?.photo}
      />
      <Story variant="full" />

      <section className="bg-black px-6 py-24 text-center sm:py-32">
        <Reveal>
          <img src={logoMark} alt="" className="mx-auto h-24 w-auto" />
          <p className={`${SERIF} mt-8 text-5xl font-medium italic leading-tight text-[#F3EEE3] sm:text-6xl`}>
            From my kitchen to yours.
          </p>
        </Reveal>
      </section>

      <section className="bg-black px-3 pb-24 sm:pb-28">
        <PhotoStrip slugs={["fbh-domes", "at-the-pot", "stew-station-team"]} columnsClass="grid-cols-1 sm:grid-cols-3" />
      </section>

      <CtaBand title="Let's talk about your event" />
    </>
  );
}
