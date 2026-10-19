import { useState } from "react";
import { dishes, menuCategories } from "../../data/siteContent";
import { SANS } from "../../styles/tokens";
import DishCard from "../ui/DishCard";

// Category tabs plus the dish cards for the chosen category
export default function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const visibleDishes = dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="bg-[#141414] px-6 py-14 sm:py-16">
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mx-auto flex max-w-4xl gap-3 overflow-x-auto pb-2 sm:justify-center"
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

      <p className={`${SANS} mt-7 text-center text-xs tracking-[0.15em] text-[#F3EEE3]/60`} aria-live="polite">
        {visibleDishes.length} dishes in {activeCategory}
      </p>

      {/* Cards fade in on load and on category change (no scroll trigger, so nothing starts hidden below the fold).
          Flex + centred rows keep a short row (3 dishes) tidy. */}
      <ul className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-5">
        {visibleDishes.map((dish, index) => (
          <li
            key={`${activeCategory}-${dish.name}`}
            style={{ animationDuration: "450ms", animationDelay: `${Math.min(index, 7) * 40}ms` }}
            className="w-[calc(50%-0.625rem)] animate-fade-in md:w-[calc(25%-0.9375rem)]"
          >
            <DishCard dish={dish} />
          </li>
        ))}
      </ul>
    </section>
  );
}
