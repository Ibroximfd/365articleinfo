import { riseDelay } from "@/lib/motion";

export function Footer() {
  return (
    <footer
      style={riseDelay(660)}
      className="rise mt-12 flex flex-col items-center gap-2 text-center sm:mt-14 lg:mt-16"
    >
      <span
        aria-hidden
        className="h-px w-14 bg-gradient-to-r from-transparent via-brass to-transparent"
      />
      <p className="text-xs tracking-wide text-ink-faint">
        © Articles 365 — Consistency is the key
      </p>
    </footer>
  );
}
