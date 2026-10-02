export default function Ornament({ isVisible }) {
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
