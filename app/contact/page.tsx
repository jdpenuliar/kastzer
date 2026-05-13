import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kastzer. Email operations@kastzer.com.",
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
          <div className="contact-info reveal" style={{ maxWidth: 560 }}>
            <h2>Get in touch</h2>
            <p>
              Email us directly &mdash; we read every message and typically reply
              within two business days.
            </p>

            <div className="label">Email</div>
            <p className="value">
              <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>
            </p>

            <div className="label">Inquiries</div>
            <p className="value">Software &middot; Skin Care &middot; Coffee &middot; Real Estate</p>
          </div>
        </div>
      </section>
    </>
  );
}
