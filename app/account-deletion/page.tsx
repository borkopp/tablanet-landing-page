import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/motion/page-transition"

export const metadata: Metadata = {
  title: "Account Deletion",
  description: "Learn how to delete your Tablanet account and manage your data.",
  alternates: {
    canonical: "/account-deletion",
  },
}

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <main className="w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex-1">
        <PageTransition>
          <div className="mb-8">
            <Link href="/" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Tablanet
            </Link>
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-primary font-medium mb-2">
            Account & Data Management
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-foreground mb-6">
            Account Deletion
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            How to delete your registered Tablanet account and understand what happens to your data.
          </p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section className="space-y-3 bg-card border border-border/60 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground">How to delete your account in the app</h2>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>Open the <strong className="text-foreground">Tablanet</strong> app on your iOS device.</li>
                <li>Ensure you have resolved or completed any active matches.</li>
                <li>Go to <strong className="text-foreground">Settings</strong> tab.</li>
                <li>Scroll to the bottom and select <strong className="text-destructive">Delete Account</strong>.</li>
                <li>Confirm your choice when prompted.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">What happens when you delete your account</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your active session is immediately revoked and device credentials are removed.</li>
                <li>Your social data, friendships, blocks, and pending invitations are permanently deleted.</li>
                <li>Your personal match history view is erased.</li>
                <li>In completed opponent match ledgers, your name is changed to anonymized <strong className="text-foreground">“Deleted Player”</strong> so score totals remain accurate for remaining players.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Guest accounts</h2>
              <p className="text-muted-foreground">
                Guest accounts do not store registered personal credentials on Tablanet servers. Guest history is stored locally on your device and can be cleared at any time by uninstalling the app.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Need manual assistance?</h2>
              <p className="text-muted-foreground">
                If you cannot access your device or need assistance deleting your registered account, please email us at{" "}
                <a href="mailto:support@tablanet.com?subject=Account%20Deletion%20Request" className="text-primary hover:underline font-medium">
                  support@tablanet.com
                </a>.
              </p>
            </section>
          </div>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
