import { useState } from 'react';
import RetroGrid from "@/components/ui/retro-grid";
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Code, Flag, Check, Cloud, Users, Laptop, BookOpen, Globe, Brain, GitBranch, Briefcase, DollarSign, WifiOff, AlertTriangle, Clock, HardDrive } from 'lucide-react'

const HeroSection = () => {

  return (
    <section className="py-20 text-center relative">
        <RetroGrid className="absolute inset-0" />
        <div className="relative z-10">
          <AnimatedShinyText className="text-xl mb-4">
          ✨ As we are building more tools
          </AnimatedShinyText>
          <h2 className="text-5xl font-bold mb-6 mx-12 md:mx-24 lg:mx-36 xl:mx-48">Empower Your AI <br />Journey with Linux Cloud</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto px-8 md:px-16 lg:px-24">
            Use our interactive Linux Playground today <span className="font-bold text-[#5ce2e6]">(FOR FREE)</span> and master the skill that powers almost any tech you can think of.
          </p>
          <div>
            <RainbowButton className="text-black">
            <a href="/get-access" className="hover:text-[#000000] transition-colors">Try It Now!</a>
            </RainbowButton>
            
          </div>

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
  );
    
};

export default HeroSection;