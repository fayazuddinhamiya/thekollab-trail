"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * useLayoutEffect runs after DOM mutation but before the browser paints, so
 * the tweens' from-state is applied without a flash of fully-visible content.
 * It has no meaning during SSR, so fall back to useEffect there to avoid
 * React's server warning.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ServicesGridMotionProps {
  children: React.ReactNode;
}

/**
 * Motion wrapper for the ServicesGrid block.
 *
 * This component renders no copy of its own — it only wraps children that
 * were already rendered on the server. With JavaScript disabled nothing
 * here executes and the block is left in its natural, fully visible state.
 *
 * Two separate behaviours:
 *
 *   - the header runs on load, because it is above the fold and a scroll
 *     trigger there would fire instantly anyway
 *   - the cards keep a scroll trigger, since they are mostly below the fold
 *     and should arrive as they are reached
 */
export default function ServicesGridMotion({
  children,
}: ServicesGridMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    /*
     * Everything registers inside a matchMedia context. When
     * prefers-reduced-motion is `reduce` the callback never runs, so no
     * from-state is ever applied and the layout holds intact — rather than
     * motion being cancelled partway and stranding a transform.
     */
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = root.querySelectorAll('[data-motion="intro"]');
      const badge = root.querySelector('[data-motion="badge"]');
      const cards = root.querySelectorAll('[data-motion="card"]');
      const cardList = cards[0]?.parentElement ?? null;

      /*
       * Load sequence. transform and opacity only — neither triggers
       * layout, so the space these elements occupy is already reserved and
       * nothing shifts after paint.
       */
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
        /*
         * Relative rotation so the tween ends on whatever rest angle the
         * stylesheet sets, rather than this file having to know it.
         */
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
