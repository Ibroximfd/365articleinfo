import Image from "next/image";
import { HERO } from "@/lib/links";
import { riseDelay } from "@/lib/motion";

/**
 * Server component on purpose: the hero is the LCP block, so it ships zero JS
 * and its entrance runs as CSS from the first paint.
 */
export function Hero() {
  return (
    <header className="flex w-full flex-col items-center text-center lg:max-w-[30rem] lg:items-start lg:text-left 2xl:max-w-[34rem]">
      <div className="rise-scale relative" style={riseDelay(40)}>
        {/* Halo sits behind the mark so the brass reads warm against the ground. */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(closest-side,rgb(180_152_107_/_0.28),transparent_72%)]"
        />
        <div className="float">
          <Image
            src="/logo-mark.png"
            alt="Articles 365 logo: the brass 365 emblem"
            width={400}
            height={400}
            priority
            sizes="(max-width: 640px) 104px, (max-width: 1024px) 116px, (max-width: 1536px) 128px, 144px"
            className="size-[104px] object-contain sm:size-[116px] lg:size-[128px] 2xl:size-[144px]"
          />
        </div>
      </div>

      {/* Kicker: small tracked caps above a display line is the oldest
          "this was set by someone" signal in editorial typography. */}
      <p
        style={riseDelay(90)}
        className="rise-slide mt-6 flex items-center gap-3 text-[0.63rem] font-semibold tracking-[0.34em] text-brass-deep uppercase"
      >
        <span aria-hidden className="hidden h-px w-6 bg-brass lg:block" />
        {HERO.kicker}
      </p>

      <h1
        style={riseDelay(130)}
        className="rise-slide mt-3 font-serif text-[clamp(2.35rem,8vw,3.9rem)] leading-[1.04] font-bold tracking-[0.012em] text-balance text-ink lg:text-[2.95rem] xl:text-[3.6rem] 2xl:mt-4 2xl:text-[4.5rem]"
      >
        {HERO.brand}
      </h1>

      <div
        style={riseDelay(190)}
        className="rise-slide mt-4 flex items-center gap-3 lg:mt-5"
      >
        <span
          aria-hidden
          className="h-px w-8 bg-gradient-to-r from-transparent to-brass lg:from-brass lg:to-brass/20"
        />
        <p className="font-serif text-base font-medium text-brass-deep italic sm:text-lg 2xl:text-xl">
          {HERO.slogan}
        </p>
        <span
          aria-hidden
          className="h-px w-8 bg-gradient-to-l from-transparent to-brass lg:hidden"
        />
      </div>

      <ul className="mt-7 flex max-w-md flex-col gap-3 lg:mt-10 lg:gap-3.5 2xl:max-w-lg 2xl:gap-4">
        {HERO.points.map((point, i) => (
          <li
            key={point}
            style={riseDelay(250 + i * 55)}
            className="rise-slide flex items-start gap-3 text-left text-[0.95rem] leading-relaxed text-ink-soft sm:text-base 2xl:text-[1.05rem]"
          >
            <span
              aria-hidden
              className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-brass ring-4 ring-brass/18"
            />
            <span className="text-pretty">{point}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
