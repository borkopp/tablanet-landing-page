"use client"

import React from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggerChildren?: number
  delayChildren?: number
  once?: boolean
  margin?: string
  className?: string
}

export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  once = true,
  margin = "-60px",
  className,
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: margin as any }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  distance?: number
  className?: string
}

export function StaggerItem({
  children,
  distance = 20,
  className,
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
