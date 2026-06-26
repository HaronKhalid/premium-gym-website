"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for all members with an active Pro or Elite membership. Basic members have access from 5:00 AM to 11:00 PM daily."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes, we have a team of certified elite trainers. Personal training is included in Pro and Elite plans, and available as an add-on for Basic members."
  },
  {
    question: "Is there a joining fee or contract?",
    answer: "No hidden fees. You can choose a month-to-month plan with zero joining fees, or commit to a yearly plan for a 20% discount."
  },
  {
    question: "Can I bring a guest?",
    answer: "Elite members get 2 free guest passes per month. Additional guest passes can be purchased at the front desk."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-brand-dark">
      <SectionHeader 
        title="Frequently Asked Questions" 
        subtitle="Everything You Need To Know" 
      />
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 bg-brand-card rounded-xl border border-brand-border hover:border-brand-red/50 transition-colors duration-300 text-left"
            >
              <span className="font-poppins font-semibold text-brand-white pr-4">
                {faq.question}
              </span>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 text-brand-red transition-transform duration-300",
                  openIndex === idx ? "rotate-180" : ""
                )} 
              />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-2 text-gray-400 font-inter">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
