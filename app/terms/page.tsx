import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Kastzer Terms of Service — the agreement governing use of our websites, apps, and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#C9A84C" }}>
            Legal
          </span>
          <h1>Terms of Service</h1>
          <div className="gold-rule"></div>
          <p>
            The terms that govern your use of Kastzer&apos;s websites, mobile
            applications, and services.
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

            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) form a binding agreement
              between you and Kastzer (&quot;Kastzer,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) governing your access to and use of
              our websites, mobile applications, and related services (collectively,
              the &quot;Services&quot;). By accessing or using the Services, you agree
              to be bound by these Terms. If you do not agree, do not use the
              Services.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old (or the equivalent minimum age in your
              jurisdiction) to use the Services. By using the Services, you represent
              that you have the legal capacity to enter into these Terms.
            </p>

            <h2>3. Accounts</h2>
            <p>
              Some features require an account. You agree to provide accurate
              information, keep your credentials confidential, and notify us promptly
              of any unauthorized use. You are responsible for activity that occurs
              under your account.
            </p>

            <h2>4. Use of Services</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Violate any applicable law or regulation;</li>
              <li>Infringe the intellectual property or privacy rights of others;</li>
              <li>Upload malicious code or interfere with the operation of the Services;</li>
              <li>
                Reverse engineer, decompile, or attempt to extract source code, except
                where permitted by law;
              </li>
              <li>
                Use automated means to access the Services in a manner that imposes an
                unreasonable load;
              </li>
              <li>Misrepresent your identity or affiliation with any person or entity.</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The Services and all related content, features, and software are owned
              by Kastzer or its licensors and are protected by intellectual-property
              and other laws. Subject to your compliance with these Terms, we grant
              you a limited, non-exclusive, non-transferable, revocable license to
              access and use the Services for personal, non-commercial use. All other
              rights are reserved.
            </p>

            <h2>6. User Content</h2>
            <p>
              If you submit content through the Services (including form submissions,
              feedback, or uploaded materials), you grant Kastzer a worldwide,
              royalty-free, non-exclusive license to use that content for the purpose
              of operating and improving the Services. You represent that you have the
              rights necessary to grant this license.
            </p>

            <h2>7. Purchases</h2>
            <p>
              Where the Services allow purchases (including in-app purchases through
              the Apple App Store or Google Play), prices, taxes, and applicable fees
              will be disclosed at checkout. Purchases are subject to the terms of the
              applicable platform in addition to these Terms.
            </p>

            <h2>8. Mobile Applications &amp; Platform Terms</h2>
            <p>
              Our mobile applications are distributed through Apple&apos;s App Store
              and Google Play. Your use of those apps is also subject to the Apple
              Media Services Terms and Conditions and Google Play Terms of Service,
              respectively. If there is a conflict between these Terms and the
              applicable platform terms regarding distribution, the platform terms
              control.
            </p>

            <h2>9. Third-Party Services and Links</h2>
            <p>
              The Services may include links to third-party websites or integrate
              third-party services. We are not responsible for, and do not endorse,
              the content or practices of third parties. Your use of third-party
              services is at your own risk and subject to their terms.
            </p>

            <h2>10. Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot;
              WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT ANY
              CONTENT IS ACCURATE OR RELIABLE.
            </p>
            <p>
              Products in our skin care, coffee, and other consumer-goods practices
              are intended for general use. Information provided is not medical
              advice. Consult a qualified professional before changing your routine,
              especially if you have a medical condition or allergy.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KASTZER AND ITS AFFILIATES,
              OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
              PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR
              USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR
              RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED ONE HUNDRED U.S.
              DOLLARS ($100) OR THE AMOUNT YOU PAID US IN THE PRIOR TWELVE (12)
              MONTHS, WHICHEVER IS GREATER.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Kastzer and its affiliates from
              any claims, damages, liabilities, and expenses (including reasonable
              attorneys&apos; fees) arising out of your use of the Services or your
              violation of these Terms.
            </p>

            <h2>13. Termination</h2>
            <p>
              We may suspend or terminate your access to the Services at any time,
              with or without notice, including if we believe you have violated these
              Terms. You may stop using the Services at any time. Provisions that by
              their nature should survive termination (including intellectual
              property, disclaimers, and limitations of liability) will survive.
            </p>

            <h2>14. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of California, without
              regard to conflict-of-law principles. Any dispute arising out of or
              relating to these Terms or the Services will be subject to the exclusive
              jurisdiction of the state and federal courts located in California, and
              you consent to personal jurisdiction in those courts.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material
              changes, we will provide reasonable notice (for example, by updating the
              &quot;Last updated&quot; date or notifying you within the Services).
              Your continued use of the Services after changes take effect constitutes
              acceptance of the updated Terms.
            </p>

            <h2>16. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
