import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kastzer. Email operations@kastzer.com or chat with Kastzer AI for instant answers.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Contact
          </span>
          <h1>Let&apos;s talk.</h1>
          <div className="gold-rule"></div>
          <p>
            Partnerships, projects, press &mdash; we read every message and reply
            personally.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Two-column contact options */}
          <div className="contact-options">

            {/* Direct email */}
            <div className="contact-option reveal">
              <span className="eyebrow">Email us</span>
              <h2>Get in touch directly</h2>
              <p>
                Send us a note and we&apos;ll reply within two business days.
                Best for partnerships, detailed project briefs, and press.
              </p>
              <div className="label">Email</div>
              <p className="value">
                <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>
              </p>
              <div className="label">Inquiries</div>
              <p className="value">
                Software &middot; Skin Care &middot; Coffee &middot; Real Estate
              </p>
            </div>

            {/* AI chat option */}
            <div className="contact-option contact-ai-option reveal">
              <span className="eyebrow">Instant answers</span>
              <h2>Chat with Kastzer AI</h2>
              <p>
                Have a quick question? Kastzer AI draws from real experience
                across all four verticals &mdash; ask about projects, pricing,
                timelines, or how to get started.
              </p>
              <div className="contact-ai-actions">
                <Link href="/ai" className="btn btn-gold">
                  Open full chat &rarr;
                </Link>
                <p className="contact-ai-hint">
                  Or use the chat bubble in the bottom-right corner of any page.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
