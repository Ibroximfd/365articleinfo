import { CONTACT } from "@/lib/links";
import { riseDelay } from "@/lib/motion";
import { TelegramGlyph } from "./SocialIcons";

/**
 * Contact is a person, not a channel, so it gets its own bar under the tiles
 * rather than a fifth tile competing with the book's media — and a round chip
 * where the tiles' are square, so the eye files it differently.
 */
export function ContactBar() {
  return (
    <div style={riseDelay(480)} className="rise lg:col-span-12">
      <a
        href={CONTACT.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-full border border-hairline bg-paper p-3 shadow-tile transition-[box-shadow,border-color] duration-300 hover:border-black/40 hover:shadow-tile-hover sm:gap-5 sm:py-3.5 sm:pr-7 sm:pl-4"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-black-lift to-black text-gold-bright shadow-chip ring-1 ring-gold-bright/30 transition-transform duration-300 group-hover:scale-[1.06] sm:size-12">
          <TelegramGlyph className="size-4 sm:size-[1.1rem]" />
        </span>

        <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5">
          <span className="text-[0.6rem] font-semibold tracking-[0.24em] text-ink-soft uppercase sm:text-[0.65rem]">
            {CONTACT.label}
          </span>
          <span className="relative inline-block self-start font-semibold text-brass-deep sm:text-[1.05rem]">
            {CONTACT.handle}
            <span
              aria-hidden
              className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </span>
          <span className="sr-only"> {CONTACT.note}. {CONTACT.hint}</span>
        </span>

        <span className="hidden pr-1 text-xs tracking-wide text-ink-soft lg:block">
          © Articles 365 — Consistency is the key
        </span>
      </a>
    </div>
  );
}
