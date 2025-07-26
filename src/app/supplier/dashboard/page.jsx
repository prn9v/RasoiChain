"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Plus,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  Star
} from "lucide-react"

export default function SupplierDashboard() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Tomatoes", quantity: "50kg", price: 35, available: true },
    { id: 2, name: "Onions", quantity: "30kg", price: 28, available: true },
    { id: 3, name: "Potatoes", quantity: "40kg", price: 22, available: true },
    { id: 4, name: "Green Chilies", quantity: "15kg", price: 60, available: false }
  ])

  const [orders] = useState([
    {
      id: 1,
      vendor: "Raj Kumar (Sharma Chaat Corner)",
      items: "Tomatoes (10kg), Onions (5kg)",
      total: "₹490",
      status: "pending",
      time: "2 hours ago",
      rating: 4.5
    },
    {
      id: 2,
      vendor: "Priya Devi (Street Food Stall)",
      items: "Potatoes (8kg)",
      total: "₹176",
      status: "accepted",
      time: "4 hours ago",
      rating: 4.2
    },
    {
      id: 3,
      vendor: "Amit Singh (Snack Corner)",
      items: "Green Chilies (3kg)",
      total: "₹180",
      status: "completed",
      time: "1 day ago",
      rating: 4.8
    }
  ])

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    price: ""
  })

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price) {
      const item = {
        id: Date.now(),
        name: newItem.name,
        quantity: newItem.quantity,
        price: parseFloat(newItem.price),
        available: true
      }
      setInventory(prev => [...prev, item])
      setNewItem({ name: "", quantity: "", price: "" })
    }
  }

  const toggleAvailability = (id) => {
    setInventory(prev =>
      prev.map(item =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {/* Header */}
      <header className="bg-white border-b sticky m-4 top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">RasoiChain</h1>
            <Badge className="bg-red-100 text-red-800">Supplier</Badge>
          </div>
          <div className="text-sm text-gray-600">
            Welcome, <span className="font-medium">Fresh Vegetables Co.</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Supplier Dashboard</h2>
          <p className="text-gray-600">Manage your inventory and orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <ShoppingBag className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                  <p className="text-2xl font-bold text-green-600">₹2,450</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-blue-600">4.6</p>
                </div>
                <Star className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList>
            <TabsTrigger value="inventory">My Inventory</TabsTrigger>
            <TabsTrigger value="orders">Order Requests</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Item</CardTitle>
                <CardDescription>Add items you're selling today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="itemName">Item Name</Label>
                    <Input
                      id="itemName"
                      value={newItem.name}
                      onChange={(e) =>
                        setNewItem(prev => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="e.g., Tomatoes"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      value={newItem.quantity}
                      onChange={(e) =>
                        setNewItem(prev => ({ ...prev, quantity: e.target.value }))
                      }
                      placeholder="e.g., 50kg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price per kg (₹)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newItem.price}
                      onChange={(e) =>
                        setNewItem(prev => ({ ...prev, price: e.target.value }))
                      }
                      placeholder="35"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleAddItem} className="w-full bg-red-500 hover:bg-red-600">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
                <CardDescription>Manage your available items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventory.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Package className="h-8 w-8 text-gray-400" />
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            {item.quantity} • ₹{item.price}/kg
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.available ? "default" : "secondary"}>
                          {item.available ? "Available" : "Out of Stock"}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleAvailability(item.id)}
                        >
                          {item.available ? "Mark Unavailable" : "Mark Available"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Requests</CardTitle>
                <CardDescription>Manage incoming orders from vendors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{order.vendor}</h4>
                          <p className="text-sm text-gray-600">{order.items}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>Total: {order.total}</span>
                            <span>{order.time}</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 mr-1" />
                              {order.rating}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {order.status === "pending" && (
                            <>
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                              >
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </Button>
                            </>
                          )}
                          {order.status === "accepted" && (
                            <Badge className="bg-green-100 text-green-800">Accepted</Badge>
                          )}
                          {order.status === "completed" && (
                            <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">This Week</span>
                      <span className="text-lg font-bold text-green-600">₹12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">This Month</span>
                      <span className="text-lg font-bold text-blue-600">₹45,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total Orders</span>
                      <span className="text-lg font-bold text-purple-600">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Tomatoes", "Onions", "Potatoes", "Green Chilies"].map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-sm">{item}</span>
                        <span className="text-sm font-medium">
                          {45 - i * 7} orders
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Customer Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">Excellent quality vegetables!</p>
                      <p className="text-sm text-green-600">- Raj Kumar</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">5.0</span>
                    </div>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800">Fast delivery and good prices</p>
                      <p className="text-sm text-blue-600">- Priya Devi</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">4.5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
