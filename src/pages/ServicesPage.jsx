import ServicesDetail from "../components/sections/ServicesDetail";
import CtaBand from "../components/ui/CtaBand";
import Ornament from "../components/ui/Ornament";
import PageBanner from "../components/ui/PageBanner";
import Reveal from "../components/ui/Reveal";
import { getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";
import { SANS, SERIF } from "../styles/tokens";

export default function ServicesPage() {
  usePageTitle(
    "Services",
    "Wedding, corporate, private party and event catering in Edmonton and surrounding areas.",
  );

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Whatever the occasion, the menu is built around your event and your guest count."
        image={getGalleryItem("owner-at-domes")?.photo}
      />
      <ServicesDetail />

      {/* The only place halal is mentioned on the whole site */}
      <section className="bg-black px-6 py-20 text-center sm:py-24">
        <Ornament isVisible />
        <Reveal>
          <p className={`${SERIF} mt-7 text-3xl font-medium text-[#F3EEE3] sm:text-4xl`}>All our food is halal.</p>
          <p className={`${SANS} mt-4 text-[13px] tracking-[0.15em] text-[#F3EEE3]/65`}>
            Serving Edmonton and surrounding areas.
          </p>
        </Reveal>
      </section>

      <CtaBand showWhatsApp />
    </>
  );
}
