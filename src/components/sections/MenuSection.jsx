import { useState } from "react";
import logoMark from "../../assets/logo-mark.png";
import { dishes, menuCategories } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import QuoteButton from "../ui/QuoteButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

// Only show the Nigerian/Ghanaian tag when the menu actually mixes both
const hasMixedOrigins = new Set(dishes.map((dish) => dish.origin)).size > 1;

function DishPhoto({ dish }) {
  if (dish.photo) {
    return (
      <div className="overflow-hidden">
        <img
          src={dish.photo}
          alt={dish.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  // No photo yet: branded placeholder card
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[#2a2418] via-[#16130d] to-[#0a0a0a]">
      <img src={logoMark} alt="" className="h-16 w-auto opacity-30" />
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const visibleDishes = dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="bg-[#141414] px-6 py-24 sm:py-32">
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

      {/* Cards remount on category change so they animate in again.
          Flex + centred rows keep a short row (3 dishes) tidy. */}
      <ul className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-5">
        {visibleDishes.map((dish, index) => (
          <Reveal
            as="li"
            key={`${activeCategory}-${dish.name}`}
            delay={index * 90}
            className="w-[calc(50%-0.625rem)] md:w-[calc(25%-0.9375rem)]"
          >
            <div className="group h-full border border-[#C9A24B]/25 bg-black transition-colors duration-300 hover:border-[#C9A24B]">
              <DishPhoto dish={dish} />
              <div className="p-4 sm:p-5">
                {hasMixedOrigins && (
                  <p className={`${SANS} text-[10px] uppercase tracking-[0.25em] ${GOLD}`}>{dish.origin}</p>
                )}
                <h3 className={`${SERIF} mt-1 text-xl font-semibold text-[#F3EEE3] sm:text-2xl`}>{dish.name}</h3>
                <p className={`${SANS} mt-2 text-xs leading-relaxed text-[#F3EEE3]/60`}>{dish.description}</p>
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
