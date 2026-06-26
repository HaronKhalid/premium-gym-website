"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"

const facilities = [
  {
    title: "Strength Zone",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cardio Arena",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop",
  },
  {
    title: "Recovery Area",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Locker Rooms",
    image: "https://images.unsplash.com/photo-1596356453261-0d265eb2d1f3?q=80&w=2070&auto=format&fit=crop",
  }
]

export function FacilitiesSection() {
  return (
    <Section className="bg-brand-dark">
      <SectionHeader 
        title="World-Class Facilities" 
        subtitle="Train In Luxury" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilities.map((facility, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${facility.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-3xl font-bebas tracking-wide text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                {facility.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
