import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for otito.site",
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
            &ldquo;me,&rdquo; or &ldquo;my&rdquo;), operating this website at
            otito.site, collects, uses, and protects your information when you
            visit this site or contact me through it.
          </p>

          <h2>1. Who I Am</h2>
          <p>
            I am an independent freelance software engineer based in Enugu,
            Nigeria, offering backend engineering, AI systems, and software
            development services. This site is a personal portfolio and
            business contact point; it does not process payments or sell goods
            directly.
          </p>

          <h2>2. Information I Collect</h2>
          <p>
            I collect information only when you voluntarily provide it, such
            as when you:
          </p>
          <ul>
            <li>Send a message through a contact form or email</li>
            <li>Reach out via social media (X, LinkedIn) linked from this site</li>
          </ul>
          <p>
            This may include your name, email address, and any details you
            choose to share about your project or inquiry.
          </p>
          <p>
            I do not knowingly collect sensitive personal information (such as
            financial account numbers, government ID numbers, or health data)
            through this site.
          </p>

          <h2>3. Automatically Collected Information</h2>
          <p>
            Like most websites, this site may automatically collect limited
            technical data through standard hosting and analytics
            infrastructure, such as:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring website</li>
          </ul>
          <p>
            This information is used only in aggregate to understand site
            usage and is not used to individually identify visitors beyond
            what&rsquo;s necessary for basic security and analytics.
          </p>

          <h2>4. How I Use Your Information</h2>
          <p>Information you provide is used to:</p>
          <ul>
            <li>Respond to your inquiries or project requests</li>
            <li>Communicate about potential or ongoing work</li>
            <li>Improve this website&rsquo;s content and functionality</li>
          </ul>
          <p>
            I do not sell, rent, or trade your personal information to third
            parties.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            I do not share your personal information with third parties,
            except:
          </p>
          <ul>
            <li>When required by law or legal process</li>
            <li>
              With service providers that support this website&rsquo;s basic
              operation (e.g., hosting provider), who are bound to keep such
              information confidential
            </li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            I retain contact information only as long as reasonably necessary
            to respond to your inquiry or maintain a business relationship, or
            as required by applicable law.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to request
            access to, correction of, or deletion of your personal
            information. To make such a request, contact me using the details
            below.
          </p>

          <h2>8. Cookies</h2>
          <p>
            This site may use minimal cookies or local storage for basic
            functionality and analytics. You can disable cookies through your
            browser settings; doing so should not affect your ability to
            browse the site.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            This site may link to external sites (e.g., GitHub, project
            demos, social media). I am not responsible for the privacy
            practices or content of those third-party sites.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. The &ldquo;Last
            updated&rdquo; date at the top of this page reflects the most
            recent revision.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about this Privacy Policy or your information,
            contact:
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
        </article>
      </BlurFade>
    </section>
  );
}
