'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Users, Award, Zap, MapPin, Clock, Phone, Globe, Target, Flame } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalMiliseconds = duration * 1000
      const incrementTime = totalMiliseconds / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Precision Quality',
      description: 'Industrial-grade standards on every project.'
    },
    {
      icon: Flame,
      title: 'Rapid Delivery',
      description: 'Optimized workflows for lightning-fast turnaround.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Consult with printing specialists for best results.'
    },
    {
      icon: Award,
      title: 'Elite Pricing',
      description: 'Premium quality at the most competitive rates.'
    },
  ]

  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-1000" style={{
        backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full animate-glow-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                className="h-1.5 bg-accent rounded-full mb-8"
              ></motion.div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                ENGINEERED <br />
                <span className="text-gradient">HERITAGE.</span>
              </h2>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-xl">
                Non Stop Enterprises is more than a printing hub—it's an industrial legacy.
                For over <span className="text-white font-bold"><Counter value={15} />+ years</span>, we've set the standard
                for high-velocity document engineering in Mumbai.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                    <feature.icon className="w-6 h-6 text-accent group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-zinc-500 font-medium line-clamp-2">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-12 pt-8">
              <div>
                <p className="text-5xl font-black text-white tracking-tighter"><Counter value={10} />K+</p>
                <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mt-2">Clients Served</p>
              </div>
              <div className="h-16 w-px bg-white/10"></div>
              <div>
                <p className="text-5xl font-black text-white tracking-tighter"><Counter value={99} />%</p>
                <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mt-2">Quality Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/20 rounded-full animate-spin-slow"></div>

            <div className="relative glass-dark p-12 rounded-[60px] border border-white/20 shadow-3xl glow-accent">
              <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                <MapPin className="text-accent w-8 h-8" />
                CENTRAL HUB
              </h3>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-600 text-xs uppercase font-black tracking-[0.2em] mb-2">Primary Studio</p>
                    <p className="text-xl text-white font-bold leading-tight">
                      Shop No. 17&18, Gokul Nagari,<br />
                      Thakur Complex, Kandivali (E),<br />
                      Mumbai - 400101
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <Clock className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-600 text-xs uppercase font-black tracking-[0.2em] mb-2">Operational Hours</p>
                    <p className="text-xl text-white font-bold">Mon - Sun: 07:30 - 23:00</p>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-tighter">
                      Open 7 Days a Week
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-wrap gap-10">
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all">
                      <Phone className="w-4 h-4 text-accent group-hover:text-white" />
                    </div>
                    <span className="text-sm font-black text-white">+91 9820494538</span>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
