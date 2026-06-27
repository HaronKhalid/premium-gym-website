import { HeroSection } from "@/components/sections/hero"
import { WhyUsSection } from "@/components/sections/why-us"
import { TransformationsSection } from "@/components/sections/transformations"
import { FacilitiesSection } from "@/components/sections/facilities"
import { FAQSection } from "@/components/sections/faq"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-brand-black">
      <HeroSection />
      <WhyUsSection />
      <TransformationsSection />
      <FacilitiesSection />
      <FAQSection />
    </main>
  );
}
