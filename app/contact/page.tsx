import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kastzer. Email operations@kastzer.com or send us a message.",
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
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2>Get in touch</h2>
              <p>
                Reach us directly or send a note using the form. For the fastest
                response, email us &mdash; we typically reply within two business days.
              </p>

              <div className="label">Email</div>
              <p className="value">
                <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>
              </p>

              <div className="label">Inquiries</div>
              <p className="value">Software &middot; Skin Care &middot; Coffee &middot; Real Estate</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
