import OutlineButton from "../components/ui/OutlineButton";
import usePageTitle from "../hooks/usePageTitle";
import { SANS, SERIF } from "../styles/tokens";

export default function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <section className="flex min-h-[60svh] flex-col items-center justify-center bg-black px-6 py-24 text-center">
      <h1 className={`${SERIF} text-5xl font-semibold text-[#F3EEE3] sm:text-6xl`}>Page not found</h1>
      <p className={`${SANS} mt-5 max-w-sm text-sm leading-relaxed text-[#F3EEE3]/70`}>
        That page doesn&apos;t exist. Head back home and take another look.
      </p>
      <div className="mt-9">
        <OutlineButton href="/">Back to home</OutlineButton>
      </div>
    </section>
  );
}
