import { PLACEHOLDERS, galleryItems } from "../../data/siteContent";
import { SANS } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";

// The full photo grid for the Gallery page
export default function GalleryGrid() {
  return (
    <section className="bg-black px-6 py-20 sm:py-24">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3">
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

      <div className="mt-14 text-center">
        <p className={`${SANS} text-xs tracking-[0.15em] text-[#F3EEE3]/70`}>More from our events on Instagram</p>
        <div className="mt-5">
          <OutlineButton href={PLACEHOLDERS.instagramUrl}>Follow {PLACEHOLDERS.instagramHandle}</OutlineButton>
        </div>
      </div>
    </section>
  );
}
