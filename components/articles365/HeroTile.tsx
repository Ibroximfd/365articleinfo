import Image from "next/image";
import { HERO } from "@/lib/links";
import { riseDelay } from "@/lib/motion";

/**
 * The masthead tile. A server component on purpose: it holds the LCP text, so
 * it ships zero JS and its entrance runs as CSS from the first paint.
 */
export function HeroTile() {
  return (
    <header
      style={riseDelay(40)}
      className="rise flex flex-col items-center gap-6 rounded-[1.75rem] border border-hairline bg-paper px-6 py-8 text-center shadow-tile sm:rounded-[2rem] sm:px-10 sm:py-10 lg:col-span-8 lg:flex-row lg:gap-11 lg:px-13 lg:py-10 lg:text-left"
    >
      <div style={riseDelay(90)} className="rise-mark shrink-0">
        <div className="float">
          <Image
            src="/articles365-emblem.png"
            alt="Articles 365 emblem"
            width={640}
            height={640}
            priority
            sizes="(max-width: 640px) 104px, (max-width: 1024px) 128px, 152px"
            className="size-[104px] object-contain sm:size-[128px] lg:size-[152px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <p className="flex items-center gap-3 text-[0.63rem] font-semibold tracking-[0.32em] text-brass-deep uppercase">
          <span aria-hidden className="block h-px w-5 bg-brass" />
          {HERO.kicker}
          <span aria-hidden className="block h-px w-5 bg-brass lg:hidden" />
        </p>

        <h1 className="mt-2.5 font-serif text-[clamp(2.4rem,9vw,2.75rem)] leading-[1] text-ink sm:text-[3.4rem] lg:mt-3 lg:text-[3.8rem] xl:text-[4.25rem]">
          {HERO.brand}
        </h1>

        <p className="mt-2 font-serif text-xl text-brass-deep italic sm:text-2xl lg:text-[1.55rem]">
          {HERO.slogan}
        </p>
      </div>
    </header>
  );
}
