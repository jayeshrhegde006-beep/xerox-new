'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Printer,
  Copy,
  Image as LucideImage,
  Tag,
  Scissors,
  ImageIcon,
  Palette,
  Package,
  BookOpen,
  FileText,
  RotateCw,
  Layers,
  Mail,
  CreditCard,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    icon: Printer,
    title: 'Xerox & Printing',
    description: 'High-speed document reproduction with laser precision.'
  },
  {
    icon: Palette,
    title: 'Color Xerox',
    description: 'Vibrant, true-to-life color replication for any document.'
  },
  {
    icon: Zap,
    title: 'Jumbo Xerox',
    description: 'Large-scale prints for engineering plans and posters.'
  },
  {
    icon: Tag,
    title: 'Sticker Printing',
    description: 'Custom adhesive solutions in Glossy & Matte finishes.'
  },
  {
    icon: Scissors,
    title: 'Precision Die-Cut',
    description: 'Unique custom shapes for specialized marketing material.'
  },
  {
    icon: ImageIcon,
    title: 'Photo Gallery',
    description: 'Studio-grade photo printing on premium archival paper.'
  },
  {
    icon: Copy,
    title: 'Custom Graphics',
    description: 'Bespoke design and print solutions for your brand.'
  },
  {
    icon: BookOpen,
    title: 'Thesis Binding',
    description: 'Premium black-book binding for academic excellence.'
  },
  {
    icon: Sparkles,
    title: 'Flex & Vinyl',
    description: 'Weatherproof signage and high-impact banners.'
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-accent/30 rounded-[32px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 animate-pulse"></div>
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative glass-dark p-8 rounded-[32px] border border-white/10 group-hover:border-accent/50 transition-colors duration-300 h-full flex flex-col group-hover:glow-accent"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <service.icon className="w-8 h-8 text-accent group-hover:text-white" />
        </div>
        <h4 className="text-2xl font-black text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 flex-grow leading-relaxed font-medium">
          {service.description}
        </p>
        <div className="mt-8 flex items-center gap-2 text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
          Order Now <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="services" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Liquid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            x: [0, 150, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[180px] animate-glow-pulse"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
            x: [0, -150, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse delay-700"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.3em] mb-6 text-xs"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span>Innovative Workflow</span>
            </motion.div>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              PRECISION AT <br />
              <span className="text-gradient">SCALE.</span>
            </h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Industrial-grade print architecture for the modern professional.
              We blend traditional craft with next-gen digital precision.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="glass p-1 rounded-full px-6 py-3 border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
              <span className="text-white font-bold text-sm tracking-wider">SYSTEMS ONLINE</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-accent to-primary rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-zinc-950 p-1 rounded-[40px] overflow-hidden">
            <div className="bg-zinc-900/50 backdrop-blur-3xl p-10 md:p-20 rounded-[inherit] flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-4 text-center lg:text-left">
                <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter">BESPOKE WORK?</h4>
                <p className="text-xl text-zinc-500 font-medium">Our engineers are ready for your custom industrial bulk orders.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap px-14 py-8 bg-white text-black font-black rounded-3xl text-2xl hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl hover:shadow-accent/40"
              >
                REQUEST QUOTE
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
