"use client"
import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Apple, Droplet, Wheat, Fish } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const chartData = [
  { name: 'Protein', value: 30, color: '#ff3333' },
  { name: 'Carbs', value: 45, color: '#ffd166' },
  { name: 'Fats', value: 25, color: '#3b82f6' }
]

const macros = [
  {
    name: "Protein",
    icon: Fish,
    description: "Crucial for muscle repair and growth. Aim for 1.6-2.2g per kg of body weight.",
    color: "text-brand-red",
    bg: "bg-brand-red/10"
  },
  {
    name: "Carbohydrates",
    icon: Wheat,
    description: "Your body's primary energy source. Focus on complex carbs like oats and sweet potatoes.",
    color: "text-brand-gold",
    bg: "bg-brand-gold/10"
  },
  {
    name: "Fats",
    icon: Droplet,
    description: "Essential for hormone production. Avocados, nuts, and olive oil are great sources.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    name: "Micronutrients",
    icon: Apple,
    description: "Vitamins and minerals keep your body functioning optimally. Eat the rainbow.",
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
]

export function NutritionGuideSection() {
  return (
    <Section className="bg-brand-black">
      <SectionHeader title="Nutrition Guide" subtitle="Fuel Your Body Right" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {macros.map((macro, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-brand-card p-6 rounded-2xl border border-brand-border hover:border-brand-gold/50 transition-colors"
          >
            <div className={`w-12 h-12 ${macro.bg} ${macro.color} rounded-xl flex items-center justify-center mb-6`}>
              <macro.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bebas text-brand-white mb-3 tracking-wide">{macro.name}</h3>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              {macro.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 bg-brand-dark rounded-3xl p-8 border border-brand-border">
        <h3 className="text-3xl font-bebas text-brand-gold mb-6 text-center">Typical Macro Distribution</h3>
        <p className="text-gray-300 font-inter text-center mb-8">
          While individual needs vary based on goals, a standard balanced diet for active individuals often looks like this:
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-brand-dark rounded-3xl p-8 border border-brand-border">
        <h3 className="text-3xl font-bebas text-brand-gold mb-6 text-center">Hydration Is Key</h3>
        <p className="text-gray-300 font-inter text-center mb-8">
          Water plays a critical role in joint lubrication, nutrient transport, and temperature regulation. 
          Dehydration by just 2% can significantly impair your physical performance.
        </p>
        <div className="flex justify-center items-center gap-4 text-brand-white font-poppins">
          <Droplet className="w-8 h-8 text-blue-500" />
          <span className="text-2xl">Aim for 3-4 Liters Daily</span>
        </div>
      </div>
    </Section>
  )
}
