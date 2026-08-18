"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/maewlwyw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const data = await response.json()
        if (data && data.errors && data.errors.length > 0) {
          setError(data.errors.map((err: { message: string }) => err.message).join(", "))
        } else {
          setError("Something went wrong. Please try again or email support@tablanet.com directly.")
        }
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <main className="w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex-1">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors inline-block"
          >
            ← Back to Tablanet
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] as const }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary font-medium mb-2">
            Support & Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-foreground mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Have a question, feedback, or need support with Tablanet? Send us a message below or email us directly at{" "}
            <a href="mailto:support@tablanet.com" className="text-primary hover:underline font-medium">
              support@tablanet.com
            </a>.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
              className="bg-card border border-border/60 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] as const }}
                className="size-12 mx-auto rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl"
              >
                ✓
              </motion.div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Message Sent</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for reaching out! Your message has been sent to our team and we will get back to you as soon as possible.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setError(null)
                  }}
                  variant="outline"
                  className="rounded-full mt-4"
                >
                  Send another message
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
              className="bg-card border border-border/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6"
            >
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium overflow-hidden"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium block">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this regarding?"
                  className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base rounded-full font-semibold shadow-md"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
