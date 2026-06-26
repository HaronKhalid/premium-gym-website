"use client"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dumbbell, Target, Zap, Shield } from "lucide-react"

export function LeadFormSection() {
  const [step, setStep] = useState(1);
  
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if(step < 3) setStep(step + 1);
  }

  const handleBack = () => {
    if(step > 1) setStep(step - 1);
  }

  const goals = [
    { name: "Build Muscle", icon: Dumbbell },
    { name: "Lose Fat", icon: Target },
    { name: "Increase Strength", icon: Zap },
    { name: "General Fitness", icon: Shield }
  ]

  return (
    <Section className="bg-brand-black relative">
      <div className="absolute inset-0 bg-brand-red/5 blur-[150px] pointer-events-none" />
      <SectionHeader title="Start Your Journey" subtitle="Claim Your Free Trial" />
      
      <div className="max-w-xl mx-auto bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border relative z-10 shadow-2xl">
        <div className="flex gap-2 mb-8">
          {[1,2,3].map(i => (
            <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-brand-gold' : 'bg-brand-dark'}`} />
          ))}
        </div>

        <form onSubmit={handleNext}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-poppins font-bold text-white mb-6">What is your primary goal?</h3>
                <div className="space-y-3">
                  {goals.map(({name, icon: Icon}) => (
                    <label key={name} className="flex items-center gap-4 p-4 rounded-xl border border-brand-border hover:border-brand-gold cursor-pointer transition-colors bg-brand-dark group">
                      <input type="radio" name="goal" value={name} className="w-5 h-5 accent-brand-gold" required />
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand-gold transition-colors" />
                      <span className="text-white font-inter">{name}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-poppins font-bold text-white mb-6">Personal Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 font-inter text-sm mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-inter text-sm mb-2">Email Address</label>
                    <input type="email" required className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                  </div>
                  <div>
                    <label className="block text-gray-400 font-inter text-sm mb-2">Phone Number</label>
                    <input type="tel" required className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 text-center py-8"
              >
                <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-brand-gold rounded-full shadow-[0_0_20px_rgba(255,209,102,0.5)] flex items-center justify-center" />
                </div>
                <h3 className="text-3xl font-bebas text-white mb-4 tracking-wider">You're almost there!</h3>
                <p className="text-gray-400 font-inter mb-8">Click below to submit your details. Our team will contact you within 24 hours to schedule your free trial session.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button type="button" variant="ghost" onClick={handleBack} className="w-full sm:w-1/3">
                Back
              </Button>
            )}
            <Button type="submit" variant={step === 3 ? "primary" : "secondary"} className={step === 1 ? "w-full" : "w-full sm:w-2/3"}>
              {step === 3 ? "Claim Free Trial" : "Next Step"}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  )
}
