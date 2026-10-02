import { SANS } from "../../styles/tokens";

// Stand-in for a real photo. Swap for an <img> once the photos arrive.
export default function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br from-[#2a2418] via-[#16130d] to-[#0a0a0a] ${className}`}
    >
      <span className={`${SANS} px-4 text-center text-[11px] uppercase tracking-[0.25em] text-[#C9A24B]/60`}>
        {label}
      </span>
    </div>
  );
}
