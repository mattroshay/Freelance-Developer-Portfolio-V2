import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal for a section: attach the returned ref to a
 * container; every descendant carrying `data-reveal` fades/translates in
 * (staggered) when it enters the viewport. Mirrors the design reference's
 * data-reveal / data-reveal-group behaviour (see design.css).
 */
export function useRevealGroup<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (root.hasAttribute("data-reveal")) els.unshift(root);
    if (els.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
