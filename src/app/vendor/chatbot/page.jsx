"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, ArrowLeft, Bot, User, Sparkles } from "lucide-react";
import Link from "next/link";

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
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
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
      };
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
      };
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
      };
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
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/vendor/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-gray-300 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
                <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Online</Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/90 to-yellow-50/90"></div>
          <Card className="flex flex-col min-h-[calc(100vh-200px)] border-2 border-orange-200 bg-white/95 backdrop-blur-sm relative z-10">
            <CardHeader className="border-b border-orange-100 bg-white/90 backdrop-blur-sm">
              <CardTitle className="flex items-center">
                <Bot className="mr-3 h-6 w-6 text-orange-500" />
                <div>
                  <span className="text-xl font-bold text-gray-900">RasoiChain AI Assistant</span>
                  <p className="text-sm text-gray-600 font-normal mt-1">
                    Ask me anything about suppliers, prices, and locations in Hindi or English
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6 bg-white/90 rounded-xl shadow-inner max-h-[calc(100vh-300px)]">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-[85%] ${
                          message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                              : "bg-gray-100 border border-gray-300 text-gray-600"
                          }`}
                        >
                          {message.type === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                        </div>
                        <div
                          className={`rounded-xl p-4 max-w-full break-words shadow-md ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-br-none"
                              : "bg-gray-50 border border-gray-200 text-gray-900 rounded-bl-none"
                          }`}
                        >
                          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                          <p className="text-xs opacity-70 mt-2">{message.timestamp.toLocaleTimeString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {messages.length > 0 && messages[messages.length - 1].suggestions && (
                    <div className="flex flex-wrap gap-2 mt-6 justify-start">
                      {messages[messages.length - 1].suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-sm rounded-full border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 bg-white/90 backdrop-blur-sm"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center shadow-md">
                          <Bot className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl rounded-bl-none p-4 shadow-md">
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

              <div className="border-t border-orange-100 p-6 bg-white/90 backdrop-blur-sm">
                <div className="flex space-x-3">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything... (Hindi/English both supported)"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                    className="flex-1 h-12 rounded-xl border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/95 backdrop-blur-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSendMessage(inputMessage)}
                    className="h-12 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  💡 Try: "सबसे सस्ते आलू कहाँ मिलेंगे?" or "Where can I get cheapest potatoes near me?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}