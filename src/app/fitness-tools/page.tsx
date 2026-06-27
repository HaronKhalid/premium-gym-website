import { PageHeader } from "@/components/ui/page-header"
import { CalculatorsSection } from "@/components/sections/calculators"
import { DietPlansSection } from "@/components/sections/diet-plans"
import { NutritionGuideSection } from "@/components/sections/nutrition-guide"

export default function FitnessToolsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-brand-black">
      <PageHeader 
        title="Fitness Tools & Nutrition" 
        subtitle="Data-Driven Results" 
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
      />
      <CalculatorsSection />
      <NutritionGuideSection />
      <DietPlansSection />
    </main>
  )
}
