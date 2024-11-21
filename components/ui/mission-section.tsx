import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Flag, Check, Cloud, Users, Laptop, BookOpen, Globe, Brain, GitBranch, Briefcase, DollarSign, WifiOff, AlertTriangle, Clock, HardDrive } from 'lucide-react'
import RetroGrid from "@/components/ui/retro-grid";
import FlickeringGrid from '@/components/ui/flickering-grid';
import DotPattern from '@/components/ui/dot-pattern';
import PulsatingButton from '@/components/ui/pulsating-button';

const MissionSection = () => {

  return (
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
  );
    
};

export default MissionSection;