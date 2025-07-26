import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, MessageCircle, MapPin, Star, Smartphone } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">RasoiChain 👤</h1>
          </div>
          <div className="flex space-x-2">
            <Link href="/login">
              <Button className=" cursor-pointer" variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600  cursor-pointer hover:to-red-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
            Connecting Street Food Vendors & Suppliers
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Local Food Supply
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Chain</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Smart marketplace for street food vendors to find the best suppliers for raw materials. Get the best prices,
            nearest locations, and AI-powered recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=vendor">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 cursor-pointer hover:to-red-600"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                I'm a Vendor
              </Button>
            </Link>
            <Link href="/register?type=supplier">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 cursor-pointer text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Core Features</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vendor Features */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  For Street Food Vendors
                </CardTitle>
                <CardDescription>Everything you need to source raw materials efficiently</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Smart Shopping Lists</h4>
                    <p className="text-sm text-gray-600">Create daily needs list (tomatoes, onions, spices)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Best Supplier Suggestions</h4>
                    <p className="text-sm text-gray-600">Get recommendations based on price + distance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">AI Chatbot Assistant</h4>
                    <p className="text-sm text-gray-600">Ask "Where can I get cheapest potatoes near me?"</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Easy Ordering</h4>
                    <p className="text-sm text-gray-600">Compare prices, select suppliers, place orders</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supplier Features */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Users className="mr-2 h-6 w-6" />
                  For Suppliers
                </CardTitle>
                <CardDescription>Manage your inventory and connect with vendors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Daily Inventory Upload</h4>
                    <p className="text-sm text-gray-600">List what you're selling today with prices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Order Management</h4>
                    <p className="text-sm text-gray-600">Receive and manage vendor order requests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Accept/Reject Orders</h4>
                    <p className="text-sm text-gray-600">Full control over which orders to fulfill</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Customer Ratings</h4>
                    <p className="text-sm text-gray-600">Build reputation through vendor feedback</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Mobile Optimized</h4>
                <p className="text-sm text-gray-600">Works perfectly on all mobile devices</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Rating System</h4>
                <p className="text-sm text-gray-600">Rate suppliers and build trust</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Location Based</h4>
                <p className="text-sm text-gray-600">Find nearest suppliers with maps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Feature Highlight */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">🤖 AI-Powered Assistant</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our smart chatbot helps vendors find the best deals, speaks in local language, and optimizes for both cost
            and distance.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg font-medium mb-2">"Where can I get cheapest potatoes near me?"</p>
            <p className="text-sm opacity-90">Get instant recommendations with prices and locations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Food Business?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands of vendors and suppliers already using RasoiChain</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=vendor">
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Start as Vendor
              </Button>
            </Link>
            <Link href="/register?type=supplier">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Start as Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="text-xl font-bold">RasoiChain</span>
          </div>
          <p className="text-gray-400">Connecting street food vendors with suppliers across India</p>
        </div>
      </footer>
    </div>
  )
}
