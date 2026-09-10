import Image from "next/image";
import { HERO } from "@/lib/links";
import { riseDelay } from "@/lib/motion";

/**
 * The masthead, full width. A server component on purpose: it holds the LCP
 * text, so it ships zero JS and its entrance runs as CSS from the first paint.
 *
 * Emblem and wordmark sit left, the three points right, split by a hairline —
 * on phones and tablets the same blocks stack and centre. A footer strip names
 * what the tiles below are for, so the page reads masthead → invitation → links.
 */
export function HeroTile() {
  return (
    <header
      style={riseDelay(40)}
      className="rise flex flex-col rounded-[1.75rem] border border-hairline bg-paper px-6 py-8 shadow-tile sm:rounded-[2rem] sm:px-10 sm:py-9 lg:col-span-12 lg:px-12 lg:py-8"
    >
      <div className="flex flex-col items-center gap-7 text-center sm:gap-8 lg:flex-row lg:gap-10 lg:text-left xl:gap-12">
        <div style={riseDelay(90)} className="rise-mark shrink-0">
          <div className="float">
            <Image
              src="/articles365-emblem.png"
              alt="Articles 365 emblem"
              width={640}
              height={640}
              priority
              sizes="(max-width: 640px) 108px, (max-width: 1024px) 132px, 156px"
              className="size-[108px] object-contain sm:size-[132px] lg:size-[156px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <p className="flex items-center gap-3 text-[0.63rem] font-semibold tracking-[0.32em] text-brass-deep uppercase">
            <span aria-hidden className="block h-px w-5 bg-brass" />
            {HERO.kicker}
            <span aria-hidden className="block h-px w-5 bg-brass lg:hidden" />
          </p>

          <h1 className="mt-2.5 font-serif text-[clamp(2.4rem,9vw,2.8rem)] leading-[1] text-ink sm:text-[3.4rem] lg:mt-3 lg:text-[3.05rem] xl:text-[3.35rem] 2xl:text-[3.7rem]">
            {HERO.brand}
          </h1>

          <p className="mt-2 font-serif text-xl text-brass-deep italic sm:text-2xl lg:text-[1.4rem] xl:text-[1.5rem]">
            {HERO.slogan}
          </p>
        </div>

        <span
          aria-hidden
          className="h-px w-16 bg-hairline sm:w-20 lg:h-24 lg:w-px lg:self-center xl:h-28"
        />

        <ul className="flex max-w-md flex-col gap-2.5 lg:ml-auto lg:max-w-[19rem] lg:gap-3 xl:max-w-[21rem]">
          {HERO.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-left text-[0.9rem] leading-relaxed text-ink-soft sm:text-[0.95rem]"
            >
              <span
                aria-hidden
                className="mt-[0.55em] size-[5px] shrink-0 rounded-full bg-brass"
              />
              <span className="text-pretty">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bookends the kicker at the top of the tile and hands off to the tiles. */}
      <p className="mt-7 flex items-center justify-center gap-3 border-t border-hairline pt-5 text-[0.66rem] font-semibold tracking-[0.3em] text-brass-deep uppercase sm:mt-8 sm:gap-4 lg:mt-7 lg:pt-5">
        <span aria-hidden className="block h-px w-7 bg-brass sm:w-9" />
        {HERO.follow}
        <span aria-hidden className="block h-px w-7 bg-brass sm:w-9" />
      </p>
    </header>
  );
}
