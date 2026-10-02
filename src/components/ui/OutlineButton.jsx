import { GOLD, GOLD_BORDER, SANS } from "../../styles/tokens";

export default function OutlineButton({ href, children }) {
  return (
    <a
      href={href}
      className={`${SANS} inline-block border ${GOLD_BORDER} px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] ${GOLD} transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A24B] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C518]`}
    >
      {children}
    </a>
  );
}
