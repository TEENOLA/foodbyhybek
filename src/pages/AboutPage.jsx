import PhotoStrip from "../components/sections/PhotoStrip";
import Story from "../components/sections/Story";
import CtaBand from "../components/ui/CtaBand";
import PageBanner from "../components/ui/PageBanner";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import logoMark from "../assets/logo-mark.png";
import { aboutContent, getGalleryItem } from "../data/siteContent";
import usePageTitle from "../hooks/usePageTitle";
import { SANS, SERIF } from "../styles/tokens";

export default function AboutPage() {
  usePageTitle("About Us", "FOODBYHYBEK is Edmonton catering where culinary excellence meets heartfelt service. Meet Hybek and the team.");

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Where culinary excellence meets heartfelt service"
        image={getGalleryItem("speaking-banners")?.photo}
      />
      <Story variant="full" />

      <section className="bg-black px-6 py-20 text-center sm:py-28">
        <Reveal>
          <SectionHeading title={aboutContent.setApartTitle} />
          <p className={`${SANS} mx-auto mt-8 max-w-2xl text-base leading-loose text-[#F3EEE3]/75`}>
            {aboutContent.setApart}
          </p>
        </Reveal>
      </section>

      <section className="bg-[#141414] px-6 py-20 text-center sm:py-28">
        <Reveal>
          <img src={logoMark} alt="" className="mx-auto h-20 w-auto" />
          <h2 className={`${SERIF} mt-8 text-4xl font-medium italic leading-tight text-[#F3EEE3] sm:text-5xl`}>
            {aboutContent.momentsTitle}
          </h2>
          <p className={`${SANS} mx-auto mt-6 max-w-2xl text-base leading-loose text-[#F3EEE3]/75`}>
            {aboutContent.moments}
          </p>
          <span className="mx-auto mt-10 block h-px w-14 bg-[#C9A24B]" aria-hidden="true" />
          <p className={`${SERIF} mx-auto mt-10 max-w-2xl text-2xl font-medium leading-snug text-[#C9A24B] sm:text-3xl`}>
            {aboutContent.closing}
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
