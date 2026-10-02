/**
 * FOODBYHYBEK: single-page catering site (React + Tailwind, plain JSX)
 *
 * Setup
 * - Dependencies: react, lucide-react, tailwindcss
 * - Add to index.html <head>:
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 *   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
 * - Add `scroll-smooth` to the <html> element so anchor links glide.
 *
 * Everything marked [in brackets] or listed in PLACEHOLDERS is waiting on the client.
 */

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Cake,
  Heart,
  Mail,
  Menu as MenuIcon,
  MessageCircle,
  PartyPopper,
  Phone,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Placeholders: swap these as the client's content arrives                   */
/* -------------------------------------------------------------------------- */

const PLACEHOLDERS = {
  businessName: "FOODBYHYBEK",
  phoneDisplay: "[Phone number]",
  phoneHref: "tel:+10000000000", // [replace]
  whatsappNumber: "10000000000", // [digits only, with country code]
  email: "order@foodbyhybek.com",
  address: "[Address, Edmonton, AB]",
  instagramUrl: "#", // [replace]
  facebookUrl: "#", // [replace]
  instagramHandle: "@[handle]",
  ownerName: "[Owner name]",
  ownerTitle: "[Founder & Head Chef]",
};

const WHATSAPP_LINK = `https://wa.me/${PLACEHOLDERS.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like a quote for an event.",
)}`;

const GOLD = "text-[#C9A24B]";
const GOLD_BORDER = "border-[#C9A24B]";
const SERIF = "font-['Cormorant_Garamond',serif]";
const SANS = "font-['Montserrat',sans-serif]";

const navLinksLeft = [
  { label: "Welcome", href: "#welcome" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
];
const navLinksRight = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
];

const serviceItems = [
  {
    label: "Weddings",
    description: "[One line on traditional spreads for the big day]",
    Icon: Heart,
  },
  {
    label: "Corporate",
    description: "[One line on office lunches and company events]",
    Icon: Briefcase,
  },
  {
    label: "Private Parties",
    description: "[One line on birthdays and house gatherings]",
    Icon: PartyPopper,
  },
  {
    label: "Other Events",
    description: "[Naming ceremonies, graduations, funerals]",
    Icon: Cake,
  },
];

const menuCategories = [
  "Rice & Mains",
  "Soups & Swallows",
  "Grills & Small Chops",
  "Sides & Drinks",
];

// Sample dish names only. Replace with her real list.
const dishes = [
  { name: "Jollof Rice", origin: "Nigerian", category: "Rice & Mains" },
  { name: "Fried Rice", origin: "Nigerian", category: "Rice & Mains" },
  { name: "Waakye", origin: "Ghanaian", category: "Rice & Mains" },
  { name: "Egusi Soup", origin: "Nigerian", category: "Soups & Swallows" },
  { name: "Pounded Yam", origin: "Nigerian", category: "Soups & Swallows" },
  { name: "Banku & Tilapia", origin: "Ghanaian", category: "Soups & Swallows" },
  { name: "Suya", origin: "Nigerian", category: "Grills & Small Chops" },
  { name: "Kelewele", origin: "Ghanaian", category: "Grills & Small Chops" },
  { name: "Puff Puff", origin: "Nigerian", category: "Grills & Small Chops" },
  { name: "Fried Plantain", origin: "Nigerian", category: "Sides & Drinks" },
  { name: "Chin Chin", origin: "Nigerian", category: "Sides & Drinks" },
  { name: "Zobo", origin: "Nigerian", category: "Sides & Drinks" },
];

const eventTypes = ["Wedding", "Corporate", "Private party", "Other"];

/* -------------------------------------------------------------------------- */
/* Small shared pieces                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Scroll animation helpers. Elements start hidden and ease in once they
 * enter the viewport. Reduced-motion users get instant changes (see index.css).
 */
function useInView(threshold = 0.15) {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isInView];
}

const revealOffsets = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  none: "",
};

function Reveal({ as: Tag = "div", from = "up", delay = 0, className = "", children }) {
  const [elementRef, isInView] = useInView();

  return (
    <Tag
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${revealOffsets[from]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

function Ornament({ isVisible }) {
  return (
    <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
      <span
        className={`h-px w-10 origin-right bg-[#C9A24B]/70 transition-transform delay-300 duration-1000 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <span
        className={`h-1.5 w-1.5 rotate-45 bg-[#C9A24B] transition-all delay-200 duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
      <span
        className={`h-px w-10 origin-left bg-[#C9A24B]/70 transition-transform delay-300 duration-1000 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
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

function OutlineButton({ href, children }) {
  return (
    <a
      href={href}
      className={`${SANS} inline-block border ${GOLD_BORDER} px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] ${GOLD} transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A24B] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C518]`}
    >
      {children}
    </a>
  );
}

function QuoteButton({ className = "" }) {
  return (
    <a
      href="#quote"
      className={`${SANS} inline-block bg-[#F5C518] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd84a] hover:shadow-[0_10px_28px_-10px_rgba(245,197,24,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`}
    >
      Request a Quote
    </a>
  );
}

function PhotoPlaceholder({ label, className = "" }) {
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

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Logo() {
  // [Replace with the real logo file]
  return (
    <a href="#top" className={`${SERIF} text-2xl font-bold tracking-[0.18em] text-[#F3EEE3]`}>
      {PLACEHOLDERS.businessName}
    </a>
  );
}

function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = `${SANS} relative text-[11px] font-medium uppercase tracking-[0.3em] text-[#F3EEE3] transition-colors hover:text-[#C9A24B] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A24B] after:transition-transform after:duration-500 hover:after:scale-x-100`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 animate-fade-in transition-colors duration-300 ${
        hasScrolled || isMobileMenuOpen
          ? "border-b border-[#C9A24B]/60 bg-black"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
        <ul className="flex flex-col items-center gap-6 border-t border-[#C9A24B]/30 px-6 pb-8 pt-6 lg:hidden">
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

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end justify-center overflow-hidden bg-black">
      {/* [Replace with the hero dish photo, then keep the overlay] */}
      <div className="absolute inset-0 animate-slow-zoom">
        <PhotoPlaceholder label="Hero dish photo" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-24 text-center">
        <h1 style={{ animationDelay: "300ms" }} className={`${SERIF} animate-fade-up text-5xl font-bold tracking-[0.15em] text-[#F3EEE3] sm:text-7xl`}>
          {PLACEHOLDERS.businessName}
        </h1>
        <p style={{ animationDelay: "650ms" }} className={`${SANS} mt-5 animate-fade-up text-xs uppercase tracking-[0.35em] ${GOLD}`}>
          Nigerian &amp; Ghanaian catering in Edmonton
        </p>
        <div style={{ animationDelay: "1000ms" }} className="mt-10 animate-fade-up">
          <QuoteButton />
        </div>
      </div>

      <span className="absolute bottom-0 left-1/2 z-10 h-14 w-px origin-top -translate-x-1/2 animate-line-grow bg-[#C9A24B]/70" aria-hidden="true" />
    </section>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title={`Welcome to ${PLACEHOLDERS.businessName}`} />
      <Reveal delay={200} className={`${SANS} mx-auto mt-10 max-w-2xl space-y-6 text-center text-sm leading-loose text-[#F3EEE3]/75`}>
        <p>[One sentence on food and celebration. Example: great food is at the heart of every gathering.]</p>
        <p>
          [Who she is, what she cooks, and where. Example: a catering company serving Edmonton and the
          surrounding areas with authentic Nigerian and Ghanaian dishes.]
        </p>
      </Reveal>
      <Reveal delay={400} className="mt-12 text-center">
        <OutlineButton href="#quote">Let&apos;s connect</OutlineButton>
      </Reveal>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="grid bg-[#141414] lg:grid-cols-2">
      {/* [Replace with a photo of her cooking or at an event] */}
      <Reveal from="left" className="min-h-[360px] lg:min-h-[560px]">
        <PhotoPlaceholder label="Owner photo" className="h-full min-h-[360px] w-full lg:min-h-[560px]" />
      </Reveal>
      <Reveal from="right" delay={200} className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
        <blockquote className={`${SERIF} text-3xl font-medium leading-snug text-[#F3EEE3] sm:text-4xl`}>
          “[Why she started cooking for events, in one or two sentences, in her own words.]”
        </blockquote>
        <span className="mt-8 block h-px w-14 bg-[#C9A24B]" aria-hidden="true" />
        <p className={`${SERIF} mt-5 text-2xl italic text-[#F3EEE3]`}>{PLACEHOLDERS.ownerName}</p>
        <p className={`${SANS} mt-1 text-xs tracking-[0.15em] ${GOLD}`}>{PLACEHOLDERS.ownerTitle}</p>
        <p className={`${SANS} mt-8 max-w-md text-sm leading-loose text-[#F3EEE3]/70`}>
          [Short paragraph about her story and what makes her food different.]
        </p>
      </Reveal>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading title="Our Services" />

      <ul className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {serviceItems.map(({ label, description, Icon }, index) => (
          <Reveal as="li" key={label} delay={index * 140} className="group flex flex-col items-center text-center">
            <Icon size={44} strokeWidth={1} className={`${GOLD} transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110`} aria-hidden="true" />
            <span className="mt-6 h-px w-10 bg-[#C9A24B]" aria-hidden="true" />
            <h3 className={`${SERIF} mt-5 text-2xl font-semibold text-[#F3EEE3]`}>{label}</h3>
            <p className={`${SANS} mt-3 max-w-[220px] text-xs leading-relaxed text-[#F3EEE3]/60`}>{description}</p>
          </Reveal>
        ))}
      </ul>

      {/* The only place halal is mentioned on the page */}
      <p className={`${SANS} mt-16 text-center text-xs tracking-[0.15em] text-[#F3EEE3]/70`}>
        All our food is halal.
      </p>

      <div className="mt-8 text-center">
        <OutlineButton href="#quote">Learn more</OutlineButton>
      </div>
    </section>
  );
}

function MenuBanner() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#1c1a17] px-6 py-24">
      {/* [Replace with two real dishes, one on each side] */}
      <PhotoPlaceholder label="Dish photo" className="absolute -left-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 animate-float rounded-full opacity-80 md:flex" />
      <PhotoPlaceholder label="Dish photo" className="absolute -right-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 animate-float rounded-full opacity-80 [animation-delay:-3s] md:flex" />

      <span className="absolute left-1/2 top-8 h-12 w-px bg-[#F3EEE3]/40" aria-hidden="true" />
      <span className="absolute bottom-8 left-1/2 h-12 w-px bg-[#F3EEE3]/40" aria-hidden="true" />

      <Reveal className="relative z-10 text-center">
        <h2 className={`${SERIF} mx-auto max-w-xl text-4xl font-semibold text-[#F3EEE3] sm:text-5xl`}>
          Explore our authentic menu
        </h2>
        <p className={`${SANS} mt-5 text-sm text-[#F3EEE3]/70`}>[Short line about the dishes and how they're prepared]</p>
        <div className="mt-8">
          <OutlineButton href="#menu">Menu</OutlineButton>
        </div>
      </Reveal>
    </section>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const visibleDishes = dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading
        title="The Menu"
        subtitle="Every event is different. Pricing depends on your guest count and menu."
      />

      <div
        role="tablist"
        aria-label="Menu categories"
        className="mx-auto mt-12 flex max-w-4xl gap-3 overflow-x-auto pb-2 sm:justify-center"
      >
        {menuCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`${SANS} shrink-0 border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive
                  ? "border-[#C9A24B] bg-[#C9A24B] text-black"
                  : "border-[#C9A24B]/40 text-[#F3EEE3]/80 hover:border-[#C9A24B]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-3">
        {visibleDishes.map((dish, index) => (
          <Reveal as="li" key={`${activeCategory}-${dish.name}`} delay={index * 90}>
            <div className="h-full border border-[#C9A24B]/25 bg-[#141414] transition-colors duration-300 hover:border-[#C9A24B]">
            <PhotoPlaceholder label="Dish photo" className="aspect-[4/3] w-full" />
            <div className="p-5">
              <p className={`${SANS} text-[10px] uppercase tracking-[0.25em] ${GOLD}`}>{dish.origin}</p>
              <h3 className={`${SERIF} mt-2 text-2xl font-semibold text-[#F3EEE3]`}>{dish.name}</h3>
              <p className={`${SANS} mt-2 text-xs leading-relaxed text-[#F3EEE3]/60`}>[Short dish description]</p>
            </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-14 text-center">
        <QuoteButton />
      </div>
    </section>
  );
}

function Gallery() {
  const galleryPlaceholders = Array.from({ length: 6 }, (_, index) => `Gallery photo ${index + 1}`);

  return (
    <section id="gallery" className="bg-[#141414] px-6 py-24 sm:py-32">
      <SectionHeading title="Gallery" subtitle="Weddings, corporate events and private parties." />

      <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3">
        {galleryPlaceholders.map((label, index) => (
          <Reveal as="li" key={label} delay={(index % 3) * 120}>
            <div className="group overflow-hidden border border-transparent transition-colors duration-300 hover:border-[#C9A24B]">
              <PhotoPlaceholder label={label} className="aspect-square w-full transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        ))}
      </ul>

      <p className={`${SANS} mt-10 text-center text-xs tracking-[0.15em] text-[#F3EEE3]/70`}>
        Follow us on Instagram{" "}
        <a href={PLACEHOLDERS.instagramUrl} className={`${GOLD} underline underline-offset-4`}>
          {PLACEHOLDERS.instagramHandle}
        </a>
      </p>
    </section>
  );
}

function QuoteForm() {
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Honeypot: real visitors never fill this in
    if (formData.get("website")) return;

    setStatus("sending");
    try {
      // [Wire to your form backend (Formspree, Resend, Supabase edge function, etc.)
      //  and have it email order@foodbyhybek.com]
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `${SANS} w-full border border-[#C9A24B]/40 bg-black px-4 py-3 text-sm text-[#F3EEE3] placeholder:text-[#F3EEE3]/40 focus:border-[#F5C518] focus:outline-none`;
  const labelClass = `${SANS} mb-2 block text-[11px] tracking-[0.15em] text-[#F3EEE3]/70`;

  return (
    <section id="quote" className="bg-black px-6 py-24 sm:py-32">
      <SectionHeading
        title="Request a Quote"
        subtitle="Tell us about your event and we'll get back to you with a custom quote."
      />

      <Reveal className="mx-auto mt-14 grid max-w-6xl gap-12 border border-[#C9A24B]/40 bg-[#101010] p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Direct contact options come first on mobile */}
        <aside className="order-first space-y-6 lg:order-last">
          <a
            href={WHATSAPP_LINK}
            className={`${SANS} flex items-center justify-center gap-3 border ${GOLD_BORDER} py-3 text-xs font-medium uppercase tracking-[0.2em] ${GOLD} transition-colors hover:bg-[#C9A24B] hover:text-black`}
          >
            <MessageCircle size={18} /> Message on WhatsApp
          </a>
          <ul className={`${SANS} space-y-4 text-sm text-[#F3EEE3]/80`}>
            <li className="flex items-center gap-3">
              <Phone size={16} className={GOLD} />
              <a href={PLACEHOLDERS.phoneHref}>{PLACEHOLDERS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className={GOLD} />
              <a href={`mailto:${PLACEHOLDERS.email}`}>{PLACEHOLDERS.email}</a>
            </li>
          </ul>
          <p className={`${SANS} text-xs leading-relaxed text-[#F3EEE3]/60`}>
            Serving Edmonton and surrounding areas.
          </p>
        </aside>

        {status === "success" ? (
          <div className="flex animate-fade-up flex-col items-center justify-center py-12 text-center">
            <h3 className={`${SERIF} text-3xl font-semibold text-[#F3EEE3]`}>Request sent</h3>
            <p className={`${SANS} mt-4 max-w-sm text-sm text-[#F3EEE3]/70`}>
              Thank you. We'll review your event details and reply with a custom quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input id="name" name="name" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input id="phone" name="phone" type="tel" required className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClass}>Email (optional)</label>
              <input id="email" name="email" type="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="eventType" className={labelClass}>Event type</label>
              <select id="eventType" name="eventType" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select one</option>
                {eventTypes.map((eventType) => (
                  <option key={eventType} value={eventType}>{eventType}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="eventDate" className={labelClass}>Event date</label>
              <input id="eventDate" name="eventDate" type="date" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="guestCount" className={labelClass}>Estimated guests</label>
              <input id="guestCount" name="guestCount" type="number" min={1} className={inputClass} />
            </div>
            <div>
              <label htmlFor="area" className={labelClass}>Area in Edmonton</label>
              <input id="area" name="area" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="dishes" className={labelClass}>Dishes you're interested in</label>
              <input id="dishes" name="dishes" placeholder="Jollof, suya, egusi..." className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>Dietary needs or anything else</label>
              <textarea id="message" name="message" rows={4} className={inputClass} />
            </div>

            {/* Honeypot field, hidden from people */}
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${SANS} w-full bg-[#F5C518] py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#ffd84a] disabled:opacity-60`}
              >
                {status === "sending" ? "Sending..." : "Send request"}
              </button>
              {status === "error" && (
                <p className={`${SANS} mt-4 text-sm text-[#F3EEE3]/80`} role="alert">
                  Your request didn't send. Please try again, or{" "}
                  <a href={WHATSAPP_LINK} className={`${GOLD} underline underline-offset-4`}>
                    reach us on WhatsApp
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        )}
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 pb-16 text-center md:grid-cols-3 md:text-left">
        <div>
          <Logo />
        </div>

        <div>
          <h3 className={`${SERIF} text-2xl font-semibold text-[#F3EEE3]`}>Contact</h3>
          <span className="mx-auto mt-3 block h-px w-10 bg-[#C9A24B] md:mx-0" aria-hidden="true" />
          <ul className={`${SANS} mt-6 space-y-2 text-sm text-[#F3EEE3]/75`}>
            <li><a href={PLACEHOLDERS.phoneHref}>{PLACEHOLDERS.phoneDisplay}</a></li>
            <li><a href={`mailto:${PLACEHOLDERS.email}`}>{PLACEHOLDERS.email}</a></li>
            <li>{PLACEHOLDERS.address}</li>
          </ul>
          <div className={`${SANS} mt-5 flex justify-center gap-5 text-sm md:justify-start ${GOLD}`}>
            <a href={PLACEHOLDERS.instagramUrl}>Instagram</a>
            <a href={PLACEHOLDERS.facebookUrl}>Facebook</a>
          </div>
        </div>

        <div>
          <h3 className={`${SERIF} text-2xl font-semibold text-[#F3EEE3]`}>Explore</h3>
          <span className="mx-auto mt-3 block h-px w-10 bg-[#C9A24B] md:mx-0" aria-hidden="true" />
          <ul className={`${SANS} mt-6 space-y-2 text-sm text-[#F3EEE3]/75`}>
            {[...navLinksLeft, ...navLinksRight, { label: "Request a Quote", href: "#quote" }].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#C9A24B]">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${SANS} border-t border-[#F3EEE3]/10 py-6 text-center text-xs ${GOLD}`}>
        © {new Date().getFullYear()} {PLACEHOLDERS.businessName}. Website by deolustudio.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: "1800ms" }}
      className="fixed bottom-5 right-5 z-50 animate-fade-up flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <MessageCircle size={28} className="relative" />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function FoodByHybek() {
  return (
    <div className="bg-black text-[#F3EEE3] antialiased">
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Story />
        <Services />
        <MenuBanner />
        <MenuSection />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
