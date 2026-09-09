import { BackgroundDecor } from "@/components/articles365/BackgroundDecor";
import { Contact } from "@/components/articles365/Contact";
import { Footer } from "@/components/articles365/Footer";
import { Hero } from "@/components/articles365/Hero";
import { LinksSection } from "@/components/articles365/LinksSection";

export default function Home() {
  return (
    <>
      <BackgroundDecor />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col p-3 sm:px-8 sm:py-14 lg:justify-center-safe lg:py-20 2xl:max-w-7xl">
        {/* Everything legible lives on this Off White plate — Dark Charcoal only
            reaches 4.0:1 straight on the tan ground, so the plate is structural,
            not decorative. Ground → plate → card: three surfaces. */}
        <div className="rounded-[1.75rem] border border-white/60 bg-off-white/92 px-5 py-9 shadow-plate sm:rounded-[2rem] sm:p-10 xl:p-14 2xl:rounded-[2.5rem] 2xl:p-16">
          {/* One capped column up to tablets (the QR audience), then a split
              editorial spread from lg up. */}
          {/* DOM order is phone order: hero, the book's links, then contact as a
              closing signature. From lg the contact slots under the hero in
              column one and the links span both rows, centred against the pair. */}
          <div className="mx-auto grid w-full max-w-lg items-center gap-11 sm:gap-14 lg:max-w-none lg:grid-cols-[minmax(0,30rem)_minmax(0,26rem)] lg:grid-rows-[auto_auto] lg:justify-center lg:gap-x-16 lg:gap-y-0 xl:gap-x-20 2xl:grid-cols-[minmax(0,34rem)_minmax(0,29rem)] 2xl:gap-x-24">
            <div className="flex w-full flex-col items-center lg:col-start-1 lg:row-start-1 lg:items-start lg:self-end">
              <Hero />
            </div>
            <div className="w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
              <LinksSection />
            </div>
            <div className="flex w-full flex-col items-center lg:col-start-1 lg:row-start-2 lg:items-start lg:self-start">
              <Contact />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
