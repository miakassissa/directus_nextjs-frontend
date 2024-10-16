'use client'


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Flag, Check, Cloud, Users, Laptop, BookOpen, Globe, Brain, GitBranch, Briefcase, DollarSign, WifiOff, AlertTriangle, Clock, HardDrive } from 'lucide-react'
import AnimatedShinyText from './ui/animated-shiny-text';
import RetroGrid from "@/components/ui/retro-grid";
import PulsatingButton from './ui/pulsating-button';
import FlickeringGrid from './ui/flickering-grid';
import DotPattern from './ui/dot-pattern';
import ShimmerButton from './ui/shimmer-button';
import IconCloud from './ui/icon-cloud';
import { MagicCard } from './ui/magic-card';

export function LandingPageComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 px-8 md:px-16 lg:px-24 bg-black">
        <img src="/assets/nyotah_logo.png" alt="NYOTAH Logo" className="h-20" />
        <div className="space-x-4">
          <a href="#why-linux" className="hover:text-[#5ce2e6]">Blog</a>
          <a href="#benefits" className="hover:text-[#5ce2e6]">Who We Are</a>
          <a href="#blog" className="hover:text-[#5ce2e6]">Contact Us</a>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
             <DialogTrigger asChild>
                <a className="hover:text-[#5ce2e6] transition-colors cursor-pointer">Get Started!</a>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Access to Nyotah's Linux Playground</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Full Name" required />
                  <Input type="email" placeholder="Email Address" required />
                  <Input placeholder="WhatsApp Number" required />
                  <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6]">
                    Start Learning
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center relative">
        <RetroGrid className="absolute inset-0" />
        <div className="relative z-10">
          <AnimatedShinyText className="text-xl mb-4">
          ✨ As we are building more tools
          </AnimatedShinyText>
          <h2 className="text-5xl font-bold mb-6 mx-12 md:mx-24 lg:mx-36 xl:mx-48">Empower Your Cloud & <br />AI Journey with Linux</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto px-8 md:px-16 lg:px-24">
            Use our interactive Linux Playground today <span className="font-bold text-[#5ce2e6]">(FOR FREE)</span> and master the skill that powers almost any tech you can think of.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <RainbowButton className="text-black">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </RainbowButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Access to Nyotah's Linux Playground</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name" required />
                <Input type="email" placeholder="Email Address" required />
                <Input placeholder="WhatsApp Number" required />
                <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6]">
                  Start Learning
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <div className="mt-20 mb-16 mx-auto max-w-4xl">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              {/* Replace the following line with your actual GIF */}
              <img
                src="/assets/Linux K8s CLI.gif"
                alt="Linux Playground Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Linux Section */}
      <section id="why-linux" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="mb-16"></div>
          <h2 className="text-5xl font-extrabold mb-10 text-center">Why Linux?</h2>
          <div className="mb-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2" /> Cloud-Native
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux is the foundation of cloud computing, powering most servers and containerized applications.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" /> AI/ML Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux provides the perfect environment for developing and deploying AI and machine learning models.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Laptop className="mr-2" /> Command-line Power
                </CardTitle>
              </CardHeader>
              <CardContent>
              Master the command-line interface for efficient system management and automation.
              </CardContent>
            </Card>
          </div>
          <div className="mb-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Boost Your Career
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux skills open doors to high-demand tech roles in cloud computing, cybersecurity, and more.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Open Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                Linux's open-source nature allows for customization and optimization in AI/ML environments.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="mr-2" /> Kubernetes & Containers
                </CardTitle>
              </CardHeader>
              <CardContent>
                Linux is the foundation for container technologies like Docker and Kubernetes, crucial for AI/ML deployments.
              </CardContent>
            </Card>
          </div>
          <div className="mb-20"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white text-black relative">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="absolute inset-0 text-gray-200 opacity-25"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16"></div>
          <h2 className="text-5xl font-extrabold mb-10 text-center text-black">Browser-Based Learning Benefits</h2>
          <div className="mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Way */}
            <Card className="bg-red-900 border-red-700 relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0"
                color="rgb(255, 0, 0)"
                maxOpacity={0.15}
                flickerChance={0.15}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-red-300 mb-2">Traditional Linux Learning</CardTitle>
                <CardDescription className="text-red-200">Challenges of the Old Approach</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-4">
                  {[
                    { icon: Clock, text: "Time-consuming setup and configuration" },
                    { icon: HardDrive, text: "Hardware limitations and compatibility issues" },
                    { icon: Laptop, text: "Requires dedicated machine or complex dual-boot" },
                    { icon: AlertTriangle, text: "Risk of system damage or data loss" },
                    { icon: WifiOff, text: "Limited access across devices and locations" },
                    { icon: DollarSign, text: "Potential costs for hardware or software" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <item.icon className="mr-3 text-red-400 h-5 w-5" />
                      <span className="text-red-100">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* New Way */}
            <Card className="bg-gradient-to-br from-[#5ce2e6] to-[#4ac2c6] text-black relative overflow-hidden">
              <RetroGrid className="absolute inset-0" angle={45} />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold">New Way (Nyotah Linux Playground)</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
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
                      <PulsatingButton className="w-full bg-black text-white hover:bg-gray-800 font-bold">
                        Let me try it now!
                      </PulsatingButton>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-black">Get Access to Linux Playground</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Full Name" required className="bg-white text-black" />
                        <Input type="email" placeholder="Email Address" required className="bg-white text-black" />
                        <Input placeholder="WhatsApp Number" required className="bg-white text-black" />
                        <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6] font-bold">
                          Start Practicing
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
            <div className="mb-16"></div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-12 text-center">
            Latest Blogs & Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <img src="/assets/linux-commands.jpg" alt="Linux Commands" className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-3">Getting Started with Linux Commands</CardTitle>
                <p className="text-gray-600 mb-4">Learn the essential Linux commands to kickstart your journey in cloud computing and DevOps.</p>
                <a href="#" className="text-black font-bold hover:text-[#5ce2e6] transition-colors duration-300">Read More →</a>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <img src="/assets/kubernetes-ai.jpg" alt="AI on Kubernetes" className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-3">Deploying AI Models on Kubernetes</CardTitle>
                <p className="text-gray-600 mb-4">A step-by-step guide to deploying your machine learning models on a Kubernetes cluster.</p>
                <a href="#" className="text-black font-bold hover:text-[#5ce2e6] transition-colors duration-300">Read More →</a>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <img src="/assets/linux-security.jpg" alt="Linux Security" className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-3">Linux Security Best Practices for Cloud</CardTitle>
                <p className="text-gray-600 mb-4">Discover the top security measures to protect your Linux-based cloud infrastructure.</p>
                <a href="#" className="text-black font-bold hover:text-[#5ce2e6] transition-colors duration-300">Read More →</a>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#">
              <ShimmerButton
                shimmerColor="#5ce2e6"
                background="black"
                className="font-semibold py-3 px-6"
              >
                View All Articles
              </ShimmerButton>
            </a>
          </div>
          <div className="mb-16"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-transparent border-2 border-[#5ce2e6] hover:shadow-[0_0_15px_rgba(92,226,230,0.3)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#5ce2e6] flex items-center text-2xl">
                  <Users className="mr-3 h-8 w-8" /> Train 10 Million Engineers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg">
                We aim to empower 10,000,000 young African Cloud/DevOps Engineers through our e-learning platform, fostering a new generation of tech innovators.
              </CardContent>
            </Card>
            <Card className="bg-transparent border-2 border-[#5ce2e6] hover:shadow-[0_0_15px_rgba(92,226,230,0.3)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#5ce2e6] flex items-center text-2xl">
                  <Cloud className="mr-3 h-8 w-8" /> Building The Afro-Centric "AWS"
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg">
                Develop a revolutionary, cost-effective cloud solution tailored for the African market, bridging the technological gap to global providers and empowering local businesses.
              </CardContent>
            </Card>
            <Card className="bg-transparent border-2 border-[#5ce2e6] hover:shadow-[0_0_15px_rgba(92,226,230,0.3)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#5ce2e6] flex items-center text-2xl">
                  <Globe className="mr-3 h-8 w-8" /> Specialists Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg">
                Create a dynamic platform connecting African tech talents with global companies, enabling them to work on cutting-edge projects while remaining in Africa and contributing to local economies.
              </CardContent>
            </Card>
            <Card className="bg-transparent border-2 border-[#5ce2e6] hover:shadow-[0_0_15px_rgba(92,226,230,0.3)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#5ce2e6] flex items-center text-2xl">
                  <Users className="mr-3 h-8 w-8" /> Tech Community
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-lg">
                Cultivate a vibrant, inclusive community focused on emerging technologies like AI/ML and cloud computing, fostering collaboration, innovation, and continuous learning.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <RetroGrid />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side: Icon Cloud */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <IconCloud
              iconSlugs={[
                "linux", "docker", "kubernetes", "amazonaws", "googlecloud",
                "microsoftazure", "python", "javascript", "react", "nodejs"
              ]}
            />
          </div>
          
          {/* Right side: CTA Content */}
          <div className="w-full md:w-1/2">
            <MagicCard className="p-8" gradientColor="#5ce2e6" gradientOpacity={0.2}>
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-black">Ready to Kick it with Linux Now?</h2>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-700 mx-auto">By clicking below, you will not just have the opportunity to learn and practice Linux. You'll also get the chance to join our VIP league of beta testers for our upcoming tools.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <PulsatingButton className="bg-[#5ce2e6] text-black hover:bg-[#4ac2c6] text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mx-auto font-bold">
                      Yes, Let me in !
                    </PulsatingButton>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-black text-center">Get Access to Linux Playground</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input placeholder="Full Name" required className="text-black" />
                      <Input type="email" placeholder="Email Address" required className="text-black" />
                      <Input placeholder="WhatsApp Number" required className="text-black" />
                      <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6] text-lg py-3 rounded-md transition-all duration-300">
                        Start Learning
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <img src="/assets/nyotah_logo.png" alt="NYOTAH Logo" className="h-16 mb-6" />
              <p className="text-lg mb-6">Empowering African tech talents for a global future.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/okalobe/" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@okalobecloud" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#5ce2e6] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#why-linux" className="hover:text-[#5ce2e6] transition-colors">Blog</a></li>
                <li><a href="#benefits" className="hover:text-[#5ce2e6] transition-colors">Who are we ?</a></li>
                <li>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <a className="hover:text-[#5ce2e6] transition-colors cursor-pointer">Linux Playground</a>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Get Access to Nyotah's Linux Playground</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Full Name" required />
                        <Input type="email" placeholder="Email Address" required />
                        <Input placeholder="WhatsApp Number" required />
                        <Button type="submit" className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6]">
                          Start Learning
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </li>
                <li><a href="#mission" className="hover:text-[#5ce2e6] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="mb-2">Email: info@nyotah.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 NYOTAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}