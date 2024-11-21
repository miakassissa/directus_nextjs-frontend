import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Flag, Check, Cloud, Users, Laptop, BookOpen, Globe, Brain, GitBranch, Briefcase, DollarSign, WifiOff, AlertTriangle, Clock, HardDrive } from 'lucide-react'
import RetroGrid from "@/components/ui/retro-grid";
import FlickeringGrid from '@/components/ui/flickering-grid';
import DotPattern from '@/components/ui/dot-pattern';
import PulsatingButton from '@/components/ui/pulsating-button';

const BenefitsSection = () => {

  return (
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
                <PulsatingButton className="w-full bg-black text-white hover:bg-gray-800 font-bold">
                    <a href="/get-access" className="hover:text-[#5ce2e6] transition-colors">Let me try it now!</a>
                </PulsatingButton>
                </div>
              </CardContent>
            </Card>
            <div className="mb-16"></div>
          </div>
        </div>
      </section>
  );
    
};

export default BenefitsSection;