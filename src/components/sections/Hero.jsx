import { PLACEHOLDERS } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import QuoteButton from "../ui/QuoteButton";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end justify-center overflow-hidden bg-black">
      {/* Replace with the hero dish photo, then keep the dark overlay below */}
      <div className="absolute inset-0 animate-slow-zoom">
        <PhotoPlaceholder label="[Add your best dish photo here]" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-24 text-center">
        <h1
          style={{ animationDelay: "300ms" }}
          className={`${SERIF} animate-fade-up text-5xl font-bold tracking-[0.15em] text-[#F3EEE3] sm:text-7xl`}
        >
          {PLACEHOLDERS.businessName}
        </h1>
        <p
          style={{ animationDelay: "650ms" }}
          className={`${SANS} mt-5 animate-fade-up text-xs uppercase tracking-[0.35em] ${GOLD}`}
        >
          Nigerian &amp; Ghanaian catering in Edmonton
        </p>
        <div style={{ animationDelay: "1000ms" }} className="mt-10 animate-fade-up">
          <QuoteButton />
        </div>
      </div>

      <span
        className="absolute bottom-0 left-1/2 z-10 h-14 w-px origin-top -translate-x-1/2 animate-line-grow bg-[#C9A24B]/70"
        aria-hidden="true"
      />
    </section>
  );
}
