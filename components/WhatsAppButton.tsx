'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  onOpenAssistant: () => void
}

export default function WhatsAppButton({ onOpenAssistant }: WhatsAppButtonProps) {
  const whatsappNumber = '919920005588'
  const message = 'Hi! I would like to know more about your printing services.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Order via WhatsApp Button */}
        <button
          onClick={() => window.open(whatsappLink, '_blank')}
          className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none"
          title="Order via WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.031.305-2.896.878l-.207.124-2.15-.564.575 2.035-.131.21c-.69.848-1.056 1.938-1.056 3.087 0 3.623 2.953 6.576 6.576 6.576 1.757 0 3.413-.681 4.653-1.919 1.24-1.238 1.923-2.888 1.923-4.656 0-3.622-2.953-6.576-6.576-6.576z" />
          </svg>
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Order via WhatsApp
          </span>
        </button>

        {/* AI Assistant Button */}
        <button
          onClick={onOpenAssistant}
          className="group relative w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title="AI Print Assistant"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            AI Assistant
          </span>
        </button>
      </div>

      {/* Quick Info Banner */}
      <div className="fixed bottom-28 right-6 z-40 hidden md:block animate-fade-in">
        <div className="bg-white border-2 border-[#25D366] rounded-lg p-3 shadow-lg max-w-xs">
          <p className="text-sm font-semibold text-gray-800 mb-2">💬 Chat on WhatsApp</p>
          <p className="text-xs text-gray-600 mb-3">
            Send us a message for instant support and quick quotations.
          </p>
          <p className="text-xs text-gray-600 font-medium">📱 9920005588</p>
        </div>
      </div>
    </>
  )
}
