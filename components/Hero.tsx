'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Printer, Sparkles, Zap } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  // Mouse movement for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    mouseX.set(moveX)
    mouseY.set(moveY)
  }

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-500, 500], [-20, 20]), springConfig)

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950"
    >
      {/* Background Parallax Particles */}
      <motion.div style={{ x, y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary rounded-full blur-[3px] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse delay-1000"></div>
      </motion.div>

      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 scale-110">
        <Image
          src="/hero-bg.png"
          alt="Modern Printing Shop"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/50 to-zinc-950"></div>
      </motion.div>

      {/* Dynamic Mesh Grains */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full animate-glow-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-accent text-sm font-bold tracking-wider cursor-default shadow-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Premium Studio Live
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                ELEVATING <br />
                <span className="text-gradient drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">EVERY PAGE</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-medium">
                High-fidelity xerox, industrial binding, and bespoke custom prints
                engineered for professionals. Experience the speed of NSE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white rounded-2xl px-10 py-8 text-xl font-black group shadow-[0_20px_50px_rgba(var(--accent),0.3)] glow-accent"
                >
                  Start Order
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-2xl px-10 py-8 text-xl font-bold backdrop-blur-sm"
                >
                  Our Tech
                </Button>
              </motion.div>
            </div>

            {/* Quick Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 items-center">
              {[
                { icon: Zap, label: 'Instant Print', value: '60s' },
                { icon: Printer, label: 'UHD Quality', value: '1200 DPI' },
                { icon: Sparkles, label: 'Eco Process', value: '100%' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-2xl font-black text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - 3D Look Card */}
          <motion.div
            style={{ y: y2 }}
            className="hidden lg:block relative"
          >
            <motion.div
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "backOut" }}
              className="relative z-20 group"
            >
              <div className="absolute inset-0 bg-accent/30 rounded-[48px] blur-3xl group-hover:bg-accent/40 transition-colors animate-pulse"></div>
              <div className="glass-dark p-12 rounded-[48px] border border-white/20 relative overflow-hidden group-hover:border-accent/50 transition-colors shadow-2xl glow-accent">
                {/* Internal Glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-[80px]"></div>

                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-1">Live Output</p>
                      <h4 className="text-4xl font-black text-white">4.2K <span className="text-zinc-600 text-lg font-bold">pages/hr</span></h4>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/20"
                    >
                      <Printer className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      <span>Fleet Performance</span>
                      <span className="text-accent underline">Optimal</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-linear-to-r from-accent to-primary rounded-full animate-gradient"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-2">Ink Level</p>
                      <div className="flex items-end gap-1">
                        <div className="w-2 h-8 bg-accent rounded-full"></div>
                        <div className="w-2 h-6 bg-accent/50 rounded-full"></div>
                        <div className="w-2 h-10 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between">
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">Uptime</p>
                      <p className="text-2xl font-black text-white">99.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md border-t border-white/5 py-4 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-white font-black text-sm tracking-widest uppercase">Precision Xerox</span>
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">HD Color Prints</span>
              <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
              <span className="text-white font-black text-sm tracking-widest uppercase">Thesis Binding</span>
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">Smart Card Printing</span>
              <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
