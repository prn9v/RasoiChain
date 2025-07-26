"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import image from "../../../public/image2.png"

export default function LoginPage() {
  const router = useRouter()
  const [userType, setUserType] = useState("vendor")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log("Login data:", { ...formData, userType })
    // Redirect to appropriate dashboard
    if (userType === "vendor") {
      router.push("/vendor/dashboard")
    } else {
      router.push("/supplier/dashboard")
    }
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
        <div className="container mx-auto max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">RasoiChain</h1>
            </div>
            <h2 className="text-2xl font-semibold text-white drop-shadow-md">Welcome Back</h2>
          </div>

          {/* Login Card */}
          <div className="relative">
            {/* Card Background Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={image}
                alt="Card background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95"></div>
            </div>

            <Card className="relative z-10 border-0 shadow-2xl backdrop-blur-sm bg-white/10 rounded-2xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-800">Sign In</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Choose your account type and sign in
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Tabs value={userType} onValueChange={setUserType} className="w-full mb-8">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1 h-12">
                    <TabsTrigger
                      value="vendor"
                      className="flex items-center rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200 font-medium"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Vendor
                    </TabsTrigger>
                    <TabsTrigger
                      value="supplier"
                      className="flex items-center rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200 font-medium"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Supplier
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="h-12 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
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
                      placeholder="Your password"
                      className="h-12 bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Sign In as {userType === "vendor" ? "Vendor" : "Supplier"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                    >
                      Create one here
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
              <ArrowLeft className="mr-2 h-4 w-4 " />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}