import useInView from "../../hooks/useInView";

const revealOffsets = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  none: "",
};

export default function Reveal({ as: Tag = "div", from = "up", delay = 0, className = "", children }) {
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
