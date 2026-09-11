/**
 * Points from the masthead down to the links. Decorative, so it is hidden from
 * assistive tech — and it is two 20px paths moving on the compositor, which is
 * what keeps a forever-running animation off the main thread.
 */
export function ScrollCue() {
  return (
    <div
      aria-hidden
      className="flex justify-center py-1.5 text-gold sm:py-2.5 lg:col-span-12"
    >
      <svg
        width="38"
        height="32"
        viewBox="0 0 30 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="cue-chevron" d="M7 6.5 15 14l8-7.5" />
        <path className="cue-chevron cue-chevron--trail" d="M7 14.5 15 22l8-7.5" />
      </svg>
    </div>
  );
}
