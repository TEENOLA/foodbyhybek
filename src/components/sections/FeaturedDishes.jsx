import { dishes } from "../../data/siteContent";
import DishCard from "../ui/DishCard";
import OutlineButton from "../ui/OutlineButton";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

// Four crowd-pleasers shown on the home page. Change the slugs to swap a dish.
const featuredSlugs = ["jollof-rice", "egusi-soup", "suya", "puff-puff"];
const featuredDishes = featuredSlugs
  .map((slug) => dishes.find((dish) => dish.slug === slug))
  .filter(Boolean);

export default function FeaturedDishes() {
  return (
    <section className="bg-[#141414] px-6 py-24 sm:py-32">
      <SectionHeading
        title="From the menu"
        subtitle="Every event is different. Pricing depends on your guest count and menu."
      />

      <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">
        {featuredDishes.map((dish, index) => (
          <Reveal as="li" key={dish.slug} delay={index * 100}>
            <DishCard dish={dish} />
          </Reveal>
        ))}
      </ul>

      <div className="mt-14 text-center">
        <OutlineButton href="/menu">View the full menu</OutlineButton>
      </div>
    </section>
  );
}
