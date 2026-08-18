import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 py-10 border-t border-border/40">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand Name */}
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity">
          tablanet
        </Link>

        {/* Footer Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-8 text-sm text-muted-foreground">
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/account-deletion" className="hover:text-foreground transition-colors">
            Account Deletion
          </Link>
          <span className="text-muted-foreground/60">
            © 2026 Tablanet
          </span>
        </div>
      </div>
    </footer>
  )
}
