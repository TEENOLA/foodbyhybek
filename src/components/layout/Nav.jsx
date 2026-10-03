import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { navLinksLeft, navLinksRight } from "../../data/siteContent";
import { SANS } from "../../styles/tokens";
import Logo from "../ui/Logo";
import QuoteButton from "../ui/QuoteButton";

const linkClass = `${SANS} relative text-[11px] font-medium uppercase tracking-[0.3em] text-[#F3EEE3] transition-colors hover:text-[#C9A24B] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A24B] after:transition-transform after:duration-500 hover:after:scale-x-100`;

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-24 animate-fade-in border-b border-[#C9A24B]/60 bg-black">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <ul className="hidden flex-1 items-center gap-8 lg:flex">
          {navLinksLeft.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Logo />

        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          {navLinksRight.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <QuoteButton />
        </div>

        <button
          type="button"
          className="text-[#F3EEE3] lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <ul className="absolute inset-x-0 top-full flex flex-col items-center gap-6 border-b border-[#C9A24B]/60 bg-black px-6 pb-8 pt-6 lg:hidden">
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <QuoteButton />
          </li>
        </ul>
      )}
    </header>
  );
}
