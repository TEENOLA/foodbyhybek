import { SANS, SERIF } from "../../styles/tokens";
import Ornament from "./Ornament";

// Dark photo banner that opens every inner page.
export default function PageBanner({ title, subtitle, image, imageAlt = "" }) {
  return (
    <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-black sm:min-h-[340px]">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover object-[50%_45%]" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 px-6 py-16 text-center">
        <h1 className={`${SERIF} animate-fade-up text-5xl font-semibold leading-tight text-[#F3EEE3] sm:text-6xl`}>
          {title}
        </h1>
        <Ornament isVisible />
        {subtitle && (
          <p
            style={{ animationDelay: "250ms" }}
            className={`${SANS} mx-auto mt-6 max-w-xl animate-fade-up text-sm leading-loose text-[#F3EEE3]/80`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
