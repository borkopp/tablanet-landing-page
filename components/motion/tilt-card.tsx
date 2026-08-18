"use client"

import React, { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion"
import { cn } from "@/lib/utils"

export interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  maxTilt?: number
  scaleOnHover?: number
  className?: string
}

export function TiltCard({
  children,
  maxTilt = 8,
  scaleOnHover = 1.015,
  className,
  ...props
}: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for high quality physics feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 18 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 18 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: scaleOnHover }}
      whileTap={{ scale: 0.98 }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={cn("perspective-1000 select-none", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
