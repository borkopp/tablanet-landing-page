import type { Metadata } from "next"

import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import {
  APP_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "GameApplication",
      operatingSystem: "iOS",
      isAccessibleForFree: true,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
    },
  ],
}


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <main className="flex-1">
          <Hero />
          <FeaturesSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
