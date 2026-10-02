import { PLACEHOLDERS } from "../../data/siteContent";
import { SANS } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Welcome() {
  return (
    <section id="welcome" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title={`Welcome to ${PLACEHOLDERS.businessName}`} />
      <Reveal
        delay={200}
        className={`${SANS} mx-auto mt-10 max-w-2xl space-y-6 text-center text-sm leading-loose text-[#F3EEE3]/75`}
      >
        <p>[A sentence or two about what food means to you and to the events you cater]</p>
        <p>[Tell visitors who you are, what you cook, and where you serve]</p>
      </Reveal>
      <Reveal delay={400} className="mt-12 text-center">
        <OutlineButton href="#quote">Let&apos;s connect</OutlineButton>
      </Reveal>
    </section>
  );
}
