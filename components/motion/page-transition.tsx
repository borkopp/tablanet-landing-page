"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
