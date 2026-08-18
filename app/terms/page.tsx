import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Tablanet Terms of Service for online two-player card matches.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <main className="w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex-1">
        <div className="mb-8">
          <Link href="/" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Tablanet
          </Link>
        </div>

        <p className="text-xs font-mono uppercase tracking-widest text-primary font-medium mb-2">
          Effective 11 August 2026
        </p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-foreground mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          By creating or using a Tablanet account, you agree to these terms.
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">The service</h2>
            <p className="text-muted-foreground">
              Tablanet provides free, private, two-player online card matches. There is no public matchmaking, wagering, cash prize, advertising, subscription, or in-app purchase. The authoritative server applies the published game rules and resolves timeouts, disconnections, scoring, and results.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Your account</h2>
            <p className="text-muted-foreground">
              You are responsible for access to your device and account. Do not transfer credentials, automate play, exploit faults, interfere with another player, evade a block, or attempt to access another player’s private cards or service data. Public usernames must use the supported characters and must not contain racist content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Fair play and availability</h2>
            <p className="text-muted-foreground">
              Network loss can cause automatic plays or a disconnect loss under the in-app rules. Do not leave a game merely to avoid an outcome. Maintenance, security events, network providers, and software defects can interrupt the service. Tablanet may restrict abusive traffic, remove prohibited usernames, suspend compromised access, or stop operating a feature when reasonably necessary.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Invitations and conduct</h2>
            <p className="text-muted-foreground">
              Private links are single-use and time-limited. Share them only with intended recipients. Blocking prevents further social and invitation interactions. The username reporting feature is for racist username content, not match disputes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Software and content</h2>
            <p className="text-muted-foreground">
              Tablanet and its software, visual design, and service materials remain protected by applicable intellectual-property laws. You receive a personal, revocable right to use the app for its intended purpose. You may not reverse engineer the hosted service, bypass security, or redistribute the app except where applicable law expressly permits it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Account deletion</h2>
            <p className="text-muted-foreground">
              You may delete your registered account from Settings after resolving an active match. Deletion cannot be undone. Some anonymized match facts remain in opponents’ history so completed results stay accurate. See the{" "}
              <Link href="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Disclaimers and responsibility</h2>
            <p className="text-muted-foreground">
              The service is provided on an “as available” basis to the extent permitted by law. Nothing in these terms excludes rights or liability that cannot legally be excluded. You are responsible for lawful use of the service and for any network or mobile-data charges from your provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Changes</h2>
            <p className="text-muted-foreground">
              Material changes will be reflected by a new effective date. Continuing to use the service after an applicable update means you accept the updated terms. If you do not agree, stop using the service and delete your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Support</h2>
            <p className="text-muted-foreground">
              Contact{" "}
              <a href="mailto:support@tablanet.com" className="text-primary hover:underline font-medium">
                support@tablanet.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
