"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { TiltCard } from "@/components/motion/tilt-card"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
      {/* Non-sticky Navbar */}
      <motion.header
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 md:py-8"
      >
        {/* Enlarged Logo */}
        <Link href="/" className="flex items-center gap-3.5 select-none group">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/tablanet-logo.svg"
              alt=""
              width={38}
              height={48}
              priority
              aria-hidden="true"
              className="h-11 w-auto shrink-0 md:h-12"
            />
          </motion.div>
          <span className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl transition-colors group-hover:text-primary">
            Tablanet
          </span>
        </Link>

        {/* Action Button */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="/download"
            prefetch={false}
            className={buttonVariants({
              className:
                "h-12 rounded-full px-6 text-base font-semibold shadow-sm md:h-13 md:px-8 md:text-lg",
            })}
          >
            Get the app
          </Link>
        </motion.div>
      </motion.header>

      {/* Main Hero Body */}
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-start">
        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-6 pb-4 text-center md:pt-12 lg:pt-16"
        >
          <h1 className="text-5xl leading-[1.06] font-medium tracking-tight text-foreground sm:text-7xl sm:leading-[1.03] md:text-8xl lg:text-[6.5rem]">
            <motion.span variants={itemVariants} className="block">
              A Balkan classic,
            </motion.span>
            <motion.span variants={itemVariants} className="block text-primary">
              made for your pocket.
            </motion.span>
          </h1>
        </motion.div>

        {/* Hero Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: shouldReduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.23, 1, 0.32, 1] as const,
          }}
          className="relative mx-auto mt-3 flex w-full max-w-6xl justify-center px-4 pb-8 sm:mt-5 md:mt-8"
        >
          {/* Ambient Glow */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.95, 1.05, 0.95],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute top-1/4 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex w-full justify-center">
            <TiltCard maxTilt={6} scaleOnHover={1.01} className="w-full flex justify-center">
              <Image
                src="/images/hero-mockup.png"
                alt="Tablanet card game interface mockups on dual mobile devices"
                width={1400}
                height={1400}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="h-auto max-h-[500px] w-full max-w-4xl object-contain drop-shadow-2xl md:max-h-[620px] lg:max-w-[1080px]"
              />
            </TiltCard>
          </div>
        </motion.div>
      </main>
    </section>
  )
}
