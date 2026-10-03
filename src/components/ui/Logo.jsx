import logoFull from "../../assets/logo-full.png";
import logoMark from "../../assets/logo-mark.png";
import { PLACEHOLDERS } from "../../data/siteContent";

// "mark" is the circle only (for the nav). "full" includes the tagline underneath.
const logoVariants = {
  mark: { src: logoMark, sizeClass: "h-14 w-auto" },
  full: { src: logoFull, sizeClass: "h-32 w-auto" },
};

export default function Logo({ variant = "mark" }) {
  const { src, sizeClass } = logoVariants[variant];

  return (
    <a href="#top" className="inline-block">
      <img src={src} alt={PLACEHOLDERS.businessName} className={sizeClass} />
    </a>
  );
}
