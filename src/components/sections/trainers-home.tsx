"use client"

import { Section } from "@/components/ui/section"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const trainers = [
  {
    name: "Alex Vance",
    specialty: "Head Coach & Strength",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    specialty: "HIIT & Endurance",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Marcus Cole",
    specialty: "Mobility & Recovery",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    specialty: "Olympic Lifting",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop"
  }
]

export function TrainersHomeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Text Reveal Animation
  const textTitle = "Meet The Experts"
  const textSubtitle = "Learn from the best."

  return (
    <Section className="bg-brand-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        {/* Sliding Text Reveal */}
        <div className="text-center mb-16 space-y-4">
          <div className="overflow-hidden inline-block">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bebas text-brand-white"
            >
              {textTitle}
            </motion.h2>
          </div>
          <br/>
          <div className="overflow-hidden inline-block">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-red font-poppins font-semibold uppercase tracking-widest"
            >
              {textSubtitle}
            </motion.p>
          </div>
        </div>

        {/* Cards coming from right with a curved angle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 200, y: 150, rotate: 15, opacity: 0 }}
              whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 100, 
                delay: 0.3 + (idx * 0.15) 
              }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-70" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bebas text-brand-white mb-1 group-hover:text-brand-gold transition-colors">{trainer.name}</h3>
                <p className="text-gray-300 font-inter text-sm">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/trainers">
            <Button variant="outline" size="lg">View All Trainers</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
