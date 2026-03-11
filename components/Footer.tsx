'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Printer, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Side */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col leading-none">
              <span className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent italic tracking-tighter">
                NSE
              </span>
              <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.4em] mt-1">
                PRINTS
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Mumbais premier destination for high-fidelity xerox and professional printing services.
              Precision in every pixel, excellence in every page.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:bg-accent hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-3 text-sm">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-3 text-sm">
                {['Digital Xerox', 'Sticker Prints', 'Thesis Binding', 'Custom Graphics'].map((item) => (
                  <li key={item}>
                    <span className="text-zinc-500 hover:text-accent transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Headquarters</h4>
              <div className="space-y-4 text-sm text-zinc-500">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Kandivali (East), <br />Mumbai - 400101</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>+91 9820494538</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Non Stop Enterprises. Engineering Excellence in Print.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Powered by NSE Studio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
