"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

import { Counter } from "@/components/ui/counter"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/3133649/3133649-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl flex flex-col items-start justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-brand-red font-poppins font-bold uppercase tracking-[0.2em] mb-4 block">
            Dominate Your Limits
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] leading-[1] md:leading-[0.85] text-brand-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          BUILD YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-red">
            DREAM PHYSIQUE
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-400 font-inter max-w-2xl mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Join the most elite fitness community. World-class trainers, premium equipment, and a culture of relentless progress.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Join Now
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Transformation
          </Button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          className="absolute bottom-10 left-4 md:left-8 hidden md:flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex flex-col">
            <span className="font-bebas text-4xl text-brand-white"><Counter value={5000} />+</span>
            <span className="font-poppins text-sm text-brand-red uppercase tracking-wider">Active Members</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-4xl text-brand-white"><Counter value={50} />+</span>
            <span className="font-poppins text-sm text-brand-red uppercase tracking-wider">Expert Coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-4xl text-brand-white"><Counter value={10} />+</span>
            <span className="font-poppins text-sm text-brand-red uppercase tracking-wider">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
