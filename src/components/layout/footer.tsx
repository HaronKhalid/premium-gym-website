import { Dumbbell, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <Dumbbell className="w-8 h-8 text-brand-red" />
            <span className="font-bebas text-3xl tracking-widest text-brand-white">ANTIGRAVITY</span>
          </div>
          <p className="text-gray-400 font-inter max-w-sm mb-8">
            The ultimate standard in fitness. World-class facilities, elite trainers, and a community built on relentless progress.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-red hover:bg-brand-red/10 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-brand-white mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Membership</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Personal Training</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors font-inter text-sm">Contact</a></li>
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
            <button className="bg-brand-red text-white px-4 py-2 rounded-lg font-poppins text-sm font-semibold hover:bg-red-600 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl border-t border-brand-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 font-inter text-xs mb-4 md:mb-0">
          © {new Date().getFullYear()} Antigravity Gym. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white font-inter text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white font-inter text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
