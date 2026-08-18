import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Contact Tablanet for product questions, feedback, and support.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
