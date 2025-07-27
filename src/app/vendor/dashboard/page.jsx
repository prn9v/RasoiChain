"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, MapPin, Star, Plus, Search, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function VendorDashboard() {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, item: "Tomatoes", quantity: "10kg", needed: true },
    { id: 2, item: "Onions", quantity: "5kg", needed: true },
    { id: 3, item: "Green Chilies", quantity: "2kg", needed: true },
    { id: 4, item: "Coriander", quantity: "1kg", needed: false },
  ])

  const [orders] = useState([
    {
      id: 1,
      supplier: "Fresh Vegetables Co.",
      items: "Tomatoes (10kg), Onions (5kg)",
      total: "₹450",
      status: "pending",
      distance: "2.3 km",
    },
    {
      id: 2,
      supplier: "Spice World",
      items: "Green Chilies (2kg)",
      total: "₹120",
      status: "accepted",
      distance: "1.8 km",
    },
  ])

  const [suppliers] = useState([
    {
      id: 1,
      name: "Fresh Vegetables Co.",
      rating: 4.5,
      distance: "2.3 km",
      items: ["Tomatoes - ₹45/kg", "Onions - ₹30/kg", "Potatoes - ₹25/kg"],
      available: true,
    },
    {
      id: 2,
      name: "Green Valley Supplies",
      rating: 4.2,
      distance: "3.1 km",
      items: ["Tomatoes - ₹42/kg", "Onions - ₹28/kg", "Carrots - ₹35/kg"],
      available: true,
    },
    {
      id: 3,
      name: "Spice World",
      rating: 4.8,
      distance: "1.8 km",
      items: ["Green Chilies - ₹60/kg", "Red Chilies - ₹80/kg", "Coriander - ₹40/kg"],
      available: true,
    },
  ])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/spice-market-hero.png" alt="Background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-white/90 to-red-50/95"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">RasoiChain</h1>
                <Badge className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">Vendor</Badge>
              </div>
              <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                Welcome, <span className="font-semibold text-gray-900">Raj Kumar</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Vendor Dashboard</h2>
            <p className="text-lg text-gray-600">Manage your daily raw material needs</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="shopping-list" className="space-y-8">
            <TabsList className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-1 h-12 shadow-sm">
              <TabsTrigger
                value="shopping-list"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                Shopping List
              </TabsTrigger>
              <TabsTrigger
                value="suppliers"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                Find Suppliers
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                My Orders
              </TabsTrigger>
            </TabsList>

            {/* Shopping List Tab */}
            <TabsContent value="shopping-list" className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/spice-market-hero.png"
                    alt="Card background"
                    className="w-full h-full object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                </div>
                <Card className="border-2 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">Today's Shopping List</CardTitle>
                        <CardDescription className="text-gray-600">
                          Add items you need today and get supplier recommendations
                        </CardDescription>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Item
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {shoppingList.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center space-x-4">
                            <input
                              type="checkbox"
                              checked={item.needed}
                              className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                              onChange={() => {
                                setShoppingList((prev) =>
                                  prev.map((i) => (i.id === item.id ? { ...i, needed: !i.needed } : i)),
                                )
                              }}
                            />
                            <div>
                              <span
                                className={`font-semibold text-lg ${
                                  !item.needed ? "line-through text-gray-500" : "text-gray-900"
                                }`}
                              >
                                {item.item}
                              </span>
                              <span className="text-gray-600 ml-2">({item.quantity})</span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-lg border-gray-300 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 bg-transparent"
                          >
                            <Search className="mr-2 h-4 w-4" />
                            Find Suppliers
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <Button className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                        Get Best Supplier Recommendations
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Suppliers Tab */}
            <TabsContent value="suppliers" className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Input
                  placeholder="Search suppliers or items..."
                  className="flex-1 h-12 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
                <Button
                  variant="outline"
                  className="h-12 px-6 rounded-xl border-gray-300 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Near Me
                </Button>
              </div>

              <div className="grid gap-6">
                {suppliers.map((supplier) => (
                  <div key={supplier.id} className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 z-0">
                      <img
                        src="/images/spice-market-hero.png"
                        alt="Card background"
                        className="w-full h-full object-cover opacity-15"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                    </div>
                    <Card className="border-2 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2">{supplier.name}</h3>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                <span className="font-medium">{supplier.rating}</span>
                              </div>
                              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                <MapPin className="h-4 w-4 text-blue-500 mr-1" />
                                <span className="font-medium">{supplier.distance}</span>
                              </div>
                              <Badge
                                variant={supplier.available ? "default" : "secondary"}
                                className={`px-3 py-1 rounded-full font-medium ${
                                  supplier.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {supplier.available ? "Available" : "Closed"}
                              </Badge>
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                            Place Order
                          </Button>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Available Items:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {supplier.items.map((item, index) => (
                              <div
                                key={index}
                                className="text-sm bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 font-medium text-gray-700"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/spice-market-hero.png"
                    alt="Card background"
                    className="w-full h-full object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                </div>
                <Card className="border-2 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Recent Orders</CardTitle>
                    <CardDescription className="text-gray-600">Track your order status and history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-lg mb-2">{order.supplier}</h4>
                              <p className="text-gray-700 mb-3">{order.items}</p>
                              <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <span className="font-medium bg-green-50 px-3 py-1 rounded-full">
                                  Total: {order.total}
                                </span>
                                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  <span className="font-medium">{order.distance}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 ml-4">
                              {order.status === "pending" && (
                                <>
                                  <Clock className="h-5 w-5 text-yellow-500" />
                                  <Badge
                                    variant="secondary"
                                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium"
                                  >
                                    Pending
                                  </Badge>
                                </>
                              )}
                              {order.status === "accepted" && (
                                <>
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                  <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                    Accepted
                                  </Badge>
                                </>
                              )}
                              {order.status === "rejected" && (
                                <>
                                  <XCircle className="h-5 w-5 text-red-500" />
                                  <Badge
                                    variant="destructive"
                                    className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium"
                                  >
                                    Rejected
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <Link href="/vendor/chatbot">
        <Button className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer group">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            AI Assistant
          </div>
        </Button>
      </Link>
    </div>
  )
}