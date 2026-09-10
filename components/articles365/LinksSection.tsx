import { LINKS } from "@/lib/links";
import { riseDelay } from "@/lib/motion";
import { LinkTile } from "./LinkTile";

/** Two up on phones and tablets, four across from `lg`. */
export function LinksSection() {
  return (
    <section aria-label="Links" className="lg:col-span-12">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {LINKS.map((link, i) => (
          <li key={link.id} className="rise" style={riseDelay(190 + i * 70)}>
            <LinkTile link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}
