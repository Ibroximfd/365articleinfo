import { riseDelay } from "@/lib/motion";

/** On wide screens the credit rides in the contact bar; here it closes the page. */
export function Footer() {
  return (
    <footer
      style={riseDelay(550)}
      className="rise mt-5 flex flex-col items-center gap-2 text-center lg:hidden"
    >
      <span
        aria-hidden
        className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <p className="text-[0.7rem] tracking-wide text-ink-soft">
        © Articles 365 — Consistency is the key
      </p>
    </footer>
  );
}
