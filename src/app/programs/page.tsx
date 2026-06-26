import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { Dumbbell, Target, Zap, HeartPulse } from "lucide-react"

const programs = [
  {
    title: "Hypertrophy Elite",
    description: "Maximum muscle growth through scientifically backed volume and intensity.",
    icon: Dumbbell,
    level: "Advanced",
    duration: "12 Weeks"
  },
  {
    title: "Shred & Define",
    description: "High-intensity metabolic conditioning to strip body fat while preserving muscle.",
    icon: Target,
    level: "Intermediate",
    duration: "8 Weeks"
  },
  {
    title: "Raw Power",
    description: "Focus purely on the big three: Squat, Bench, and Deadlift. Build true raw strength.",
    icon: Zap,
    level: "All Levels",
    duration: "16 Weeks"
  },
  {
    title: "Cardio Conditioning",
    description: "Build an engine that never quits. Perfect for endurance athletes.",
    icon: HeartPulse,
    level: "Beginner Friendly",
    duration: "Ongoing"
  }
]

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <PageHeader 
        title="Workout Programs" 
        subtitle="Choose Your Path" 
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <Section className="bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-brand-card border border-brand-border p-8 rounded-3xl hover:border-brand-red transition-colors group cursor-pointer shadow-xl">
              <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-brand-white group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors mb-6">
                <program.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bebas tracking-wide text-white mb-3">{program.title}</h3>
              <p className="text-gray-400 font-inter mb-6">{program.description}</p>
              
              <div className="flex gap-4">
                <span className="text-xs font-poppins font-semibold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                  {program.level}
                </span>
                <span className="text-xs font-poppins font-semibold text-gray-300 uppercase tracking-wider bg-brand-dark px-3 py-1 rounded-full border border-brand-border">
                  {program.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
