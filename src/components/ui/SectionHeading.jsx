import useInView from "../../hooks/useInView";
import { SANS, SERIF } from "../../styles/tokens";
import Ornament from "./Ornament";

export default function SectionHeading({ title, subtitle }) {
  const [headingRef, isInView] = useInView();

  return (
    <div ref={headingRef} className="mx-auto max-w-2xl text-center">
      <h2
        className={`${SERIF} text-4xl font-semibold text-[#F3EEE3] transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-5xl ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {title}
      </h2>
      <Ornament isVisible={isInView} />
      {subtitle && (
        <p
          className={`${SANS} mt-6 text-sm leading-relaxed text-[#F3EEE3]/70 transition-opacity delay-500 duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
