import { useState } from "react";
import { dishes, menuCategories } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import QuoteButton from "../ui/QuoteButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function MenuSection() {
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

      {/* Cards remount on category change so they animate in again */}
      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-3">
        {visibleDishes.map((dish, index) => (
          <Reveal as="li" key={`${activeCategory}-${dish.name}`} delay={index * 90}>
            <div className="h-full border border-[#C9A24B]/25 bg-[#141414] transition-colors duration-300 hover:border-[#C9A24B]">
              <PhotoPlaceholder label="[Add a dish photo]" className="aspect-[4/3] w-full" />
              <div className="p-5">
                <p className={`${SANS} text-[10px] uppercase tracking-[0.25em] ${GOLD}`}>{dish.origin}</p>
                <h3 className={`${SERIF} mt-2 text-2xl font-semibold text-[#F3EEE3]`}>{dish.name}</h3>
                <p className={`${SANS} mt-2 text-xs leading-relaxed text-[#F3EEE3]/60`}>
                  [A line or two about this dish]
                </p>
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
