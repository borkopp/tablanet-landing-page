"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { FadeIn } from "@/components/motion/fade-in"

const features = [
  {
    title: (
      <>
        One link.
        <br />
        One friend.
      </>
    ),
    description:
      "Send a single-use invitation. Your match stays between the two of you.",
    imageSrc: "/images/1.png",
    imageAlt: "Private invitation illustration",
  },
  {
    title: "A proper duel.",
    description: "Two people, one table, the full 52-card game. Best of three?",
    imageSrc: "/images/duel.png",
    imageAlt: "Live table card duel illustration",
  },
  {
    title: (
      <>
        No noise.
        <br />
        Just cards.
      </>
    ),
    description:
      "No ads, chips, chat, or public matchmaking. Just the game and the person across the table.",
    imageSrc: "/images/3.png",
    imageAlt: "Pure gameplay cards illustration",
  },
]

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : i * 0.12,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    }),
  }

  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 md:py-24 lg:py-32">
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-end">
        <FadeIn
          direction="up"
          distance={20}
          className="flex max-w-2xl flex-col gap-3"
        >
          <h2 className="text-4xl leading-[1.08] font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A quiet place for <br className="hidden sm:inline" />
            <span className="text-primary">a proper game.</span>
          </h2>
        </FadeIn>
        <FadeIn direction="up" distance={20} delay={0.1} className="max-w-sm">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            No public matchmaking. No strangers. Every match starts with someone
            you chose.
          </p>
        </FadeIn>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -6,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-card-foreground shadow-sm transition-colors hover:border-primary/40 hover:shadow-md sm:p-8"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
            <div className="relative -mx-6 mt-6 -mb-6 aspect-[4/3] w-[calc(100%+3rem)] overflow-hidden sm:-mx-8 sm:-mb-8 sm:w-[calc(100%+4rem)]">
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
