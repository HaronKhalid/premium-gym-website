"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Dumbbell, Users, Clock, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines from Rogue and Eleiko to maximize your gains.",
    colSpan: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Elite Trainers",
    description: "Certified professionals dedicated to pushing you beyond your perceived limits.",
    colSpan: "md:col-span-1",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule. We are open every hour of the day, 365 days a year.",
    colSpan: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "Immaculate hygiene, secure lockers, and a supportive, respectful community.",
    colSpan: "md:col-span-2",
  }
]

export function WhyUsSection() {
  return (
    <Section className="bg-brand-black">
      <SectionHeader 
        title="Why Choose Us" 
        subtitle="The Ultimate Standard" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`bg-brand-card border border-brand-border p-8 rounded-2xl flex flex-col items-start gap-4 group hover:border-brand-red transition-colors duration-300 ${feature.colSpan}`}
          >
            <div className="p-4 bg-brand-dark rounded-xl group-hover:bg-brand-red/10 group-hover:text-brand-red text-brand-white transition-colors duration-300">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bebas tracking-wide text-brand-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 font-inter leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
