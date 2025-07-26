"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [userType, setUserType] = useState("vendor")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    address: "",
    city: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    // Registration logic here
    console.log("Registration data:", { ...formData, userType })

    router.push(`/${userType}/dashboard`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="container mx-auto max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">RasoiChain</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Create Your Account</h2>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={userType} onValueChange={(val) => setUserType("vendor" | "supplier")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="vendor">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Vendor
                </TabsTrigger>
                <TabsTrigger value="supplier">
                  <Users className="mr-2 h-4 w-4" />
                  Supplier
                </TabsTrigger>
              </TabsList>

              <TabsContent value="vendor" className="mt-4 text-center">
                <Badge className="bg-orange-100 text-orange-800">Street Food Vendor</Badge>
                <CardDescription className="mt-2">
                  Join as a vendor to buy raw materials from local suppliers
                </CardDescription>
              </TabsContent>

              <TabsContent value="supplier" className="mt-4 text-center">
                <Badge className="bg-red-100 text-red-800">Raw Material Supplier</Badge>
                <CardDescription className="mt-2">
                  Join as a supplier to sell vegetables, spices, and other materials
                </CardDescription>
              </TabsContent>
            </Tabs>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="businessName">
                  {userType === "vendor"
                    ? "Food Stall/Business Name"
                    : "Supplier Business Name"}
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder={
                    userType === "vendor"
                      ? "e.g., Sharma Chaat Corner"
                      : "e.g., Fresh Vegetables Supply"
                  }
                />
              </div>

              <div>
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address"
                />
              </div>

              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Your city"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create password"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Create {userType === "vendor" ? "Vendor" : "Supplier"} Account
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
