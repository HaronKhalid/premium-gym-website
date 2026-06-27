"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  AreaChart, Area,
  PieChart, Pie, Cell, Legend
} from "recharts"

const strengthData = [
  { name: 'Month 1', growth: 10 },
  { name: 'Month 2', growth: 25 },
  { name: 'Month 3', growth: 45 },
  { name: 'Month 4', growth: 70 },
  { name: 'Month 5', growth: 100 },
];

const cardioData = [
  { time: '0m', heartRate: 80 },
  { time: '10m', heartRate: 140 },
  { time: '20m', heartRate: 165 },
  { time: '30m', heartRate: 155 },
  { time: '40m', heartRate: 175 },
  { time: '50m', heartRate: 140 },
  { time: '60m', heartRate: 90 },
];

const recoveryData = [
  { name: 'Sauna', value: 40, color: '#ff4b4b' },
  { name: 'Cold Plunge', value: 30, color: '#3b82f6' },
  { name: 'Massage', value: 20, color: '#ffd166' },
  { name: 'Stretching', value: 10, color: '#10b981' },
];

export function FacilitiesSection() {
  return (
    <Section className="bg-brand-dark">
      <SectionHeader 
        title="World-Class Facilities" 
        subtitle="Unmatched Excellence" 
      />
      
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Strength Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bebas text-brand-gold tracking-wide">The Strength Zone</h3>
            <p className="text-gray-300 font-inter text-lg leading-relaxed">
              "Strength does not come from winning. Your struggles develop your strengths."
            </p>
            <p className="text-gray-400 font-inter text-sm leading-relaxed border-l-2 border-brand-red pl-4">
              Equipped with over 8 Olympic lifting platforms, dumbbells up to 150 lbs, and state-of-the-art plate-loaded machines. Our strength zone is engineered for serious lifters pushing their absolute limits.
            </p>
            <div className="h-64 w-full bg-brand-black/50 p-4 rounded-xl border border-brand-border">
              <h4 className="text-brand-white font-poppins text-sm mb-4 text-center">Average Member Strength Progression (%)</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={strengthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <RechartsTooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                  <Bar dataKey="growth" fill="#ff3333" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
              alt="Strength Zone" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
          </motion.div>
        </div>

        {/* Cardio Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop" 
              alt="Cardio Arena" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-4xl font-bebas text-brand-gold tracking-wide">The Cardio Arena</h3>
            <p className="text-gray-300 font-inter text-lg leading-relaxed">
              "It never gets easier, you just get faster."
            </p>
            <p className="text-gray-400 font-inter text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
              Over 50 high-tech treadmills, Concept2 rowers, and a dedicated sprint track. Tap into the ultimate endurance experience with built-in streaming and live heart-rate monitoring integrations.
            </p>
            <div className="h-64 w-full bg-brand-black/50 p-4 rounded-xl border border-brand-border">
              <h4 className="text-brand-white font-poppins text-sm mb-4 text-center">Optimal HIIT Heart Rate Zones</h4>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cardioData}>
                  <defs>
                    <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} domain={['dataMin - 10', 'dataMax + 10']} />
                  <RechartsTooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                  <Area type="monotone" dataKey="heartRate" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHr)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recovery Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bebas text-brand-gold tracking-wide">The Recovery Area</h3>
            <p className="text-gray-300 font-inter text-lg leading-relaxed">
              "Rest is not idle, is not wasted. Sometimes rest is the most productive thing you can do."
            </p>
            <p className="text-gray-400 font-inter text-sm leading-relaxed border-l-2 border-green-500 pl-4">
              Accelerate your muscle repair with our premium recovery suite. Featuring infrared saunas, cold plunge pools, percussion therapy, and dedicated mobility mats.
            </p>
            <div className="h-64 w-full bg-brand-black/50 p-4 rounded-xl border border-brand-border flex flex-col">
              <h4 className="text-brand-white font-poppins text-sm mb-0 text-center">Popular Recovery Modalities</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={recoveryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {recoveryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Recovery Area" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
          </motion.div>
        </div>

      </div>
    </Section>
  )
}
