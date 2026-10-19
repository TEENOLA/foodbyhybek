import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView]. isInView flips to true once the element
 * scrolls into view (as soon as its first pixels show), and stays true after that.
 */
export default function useInView(threshold = 0.01) {
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
      { threshold, rootMargin: "0px 0px 0px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isInView];
}
