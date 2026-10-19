import { featuredEvent, getGalleryItem } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import PrimaryButton from "../ui/PrimaryButton";
import Reveal from "../ui/Reveal";

const labelClass = `${SANS} text-[11px] font-semibold uppercase tracking-[0.26em] ${GOLD}`;
const valueClass = `${SANS} mt-1.5 text-[15px] leading-relaxed text-[#F3EEE3]`;

// The big "next event" banner with the main Get Tickets button
export default function FeaturedEvent() {
  const photo = getGalleryItem(featuredEvent.photoSlug);

  return (
    <section className="bg-black px-6 py-20 sm:py-24">
      <Reveal className="mx-auto grid max-w-6xl overflow-hidden border border-[#C9A24B]/40 bg-[#0d0d0d] lg:grid-cols-2">
        <img
          src={photo?.photo}
          alt={photo?.alt ?? ""}
          className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[520px]"
        />

        <div className="flex flex-col justify-center px-6 py-12 sm:px-12">
          <p className={`${labelClass} !tracking-[0.38em]`}>Next event</p>
          <h2 className={`${SERIF} mt-4 text-4xl font-semibold leading-tight text-[#F3EEE3] sm:text-5xl`}>
            {featuredEvent.name}
          </h2>
          <span className="mt-6 block h-px w-14 bg-[#C9A24B]" aria-hidden="true" />

          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <dt className={labelClass}>Date</dt>
              <dd className={valueClass}>{featuredEvent.date}</dd>
            </div>
            <div>
              <dt className={labelClass}>Time</dt>
              <dd className={valueClass}>{featuredEvent.time}</dd>
            </div>
            <div>
              <dt className={labelClass}>Where</dt>
              <dd className={valueClass}>{featuredEvent.venue}</dd>
            </div>
          </dl>

          <p className={`${SANS} mt-7 max-w-md text-sm leading-loose text-[#F3EEE3]/75`}>{featuredEvent.description}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PrimaryButton href={featuredEvent.ticketUrl} className="!px-8 !py-4">
              Get Tickets
            </PrimaryButton>
            <span className={`${SANS} text-xs text-[#F3EEE3]/75`}>{featuredEvent.priceNote}, opens our ticketing site</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
