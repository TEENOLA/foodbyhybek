import { WHATSAPP_LINK } from "../../data/siteContent";
import { SANS, SERIF } from "../../styles/tokens";
import OutlineButton from "./OutlineButton";
import QuoteButton from "./QuoteButton";
import Reveal from "./Reveal";

// Closing "request a quote" panel used at the bottom of most pages.
export default function CtaBand({
  title = "Planning an event?",
  text = "Tell us about your event and we'll get back to you with a custom quote.",
  showWhatsApp = false,
  backgroundClass = "bg-[#141414]",
}) {
  return (
    <section className={`${backgroundClass} px-6 py-24 sm:py-28`}>
      <Reveal className="mx-auto max-w-3xl border border-[#C9A24B]/40 bg-[#0d0d0d] px-6 py-14 text-center sm:px-12">
        <h2 className={`${SERIF} text-4xl font-semibold leading-tight text-[#F3EEE3] sm:text-5xl`}>{title}</h2>
        <p className={`${SANS} mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#F3EEE3]/70`}>{text}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <QuoteButton />
          {showWhatsApp && <OutlineButton href={WHATSAPP_LINK}>Message on WhatsApp</OutlineButton>}
        </div>
      </Reveal>
    </section>
  );
}
