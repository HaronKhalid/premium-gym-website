"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    price: "Rs.2500",
    period: "/mo",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Access to cardio area",
      "Access to weight room",
      "Locker room access",
      "Free initial assessment"
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "Rs.3500",
    period: "/mo",
    description: "The ultimate package for serious athletes.",
    features: [
      "24/7 Gym access",
      "Group classes included",
      "1 PT session per month",
      "Nutrition plan access",
      "Sauna & Recovery area"
    ],
    recommended: true,
  },
  {
    name: "Elite",
    price: "Rs.5500",
    period: "/mo",
    description: "VIP treatment with unrestricted access.",
    features: [
      "Everything in Pro",
      "4 PT sessions per month",
      "Dedicated locker",
      "Free pre-workout & shakes",
      "Guest passes (2/mo)"
    ],
    recommended: false,
  }
]

export function PricingSection() {
  return (
    <Section className="bg-brand-black pt-12 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={cn(
              "relative bg-brand-card border p-8 rounded-3xl flex flex-col h-full",
              plan.recommended 
                ? "border-brand-gold shadow-[0_0_30px_rgba(255,209,102,0.15)] md:-mt-8 md:mb-8 md:h-[calc(100%+4rem)] z-10" 
                : "border-brand-border"
            )}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-black font-poppins font-bold text-sm px-4 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </div>
            )}
            
            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bebas tracking-wide text-brand-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 font-inter text-sm mb-6 h-10">
                {plan.description}
              </p>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bebas text-brand-white">{plan.price}</span>
                <span className="text-gray-400 font-inter mb-1">{plan.period}</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-red shrink-0" />
                  <span className="text-gray-300 font-inter text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.recommended ? "secondary" : "outline"} 
              className="w-full mt-auto"
            >
              Choose {plan.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
