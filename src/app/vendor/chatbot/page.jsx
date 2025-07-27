"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, ArrowLeft, Bot, User, Sparkles, Clock, MapPin, Star, ShoppingCart, Mic, Image, Plus, ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "🙏 नमस्ते! मैं आपका AI असिस्टेंट हूं। मैं आपको सबसे सस्ते और नजदीकी suppliers खोजने में मदद कर सकता हूं। आप क्या खरीदना चाहते हैं?",
      timestamp: new Date(),
      suggestions: [
        "🥔 Where can I get cheapest potatoes near me?",
        "🍅 सबसे सस्ते टमाटर कहाँ मिलेंगे?",
        "🧅 Find onion suppliers within 5km",
        "🌶️ Best spice suppliers in my area",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollAreaRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };

  const scrollToTop = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0;
    }
  };

  const handleScroll = () => {
    if (scrollAreaRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollAreaRef.current;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setShowScrollButtons(!isNearBottom && scrollTop > 100);
    }
  };

  useEffect(() => {
    const scrollElement = scrollAreaRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
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

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateEnhancedBotResponse(message);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateEnhancedBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("potato") || lowerMessage.includes("आलू")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🥔 **आलू के लिए सबसे अच्छे विकल्प:**

**💰 BEST PRICE DEALS:**
┌─────────────────────────────────┐
│ 🏪 **Fresh Farm Supplies**     │
│ 💵 ₹22/kg (सबसे सस्ता!)        │
│ 📍 1.2 km away                 │
│ ⭐ 4.6/5 (847 reviews)         │
│ 🚚 30 min delivery             │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Green Valley Mart**       │
│ 💵 ₹25/kg                      │
│ 📍 2.1 km away                 │
│ ⭐ 4.3/5 (692 reviews)         │
│ 🚚 45 min delivery             │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Local Vegetable Hub**     │
│ 💵 ₹28/kg                      │
│ 📍 0.8 km away (सबसे नजदीक!)   │
│ ⭐ 4.1/5 (324 reviews)         │
│ 🚚 15 min delivery             │
└─────────────────────────────────┘

🎯 **सुझाव:** Fresh Farm Supplies से order करें - बेस्ट प्राइस और क्वालिटी!
💡 **Bulk Offer:** 25kg+ पर 5% extra discount!`,
        timestamp: new Date(),
        suggestions: [
          "🛒 Order 10kg from Fresh Farm",
          "🍅 Show me tomato prices",
          "🧅 Find onion suppliers",
          "📦 Bulk order discounts",
          "🚚 Check delivery times",
        ],
      };
    }

    if (lowerMessage.includes("tomato") || lowerMessage.includes("टमाटर")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🍅 **टमाटर के TOP SUPPLIERS:**

**🔥 TODAY'S SPECIAL DEALS:**
┌─────────────────────────────────┐
│ 🏪 **Sunrise Vegetables**       │
│ 💵 ₹35/kg (Premium Quality)     │
│ 📍 1.5 km away                 │
│ ⭐ 4.7/5 (1.2k reviews)        │
│ 🏆 #1 in freshness             │
│ 🚚 Free delivery above ₹500    │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **City Fresh Market**        │
│ 💵 ₹38/kg (Organic Available)   │
│ 📍 2.3 km away                 │
│ ⭐ 4.4/5 (856 reviews)         │
│ 🌱 Certified Organic           │
│ 🚚 45 min delivery             │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Quick Veggie Store**       │
│ 💵 ₹42/kg                      │
│ 📍 0.9 km away                 │
│ ⭐ 4.2/5 (445 reviews)         │
│ ⚡ Express delivery (20 min)    │
│ 🎁 Free packaging              │
└─────────────────────────────────┘

🎖️ **WINNER:** Sunrise Vegetables - बेस्ट quality और value!
⏰ **Time-sensitive:** Prices valid till 6 PM today!`,
        timestamp: new Date(),
        suggestions: [
          "🛒 Order from Sunrise Vegetables",
          "🌱 Show organic options",
          "⚡ Express delivery options",
          "🥒 Compare with other vegetables",
          "💰 Today's best deals",
        ],
      };
    }

    if (lowerMessage.includes("onion") || lowerMessage.includes("प्याज")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🧅 **प्याज के PREMIUM SUPPLIERS:**

**💎 TOP RECOMMENDATIONS:**
┌─────────────────────────────────┐
│ 🏪 **Wholesale Veggie Point**   │
│ 💵 ₹28/kg (Wholesale rates!)    │
│ 📍 2.8 km away                 │
│ ⭐ 4.5/5 (934 reviews)         │
│ 📦 Min order: 5kg              │
│ 🎁 10kg+ पर 10% discount       │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Fresh Market Co.**         │
│ 💵 ₹32/kg (Premium Grade A)     │
│ 📍 1.7 km away                 │
│ ⭐ 4.6/5 (1.1k reviews)        │
│ 🏅 Best quality guarantee      │
│ 🚚 Same day delivery           │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Local Onion Supplier**     │
│ 💵 ₹30/kg                      │
│ 📍 1.1 km away                 │
│ ⭐ 4.0/5 (267 reviews)         │
│ 👥 Family business since 1995  │
│ 💝 Personal service            │
└─────────────────────────────────┘

💡 **PRO TIP:** Wholesale Veggie Point में bulk order करें - maximum savings!
🎯 **Special:** आज 15kg+ order पर FREE delivery!`,
        timestamp: new Date(),
        suggestions: [
          "📊 Get bulk pricing details",
          "🛒 Order 15kg onions",
          "🥕 Find other vegetables",
          "🎁 Check today's special offers",
          "⭐ Show supplier ratings",
        ],
      };
    }

    if (lowerMessage.includes("spice") || lowerMessage.includes("मसाला") || lowerMessage.includes("spices")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `🌶️ **SPICE SUPPLIERS - AUTHENTIC & FRESH:**

**🔥 HOT DEALS ON SPICES:**
┌─────────────────────────────────┐
│ 🏪 **Spice World Premium**      │
│ 📍 1.8 km away                 │
│ ⭐ 4.8/5 (2.1k reviews)        │
│ 🌟 15+ years experience        │
│                                 │
│ 🌶️ Red Chilies: ₹180/kg       │
│ 💚 Green Chilies: ₹60/kg       │
│ 🌿 Coriander: ₹40/kg           │
│ 🧄 Garlic: ₹120/kg             │
│ 🧅 Onion Powder: ₹95/kg        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 🏪 **Traditional Masala House** │
│ 📍 3.2 km away                 │
│ ⭐ 4.6/5 (876 reviews)         │
│ 🏛️ Heritage quality since 1960 │
│                                 │
│ 🌟 Garam Masala: ₹250/kg       │
│ 🟡 Turmeric: ₹85/kg            │
│ ⚫ Black Pepper: ₹450/kg        │
│ 🟤 Cumin Seeds: ₹320/kg         │
│ 🔴 Paprika: ₹280/kg            │
└─────────────────────────────────┘

🏆 **WINNER:** Spice World Premium - Best variety & freshness!
🎁 **TODAY ONLY:** Spice combo pack (5 items) at 20% off!`,
        timestamp: new Date(),
        suggestions: [
          "🛒 Order spice combo pack",
          "🌶️ Show chili varieties",
          "📦 Bulk spice orders",
          "🔥 Today's spice deals",
          "⭐ Compare spice quality",
        ],
      };
    }

    if (lowerMessage.includes("bulk") || lowerMessage.includes("wholesale")) {
      return {
        id: Date.now() + 1,
        type: "bot",
        content: `📦 **BULK ORDER SPECIAL DISCOUNTS:**

**💰 WHOLESALE PRICING TIERS:**
┌─────────────────────────────────┐
│ 📊 **DISCOUNT STRUCTURE**       │
│                                 │
│ 🥉 5-10kg:   5% discount       │
│ 🥈 10-25kg: 10% discount       │
│ 🥇 25-50kg: 15% discount       │
│ 💎 50kg+:   20% discount       │
│                                 │
│ 🚚 FREE delivery on 15kg+      │
│ 📅 Weekly supply contracts     │
│ 💳 Credit terms available      │
└─────────────────────────────────┘

**🏪 TOP WHOLESALE SUPPLIERS:**
• **Mega Wholesale Hub** - सबसे बड़ा selection
• **Farm Direct Supplies** - Direct from farmers
• **City Wholesale Market** - Traditional मंडी rates

**🎁 SPECIAL OFFERS:**
• Monday-Wednesday: Extra 5% off
• Monthly contracts: Up to 25% savings
• Festival season: Bulk gift hampers

💡 **TIP:** Weekly orders करें consistent supply के लिए!`,
        timestamp: new Date(),
        suggestions: [
          "📋 Setup weekly delivery",
          "💰 Calculate bulk savings",
          "🤝 Monthly contract rates",
          "🏪 Visit wholesale market",
          "📱 Track bulk orders",
        ],
      };
    }

    // Default response with enhanced features
    return {
      id: Date.now() + 1,
      type: "bot",
      content: `🤖 **मैं आपकी पूरी मदद करने के लिए यहाँ हूँ!**

**💬 आप मुझसे ये सब पूछ सकते हैं:**

🛒 **Shopping Queries:**
• "सबसे सस्ते आलू कहाँ मिलेंगे?"
• "Where can I get fresh vegetables?"
• "Show me today's best deals"

📍 **Location-based:**
• "5km के अंदर spice suppliers कौन से हैं?"
• "Nearest vegetable market"
• "Suppliers with home delivery"

💰 **Price Comparisons:**
• "Compare tomato prices"
• "Bulk order discounts"
• "Cheapest rates in my area"

⚡ **Quick Actions:**
• "Order 10kg potatoes"
• "Set weekly vegetable delivery"
• "Find organic suppliers"

🎯 **बताइए, आप क्या खोज रहे हैं?**`,
      timestamp: new Date(),
      suggestions: [
        "🥬 Find cheapest vegetables",
        "📍 Show nearby suppliers",
        "💰 Best deals today",
        "📦 Bulk order discounts",
        "🚚 Express delivery options",
      ],
    };
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input functionality would go here
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-orange-200/50 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    AI Assistant
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium animate-pulse">
                      ● Online
                    </Badge>
                    <span className="text-xs text-gray-500">Powered by RasoiChain AI</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Hindi/English
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  24/7 Support
                </Badge>
              </div>
            </div>
            <Link href="/vendor/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="rounded-xl border-orange-300 hover:bg-orange-100 hover:border-orange-400 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm"></div>
          
          <Card className="flex flex-col h-[calc(100vh-200px)] border-2 border-orange-200/50 bg-white/90 backdrop-blur-lg relative z-10 shadow-2xl">
            <CardHeader className="border-b border-orange-100/50 bg-gradient-to-r from-white/95 to-orange-50/95 backdrop-blur-lg">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="mr-3 h-7 w-7 text-orange-500 animate-bounce" />
                  <div>
                    <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      RasoiChain AI Assistant
                    </span>
                    <p className="text-sm text-gray-600 font-normal mt-1 flex items-center">
                      <Sparkles className="w-4 h-4 mr-1 text-yellow-500" />
                      Ask me anything about suppliers, prices, and locations in Hindi or English
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3 mr-1" />
                    Response time: ~2s
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <div 
                ref={scrollAreaRef}
                className="flex-1 p-6 bg-gradient-to-b from-white/90 to-orange-50/90 backdrop-blur-sm overflow-y-auto overflow-x-hidden scroll-smooth relative"
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#fb923c #f97316'
                }}
              >
                <div className="space-y-6 pb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex animate-fadeIn ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-[85%] ${
                          message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border-2 ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-300 animate-pulse"
                              : "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 text-gray-600"
                          }`}
                        >
                          {message.type === "user" ? <User className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                        </div>
                        <div
                          className={`rounded-2xl p-5 max-w-full break-words shadow-lg border transition-all duration-300 hover:shadow-xl ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-br-md border-orange-300"
                              : "bg-gradient-to-r from-gray-50 to-white border-gray-200 text-gray-900 rounded-bl-md"
                          }`}
                        >
                          <div className="whitespace-pre-wrap leading-relaxed font-medium">
                            {message.content}
                          </div>
                          <p className="text-xs opacity-70 mt-3 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {messages.length > 0 && messages[messages.length - 1].suggestions && (
                    <div className="flex flex-wrap gap-3 mt-8 justify-start animate-slideUp">
                      <p className="w-full text-sm text-gray-600 mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                        Quick suggestions:
                      </p>
                      {messages[messages.length - 1].suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-sm rounded-full border-orange-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:border-orange-300 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}

                  {isTyping && (
                    <div className="flex justify-start animate-fadeIn">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-lg">
                          <Bot className="h-6 w-6 text-gray-600 animate-spin" />
                        </div>
                        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl rounded-bl-md p-5 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
                              <div
                                className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Floating Scroll Buttons */}
                {showScrollButtons && (
                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
                    <Button
                      size="sm"
                      onClick={scrollToBottom}
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={scrollToTop}
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="border-t border-orange-100/50 p-6 bg-gradient-to-r from-white/95 to-orange-50/95 backdrop-blur-lg">
                <div className="flex space-x-3 items-end">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message here... (Hindi/English both supported) 💬"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                      className="h-14 rounded-2xl border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-400 bg-white/95 backdrop-blur-sm shadow-lg text-base pr-24 transition-all duration-300"
                      disabled={isTyping}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleVoiceInput}
                        className={`h-8 w-8 rounded-full p-0 ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'hover:bg-orange-100'}`}
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSendMessage(inputMessage)}
                    className="h-14 w-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Send className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-gray-500 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Try: "सबसे सस्ते आलू कहाँ मिलेंगे?" or "Where can I get cheapest potatoes near me?"
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      AI Online
                    </span>
                    <span>|</span>
                    <span>{messages.length} messages</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        /* Custom scrollbar styles */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(251, 146, 60, 0.1);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #fb923c, #f97316);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ea580c, #dc2626);
        }

        /* Smooth scrolling behavior */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}