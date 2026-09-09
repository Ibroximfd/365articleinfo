/**
 * Ambient background: the Muted Tan ground, a slow-drifting Antique Brass glow,
 * a Warm Grey light and a deeper tan pocket for dimension, and a linen grain.
 * Pure CSS on purpose — no JS, no blur filters, no layout cost.
 */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ground"
    >
      <div className="decor-blob decor-blob--brass -top-[18vh] -left-[14vw] size-[68vmax] sm:size-[52vmax]" />
      <div className="decor-blob decor-blob--warm-grey -right-[18vw] top-[22vh] size-[60vmax] sm:size-[46vmax]" />
      <div className="decor-blob decor-blob--tan -bottom-[22vh] left-[12vw] size-[56vmax] sm:size-[44vmax]" />

      {/* Light falls from the top: a touch of Warm Grey above, a soft vignette
          below, so the plate sits in a lit room rather than on a flat swatch. */}
      <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-warm-grey/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-tan-deep/45 to-transparent" />

      <div className="decor-grain" />
    </div>
  );
}
