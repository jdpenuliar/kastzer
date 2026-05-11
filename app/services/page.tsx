import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kastzer's four practices: software engineering, skin care, coffee, and real estate.",
};

type ServiceBlockProps = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
};

function ServiceBlock({ id, title, icon, description, items }: ServiceBlockProps) {
  return (
    <article className="service-block reveal" id={id}>
      <div className="vertical-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="service-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Our practices
          </span>
          <h1>Four disciplines. One standard.</h1>
          <div className="gold-rule"></div>
          <p>
            Each practice is run as its own studio &mdash; sharing infrastructure and
            philosophy, but judged on the quality of its own work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceBlock
            id="software"
            title="Software Engineering"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
            description="We build custom software for teams who need more than a template. Our engineers ship production-grade web, mobile, and AI-integrated systems — from greenfield products to deep platform work. We embed with founders and product teams, write the kind of code we'd want to maintain, and stay accountable to outcomes, not just deliverables."
            items={[
              "Web & mobile product development",
              "AI integrations & agentic workflows",
              "Developer tools & internal platforms",
              "API design & system architecture",
              "Technical due diligence & advisory",
            ]}
          />

          <ServiceBlock
            id="skincare"
            title="Skin Care"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C9 6 6 8 6 13a6 6 0 0 0 12 0c0-5-3-7-6-11z" />
              </svg>
            }
            description="Premium formulations built on modern dermatological science, not trend cycles. Our products are formulated for results you can feel and verify — clean where it matters, clinical where it counts. We work with experienced cosmetic chemists and prioritize ingredient transparency throughout the line."
            items={[
              "Daily care & treatment serums",
              "Clinically-informed formulations",
              "Ingredient transparency & testing",
              "Wellness-focused product design",
              "Sustainable packaging programs",
            ]}
          />

          <ServiceBlock
            id="coffee"
            title="Coffee"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h14a4 4 0 0 1 0 8h-1" />
                <path d="M3 8v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4" />
                <path d="M7 2v3M11 2v3M15 2v3" />
              </svg>
            }
            description="Specialty coffee, sourced and roasted with the same attention you'd expect from a small batch atelier. We work directly with producers, roast in small lots, and ship at peak. For cafés, we offer consulting on sourcing, equipment, and bar workflow — the operating details that separate the ordinary from the memorable."
            items={[
              "Single-origin specialty sourcing",
              "Subscription roast programs",
              "Café concept & menu consulting",
              "Equipment & workflow design",
              "Barista training & standards",
            ]}
          />

          <ServiceBlock
            id="realestate"
            title="Real Estate"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12 12 3l9 9" />
                <path d="M5 10v10h14V10" />
                <path d="M10 20v-6h4v6" />
              </svg>
            }
            description="Residential and commercial advisory grounded in long-horizon thinking. We help clients evaluate, acquire, and operate properties with clear eyes and patient capital. On the technology side, we build property tooling that simplifies the operating side of ownership — reporting, leasing, and maintenance — without forcing it onto enterprise software designed for someone else."
            items={[
              "Residential advisory & acquisitions",
              "Commercial property strategy",
              "Property technology & tooling",
              "Portfolio operations & reporting",
              "Long-horizon investment planning",
            ]}
          />

          <div className="cta-strip reveal">
            <h2>Have something in mind?</h2>
            <p>
              Whether you&apos;re a founder, an operator, or simply curious about a
              partnership, we&apos;d love to hear from you.
            </p>
            <Link className="btn btn-gold" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
