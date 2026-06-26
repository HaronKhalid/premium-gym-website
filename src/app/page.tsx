import { HeroSection } from "@/components/sections/hero"
import { WhyUsSection } from "@/components/sections/why-us"
import { TransformationsSection } from "@/components/sections/transformations"
import { FacilitiesSection } from "@/components/sections/facilities"
import { CalculatorsSection } from "@/components/sections/calculators"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"
import { LeadFormSection } from "@/components/sections/lead-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <HeroSection />
      <WhyUsSection />
      <TransformationsSection />
      <FacilitiesSection />
      <CalculatorsSection />
      <PricingSection />
      <FAQSection />
      <LeadFormSection />
    </main>
  );
}
