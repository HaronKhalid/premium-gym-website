"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", className, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-poppins font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-brand-red text-brand-white hover:bg-red-600 shadow-[0_0_15px_rgba(230,57,70,0.3)] hover:shadow-[0_0_25px_rgba(230,57,70,0.5)]",
      secondary: "bg-brand-gold text-brand-black hover:bg-yellow-500",
      outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white",
      ghost: "hover:bg-brand-gray text-brand-white"
    }
    
    const sizes = {
      default: "h-12 px-6 py-2 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-16 px-10 text-base"
    }

    return (
      <motion.button 
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"
