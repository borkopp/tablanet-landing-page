"use client"

import Link from "next/link"
import { Spade, Heart, Club, Diamond } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-14 69.5-34.3z" />
    </svg>
  )
}

export function CtaSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as const }}
        className="relative w-full bg-card text-card-foreground border border-border/60 rounded-3xl md:rounded-[2.5rem] p-8 sm:p-14 md:p-20 overflow-hidden text-center shadow-xl"
      >
        {/* Background Concentric Rings & Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="size-[300px] sm:size-[500px] md:size-[650px] rounded-full border border-border/30 bg-primary/5 blur-2xl"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.04, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute size-[220px] sm:size-[380px] md:size-[480px] rounded-full border border-border/40"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.06, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute size-[140px] sm:size-[240px] md:size-[300px] rounded-full border border-border/30"
          />
        </div>

        {/* Floating Card Suit Accents */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-4, 4, -4],
                  rotate: [-3, 3, -3],
                }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 left-8 sm:top-12 sm:left-14 text-muted-foreground/20 pointer-events-none"
        >
          <Club className="size-8 sm:size-12 fill-current" />
        </motion.div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [4, -4, 4],
                  rotate: [3, -3, 3],
                }
          }
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-8 right-8 sm:top-12 sm:right-14 text-primary/30 pointer-events-none"
        >
          <Diamond className="size-8 sm:size-12 fill-current" />
        </motion.div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [3, -3, 3],
                  rotate: [-2, 2, -2],
                }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-8 left-8 sm:bottom-12 sm:left-14 text-muted-foreground/20 pointer-events-none"
        >
          <Spade className="size-8 sm:size-12 fill-current" />
        </motion.div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-5, 5, -5],
                  rotate: [4, -4, 4],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-8 right-8 sm:bottom-12 sm:right-14 text-primary/30 pointer-events-none"
        >
          <Heart className="size-8 sm:size-12 fill-current" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4"
          >
            Available on iOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
            className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.08] mb-4"
          >
            Save a seat <br />
            for a friend.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
            className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed mb-8"
          >
            Tablanet is free on the App Store. Download now and start playing private games instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/download"
              prefetch={false}
              className={buttonVariants({
                size: "lg",
                className:
                  "h-13 md:h-15 px-8 md:px-10 text-base md:text-lg rounded-full font-semibold shadow-md gap-3",
              })}
            >
              <AppleIcon className="size-5 md:size-6" />
              Download on App Store
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
