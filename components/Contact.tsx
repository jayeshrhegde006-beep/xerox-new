'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => setFormState('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Support',
      value: '+91 9820494538',
      action: 'tel:+919820494538',
      color: 'bg-emerald-500/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'nsemumbai99@gmail.com',
      action: 'mailto:nsemumbai99@gmail.com',
      color: 'bg-blue-500/10'
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      value: 'Kandivali (East), Mumbai',
      action: 'https://maps.google.com',
      color: 'bg-orange-500/10'
    },
  ]

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full animate-glow-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-black uppercase tracking-widest"
                >
                  <Sparkles className="w-4 h-4" />
                  Get in Touch
                </motion.div>
                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                  LET'S <br />
                  <span className="text-gradient">CONNECT.</span>
                </h2>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-md">
                  Have a complex printing requirement? Our engineers are ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.action}
                    whileHover={{ x: 15, scale: 1.02 }}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all group lg:pr-12"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:glow-accent transition-all`}>
                      <info.icon className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-zinc-600 text-xs font-black uppercase tracking-widest mb-1">{info.title}</p>
                      <p className="text-lg text-white font-bold">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-[40px] bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white flex items-center gap-2">
                      <MessageCircle className="text-emerald-500" />
                      WHATSAPP
                    </h4>
                    <p className="text-emerald-500/70 font-bold">Fastest Response (Avg. 2 min)</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20"
                  >
                    CHAT NOW
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-dark p-10 md:p-14 rounded-[60px] border border-white/10 relative z-20 h-full">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                      <label className="text-xs font-black text-zinc-600 uppercase tracking-widest transition-colors group-focus-within:text-accent">First Name</label>
                      <Input
                        placeholder="John"
                        className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white font-bold"
                        required
                      />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-xs font-black text-zinc-600 uppercase tracking-widest transition-colors group-focus-within:text-accent">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white font-bold"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-xs font-black text-zinc-600 uppercase tracking-widest transition-colors group-focus-within:text-accent">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-16 bg-white/5 border-white/10 rounded-2xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white font-bold"
                      required
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-xs font-black text-zinc-600 uppercase tracking-widest transition-colors group-focus-within:text-accent">Project Details</label>
                    <Textarea
                      placeholder="How can we help?"
                      className="min-h-[180px] bg-white/5 border-white/10 rounded-2xl focus:border-accent/50 focus:ring-accent/20 transition-all text-white font-bold resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState !== 'idle'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-8 rounded-3xl font-black text-xl transition-all flex items-center justify-center gap-3 glow-accent ${formState === 'sent'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-accent text-white hover:bg-accent/90'
                      }`}
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'idle' && (
                        <motion.span key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                          Send Signal <Send className="w-6 h-6" />
                        </motion.span>
                      )}
                      {formState === 'sending' && (
                        <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                          {[0, 1, 2].map(i => (
                            <motion.div key={i} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, delay: i * 0.1 }} className="w-3 h-3 bg-white rounded-full"></motion.div>
                          ))}
                        </motion.div>
                      )}
                      {formState === 'sent' && (
                        <motion.span key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                          Signal Sent <ShieldCheck className="w-6 h-6" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
