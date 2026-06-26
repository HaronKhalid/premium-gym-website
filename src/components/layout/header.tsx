"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Dumbbell } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Dumbbell className="w-8 h-8 text-brand-red" />
          <span className="font-bebas text-2xl tracking-widest text-brand-white">ANTIGRAVITY</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-poppins text-sm text-gray-300 hover:text-brand-gold transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">Join Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-brand-border md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-poppins text-sm text-brand-white p-2 hover:text-brand-gold transition-colors">
                  {link.name}
                </a>
              ))}
              <Button variant="primary" className="w-full mt-2">Join Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
