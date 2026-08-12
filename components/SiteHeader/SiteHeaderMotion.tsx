"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SiteHeaderMotionProps {
  children: React.ReactNode;
}

/**
 * Drops the nav bar in on load.
 *
 * Renders no copy of its own — it wraps children already rendered on the
 * server, so with JavaScript disabled the bar is simply present. Kept in
 * the header rather than driven from the block, since the block is
 * reordered inside a Payload page and should not reach outside itself.
 *
 * Timing is coordinated with the block's own intro by convention: the bar
 * lands first, then the copy beneath it follows from 0.15s.
 */
export default function SiteHeaderMotion({ children }: SiteHeaderMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(root, {
        opacity: 0,
        y: -12,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    return () => mm.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
