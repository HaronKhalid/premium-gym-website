import { PageHeader } from "@/components/ui/page-header"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-brand-black">
      <PageHeader 
        title="Membership Plans" 
        subtitle="No Excuses. Just Results." 
        image="https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmaXRuZXNzfGVufDB8fDB8fHww" 
      />
      <PricingSection />
      <FAQSection />
    </main>
  )
}
