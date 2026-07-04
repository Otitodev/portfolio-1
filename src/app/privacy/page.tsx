import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Privacy Policy",
  description:
    "NDPR / NDPA-compliant privacy policy for otito.site, describing how Otito Ogene collects, uses, and protects your personal data.",
};

const BLUR_FADE_DELAY = 0.04;

export default function PrivacyPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last updated: July 2, 2026
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <article className="prose dark:prose-invert max-w-full text-sm">
          <p>
            This Privacy Policy describes how Otito Ogene (&ldquo;I,&rdquo;
            &ldquo;me,&rdquo; or &ldquo;my&rdquo;), operating the website at
            otito.site (the &ldquo;Site&rdquo;), collects, uses, stores, and
            protects your personal data when you visit the Site or contact me
            through it.
          </p>
          <p>
            This policy is written to comply with the Nigeria Data Protection
            Act 2023 (&ldquo;NDPA&rdquo;) and the Nigeria Data Protection
            Regulation 2019 (&ldquo;NDPR&rdquo;), and to reflect the general
            principles of the EU General Data Protection Regulation
            (&ldquo;GDPR&rdquo;) for international visitors.
          </p>

          <h2>1. Data Controller</h2>
          <p>
            The data controller responsible for your personal data under this
            policy is:
          </p>
          <p>
            <strong>Otito Ogene</strong>
            <br />
            Independent freelance software engineer
            <br />
            Enugu, Nigeria
            <br />
            Email:{" "}
            <a href="mailto:otitodrichukwu@gmail.com">
              otitodrichukwu@gmail.com
            </a>
          </p>
          <p>
            As a sole practitioner, I act as my own data protection contact.
            You may reach me at the email above for any privacy-related
            request.
          </p>

          <h2>2. Personal Data I Collect</h2>
          <p>I collect personal data in two ways:</p>
          <p>
            <strong>a) Data you provide directly</strong> when you contact me
            by email, through a form on this Site, or via a linked social
            profile. This typically includes:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your company or organisation (if you share it)</li>
            <li>
              The content of your message, including project details, timelines,
              and budget indications you choose to share
            </li>
          </ul>
          <p>
            <strong>b) Data collected automatically</strong> when you visit the
            Site, through standard hosting and analytics infrastructure:
          </p>
          <ul>
            <li>IP address (used for basic security and rough geolocation)</li>
            <li>Browser type, operating system, and device information</li>
            <li>Pages visited, time spent, and referring website</li>
            <li>
              Aggregated performance and usage metrics via Vercel Analytics
            </li>
          </ul>
          <p>
            I do not knowingly collect special-category personal data (such as
            biometric data, health data, financial account numbers, or
            government-issued ID numbers) through this Site. Please do not
            include such information in unsolicited messages.
          </p>

          <h2>3. Lawful Basis for Processing</h2>
          <p>
            Under the NDPA, NDPR, and GDPR, I only process your personal data
            where I have a lawful basis to do so:
          </p>
          <ul>
            <li>
              <strong>Consent</strong> — when you voluntarily send me a message
              or subscribe to any communication.
            </li>
            <li>
              <strong>Performance of a contract</strong> or steps taken at your
              request before entering a contract — when we are discussing or
              carrying out a freelance engagement.
            </li>
            <li>
              <strong>Legitimate interest</strong> — for maintaining the
              security, performance, and analytics of the Site, in a way that
              does not override your rights and freedoms.
            </li>
            <li>
              <strong>Legal obligation</strong> — where I must retain or
              disclose data to comply with Nigerian law or a valid legal
              process.
            </li>
          </ul>

          <h2>4. How I Use Your Personal Data</h2>
          <p>Personal data is used only to:</p>
          <ul>
            <li>Respond to your inquiries and project requests</li>
            <li>Communicate about potential or ongoing engagements</li>
            <li>Issue invoices and maintain records of freelance work</li>
            <li>
              Improve the Site&rsquo;s content, performance, and security
            </li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>
            I do not sell, rent, or trade your personal data, and I do not use
            it for automated decision-making or profiling.
          </p>

          <h2>5. Data Sharing and Third-Party Processors</h2>
          <p>
            I share personal data only with the following categories of
            processors, each of which supports the operation of this Site or my
            freelance practice:
          </p>
          <ul>
            <li>
              <strong>Hosting &amp; deployment</strong> — Netlify (site
              hosting) and Vercel (analytics), which may process your IP
              address and browser data.
            </li>
            <li>
              <strong>Email</strong> — Google (Gmail), which processes the
              content of emails you send me.
            </li>
            <li>
              <strong>Payment processing</strong> — where an engagement
              involves payment, an authorised Nigerian payment processor (e.g.
              Flutterwave, Paystack) handles transaction data directly. I do
              not store your full card or bank account details.
            </li>
          </ul>
          <p>
            I may also disclose personal data where required by law, court
            order, or lawful request by a competent authority.
          </p>

          <h2>6. Cross-Border Data Transfers</h2>
          <p>
            Some of the processors listed above are located outside Nigeria
            (primarily in the United States and the European Union). Where
            personal data is transferred outside Nigeria, I rely on the
            recipient jurisdiction&rsquo;s recognised data protection
            framework, standard contractual clauses, or an equivalent
            safeguard, in line with Section 41 of the NDPA.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            I retain personal data only for as long as necessary for the
            purpose for which it was collected:
          </p>
          <ul>
            <li>
              <strong>Inquiry emails without engagement</strong> — up to 12
              months, then deleted.
            </li>
            <li>
              <strong>Active client records</strong> — for the duration of the
              engagement and up to 6 years afterwards, to comply with Nigerian
              tax and record-keeping requirements.
            </li>
            <li>
              <strong>Analytics data</strong> — retained in aggregated,
              non-identifying form according to the analytics provider&rsquo;s
              default retention period.
            </li>
          </ul>

          <h2>8. Your Rights as a Data Subject</h2>
          <p>
            Under the NDPA, NDPR, and (where applicable) the GDPR, you have the
            following rights in respect of your personal data:
          </p>
          <ul>
            <li>
              <strong>Right of access</strong> — to obtain confirmation of, and
              a copy of, the personal data I hold about you.
            </li>
            <li>
              <strong>Right to rectification</strong> — to have inaccurate or
              incomplete data corrected.
            </li>
            <li>
              <strong>Right to erasure</strong> (&ldquo;right to be
              forgotten&rdquo;) — to request deletion of your personal data,
              subject to legal retention obligations.
            </li>
            <li>
              <strong>Right to restriction</strong> — to ask me to limit how I
              use your data.
            </li>
            <li>
              <strong>Right to object</strong> — to object to processing based
              on legitimate interest.
            </li>
            <li>
              <strong>Right to data portability</strong> — to receive your data
              in a structured, commonly used, machine-readable format.
            </li>
            <li>
              <strong>Right to withdraw consent</strong> — where processing is
              based on consent, at any time and without affecting the
              lawfulness of prior processing.
            </li>
            <li>
              <strong>Right to lodge a complaint</strong> — with the Nigeria
              Data Protection Commission (NDPC) if you believe your rights have
              been infringed.
            </li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:otitodrichukwu@gmail.com">
              otitodrichukwu@gmail.com
            </a>
            . I will respond within 30 days of receiving a valid request.
          </p>

          <h2>9. Data Security</h2>
          <p>
            I apply reasonable technical and organisational measures to protect
            personal data against unauthorised access, loss, or disclosure,
            including encrypted transport (HTTPS), access-controlled email and
            storage, and reputable hosting providers. No system is
            fully secure, however, and I cannot guarantee absolute security.
          </p>

          <h2>10. Cookies and Similar Technologies</h2>
          <p>
            This Site uses minimal cookies and local storage for basic
            functionality (such as remembering your theme preference) and for
            anonymised analytics. You can disable cookies through your browser
            settings; doing so should not materially affect your ability to
            browse the Site.
          </p>

          <h2>11. Children&rsquo;s Data</h2>
          <p>
            This Site is not directed at children under the age of 18, and I
            do not knowingly collect personal data from children. If you
            believe a child has provided personal data to me, please contact
            me so that I can delete it.
          </p>

          <h2>12. Third-Party Links</h2>
          <p>
            This Site links to external platforms (e.g., GitHub, project demos,
            LinkedIn, X). I am not responsible for the privacy practices or
            content of those third-party sites, and you should review their
            respective privacy policies before providing personal data to
            them.
          </p>

          <h2>13. Changes to This Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. The &ldquo;Last
            updated&rdquo; date at the top of the page reflects the most recent
            revision. Continued use of the Site after changes are posted
            constitutes acceptance of the updated policy.
          </p>

          <h2>14. Contact and Complaints</h2>
          <p>
            For questions, requests, or complaints about this Privacy Policy or
            your personal data, contact:
          </p>
          <p>
            <strong>Otito Ogene</strong>
            <br />
            Enugu, Nigeria
            <br />
            Email:{" "}
            <a href="mailto:otitodrichukwu@gmail.com">
              otitodrichukwu@gmail.com
            </a>
          </p>
          <p>
            If you are not satisfied with my response, you may lodge a
            complaint with the{" "}
            <strong>Nigeria Data Protection Commission (NDPC)</strong> at{" "}
            <a
              href="https://ndpc.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              ndpc.gov.ng
            </a>
            .
          </p>
        </article>
      </BlurFade>
    </section>
  );
}
