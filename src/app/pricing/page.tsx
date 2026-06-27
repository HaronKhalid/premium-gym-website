import { PageHeader } from "@/components/ui/page-header"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-brand-black">
      <PageHeader 
        title="Membership Plans" 
        subtitle="No Excuses. Just Results." 
        image="set" 
      />
      <PricingSection />
      <FAQSection />
    </main>
  )
}
