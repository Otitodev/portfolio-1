import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-20 flex flex-col items-center gap-2 text-xs text-muted-foreground">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Link
          href="/services"
          className="hover:text-foreground transition-colors"
        >
          Services
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/contact"
          className="hover:text-foreground transition-colors"
        >
          Contact
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/privacy"
          className="hover:text-foreground transition-colors"
        >
          Privacy
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/terms"
          className="hover:text-foreground transition-colors"
        >
          Terms
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/refund"
          className="hover:text-foreground transition-colors"
        >
          Refund
        </Link>
      </div>
      <p>© {year} Otito Ogene</p>
    </footer>
  );
}
