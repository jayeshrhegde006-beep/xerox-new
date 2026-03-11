'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
}

interface PrintAssistantProps {
  onClose: () => void
}

export default function PrintAssistant({ onClose }: PrintAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationState, setConversationState] = useState<'start' | 'service' | 'size' | 'finish' | 'glossy' | 'quantity' | 'quote'>('start')
  const [serviceType, setServiceType] = useState<string>('')
  const [printSize, setPrintSize] = useState<string>('')
  const [finishType, setFinishType] = useState<string>('')
  const [quantity, setQuantity] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initial greeting
    const initialMessage: Message = {
      id: '0',
      type: 'bot',
      content: '👋 Welcome to Non Stop Enterprises AI Print Assistant! I\'m here to help you find the perfect printing solution. What service are you interested in today?\n\n• Sticker Printing\n• Business Cards\n• Flyers & Brochures\n• Custom Printing\n• Xerox/Copying',
    }
    setMessages([initialMessage])
  }, [])

  const generateQuote = (service: string, size: string, finish: string, qty: string): string => {
    let basePrice = 100
    const sizeMultiplier: { [key: string]: number } = {
      'A4': 1,
      'A3': 1.5,
      'Custom': 2,
    }
    const finishMultiplier: { [key: string]: number } = {
      'Glossy': 1.2,
      'Matte': 1,
      'Standard': 0.8,
    }

    const quantity_num = parseInt(qty) || 100

    if (service.toLowerCase().includes('sticker')) {
      basePrice = 50
    } else if (service.toLowerCase().includes('card') || service.toLowerCase().includes('visiting')) {
      basePrice = 30
    } else if (service.toLowerCase().includes('flyer') || service.toLowerCase().includes('brochure')) {
      basePrice = 75
    } else if (service.toLowerCase().includes('xerox') || service.toLowerCase().includes('copy')) {
      basePrice = 5
    }

    const sizeMultiplier_num = sizeMultiplier[size] || 1
    const finishMultiplier_num = finishMultiplier[finish] || 1
    const totalPrice = Math.round(basePrice * sizeMultiplier_num * finishMultiplier_num * (quantity_num / 100))

    return `
✅ **Quote Generated for You!**

📋 **Your Order Details:**
• Service: ${service}
• Size: ${size}
• Finish: ${finish}
• Quantity: ${quantity_num} units

💰 **Estimated Price:**
₹${totalPrice} (approximately)

*Note: This is an estimated quote. Final price may vary based on specific requirements.*

🚀 Ready to proceed? Here's what to do:
1. Contact us on WhatsApp: 9920005588
2. Call us: +91 9820494538
3. Visit our shop at Kandivali (East), Mumbai

Would you like another quote or need any other service?`
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      let botResponse = ''
      const userInput = input.toLowerCase()

      if (conversationState === 'start') {
        setServiceType(input)
        setConversationState('size')
        botResponse = `Great! 🎉 You're interested in ${input}.\n\nWhat size would you prefer?\n\n• A4 (210×297mm)\n• A3 (297×420mm)\n• Custom Size\n• Standard`
      } else if (conversationState === 'size') {
        setPrintSize(input)
        if (input.toLowerCase().includes('sticker') || input.toLowerCase().includes('matte') || input.toLowerCase().includes('glossy')) {
          setConversationState('glossy')
          botResponse = `Perfect! ${input} size selected.\n\nFor stickers, would you prefer:\n\n• Glossy (Shiny finish)\n• Matte (Non-shiny finish)`
        } else {
          setConversationState('quantity')
          botResponse = `Excellent choice! ${input} size selected.\n\nHow many units do you need?\n\n• 50-100 units\n• 100-500 units\n• 500-1000 units\n• More than 1000 units\n\nOr just tell me the exact quantity!`
        }
      } else if (conversationState === 'glossy') {
        setFinishType(input)
        setConversationState('quantity')
        botResponse = `Great selection! ${input} finish confirmed.\n\nHow many stickers would you like?\n\n• 50 units\n• 100 units\n• 250 units\n• 500 units\n• Custom quantity\n\nTell me the number!`
      } else if (conversationState === 'quantity') {
        setQuantity(input)
        setConversationState('quote')
        botResponse = generateQuote(serviceType, printSize, finishType, input)
      } else if (conversationState === 'quote') {
        if (userInput.includes('yes') || userInput.includes('another') || userInput.includes('more')) {
          setServiceType('')
          setPrintSize('')
          setFinishType('')
          setQuantity('')
          setConversationState('start')
          botResponse = '🎉 Great! What service would you like this time?\n\n• Sticker Printing\n• Business Cards\n• Flyers & Brochures\n• Custom Printing\n• Xerox/Copying'
        } else {
          botResponse = `Thank you for using our AI Print Assistant! 🙏\n\nFor any questions or to place your order:\n📱 WhatsApp: 9920005588\n📞 Phone: +91 9820494538\n📧 Email: nsemumbai99@gmail.com\n\nWe look forward to serving you!`
        }
      }

      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
      }

      setMessages(prev => [...prev, newBotMessage])
      setLoading(false)
    }, 500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md h-[600px] flex flex-col bg-card shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary to-accent">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground">NSE Print Assistant 🤖</h3>
            <p className="text-xs text-primary-foreground/80">AI-powered printing consultation</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                  message.type === 'user'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/20 text-foreground border border-secondary/30'
                }`}
              >
                {message.content.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-secondary/20 text-foreground border border-secondary/30 px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              disabled={loading}
              className="bg-background border-border"
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              size="icon"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            💡 Powered by Non Stop Enterprises
          </p>
        </div>
      </Card>
    </div>
  )
}
