import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and philosophy behind Kastzer — a multi-vertical company built on a single standard of craft.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Our story
          </span>
          <h1>Built on craft. Sustained by curiosity.</h1>
          <div className="gold-rule"></div>
          <p>
            Kastzer is what happens when a single standard of quality is applied to
            wildly different disciplines.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reveal">
            <div>
              <span className="eyebrow">Mission</span>
              <h2>To build the kind of work we&apos;d want to use ourselves.</h2>
              <p>
                We started Kastzer because the most interesting companies we admired
                were rarely &quot;vertical-pure.&quot; They were obsessive operators who
                happened to apply their obsession to whatever the work required. We
                wanted to do the same &mdash; deliberately, and across more than one
                industry.
              </p>
              <p>
                Today, Kastzer operates four practices that share infrastructure,
                philosophy, and people, but otherwise stand on their own merit. Each one
                is judged by the standard of its category, not by what&apos;s convenient
                for ours.
              </p>
            </div>
            <div className="accent-box">
              <p>
                &ldquo;We&apos;re not a holding company. We&apos;re a workshop. The
                output changes; the discipline doesn&apos;t.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 3rem" }}
            className="reveal"
          >
            <span className="eyebrow">Our philosophy</span>
            <h2>Why four verticals?</h2>
            <p>
              Each one teaches us something the others can&apos;t. Software keeps us
              precise. Skin care keeps us patient. Coffee keeps us honest about taste.
              Real estate keeps us grounded in the long horizon.
            </p>
          </div>

          <div className="verticals">
            <article className="vertical-card reveal">
              <h3>Precision</h3>
              <p>
                From software, we carry the rigor of systems thinking &mdash; small
                mistakes compound, small wins do too.
              </p>
            </article>
            <article className="vertical-card reveal">
              <h3>Patience</h3>
              <p>
                From skin care, we learn that the best results are quiet, cumulative,
                and earned over months, not minutes.
              </p>
            </article>
            <article className="vertical-card reveal">
              <h3>Taste</h3>
              <p>
                From coffee, we relearn that the customer&apos;s palate is the truth
                &mdash; not the marketing around it.
              </p>
            </article>
            <article className="vertical-card reveal">
              <h3>Horizon</h3>
              <p>
                From real estate, we plan in decades. It changes how we build everything
                else.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 2.5rem" }}
            className="reveal"
          >
            <span className="eyebrow">Founders &amp; team</span>
            <h2>A small team. A long horizon.</h2>
            <p>
              Kastzer is run by a tight founding team with backgrounds across
              engineering, formulation science, hospitality, and property. We bring in
              specialists per practice and stay close to the work.
            </p>
          </div>
          <div className="verticals" style={{ marginTop: "1.5rem" }}>
            {[
              {
                letter: "K",
                title: "Founding Team",
                body: "Engineering · Formulation · Hospitality · Property",
              },
              {
                letter: "P",
                title: "Practice Leads",
                body: "Specialists who own the standards within each vertical.",
              },
              {
                letter: "A",
                title: "Advisors",
                body: "Operators and scientists we consult to keep the work honest.",
              },
            ].map(({ letter, title, body }) => (
              <article
                key={letter}
                className="vertical-card reveal"
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.18)",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
                    color: "#C9A84C",
                  }}
                >
                  {letter}
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link className="btn btn-primary" href="/services">
              See what we do
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
