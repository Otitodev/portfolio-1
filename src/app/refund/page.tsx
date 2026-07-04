import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation policy for freelance engineering services provided by Otito Ogene.",
};

const BLUR_FADE_DELAY = 0.04;

export default function RefundPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last updated: July 2, 2026
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <article className="prose dark:prose-invert max-w-full text-sm">
          <p>
            This Refund &amp; Cancellation Policy applies to freelance
            engineering services (backend development, AI systems, automation,
            and related consulting) provided by Otito Ogene through
            otito.site. It sits alongside — and does not replace — any signed
            statement of work, proposal, or contract that governs a specific
            engagement.
          </p>

          <h2>1. Nature of the Services</h2>
          <p>
            The services offered are custom, time-based professional services.
            They are not physical products, downloadable software licences, or
            subscription plans. Because work is bespoke, refund terms are
            structured around the stage of the engagement rather than a fixed
            return window.
          </p>

          <h2>2. Engagement Structure</h2>
          <p>Most engagements follow one of these models:</p>
          <ul>
            <li>
              <strong>Fixed-scope project</strong> — an upfront deposit
              (typically 30&ndash;50%) followed by milestone payments tied to
              agreed deliverables.
            </li>
            <li>
              <strong>Hourly / retainer</strong> — billed weekly or monthly in
              arrears against a logged number of hours.
            </li>
            <li>
              <strong>Consulting call or audit</strong> — paid in full in
              advance of the scheduled session.
            </li>
          </ul>

          <h2>3. Deposits</h2>
          <p>
            Deposits reserve capacity in my schedule and cover initial
            discovery, planning, and setup work. Deposits are:
          </p>
          <ul>
            <li>
              <strong>Fully refundable</strong> if you cancel in writing within
              48 hours of payment <em>and</em> before any work has started.
            </li>
            <li>
              <strong>Non-refundable</strong> once discovery, planning, or
              build work has begun, because that time has already been
              committed to your project.
            </li>
          </ul>

          <h2>4. Milestone Payments</h2>
          <p>
            Milestone payments cover work already completed and delivered. They
            are non-refundable once the corresponding milestone has been
            accepted, or where you have used, deployed, or built upon the
            deliverable in any way.
          </p>
          <p>
            If a milestone is delivered but does not meet the agreed
            specification, I will revise the deliverable at no additional cost
            until it does, or, at my discretion, refund the specific milestone
            payment in full.
          </p>

          <h2>5. Hourly &amp; Retainer Work</h2>
          <p>
            Hourly and retainer invoices cover time that has already been
            worked and logged. These are non-refundable once billed. You may
            cancel a retainer at any time with 7 days&rsquo; written notice;
            work already performed within that notice period remains payable.
          </p>

          <h2>6. Consulting Calls and Audits</h2>
          <p>
            For paid consulting calls or one-off audits:
          </p>
          <ul>
            <li>
              You may reschedule once at no cost with at least 24 hours&rsquo;
              notice.
            </li>
            <li>
              Cancellations more than 48 hours before the scheduled time are
              fully refundable.
            </li>
            <li>
              Cancellations within 48 hours, or no-shows, are non-refundable.
            </li>
          </ul>

          <h2>7. Cancellation by the Client</h2>
          <p>
            You may cancel a project at any time by written notice. On
            cancellation:
          </p>
          <ul>
            <li>All fees for work completed to date remain payable.</li>
            <li>Any non-refundable deposit is retained.</li>
            <li>
              I will deliver whatever work-in-progress has been produced up to
              the cancellation date, in its current state.
            </li>
          </ul>

          <h2>8. Cancellation by Me</h2>
          <p>
            I may terminate an engagement early if the scope, working
            relationship, or client conduct becomes untenable (for example:
            non-payment, unlawful requests, or repeated abusive
            communication). Where I terminate for reasons that are not the
            client&rsquo;s fault, I will refund any deposit or prepaid amount
            not yet earned.
          </p>

          <h2>9. Chargebacks</h2>
          <p>
            If you believe a charge is incorrect, please contact me first at{" "}
            <a href="mailto:otitodrichukwu@gmail.com">
              otitodrichukwu@gmail.com
            </a>{" "}
            so I can review it. Raising a chargeback with your bank or payment
            provider without first attempting to resolve the issue directly
            may result in immediate termination of the engagement and
            forfeiture of any pending deliverables.
          </p>

          <h2>10. How to Request a Refund</h2>
          <p>
            Send a written request to{" "}
            <a href="mailto:otitodrichukwu@gmail.com">
              otitodrichukwu@gmail.com
            </a>{" "}
            with:
          </p>
          <ul>
            <li>Your name and the invoice or transaction reference</li>
            <li>The date of payment</li>
            <li>A brief description of the reason for the request</li>
          </ul>
          <p>
            I will acknowledge the request within 3 business days and, where a
            refund is approved, process it within 10 business days to the
            original payment method. Bank or payment-processor timelines may
            add additional days before the refund appears in your account.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about this policy or a specific transaction:
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
