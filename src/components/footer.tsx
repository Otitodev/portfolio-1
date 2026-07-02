import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-20 flex flex-col items-center gap-2 text-xs text-muted-foreground">
      <div className="flex items-center gap-3">
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
      </div>
      <p>© {year} Otito Ogene</p>
    </footer>
  );
}
