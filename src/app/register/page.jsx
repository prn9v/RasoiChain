"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, ArrowLeft } from "lucide-react"
import Image from "next/image"
import image from "../../../public/image2.png"

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Spice market background"
          fill
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-red-900/30 to-yellow-900/40"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">RasoiChain</h1>
            </div>
            <h2 className="text-2xl font-semibold text-white drop-shadow-md">Create Your Account</h2>
          </div>

          {/* Registration Card */}
          <div className="relative">
            {/* Card Background Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="/images/spice-market-hero.png"
                alt="Card background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95"></div>
            </div>

            <Card className="relative z-10 border-0 shadow-2xl backdrop-blur-sm bg-white/10 rounded-2xl">
              <CardHeader className="pb-4">
                <Tabs value={userType} onValueChange={(val) => setUserType(val)}>
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1 h-12 mb-6">
                    <TabsTrigger
                      value="vendor"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200 font-medium"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Vendor
                    </TabsTrigger>
                    <TabsTrigger
                      value="supplier"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200 font-medium"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Supplier
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="vendor" className="mt-4 text-center">
                    <Badge className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                      Street Food Vendor
                    </Badge>
                    <CardDescription className="mt-3 text-gray-600 text-base">
                      Join as a vendor to buy raw materials from local suppliers
                    </CardDescription>
                  </TabsContent>
                  <TabsContent value="supplier" className="mt-4 text-center">
                    <Badge className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">
                      Raw Material Supplier
                    </Badge>
                    <CardDescription className="mt-3 text-gray-600 text-base">
                      Join as a supplier to sell vegetables, spices, and other materials
                    </CardDescription>
                  </TabsContent>
                </Tabs>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-gray-700 font-medium">
                      {userType === "vendor" ? "Food Stall/Business Name" : "Supplier Business Name"}
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder={
                        userType === "vendor" ? "e.g., Sharma Chaat Corner" : "e.g., Fresh Vegetables Supply"
                      }
                      className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700 font-medium">
                      Business Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700 font-medium">
                      City
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Your city"
                      className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 font-medium">
                        Password
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create password"
                        className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password"
                        className="h-11 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] mt-6"
                  >
                    Create {userType === "vendor" ? "Vendor" : "Supplier"} Account
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}