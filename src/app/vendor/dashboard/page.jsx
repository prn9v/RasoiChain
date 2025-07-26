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
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      {/* Header */}
      <header className="bg-white border-b mx-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">RasoiChain</h1>
            <Badge className="bg-orange-100 text-orange-800">Vendor</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/vendor/chatbot">
              <Button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white hover:text-white font-bold" variant="outline" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                AI Assistant
              </Button>
            </Link>
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-medium">Raj Kumar</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vendor Dashboard</h2>
          <p className="text-gray-600">Manage your daily raw material needs</p>
        </div>

        <Tabs defaultValue="shopping-list" className="space-y-6">
          <TabsList>
            <TabsTrigger value="shopping-list">Shopping List</TabsTrigger>
            <TabsTrigger value="suppliers">Find Suppliers</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>

          {/* Shopping List Tab */}
          <TabsContent value="shopping-list" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Today's Shopping List
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </CardTitle>
                <CardDescription>
                  Add items you need today and get supplier recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shoppingList.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={item.needed}
                          className="rounded border-gray-300"
                          onChange={() => {
                            setShoppingList((prev) =>
                              prev.map((i) =>
                                i.id === item.id ? { ...i, needed: !i.needed } : i
                              )
                            )
                          }}
                        />
                        <div>
                          <span
                            className={`font-medium ${!item.needed ? "line-through text-gray-500" : ""}`}
                          >
                            {item.item}
                          </span>
                          <span className="text-sm text-gray-500 ml-2">({item.quantity})</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Search className="mr-2 h-4 w-4" />
                        Find Suppliers
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Get Best Supplier Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers" className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Input placeholder="Search suppliers or items..." className="flex-1" />
              <Button variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Near Me
              </Button>
            </div>

            <div className="grid gap-4">
              {suppliers.map((supplier) => (
                <Card key={supplier.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{supplier.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {supplier.rating}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {supplier.distance}
                          </div>
                          <Badge variant={supplier.available ? "default" : "secondary"}>
                            {supplier.available ? "Available" : "Closed"}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600">Place Order</Button>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Available Items:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {supplier.items.map((item, index) => (
                          <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Track your order status and history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{order.supplier}</h4>
                          <p className="text-sm text-gray-600">{order.items}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>Total: {order.total}</span>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {order.distance}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {order.status === "pending" && (
                            <>
                              <Clock className="h-4 w-4 text-yellow-500" />
                              <Badge variant="secondary">Pending</Badge>
                            </>
                          )}
                          {order.status === "accepted" && (
                            <>
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <Badge className="bg-green-100 text-green-800">Accepted</Badge>
                            </>
                          )}
                          {order.status === "rejected" && (
                            <>
                              <XCircle className="h-4 w-4 text-red-500" />
                              <Badge variant="destructive">Rejected</Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
