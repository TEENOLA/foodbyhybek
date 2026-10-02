import { SANS, SERIF } from "../../styles/tokens";
import OutlineButton from "../ui/OutlineButton";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import Reveal from "../ui/Reveal";

export default function MenuBanner() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#1c1a17] px-6 py-24">
      {/* Replace with two real dishes, one on each side */}
      <PhotoPlaceholder
        label="[Add a dish photo]"
        className="absolute -left-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 animate-float rounded-full opacity-80 md:flex"
      />
      <PhotoPlaceholder
        label="[Add a dish photo]"
        className="absolute -right-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 animate-float rounded-full opacity-80 [animation-delay:-3s] md:flex"
      />

      <span className="absolute left-1/2 top-8 h-12 w-px bg-[#F3EEE3]/40" aria-hidden="true" />
      <span className="absolute bottom-8 left-1/2 h-12 w-px bg-[#F3EEE3]/40" aria-hidden="true" />

      <Reveal className="relative z-10 text-center">
        <h2 className={`${SERIF} mx-auto max-w-xl text-4xl font-semibold text-[#F3EEE3] sm:text-5xl`}>
          Explore our authentic menu
        </h2>
        <p className={`${SANS} mt-5 text-sm text-[#F3EEE3]/70`}>
          [A short line about your dishes and how you prepare them]
        </p>
        <div className="mt-8">
          <OutlineButton href="#menu">Menu</OutlineButton>
        </div>
      </Reveal>
    </section>
  );
}
