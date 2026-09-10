"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Motion defaults for the page.
 *
 * `LazyMotion` + `domAnimation` loads only the gesture features the tiles
 * actually use instead of the full `motion` runtime — components use `m.*`
 * rather than `motion.*` to opt into it.
 *
 * `reducedMotion="user"` makes Motion drop transform animation for anyone with
 * the OS setting on, so the tiles stop moving but still respond.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
