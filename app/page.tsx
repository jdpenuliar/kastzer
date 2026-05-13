import Link from "next/link";

import { PillarSpread } from "@/components/PillarSpread";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-orbs" aria-hidden="true">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        <div className="hero-particles" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-scan" aria-hidden="true"></div>
        <div className="hero-icons" aria-hidden="true">
          <div className="hero-icon hero-icon-ai">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="hero-icon hero-icon-code">
            <svg viewBox="0 0 24 24">
              <path d="M8 6L3 12L8 18 M16 6L21 12L16 18" />
            </svg>
          </div>
          <div className="hero-icon hero-icon-drop">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C12 2 6 10 6 15A6 6 0 0 0 18 15C18 10 12 2 12 2Z" />
            </svg>
          </div>
          <div className="hero-icon hero-icon-coffee">
            <svg viewBox="0 0 24 24">
              <path d="M4 8H16V14A4 4 0 0 1 12 18H8A4 4 0 0 1 4 14V8Z M16 10H19A2 2 0 0 1 21 12A2 2 0 0 1 19 14H16 M8 2V5 M11 2V5" />
            </svg>
          </div>
          <div className="hero-icon hero-icon-house">
            <svg viewBox="0 0 24 24">
              <path d="M3 11L12 3L21 11 M5 9V20H19V9 M10 20V14H14V20" />
            </svg>
          </div>
          <div className="hero-icon hero-icon-ai2">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
        <div className="hero-inner">
          <div className="ai-pulse-ring">
            <span className="ai-pulse-dot" aria-hidden="true"></span>
            AI-Powered Platform
          </div>
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
