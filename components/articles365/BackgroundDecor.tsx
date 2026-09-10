/**
 * Ambient background: the warm ground, an Antique Brass glow drifting at the
 * top and a Muted Tan pocket below, plus a linen grain. Pure CSS on purpose —
 * no JS, no blur filters, no layout cost.
 */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ground"
    >
      <div className="decor-blob decor-blob--brass -top-[26vh] -right-[16vw] size-[74vmax] sm:size-[54vmax]" />
      <div className="decor-blob decor-blob--tan -bottom-[28vh] -left-[18vw] size-[70vmax] sm:size-[50vmax]" />
      <div className="decor-grain" />
    </div>
  );
}
