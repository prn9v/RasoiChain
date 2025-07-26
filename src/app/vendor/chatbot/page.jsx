"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, ArrowLeft, Bot, User } from "lucide-react"
import Link from "next/link"

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "नमस्ते! मैं आपका AI असिस्टेंट हूं। मैं आपको सबसे सस्ते और नजदीकी suppliers खोजने में मदद कर सकता हूं। आप क्या खरीदना चाहते हैं?",
      timestamp: new Date(),
      suggestions: [
        "Where can I get cheapest potatoes near me?",
        "सबसे सस्ते टमाटर कहाँ मिलेंगे?",
        "Find onion suppliers within 5km",
        "Best spice suppliers in my area",
      ],
    },
  ])

  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = (message) => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = generateBotResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("potato") || lowerMessage.includes("आलू")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🥔 आलू के लिए सबसे अच्छे विकल्प:

1. **Fresh Farm Supplies** - ₹22/kg
   📍 1.2 km away | ⭐ 4.6 rating
   
2. **Green Valley Mart** - ₹25/kg  
   📍 2.1 km away | ⭐ 4.3 rating

3. **Local Vegetable Hub** - ₹28/kg
   📍 0.8 km away | ⭐ 4.1 rating

सबसे सस्ता: Fresh Farm Supplies (₹22/kg)
सबसे नजदीक: Local Vegetable Hub (0.8 km)

क्या आप order करना चाहते हैं?`,
        timestamp: new Date(),
        suggestions: [
          "Order from Fresh Farm Supplies",
          "Show me tomato prices",
          "Find suppliers for onions",
          "What about green vegetables?",
        ],
      }
    }

    if (lowerMessage.includes("tomato") || lowerMessage.includes("टमाटर")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🍅 टमाटर के suppliers:

1. **Sunrise Vegetables** - ₹35/kg
   📍 1.5 km | ⭐ 4.7 | Fresh quality
   
2. **City Fresh Market** - ₹38/kg
   📍 2.3 km | ⭐ 4.4 | Organic available

3. **Quick Veggie Store** - ₹42/kg
   📍 0.9 km | ⭐ 4.2 | Fast delivery

Best deal: Sunrise Vegetables में सबसे अच्छी quality और price है!`,
        timestamp: new Date(),
        suggestions: [
          "Order tomatoes from Sunrise",
          "Compare with other vegetables",
          "Show delivery options",
          "Check supplier ratings",
        ],
      }
    }

    if (lowerMessage.includes("onion") || lowerMessage.includes("प्याज")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🧅 प्याज के लिए best options:

1. **Wholesale Veggie Point** - ₹28/kg
   📍 2.8 km | ⭐ 4.5 | Bulk discounts available
   
2. **Fresh Market Co.** - ₹32/kg
   📍 1.7 km | ⭐ 4.6 | Premium quality

3. **Local Onion Supplier** - ₹30/kg
   📍 1.1 km | ⭐ 4.0 | Good for daily needs

💡 Tip: Wholesale Veggie Point में 10kg+ order पर extra discount मिलता है!`,
        timestamp: new Date(),
        suggestions: [
          "Get bulk discount details",
          "Order 10kg onions",
          "Find other vegetables",
          "Check today's special offers",
        ],
      }
    }

    return {
      id: Date.now() + 1,
      type: "bot",
      content: `मैं आपकी मदद करने के लिए यहाँ हूँ! आप मुझसे पूछ सकते हैं:

• "सबसे सस्ते आलू कहाँ मिलेंगे?"
• "Where can I get fresh vegetables?"
• "5km के अंदर spice suppliers कौन से हैं?"
• "Best deals for bulk orders"

आप क्या खोज रहे हैं?`,
      timestamp: new Date(),
      suggestions: [
        "Find cheapest vegetables",
        "Show nearby suppliers",
        "Best deals today",
        "Bulk order discounts",
      ],
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/vendor/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <h1 className="text-xl font-bold text-gray-900">AI Assistant</h1>
              <Badge className="bg-green-100 text-green-800">Online</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="h-[calc(100vh-200px)] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-orange-500" />
              RasoiChain AI Assistant
            </CardTitle>
            <p className="text-sm text-gray-600">
              Ask me anything about suppliers, prices, and locations in Hindi or English
            </p>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.type === "user" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {messages.length > 0 && messages[messages.length - 1].suggestions && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {messages[messages.length - 1].suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything... (Hindi/English both supported)"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(inputMessage)}
                  className="bg-orange-500 hover:bg-orange-600"
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Try: "सबसे सस्ते आलू कहाँ मिलेंगे?" or "Where can I get cheapest potatoes near me?"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
