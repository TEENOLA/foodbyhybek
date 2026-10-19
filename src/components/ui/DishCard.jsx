import logoMark from "../../assets/logo-mark.png";
import { dishes } from "../../data/siteContent";
import { GOLD, SANS, SERIF } from "../../styles/tokens";

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

export default function DishCard({ dish }) {
  return (
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
  );
}
