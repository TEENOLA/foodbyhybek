import ownerPhoto from "../../assets/story/owner.webp";
import { PLACEHOLDERS } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import Reveal from "../ui/Reveal";

export default function Story() {
  return (
    <section id="story" className="grid bg-[#141414] lg:grid-cols-2">
      <Reveal from="left" className="relative min-h-[380px] lg:min-h-[560px]">
        <img
          src={ownerPhoto}
          alt={`${PLACEHOLDERS.ownerName}, owner of ${PLACEHOLDERS.businessName}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />
        {/* Soft fade into the panel beside (or below) the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] from-0% via-transparent via-30% to-transparent lg:bg-gradient-to-l" />
      </Reveal>

      <Reveal from="right" delay={200} className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
        <blockquote className={`${SERIF} text-3xl font-medium leading-snug text-[#F3EEE3] sm:text-4xl`}>
          “[Why did you start cooking for events? Say it in a sentence or two, in your own words.]”
        </blockquote>
        <span className="mt-8 block h-px w-14 bg-[#C9A24B]" aria-hidden="true" />
        <p className={`${SERIF} mt-5 text-2xl italic text-[#F3EEE3]`}>{PLACEHOLDERS.ownerName}</p>
        <p className={`${SANS} mt-1 text-xs tracking-[0.15em] ${GOLD}`}>{PLACEHOLDERS.ownerTitle}</p>
        <p className={`${SANS} mt-8 max-w-md text-sm leading-loose text-[#F3EEE3]/70`}>
          [A short paragraph about your story and what makes your food different]
        </p>
      </Reveal>
    </section>
  );
}
