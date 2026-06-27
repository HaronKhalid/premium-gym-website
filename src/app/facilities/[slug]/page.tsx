import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"

const facilityData: Record<string, { title: string; image: string; description: string; features: string[] }> = {
  "strength-zone": {
    title: "Strength Zone",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    description: "Designed for serious lifters, our Strength Zone features top-of-the-line free weights, Olympic lifting platforms, and specialized machines.",
    features: [
      "8 Olympic Lifting Platforms",
      "Dumbbells up to 150 lbs",
      "Multiple Squat Racks and Power Cages",
      "Hammer Strength Plate-Loaded Machines",
      "Chalk provided"
    ]
  },
  "cardio-arena": {
    title: "Cardio Arena",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop",
    description: "Elevate your heart rate in our expansive Cardio Arena, equipped with the latest interactive cardiovascular technology to keep you engaged.",
    features: [
      "Over 50 Treadmills and Ellipticals",
      "StairMasters and Concept2 Rowers",
      "Interactive screens with streaming services",
      "Sprint track for high-intensity intervals",
      "Heart-rate monitoring integration"
    ]
  },
  "recovery-area": {
    title: "Recovery Area",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    description: "Recovery is just as important as the workout. Rejuvenate your body in our premium recovery suite designed to accelerate muscle repair.",
    features: [
      "Infrared Saunas",
      "Cold Plunge Therapy",
      "Massage Chairs & Percussion Guns",
      "Dedicated stretching and mobility mats",
      "NormaTec Compression Therapy"
    ]
  },
  "locker-rooms": {
    title: "Locker Rooms",
    image: "https://images.unsplash.com/photo-1596356453261-0d265eb2d1f3?q=80&w=2070&auto=format&fit=crop",
    description: "Experience luxury before and after your workout in our pristine, fully-stocked executive locker rooms.",
    features: [
      "Digital secure lockers",
      "Private rainfall showers",
      "Complimentary towel service",
      "Premium grooming products",
      "Relaxation lounges"
    ]
  }
}

export default async function FacilityPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = facilityData[params.slug]
  
  if (!data) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-brand-black">
      <PageHeader 
        title={data.title} 
        subtitle="World-Class Facilities" 
        image={data.image} 
      />
      <Section className="bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bebas text-brand-gold mb-6">About the {data.title}</h2>
          <p className="text-gray-300 font-inter text-lg leading-relaxed mb-12">
            {data.description}
          </p>
          
          <div className="bg-brand-card p-8 rounded-3xl border border-brand-border">
            <h3 className="text-2xl font-bebas text-brand-white mb-6">Facility Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-inter text-md">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  )
}
