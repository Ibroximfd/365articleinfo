import Image from "next/image";
import { HERO } from "@/lib/links";
import { riseDelay } from "@/lib/motion";

/**
 * The masthead, full width. A server component on purpose: it holds the LCP
 * text, so it ships zero JS and its entrance runs as CSS from the first paint.
 *
 * Emblem and wordmark read as one centred lockup at every size — side by side
 * from `lg`, stacked below it. A footer strip names what the tiles are for, so
 * the page reads masthead → invitation → links.
 */
export function HeroTile() {
  return (
    <header
      style={riseDelay(40)}
      className="rise flex flex-col rounded-[1.75rem] border border-hairline bg-paper px-6 py-8 shadow-tile sm:rounded-[2rem] sm:px-10 sm:py-9 lg:col-span-12 lg:px-12 lg:py-10"
    >
      <div className="flex flex-col items-center gap-6 text-center sm:gap-7 lg:flex-row lg:justify-center lg:gap-11 lg:text-left xl:gap-12">
        <div style={riseDelay(90)} className="rise-mark shrink-0">
          <div className="float">
            <Image
              src="/articles365-emblem-gold.png"
              alt="Articles 365 emblem"
              width={640}
              height={640}
              priority
              sizes="(max-width: 640px) 116px, (max-width: 1024px) 140px, 164px"
              className="size-[116px] object-contain sm:size-[140px] lg:size-[164px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <p className="flex items-center gap-3 text-[0.63rem] font-semibold tracking-[0.32em] text-brass-deep uppercase">
            <span aria-hidden className="block h-px w-5 bg-brass" />
            {HERO.kicker}
            <span aria-hidden className="block h-px w-5 bg-brass lg:hidden" />
          </p>

          <h1 className="mt-2.5 font-serif text-[clamp(2.5rem,9.5vw,3rem)] leading-[1] text-ink sm:text-[3.6rem] lg:mt-3 lg:text-[4rem] xl:text-[4.4rem]">
            {HERO.brand}
          </h1>

          <p className="mt-2 font-serif text-xl text-brass-deep italic sm:text-2xl lg:mt-2.5 lg:text-[1.65rem]">
            {HERO.slogan}
          </p>
        </div>
      </div>

      {/* Bookends the kicker at the top of the tile and hands off to the tiles. */}
      <p className="mt-7 flex items-center justify-center gap-3 border-t border-hairline pt-5 text-[0.66rem] font-semibold tracking-[0.3em] text-brass-deep uppercase sm:mt-8 sm:gap-4 lg:mt-8">
        <span aria-hidden className="block h-px w-7 bg-brass sm:w-9" />
        {HERO.follow}
        <span aria-hidden className="block h-px w-7 bg-brass sm:w-9" />
      </p>
    </header>
  );
}
