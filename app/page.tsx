'use client'

import { useState, useRef } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PrintAssistant from '@/components/PrintAssistant'

export default function Home() {
  const [showAssistant, setShowAssistant] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Integration */}
      <WhatsAppButton onOpenAssistant={() => setShowAssistant(true)} />
      
      {/* AI Print Assistant Modal */}
      {showAssistant && (
        <PrintAssistant onClose={() => setShowAssistant(false)} />
      )}
    </div>
  )
}
