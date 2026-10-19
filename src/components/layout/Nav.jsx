import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navLinksLeft, navLinksRight } from "../../data/siteContent";
import { SANS } from "../../styles/tokens";
import Logo from "../ui/Logo";
import QuoteButton from "../ui/QuoteButton";

const baseLinkClass = `${SANS} relative text-[11px] font-medium uppercase tracking-[0.3em] transition-colors hover:text-[#C9A24B] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#C9A24B] after:transition-transform after:duration-500`;

// The page you are on stays gold with its underline showing
const getLinkClass = ({ isActive }) =>
  `${baseLinkClass} ${
    isActive ? "text-[#C9A24B] after:scale-x-100" : "text-[#F3EEE3] after:scale-x-0 hover:after:scale-x-100"
  }`;

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-24 animate-fade-in border-b border-[#C9A24B]/60 bg-black">
      <nav aria-label="Main" className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <ul className="hidden flex-1 items-center gap-8 xl:flex">
          {navLinksLeft.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={getLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Logo />

        <div className="hidden flex-1 items-center justify-end gap-8 xl:flex">
          {navLinksRight.map((link) => (
            <NavLink key={link.to} to={link.to} className={getLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <QuoteButton />
        </div>

        <button
          type="button"
          className="text-[#F3EEE3] xl:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <ul className="absolute inset-x-0 top-full flex flex-col items-center gap-6 border-b border-[#C9A24B]/60 bg-black px-6 pb-8 pt-6 xl:hidden">
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={getLinkClass} onClick={closeMobileMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li onClick={closeMobileMenu}>
            <QuoteButton />
          </li>
        </ul>
      )}
    </header>
  );
}
