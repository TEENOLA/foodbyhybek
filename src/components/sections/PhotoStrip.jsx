import { getGalleryItem } from "../../data/siteContent";
import Reveal from "../ui/Reveal";

// A short row of gallery photos picked by slug. Used on Home, About and Events.
export default function PhotoStrip({ slugs, columnsClass = "grid-cols-2 lg:grid-cols-4" }) {
  const photos = slugs.map(getGalleryItem).filter(Boolean);

  return (
    <ul className={`mx-auto grid max-w-6xl gap-3 ${columnsClass}`}>
      {photos.map((photo, index) => (
        <Reveal as="li" key={photo.slug} delay={index * 120}>
          <img src={photo.photo} alt={photo.alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />
        </Reveal>
      ))}
    </ul>
  );
}
