"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * useLayoutEffect runs after DOM mutation but before the browser paints, so
 * the tween's from-state is applied without a flash of fully-visible content.
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
      const targets = root.querySelectorAll("[data-motion]");
      if (targets.length === 0) return;

      /*
       * transform and opacity only — neither triggers layout, so the space
       * these elements occupy is already reserved before they animate and
       * nothing shifts after paint.
       */
      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
