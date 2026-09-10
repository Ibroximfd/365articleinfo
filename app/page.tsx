import { ContactBar } from "@/components/articles365/ContactBar";
import { Footer } from "@/components/articles365/Footer";
import { HeroTile } from "@/components/articles365/HeroTile";
import { LinksSection } from "@/components/articles365/LinksSection";
import { ScrollCue } from "@/components/articles365/ScrollCue";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center-safe px-3.5 py-4 sm:px-6 sm:py-10 lg:px-8 lg:py-14 2xl:max-w-7xl">
        {/* A bento of tiles: the masthead across the top, a cue pointing down to
            the four destinations — two-up on phones, four across from lg — and
            contact closing the set. */}
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
          <HeroTile />
          <ScrollCue />
          <LinksSection />
          <ContactBar />
        </div>
        <Footer />
      </main>
    </>
  );
}
