"use client"

import React from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  delay?: number
  once?: boolean
  margin?: string
  className?: string
}

export function FadeIn({
  children,
  direction = "up",
  distance = 24,
  duration = 0.5,
  delay = 0,
  once = true,
  margin = "-60px",
  className,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 }
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
    }
  }

  const offset = getOffset()

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: margin as any }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.23, 1, 0.32, 1] as const, // Ultra smooth custom ease-out
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
