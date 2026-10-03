import { PLACEHOLDERS, galleryItems } from "../../data/siteContent";
import { GOLD, SANS } from "../../styles/tokens";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title="Gallery" subtitle="Weddings, corporate events and private parties." />

      <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Reveal as="li" key={item.slug} delay={(index % 3) * 120}>
            <div className="group overflow-hidden border border-transparent transition-colors duration-300 hover:border-[#C9A24B]">
              <img
                src={item.photo}
                alt={item.alt}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
