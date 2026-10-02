import { SANS } from "../../styles/tokens";

export default function QuoteButton({ className = "" }) {
  return (
    <a
      href="#quote"
      className={`${SANS} inline-block bg-[#F5C518] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd84a] hover:shadow-[0_10px_28px_-10px_rgba(245,197,24,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`}
    >
      Request a Quote
    </a>
  );
}
