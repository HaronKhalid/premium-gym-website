import { Dumbbell } from "lucide-react"
import Link from "next/link"

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1C2.5 7.1 2 9.4 2 12c0 2.6.5 4.9.5 4.9.3 1.1 1.2 2 2.3 2.3 2.1.6 7.2.6 7.2.6s5.1 0 7.2-.6c1.1-.3 2-1.2 2.3-2.3.5-2.3.5-4.9.5-4.9s-.5-2.3-.5-4.9C21.2 6 20.3 5.1 19.2 4.8 17.1 4.2 12 4.2 12 4.2s-5.1 0-7.2.6c-1.1.3-2 1.2-2.3 2.3z"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <Dumbbell className="w-8 h-8 text-brand-red" />
            <span className="font-bebas text-3xl tracking-widest text-brand-white">PRIME FITNESS</span>
          </div>
          <p className="text-gray-400 font-inter max-w-sm mb-8">
            The ultimate standard in fitness. World-class facilities, elite trainers, and a community built on relentless progress.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/primefitnesspakistan/" target="_blank" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/PrimeFitnessPakistan/" target="_blank" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <FacebookIcon />
            </a>
            <a href="http://www.theprimefitness.com/" target="_blank" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-brand-white mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">About Us</Link></li>
            <li><Link href="/pricing" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Membership</Link></li>
            <li><Link href="/programs" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Programs</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-brand-white mb-6 tracking-wide">Newsletter</h4>
          <p className="text-gray-400 font-inter text-sm mb-4">Subscribe for fitness tips and exclusive offers.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-brand-dark border border-brand-border rounded-lg px-4 py-2 text-white text-sm w-full focus:outline-none focus:border-brand-gold"
            />
            <button type="button" className="bg-brand-red text-white px-4 py-2 rounded-lg font-poppins text-sm font-semibold hover:bg-red-600 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl border-t border-brand-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 font-inter text-xs mb-4 md:mb-0">
          © {new Date().getFullYear()} Prime Fitness. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white font-inter text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white font-inter text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
