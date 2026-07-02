import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Otito Ogene for freelance and contract engineering work.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          Get in Touch
        </h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <p className="text-sm text-muted-foreground mb-8 max-w-prose">
          I&rsquo;m Otito Ogene, a freelance backend and AI systems engineer
          based in Enugu, Nigeria. I work with clients globally on AI agents,
          backend systems, and automation platforms.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="space-y-3 text-sm mb-10">
          <div>
            <span className="text-muted-foreground">Location: </span>
            Enugu, Nigeria (WAT, UTC+1)
          </div>
          <div>
            <span className="text-muted-foreground">Email: </span>
            <Link
              href="mailto:otitodrichukwu@gmail.com"
              className="underline underline-offset-4 hover:text-foreground"
            >
              otitodrichukwu@gmail.com
            </Link>
          </div>
          <div>
            <span className="text-muted-foreground">GitHub: </span>
            <Link
              href="https://github.com/Otitodev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              github.com/Otitodev
            </Link>
          </div>
          <div>
            <span className="text-muted-foreground">LinkedIn: </span>
            <Link
              href="https://linkedin.com/in/otito-ogene"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              linkedin.com/in/otito-ogene
            </Link>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="rounded-lg border p-4 text-sm text-muted-foreground max-w-prose">
          <p className="mb-2 font-medium text-foreground">
            For project inquiries
          </p>
          <p>
            Please include a brief description of what you&rsquo;re looking to
            build, your timeline, and your budget range if known. I typically
            respond within 24&ndash;48 hours.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="mt-10">
          <Link
            href="mailto:otitodrichukwu@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Send me an email
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
