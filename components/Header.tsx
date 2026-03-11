'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Printer, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
      }`}>
      <div className="container mx-auto px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex items-center justify-between rounded-full px-8 py-3 transition-all duration-500 ${isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-2xl border border-white/20 shadow-3xl glow-accent'
            : 'bg-transparent border border-transparent'
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-4 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent italic tracking-tighter">
                NSE
              </span>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-1 group-hover:text-accent transition-colors">
                PRINTS
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="text-sm font-black text-zinc-400 hover:text-white uppercase tracking-[0.2em] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/20 flex items-center gap-2 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
                <Zap className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 glass-dark rounded-[40px] border border-white/10 overflow-hidden z-[90] shadow-3xl"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="block text-3xl font-black text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-6 border-t border-white/5">
                <Button className="w-full bg-accent text-white py-8 rounded-3xl font-black text-xl flex items-center justify-center gap-3">
                  Start Order <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
