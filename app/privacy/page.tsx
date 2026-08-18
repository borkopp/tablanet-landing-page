import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/motion/page-transition"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tablanet Privacy Policy for online two-player card games.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
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
            Effective 11 August 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            This policy explains the information Tablanet uses to provide private two-player online card games.
          </p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Information you provide</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Account information.</strong> When you use Sign in with Apple, Tablanet receives Apple’s account identifier and, only when Apple supplies it, your first name. Tablanet creates a public username. Guest accounts use a random guest number.
                </li>
                <li>
                  <strong className="text-foreground">Social information.</strong> Friend requests, friendships, blocks, private invitations, and racist-username reports are stored so those features work.
                </li>
                <li>
                  <strong className="text-foreground">Game information.</strong> Match commands, results, score ledgers, surrender/disconnect reasons, and registered-account match history are stored. Other players never receive your private hand or captured-card pile.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Device and service information</h2>
              <p className="text-muted-foreground">
                If you enable notifications, Tablanet stores an encrypted Apple Push Notification service device token, its sandbox/production environment, app version, authorization status, and your notification preferences. The service also keeps security and reliability records such as bounded request identifiers, session records, command identifiers, error categories, and timestamps. It does not use advertising identifiers or cross-app tracking.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">How information is used</h2>
              <p className="text-muted-foreground">
                Information is used only to authenticate you, run and recover matches, show friends-only presence, deliver requested notifications, keep history, prevent abuse, investigate racist usernames, secure sessions, and operate the service. Tablanet does not sell personal information and contains no advertising or third-party analytics SDK.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Sharing and infrastructure</h2>
              <p className="text-muted-foreground">
                Apple processes Sign in with Apple and push delivery. The backend runs on contracted hosting infrastructure. Information may also be disclosed when required by law or necessary to protect users and the service. Public usernames are visible in search; your stored first name and presence are visible only to accepted friends and match opponents as needed for play.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Retention</h2>
              <p className="text-muted-foreground">
                Registered match history is retained indefinitely so account history and friend head-to-head statistics remain available. Guest history is stored locally on that device. Pending invitation records expire; security/session records are retained only as needed for security and operation. A block remains until you remove it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Deletion and choices</h2>
              <p className="text-muted-foreground">
                You can change notification choices, remove friends, manage blocks, sign out, or delete a registered account in Settings. Account deletion revokes sessions, removes devices and social/invitation data, deletes your own history view, and changes retained opponent records to “Deleted Player.” An active match must be resolved first to preserve fair play.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Security</h2>
              <p className="text-muted-foreground">
                Tablanet uses encrypted transport, rotating sessions, protected push tokens, authorization checks, private per-player game projections, and transactional storage. No internet service can promise absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Questions</h2>
              <p className="text-muted-foreground">
                For privacy or support questions, contact{" "}
                <a href="mailto:support@tablanet.com" className="text-primary hover:underline font-medium">
                  support@tablanet.com
                </a>. This policy will be updated if the service’s data practices materially change.
              </p>
            </section>
          </div>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
