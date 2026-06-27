"use client"
import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Muscle Building",
    calories: "3,000+ kcal",
    focus: "High Protein, Moderate Carbs",
    meals: [
      "Breakfast: Oatmeal with whey protein & berries",
      "Lunch: Chicken breast, sweet potato, broccoli",
      "Pre-workout: Banana & rice cakes",
      "Dinner: Salmon, quinoa, asparagus"
    ]
  },
  {
    name: "Fat Loss",
    calories: "1,800 - 2,200 kcal",
    focus: "High Protein, Low Carbs",
    meals: [
      "Breakfast: Egg white omelet with spinach",
      "Lunch: Grilled turkey salad with olive oil",
      "Snack: Greek yogurt & almonds",
      "Dinner: Lean steak, zucchini noodles"
    ]
  },
  {
    name: "Endurance",
    calories: "2,500 - 2,800 kcal",
    focus: "High Carbs, Moderate Protein",
    meals: [
      "Breakfast: Whole grain toast, peanut butter",
      "Lunch: Pasta with lean ground beef",
      "Pre-workout: Energy gel or fruit",
      "Dinner: Chicken, large portion of brown rice"
    ]
  }
]

export function DietPlansSection() {
  return (
    <Section className="bg-brand-dark">
      <SectionHeader title="Sample Diet Plans" subtitle="Eat For Your Goals" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-brand-card p-8 rounded-3xl border border-brand-border"
          >
            <h3 className="text-2xl font-bebas text-brand-white mb-2">{plan.name}</h3>
            <div className="text-brand-gold font-inter font-bold mb-1">{plan.calories}</div>
            <div className="text-gray-400 font-inter text-sm mb-6">{plan.focus}</div>
            
            <ul className="space-y-4">
              {plan.meals.map((meal, mIdx) => (
                <li key={mIdx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-inter text-sm leading-relaxed">{meal}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
