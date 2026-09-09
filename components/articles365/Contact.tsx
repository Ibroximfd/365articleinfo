import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/links";
import { riseDelay } from "@/lib/motion";
import { TelegramGlyph } from "./SocialIcons";

/**
 * The contact line. A person rather than a channel, so it is set like a
 * signature under the hero — small caps label, the handle in brass — instead
 * of as a fifth card competing with the book's media.
 */
export function Contact() {
  return (
    <div
      style={riseDelay(430)}
      className="rise-slide flex flex-col items-center lg:mt-11 lg:items-start"
    >
      <span aria-hidden className="mb-7 h-px w-10 bg-warm-grey lg:mb-6" />

      <a
        href={CONTACT.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group -m-2 inline-flex items-center gap-4 rounded-2xl p-2 transition-colors duration-300 hover:bg-white/70"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-charcoal-lift to-ink text-brass shadow-chip ring-1 ring-brass/30 transition-[transform,box-shadow] duration-300 group-hover:scale-[1.06] group-hover:ring-brass/60">
          <TelegramGlyph className="size-[1.05rem]" />
        </span>

        <span className="flex flex-col text-left">
          <span className="text-[0.62rem] font-semibold tracking-[0.28em] text-ink-faint uppercase">
            {CONTACT.label}
          </span>
          <span className="mt-1 flex items-baseline gap-2">
            <span className="relative inline-block font-semibold tracking-[-0.01em] text-brass-deep">
              {CONTACT.handle}
              <span
                aria-hidden
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </span>
            <ArrowUpRight
              aria-hidden
              strokeWidth={1.75}
              className="size-4 self-center text-ink-faint transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep"
            />
          </span>
          <span className="mt-0.5 text-[0.8rem] text-ink-soft">{CONTACT.note}</span>
          <span className="sr-only"> {CONTACT.hint}</span>
        </span>
      </a>
    </div>
  );
}
