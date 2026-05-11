import Link from "next/link";

import { PillarAnimation, type PillarKind } from "./PillarAnimation";

type Pillar = {
  kind: PillarKind;
  number: string;
  title: string;
  body: string;
  href: string;
};

const PILLARS: Pillar[] = [
  {
    kind: "software",
    number: "01",
    title: "Software Engineering",
    body: "Custom software, mobile apps, AI integrations, and developer tools built for teams that ship. We embed with founders, write code we'd want to maintain, and stay accountable to outcomes.",
    href: "/services#software",
  },
  {
    kind: "skincare",
    number: "02",
    title: "Skin Care",
    body: "Premium formulations built on modern dermatological science, not trend cycles. Clean where it matters, clinical where it counts, with ingredient transparency throughout the line.",
    href: "/services#skincare",
  },
  {
    kind: "coffee",
    number: "03",
    title: "Coffee",
    body: "Specialty sourcing and small-batch roasting with the attention of an atelier. For cafés, we consult on sourcing, equipment, and bar workflow — the operating details that separate ordinary from memorable.",
    href: "/services#coffee",
  },
  {
    kind: "realestate",
    number: "04",
    title: "Real Estate",
    body: "Residential and commercial advisory grounded in long-horizon thinking. Plus property tooling for reporting, leasing, and maintenance — without forcing operators onto enterprise software designed for someone else.",
    href: "/services#realestate",
  },
];

export function PillarSpread() {
  return (
    <div className="pillars-editorial">
      {PILLARS.map((pillar, i) => (
        <article
          key={pillar.kind}
          className={`pillar-row${i % 2 === 1 ? " reverse" : ""}`}
        >
          <PillarAnimation kind={pillar.kind} />
          <div className="pillar-text reveal">
            <span className="pillar-number">{pillar.number} &mdash; Practice</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
            <Link href={pillar.href} className="pillar-link">
              Learn more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
