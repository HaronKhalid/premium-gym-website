"use client"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState<"bmi" | "calories">("bmi");
  
  // BMI State
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("75");
  const [bmiResult, setBmiResult] = useState<string | null>(null);

  // Calorie State
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.55");
  const [calResult, setCalResult] = useState<string | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if(h > 0 && w > 0) {
      setBmiResult((w / (h * h)).toFixed(1));
    }
  }

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    let bmr = 0;
    
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }
    
    setCalResult(Math.round(bmr * parseFloat(activity)).toString());
  }

  return (
    <Section className="bg-brand-dark">
      <SectionHeader title="Fitness Tools" subtitle="Know Your Numbers" />
      
      <div className="max-w-2xl mx-auto bg-brand-card rounded-3xl p-6 md:p-10 border border-brand-border">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 bg-brand-black p-2 rounded-xl">
          <button 
            onClick={() => setActiveTab("bmi")}
            className={cn("flex-1 py-3 rounded-lg font-poppins font-semibold text-sm transition-colors", activeTab === "bmi" ? "bg-brand-red text-white" : "text-gray-400 hover:text-white")}
          >
            BMI Calculator
          </button>
          <button 
            onClick={() => setActiveTab("calories")}
            className={cn("flex-1 py-3 rounded-lg font-poppins font-semibold text-sm transition-colors", activeTab === "calories" ? "bg-brand-red text-white" : "text-gray-400 hover:text-white")}
          >
            Daily Calories
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "bmi" ? (
            <motion.form 
              key="bmi"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={calculateBMI}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 font-inter text-sm mb-2">Height (cm)</label>
                  <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                </div>
                <div>
                  <label className="block text-gray-400 font-inter text-sm mb-2">Weight (kg)</label>
                  <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <Button type="submit" variant="secondary" className="w-full">Calculate BMI</Button>
              {bmiResult && (
                <div className="mt-6 p-4 bg-brand-black border border-brand-gold/30 rounded-lg text-center">
                  <span className="text-gray-400 font-inter block mb-1">Your BMI is</span>
                  <span className="text-4xl font-bebas text-brand-gold">{bmiResult}</span>
                </div>
              )}
            </motion.form>
          ) : (
            <motion.form 
              key="calories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={calculateCalories}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-400 font-inter text-sm mb-2">Height (cm)</label>
                  <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-400 font-inter text-sm mb-2">Weight (kg)</label>
                  <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-400 font-inter text-sm mb-2">Age</label>
                  <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-400 font-inter text-sm mb-2">Gender</label>
                  <select value={gender} onChange={(e)=>setGender(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red appearance-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-4">
                  <label className="block text-gray-400 font-inter text-sm mb-2">Activity Level</label>
                  <select value={activity} onChange={(e)=>setActivity(e.target.value)} className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red appearance-none">
                    <option value="1.2">Sedentary (little to no exercise)</option>
                    <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                    <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                    <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                    <option value="1.9">Extra active (very hard exercise/physical job)</option>
                  </select>
                </div>
              </div>
              <Button type="submit" variant="primary" className="w-full">Calculate Calories</Button>
              {calResult && (
                <div className="mt-6 p-4 bg-brand-black border border-brand-red/30 rounded-lg text-center">
                  <span className="text-gray-400 font-inter block mb-1">Maintenance Calories</span>
                  <span className="text-4xl font-bebas text-brand-red">{calResult} <span className="text-xl">kcal/day</span></span>
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
