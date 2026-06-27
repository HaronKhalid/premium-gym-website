import { PageHeader } from "@/components/ui/page-header"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-brand-black">
      <PageHeader 
        title="Membership Plans" 
        subtitle="No Excuses. Just Results." 
        image="https://images.unsplash.com/photo-1596356453261-0d265eb2d1f3?q=80&w=2070&auto=format&fit=crop" 
      />
      <PricingSection />
      <FAQSection />
    </main>
  )
}
