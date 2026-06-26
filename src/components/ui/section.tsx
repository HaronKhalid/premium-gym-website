"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLMotionProps<"section"> {
  className?: string;
  children: React.ReactNode;
  containerClass?: string;
}

export function Section({ className, children, containerClass, ...props }: SectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-32 w-full", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-8 max-w-7xl", containerClass)}>
        {children}
      </div>
    </motion.section>
  )
}

export function SectionHeader({ title, subtitle, className, align = "center" }: { title: string, subtitle?: string, className?: string, align?: "center" | "left" }) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left", className)}>
      {subtitle && (
        <span className="text-brand-red font-poppins font-semibold uppercase tracking-widest text-sm md:text-base mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-7xl text-brand-white">
        {title}
      </h2>
    </div>
  )
}
