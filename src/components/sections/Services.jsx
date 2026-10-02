import { serviceItems } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title="Our Services" />

      <ul className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {serviceItems.map(({ label, description, Icon }, index) => (
          <Reveal
            as="li"
            key={label}
            delay={index * 140}
            className="group flex flex-col items-center text-center"
          >
            <Icon
              size={44}
              strokeWidth={1}
              className={`${GOLD} transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110`}
              aria-hidden="true"
            />
            <span className="mt-6 h-px w-10 bg-[#C9A24B]" aria-hidden="true" />
            <h3 className={`${SERIF} mt-5 text-2xl font-semibold text-[#F3EEE3]`}>{label}</h3>
            <p className={`${SANS} mt-3 max-w-[220px] text-xs leading-relaxed text-[#F3EEE3]/60`}>{description}</p>
          </Reveal>
        ))}
      </ul>

      {/* The only place halal is mentioned on the page */}
      <p className={`${SANS} mt-16 text-center text-xs tracking-[0.15em] text-[#F3EEE3]/70`}>
        All our food is halal.
      </p>

      <div className="mt-8 text-center">
        <OutlineButton href="#quote">Learn more</OutlineButton>
      </div>
    </section>
  );
}
