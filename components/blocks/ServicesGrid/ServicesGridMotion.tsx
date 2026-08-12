"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Applies the from-state before paint; useEffect on the server to avoid a warning. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ServicesGridMotionProps {
  children: React.ReactNode;
}

/**
 * Renders no copy of its own — it wraps children already rendered on the
 * server, so with JavaScript disabled the block is simply visible.
 *
 * The header runs on load, since a scroll trigger above the fold fires
 * instantly anyway. The cards keep a scroll trigger.
 */
export default function ServicesGridMotion({
  children,
}: ServicesGridMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    /*
     * Under `reduce` this callback never runs, so no from-state is applied
     * and the layout holds — rather than motion stopping mid-transform.
     */
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = root.querySelectorAll('[data-motion="intro"]');
      const badge = root.querySelector('[data-motion="badge"]');
      const cards = root.querySelectorAll('[data-motion="card"]');
      const cardList = cards[0]?.parentElement ?? null;

      /* transform and opacity only — no layout work per frame. */
      const timeline = gsap.timeline();

      if (intro.length > 0) {
        timeline.from(
          intro,
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          0.15,
        );
      }

      if (badge) {
        /* Relative rotation, so it ends on whatever rest angle the CSS sets. */
        timeline.from(
          badge,
          {
            opacity: 0,
            scale: 0.4,
            rotation: "-=40",
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          0.65,
        );
      }

      if (cards.length > 0 && cardList) {
        gsap.from(cards, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: cardList,
            start: "top 85%",
            once: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
