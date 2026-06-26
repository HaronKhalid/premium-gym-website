import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"

const trainers = [
  {
    name: "Marcus Vance",
    specialty: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    specialty: "Metabolic Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    specialty: "Powerlifting Specialist",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    specialty: "Mobility & Recovery",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop"
  }
]

export default function TrainersPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <PageHeader 
        title="Elite Trainers" 
        subtitle="Learn from the best" 
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <Section className="bg-brand-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {trainers.map((trainer, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${trainer.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bebas tracking-wide text-brand-white mb-1">{trainer.name}</h3>
                <p className="text-brand-red font-poppins text-sm uppercase tracking-wider font-semibold">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
