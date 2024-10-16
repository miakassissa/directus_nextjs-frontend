'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Flag, Check, ArrowRight } from 'lucide-react'

export function BenefitsSectionComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsDialogOpen(false)
  }

  return (
    <section id="benefits" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Benefits of Browser-Based Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <Card className="bg-red-900 border-red-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-300">Old/Traditional Way of Practicing Linux</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Time-consuming setup</span>
                </li>
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Hardware limitations</span>
                </li>
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Requires dedicated machine or dual-boot</span>
                </li>
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Compatibility issues</span>
                </li>
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Risk of system damage</span>
                </li>
                <li className="flex items-center">
                  <Flag className="mr-2 text-red-500" />
                  <span>Limited access across devices</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* New Way */}
          <Card className="bg-gradient-to-br from-[#5ce2e6] to-[#4ac2c6] text-black">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">New Way (Nyotah Linux Playground)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Instant access, no setup required</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Cloud-based, no hardware limitations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Access from any device, anywhere</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Safe environment, no risk to your system</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Real-world Linux environment</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 text-green-500" />
                  <span>Always up-to-date tools and resources</span>
                </li>
              </ul>
              <div className="mt-6">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Ok, let's try it now! <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-black">Get Access to Linux Playground</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input placeholder="Full Name" required className="bg-white text-black" />
                      <Input type="email" placeholder="Email Address" required className="bg-white text-black" />
                      <Input placeholder="WhatsApp Number" required className="bg-white text-black" />
                      <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6]">
                        Start Learning
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}