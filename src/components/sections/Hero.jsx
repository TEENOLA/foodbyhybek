import heroPhoto from "../../assets/hero/hero-buffet-perspective.webp";
import { PLACEHOLDERS } from "../../data/siteContent";
import { GOLD, SANS } from "../../styles/tokens";
import logoFull from "../../assets/logo-full.png";
import QuoteButton from "../ui/QuoteButton";

export default function Hero() {
  return (
    // mt-24 matches the nav height, so the photo starts below the nav instead of behind it
    <section
      id="top"
      className="relative mt-24 flex min-h-[calc(100svh-6rem)] items-end justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroPhoto}
          alt="Buffet line of rice dishes in black and gold serving bowls"
          fetchPriority="high"
          className="h-full w-full object-cover object-[40%_45%] md:object-[50%_45%]"
        />
      </div>
      {/* Dark overlay keeps the logo readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-24 text-center">
        <h1 className="sr-only">{PLACEHOLDERS.businessName}</h1>
        <img
          src={logoFull}
          alt=""
          style={{ animationDelay: "300ms" }}
          className="h-52 w-auto animate-fade-up drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)] sm:h-64"
        />
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
