import { PLACEHOLDERS } from "../../data/siteContent";
import { SERIF } from "../../styles/tokens";

// Text logo for now. Replace with the real logo file when it arrives.
export default function Logo() {
  return (
    <a href="#top" className={`${SERIF} text-2xl font-bold tracking-[0.18em] text-[#F3EEE3]`}>
      {PLACEHOLDERS.businessName}
    </a>
  );
}
