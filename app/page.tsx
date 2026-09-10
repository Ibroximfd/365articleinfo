import { BackgroundDecor } from "@/components/articles365/BackgroundDecor";
import { ContactBar } from "@/components/articles365/ContactBar";
import { DaysTile } from "@/components/articles365/DaysTile";
import { Footer } from "@/components/articles365/Footer";
import { HeroTile } from "@/components/articles365/HeroTile";
import { LinksSection } from "@/components/articles365/LinksSection";

export default function Home() {
  return (
    <>
      <BackgroundDecor />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center-safe px-3.5 py-4 sm:px-6 sm:py-10 lg:px-8 lg:py-14 2xl:max-w-7xl">
        {/* A bento of tiles: masthead and promise on top, the four destinations
            two-up on phones and four across from lg, contact closing the set. */}
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
          <HeroTile />
          <DaysTile />
          <LinksSection />
          <ContactBar />
        </div>
        <Footer />
      </main>
    </>
  );
}
