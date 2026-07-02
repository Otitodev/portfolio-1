import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for otito.site",
};

const BLUR_FADE_DELAY = 0.04;

export default function TermsPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          Terms of Service
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last updated: July 2, 2026
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <article className="prose dark:prose-invert max-w-full text-sm">
          <p>
            Welcome to otito.site (the &ldquo;Site&rdquo;), operated by Otito
            Ogene, an independent freelance software engineer based in Enugu,
            Nigeria. By accessing or using this Site, you agree to the
            following terms.
          </p>

          <h2>1. About This Site</h2>
          <p>
            This Site is a professional portfolio and business contact point
            used to showcase software engineering and AI systems work, and to
            facilitate inquiries about freelance and contract services. It is
            not an e-commerce platform and does not process payments directly.
          </p>

          <h2>2. Use of Content</h2>
          <p>
            All content on this Site — including text, project descriptions,
            code samples, images, and branding — is owned by Otito Ogene
            unless otherwise credited, and may not be copied, reproduced, or
            redistributed for commercial purposes without prior written
            permission.
          </p>
          <p>
            You may share links to this Site and reference publicly available
            project information for non-commercial purposes (e.g., referrals,
            reviews) with appropriate credit.
          </p>

          <h2>3. Professional Services</h2>
          <p>
            Any services described on this Site (software development, AI
            systems engineering, consulting, etc.) are subject to a separate
            written agreement (such as a contract, statement of work, or
            proposal) between Otito Ogene and the client before any work
            begins. Nothing on this Site constitutes a binding offer of
            services or a guarantee of availability, pricing, or outcomes.
          </p>

          <h2>4. No Warranty</h2>
          <p>
            This Site and its content are provided &ldquo;as is&rdquo; without
            warranties of any kind, express or implied. While reasonable
            efforts are made to keep information accurate and up to date, no
            guarantee is made regarding the completeness, accuracy, or
            reliability of content on this Site.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Otito Ogene is not liable
            for any indirect, incidental, or consequential damages arising
            from your use of this Site or reliance on its content.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            This Site links to third-party platforms (e.g., GitHub, live
            project demos, social media). These are provided for convenience;
            I am not responsible for the content, policies, or practices of
            external sites.
          </p>

          <h2>7. User Conduct</h2>
          <p>
            When contacting me through this Site, you agree not to submit
            unlawful, abusive, or fraudulent communications, or to attempt to
            compromise the security or integrity of the Site.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of
            Nigeria, without regard to conflict-of-law principles.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            I may revise these Terms from time to time. Continued use of the
            Site after changes are posted constitutes acceptance of the
            updated Terms.
          </p>

          <h2>10. Contact</h2>
          <p>For questions about these Terms, contact:</p>
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
        </article>
      </BlurFade>
    </section>
  );
}
