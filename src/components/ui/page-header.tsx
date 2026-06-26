"use client"
import { motion } from "framer-motion"

export function PageHeader({ title, subtitle, image }: { title: string, subtitle?: string, image?: string }) {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/30 z-10" />
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
        ) : (
          <div className="w-full h-full bg-brand-black" />
        )}
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center text-center mt-20">
        {subtitle && (
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red font-poppins font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wide text-brand-white"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}
