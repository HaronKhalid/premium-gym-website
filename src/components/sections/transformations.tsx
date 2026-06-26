"use client"
import { Section, SectionHeader } from "@/components/ui/section"
import { useState } from "react"

export function TransformationsSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <Section className="bg-brand-black">
      <SectionHeader title="Real Transformations" subtitle="Results speak" />
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden aspect-video border border-brand-border">
        {/* After Image (Background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop")' }}
        >
          <div className="absolute top-4 right-4 bg-brand-red text-white px-4 py-1 font-bebas text-2xl tracking-widest rounded-md shadow-xl z-20">AFTER</div>
        </div>
        
        {/* Before Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 bg-cover bg-center border-r-[4px] border-brand-gold z-10"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop")',
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        >
          <div className="absolute top-4 left-4 bg-brand-dark text-white px-4 py-1 font-bebas text-2xl tracking-widest rounded-md shadow-xl">BEFORE</div>
        </div>

        {/* Range Input for Control */}
        <input 
          type="range"
          min="0" max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
        
        {/* Custom Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-brand-gold pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,209,102,0.5)]">
             <div className="flex gap-1">
               <div className="w-0.5 h-5 bg-brand-dark rounded-full" />
               <div className="w-0.5 h-5 bg-brand-dark rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
