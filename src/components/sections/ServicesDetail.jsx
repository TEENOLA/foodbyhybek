import { getGalleryItem, serviceItems } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";

// One photo-and-text row per service. Rows alternate sides.
export default function ServicesDetail() {
  return (
    <>
      {serviceItems.map(({ label, description, Icon, photoSlug, detailPlaceholder, quoteLabel }, index) => {
        const photo = getGalleryItem(photoSlug);
        const isReversed = index % 2 === 1;

        return (
          <section
            key={label}
            className={`grid overflow-hidden lg:grid-cols-2 ${index % 2 === 0 ? "bg-black" : "bg-[#141414]"}`}
          >
            <Reveal from={isReversed ? "right" : "left"} className={isReversed ? "lg:order-2" : ""}>
              <img
                src={photo?.photo}
                alt={photo?.alt ?? ""}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96 lg:h-[520px]"
              />
            </Reveal>

            <Reveal
              from={isReversed ? "left" : "right"}
              delay={150}
              className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16"
            >
              <Icon size={44} strokeWidth={1} className={GOLD} aria-hidden="true" />
              <span className="mt-5 block h-px w-10 bg-[#C9A24B]" aria-hidden="true" />
              <h2 className={`${SERIF} mt-5 text-4xl font-semibold leading-tight text-[#F3EEE3] sm:text-5xl`}>{label}</h2>
              <p className={`${SANS} mt-5 max-w-md text-[15px] leading-loose text-[#F3EEE3]/80`}>{description}</p>
              <p className={`${SANS} mt-3 max-w-md text-sm leading-loose text-[#F3EEE3]/60`}>{detailPlaceholder}</p>
              <div className="mt-8">
                <OutlineButton href="/quote">{quoteLabel}</OutlineButton>
              </div>
            </Reveal>
          </section>
        );
      })}
    </>
  );
}
