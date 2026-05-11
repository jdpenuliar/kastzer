import Link from "next/link";

import { PillarSpread } from "@/components/PillarSpread";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-inner">
          <h1>Kastzer</h1>
          <div className="gold-rule"></div>
          <p className="hero-tag">Engineering the future. Nurturing the present.</p>
          <p className="hero-intro">
            A multi-vertical company building thoughtful work across software, skin care,
            coffee, and real estate &mdash; united by a single standard of craft.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-gold" href="/services">
              Explore our work
            </Link>
            <Link
              className="btn btn-ghost"
              style={{ color: "#F8F8F6", borderColor: "rgba(248,248,246,0.6)" }}
              href="/contact"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
            className="reveal"
          >
            <span className="eyebrow">What we do</span>
            <h2>Four disciplines, one philosophy.</h2>
            <p>
              We invest in industries where craft, precision, and patience matter. Each
              vertical is a focused practice &mdash; built independently, held to the
              same standard.
            </p>
          </div>

          <PillarSpread />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split reveal">
            <div>
              <span className="eyebrow">About Kastzer</span>
              <h2>One company. Four practices. A shared standard of quality.</h2>
              <p>
                Kastzer was founded on the belief that great work doesn&apos;t belong to
                a single industry. Whether we&apos;re shipping software, formulating
                skincare, sourcing coffee, or advising on real estate, the discipline is
                the same: study the craft, respect the customer, and leave it better
                than we found it.
              </p>
              <Link className="btn btn-primary" href="/about" style={{ marginTop: "0.5rem" }}>
                Read our story
              </Link>
            </div>
            <div className="accent-box">
              <p>
                &ldquo;Quality is the only thing that travels across categories. We hold
                it constant; the disciplines change around it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
