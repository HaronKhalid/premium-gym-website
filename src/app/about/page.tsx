import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { WhyUsSection } from "@/components/sections/why-us"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <PageHeader 
        title="Our Philosophy" 
        subtitle="More than a gym" 
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <Section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bebas text-brand-white">We Build Champions</h2>
          <p className="text-gray-400 font-inter text-lg leading-relaxed">
            Antigravity Gym was founded on a simple principle: mediocrity is the enemy. 
            We provide an environment where excuses are left at the door. From our state-of-the-art 
            equipment to our meticulously curated training programs, every inch of our facility is 
            designed to extract your maximum potential.
          </p>
          <p className="text-gray-400 font-inter text-lg leading-relaxed">
            Whether you are a seasoned athlete or just beginning your journey, you will find 
            a community here that pushes you, respects you, and demands your best. This is not 
            just a place to sweat. This is where you forge your legacy.
          </p>
        </div>
      </Section>
      
      <WhyUsSection />
    </main>
  )
}
