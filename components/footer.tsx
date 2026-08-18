"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

export function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
      className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 py-10 border-t border-border/40"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand Name */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors inline-block"
          >
            tablanet
          </Link>
        </motion.div>

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
    </motion.footer>
  )
}
