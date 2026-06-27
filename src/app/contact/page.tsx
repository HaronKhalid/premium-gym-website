import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch" 
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
      />
      
      <Section className="bg-brand-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bebas text-brand-white">Visit The Facility</h2>
            <p className="text-gray-400 font-inter">
              Ready to take the next step? Drop by for a tour or reach out to our team with any questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark border border-brand-border rounded-xl flex items-center justify-center text-brand-red">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white">Location</h4>
                  <p className="text-gray-400 font-inter text-sm">Commercial Market Rd, Block B, Satellite Town, Rawalpindi, 46300, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark border border-brand-border rounded-xl flex items-center justify-center text-brand-red">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white">Phone</h4>
                  <p className="text-gray-400 font-inter text-sm">0311 1777773</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark border border-brand-border rounded-xl flex items-center justify-center text-brand-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white">Email</h4>
                  <p className="text-gray-400 font-inter text-sm">info@theprimefitness.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark border border-brand-border rounded-xl flex items-center justify-center text-brand-red">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white">Hours</h4>
                  <p className="text-gray-400 font-inter text-sm">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-card border border-brand-border p-8 rounded-3xl">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 font-inter text-sm mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                </div>
                <div>
                  <label className="block text-gray-400 font-inter text-sm mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 font-inter text-sm mb-2">Email</label>
                <input type="email" className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
              </div>
              <div>
                <label className="block text-gray-400 font-inter text-sm mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold" />
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </form>
          </div>

        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-brand-black pt-0 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-brand-border h-[400px] w-full relative">
          <iframe 
            width="100%" 
            height="100%" 
            title="Location Map"
            src="https://maps.google.com/maps?q=Commercial%20Market%20Rd,%20Block%20B,%20Satellite%20Town,%20Rawalpindi,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="border-0 grayscale contrast-125 opacity-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </main>
  )
}
