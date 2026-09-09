import type { CSSProperties } from "react";

/** Soft deceleration curve shared by the CSS entrances and Motion defaults. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Stagger step for the `.rise` / `.rise-scale` entrance classes.
 * Entrances are CSS so they paint without waiting for hydration; Motion is
 * reserved for the interactions that actually need spring physics.
 */
export const riseDelay = (ms: number): CSSProperties =>
  ({ "--rise-delay": `${ms}ms` }) as CSSProperties;
