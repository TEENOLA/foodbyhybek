import { PLACEHOLDERS } from "../../data/siteContent";
import { GOLD, SANS } from "../../styles/tokens";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const galleryPhotoLabels = Array.from({ length: 6 }, (_, index) => `[Add event photo ${index + 1}]`);

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#141414] px-6 py-24 sm:py-32">
      <SectionHeading title="Gallery" subtitle="Weddings, corporate events and private parties." />

      <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3">
        {galleryPhotoLabels.map((label, index) => (
          <Reveal as="li" key={label} delay={(index % 3) * 120}>
            <div className="group overflow-hidden border border-transparent transition-colors duration-300 hover:border-[#C9A24B]">
              <PhotoPlaceholder
                label={label}
                className="aspect-square w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </ul>

      <p className={`${SANS} mt-10 text-center text-xs tracking-[0.15em] text-[#F3EEE3]/70`}>
        Follow us on Instagram{" "}
        <a href={PLACEHOLDERS.instagramUrl} className={`${GOLD} underline underline-offset-4`}>
          {PLACEHOLDERS.instagramHandle}
        </a>
      </p>
    </section>
  );
}
