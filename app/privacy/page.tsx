import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kastzer Privacy Policy — how we collect, use, and protect personal information across our products and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Legal
          </span>
          <h1>Privacy Policy</h1>
          <div className="gold-rule"></div>
          <p>
            How Kastzer collects, uses, and protects information across our websites,
            mobile apps, and services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal">
            <p className="meta">
              Last updated: [DATE] &middot; Contact:{" "}
              <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>
            </p>

            <h2>1. Introduction</h2>
            <p>
              Kastzer (&quot;Kastzer,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard personal information when you
              visit our websites, use our mobile applications, or otherwise interact
              with our products and services (collectively, the &quot;Services&quot;).
              By using the Services, you agree to the practices described in this
              Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information you provide</h3>
            <ul>
              <li>
                <strong>Account &amp; contact information:</strong> name, email address,
                phone number, mailing address, and similar details you submit through
                forms or account creation.
              </li>
              <li>
                <strong>Communications:</strong> messages, feedback, and support
                requests you send us.
              </li>
              <li>
                <strong>Transaction information:</strong> billing details and purchase
                history when you buy products or services. Payment card data is
                processed by our payment processors and is not stored by us.
              </li>
            </ul>

            <h3>2.2 Information we collect automatically</h3>
            <ul>
              <li>
                <strong>Device &amp; usage data:</strong> IP address, device
                identifiers, operating system, browser type, app version, language
                preferences, crash logs, and interaction events.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> see Section 6 below.
              </li>
              <li>
                <strong>Mobile permissions:</strong> with your consent, our apps may
                access features such as notifications, camera, or photo library. You
                can revoke permissions in your device settings at any time.
              </li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide, operate, and maintain the Services;</li>
              <li>Process transactions and fulfill orders;</li>
              <li>Respond to inquiries and provide customer support;</li>
              <li>Improve performance, debug issues, and develop new features;</li>
              <li>
                Send service announcements, security alerts, and (with consent where
                required) marketing communications;
              </li>
              <li>Comply with legal obligations and enforce our Terms of Service.</li>
            </ul>

            <h2>4. Legal Bases for Processing</h2>
            <p>
              Where applicable law (e.g., GDPR) requires a legal basis, we rely on: (a)
              performance of a contract; (b) your consent; (c) our legitimate interests
              in operating and improving the Services; and (d) compliance with legal
              obligations.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We work with third-party service providers to operate the Services,
              including (without limitation):
            </p>
            <ul>
              <li>Hosting and content delivery providers;</li>
              <li>Analytics and crash-reporting tools;</li>
              <li>Payment processors;</li>
              <li>Email and customer support platforms;</li>
              <li>Apple App Store and Google Play, when you download or update our apps.</li>
            </ul>
            <p>
              These providers process information on our behalf under contractual
              safeguards. They may collect device data necessary for their services,
              and their use of information is governed by their own privacy policies.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our websites use cookies and similar technologies to keep you signed in,
              remember preferences, measure traffic, and improve performance. You can
              control cookies through your browser settings. Some features may not
              function properly if cookies are disabled.
            </p>

            <h2>7. Mobile Applications</h2>
            <p>If you use our mobile applications, we may collect:</p>
            <ul>
              <li>Device identifiers and operating system version;</li>
              <li>App usage and diagnostic data (e.g., crash reports);</li>
              <li>Data you choose to provide within the app.</li>
            </ul>
            <p>
              We do not knowingly collect precise location data unless you explicitly
              grant permission for a feature that requires it.
            </p>

            <h2>8. Data Sharing</h2>
            <p>
              We do not sell personal information. We may share information with: (a)
              service providers acting on our behalf; (b) professional advisors; (c)
              authorities when required by law or to protect rights, safety, and
              property; and (d) parties to a business transaction such as a merger,
              acquisition, or sale of assets.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide the
              Services, comply with our legal obligations, resolve disputes, and
              enforce agreements. When information is no longer needed, we delete or
              anonymize it.
            </p>

            <h2>10. Security</h2>
            <p>
              We use commercially reasonable administrative, technical, and physical
              safeguards designed to protect personal information. No method of
              transmission or storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>11. Your Rights</h2>
            <p>
              Depending on where you reside, you may have rights to access, correct,
              delete, port, or restrict processing of your personal information, or to
              withdraw consent. To exercise these rights, contact us at{" "}
              <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>. We will
              respond within the timeframes required by applicable law.
            </p>

            <h2>12. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to children under 13 (or the equivalent
              minimum age in your jurisdiction). We do not knowingly collect personal
              information from children. If you believe a child has provided us with
              personal information, please contact us and we will take steps to delete
              it.
            </p>

            <h2>13. International Transfers</h2>
            <p>
              We are based in the United States. If you access the Services from
              outside the United States, your information may be transferred to, stored
              in, and processed in the United States or other countries with different
              data-protection laws. Where required, we implement appropriate transfer
              safeguards.
            </p>

            <h2>14. Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will be
              communicated through the Services or by other reasonable means. The
              &quot;Last updated&quot; date at the top reflects the most recent
              revision.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              Questions or requests regarding this Privacy Policy? Email{" "}
              <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
