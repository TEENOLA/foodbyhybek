import { upcomingEvents } from "../../data/siteContent";
import { SANS, SERIF } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

// Later events: one row each, with a date block and its own ticket button
export default function UpcomingEvents() {
  return (
    <section className="bg-[#141414] px-6 py-24 sm:py-28">
      <SectionHeading title="More upcoming events" />

      <ul className="mx-auto mt-14 max-w-6xl space-y-4">
        {upcomingEvents.map((event, index) => (
          <Reveal
            as="li"
            key={event.id}
            delay={index * 120}
            className="flex flex-col gap-5 border border-[#C9A24B]/30 bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-[#C9A24B] sm:flex-row sm:items-center sm:gap-8 sm:px-8"
          >
            <div className="w-24 shrink-0 border border-[#C9A24B]/60 py-3.5 text-center">
              <p className={`${SANS} text-[11px] font-semibold tracking-[0.26em] text-[#C9A24B]`}>{event.month}</p>
              <p className={`${SERIF} mt-1 text-4xl font-semibold leading-none text-[#F3EEE3]`}>{event.day}</p>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className={`${SERIF} text-3xl font-semibold leading-tight text-[#F3EEE3]`}>{event.title}</h3>
              <p className={`${SANS} mt-2 text-sm leading-relaxed text-[#F3EEE3]/75`}>{event.details}</p>
            </div>

            <OutlineButton href={event.ticketUrl}>Get Tickets</OutlineButton>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
