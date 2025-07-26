"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ShoppingBag, TrendingUp, Plus, Edit, CheckCircle, XCircle, Clock, Star } from "lucide-react"

export default function SupplierDashboard() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Tomatoes", quantity: "50kg", price: 35, available: true },
    { id: 2, name: "Onions", quantity: "30kg", price: 28, available: true },
    { id: 3, name: "Potatoes", quantity: "40kg", price: 22, available: true },
    { id: 4, name: "Green Chilies", quantity: "15kg", price: 60, available: false },
  ])

  const [orders] = useState([
    {
      id: 1,
      vendor: "Raj Kumar (Sharma Chaat Corner)",
      items: "Tomatoes (10kg), Onions (5kg)",
      total: "₹490",
      status: "pending",
      time: "2 hours ago",
      rating: 4.5,
    },
    {
      id: 2,
      vendor: "Priya Devi (Street Food Stall)",
      items: "Potatoes (8kg)",
      total: "₹176",
      status: "accepted",
      time: "4 hours ago",
      rating: 4.2,
    },
    {
      id: 3,
      vendor: "Amit Singh (Snack Corner)",
      items: "Green Chilies (3kg)",
      total: "₹180",
      status: "completed",
      time: "1 day ago",
      rating: 4.8,
    },
  ])

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    price: "",
  })

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price) {
      const item = {
        id: Date.now(),
        name: newItem.name,
        quantity: newItem.quantity,
        price: Number.parseFloat(newItem.price),
        available: true,
      }
      setInventory((prev) => [...prev, item])
      setNewItem({ name: "", quantity: "", price: "" })
    }
  }

  const toggleAvailability = (id) => {
    setInventory((prev) => prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item)))
  }

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
                <Badge className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">Supplier</Badge>
              </div>
              <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                Welcome, <span className="font-semibold text-gray-900">Fresh Vegetables Co.</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Supplier Dashboard</h2>
            <p className="text-lg text-gray-600">Manage your inventory and orders</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/spice-market-hero.png"
                  alt="Card background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20"></div>
              </div>
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative z-10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-900">24</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/spice-market-hero.png"
                  alt="Card background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"></div>
              </div>
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative z-10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Pending Orders</p>
                      <p className="text-3xl font-bold text-yellow-600">3</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/spice-market-hero.png"
                  alt="Card background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
              </div>
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative z-10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Today's Revenue</p>
                      <p className="text-3xl font-bold text-green-600">₹2,450</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/spice-market-hero.png"
                  alt="Card background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
              </div>
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative z-10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Rating</p>
                      <p className="text-3xl font-bold text-blue-600">4.6</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="inventory" className="space-y-8">
            <TabsList className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-1 h-12 shadow-sm">
              <TabsTrigger
                value="inventory"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                My Inventory
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                Order Requests
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 font-medium px-6"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Inventory Tab */}
            <TabsContent value="inventory" className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/spice-market-hero.png"
                    alt="Card background"
                    className="w-full h-full object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                </div>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">Add New Item</CardTitle>
                    <CardDescription className="text-gray-600">Add items you're selling today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="itemName" className="text-gray-700 font-medium">
                          Item Name
                        </Label>
                        <Input
                          id="itemName"
                          value={newItem.name}
                          onChange={(e) => setNewItem((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g., Tomatoes"
                          className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-gray-700 font-medium">
                          Quantity
                        </Label>
                        <Input
                          id="quantity"
                          value={newItem.quantity}
                          onChange={(e) => setNewItem((prev) => ({ ...prev, quantity: e.target.value }))}
                          placeholder="e.g., 50kg"
                          className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-gray-700 font-medium">
                          Price per kg (₹)
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          value={newItem.price}
                          onChange={(e) => setNewItem((prev) => ({ ...prev, price: e.target.value }))}
                          placeholder="35"
                          className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          onClick={handleAddItem}
                          className="w-full h-11 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add Item
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/spice-market-hero.png"
                    alt="Card background"
                    className="w-full h-full object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                </div>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Current Inventory</CardTitle>
                    <CardDescription className="text-gray-600">Manage your available items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {inventory.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                              <Package className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                              <p className="text-gray-600">
                                {item.quantity} • ₹{item.price}/kg
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge
                              variant={item.available ? "default" : "secondary"}
                              className={`px-3 py-1 rounded-full font-medium ${
                                item.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {item.available ? "Available" : "Out of Stock"}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleAvailability(item.id)}
                              className="rounded-lg border-gray-300 hover:bg-gray-50 transition-all duration-200"
                            >
                              {item.available ? "Mark Unavailable" : "Mark Available"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-lg border-gray-300 hover:bg-gray-50 transition-all duration-200 bg-transparent"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Order Requests</CardTitle>
                    <CardDescription className="text-gray-600">Manage incoming orders from vendors</CardDescription>
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
                              <h4 className="font-semibold text-gray-900 text-lg mb-2">{order.vendor}</h4>
                              <p className="text-gray-700 mb-3">{order.items}</p>
                              <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <span className="font-medium">Total: {order.total}</span>
                                <span>{order.time}</span>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                  <span className="font-medium">{order.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 ml-4">
                              {order.status === "pending" && (
                                <>
                                  <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                                  >
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Accept
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent rounded-lg transition-all duration-200"
                                  >
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Reject
                                  </Button>
                                </>
                              )}
                              {order.status === "accepted" && (
                                <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                  Accepted
                                </Badge>
                              )}
                              {order.status === "completed" && (
                                <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                  Completed
                                </Badge>
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

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/spice-market-hero.png"
                      alt="Card background"
                      className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-green-50/95"></div>
                  </div>
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
                          <span className="text-gray-700 font-medium">This Week</span>
                          <span className="text-2xl font-bold text-green-600">₹12,450</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
                          <span className="text-gray-700 font-medium">This Month</span>
                          <span className="text-2xl font-bold text-blue-600">₹45,200</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
                          <span className="text-gray-700 font-medium">Total Orders</span>
                          <span className="text-2xl font-bold text-purple-600">156</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/spice-market-hero.png"
                      alt="Card background"
                      className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/95"></div>
                  </div>
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">Top Selling Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Tomatoes", "Onions", "Potatoes", "Green Chilies"].map((item, i) => (
                          <div key={i} className="flex justify-between items-center p-4 bg-white/80 rounded-xl">
                            <span className="text-gray-700 font-medium">{item}</span>
                            <span className="text-lg font-bold text-gray-900">{45 - i * 7} orders</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/spice-market-hero.png"
                    alt="Card background"
                    className="w-full h-full object-cover opacity-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95"></div>
                </div>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Customer Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <div>
                          <p className="font-semibold text-green-800 mb-1">Excellent quality vegetables!</p>
                          <p className="text-sm text-green-600">- Raj Kumar</p>
                        </div>
                        <div className="flex items-center bg-white/80 px-3 py-1 rounded-full">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-bold">5.0</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div>
                          <p className="font-semibold text-blue-800 mb-1">Fast delivery and good prices</p>
                          <p className="text-sm text-blue-600">- Priya Devi</p>
                        </div>
                        <div className="flex items-center bg-white/80 px-3 py-1 rounded-full">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-bold">4.5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
