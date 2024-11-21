'use client'

import BlogSection from '@/components/ui/blog-section';
import Footer from '@/components/ui/footer';
import CallToAction from '@/components/ui/call-to-action';
import NavBar from '@/components/ui/navbar';
import HeroSection from './ui/hero-section';
import WhyLinuxSection from './ui/why-linux-section';
import BenefitsSection from './ui/benefits-section';
import MissionSection from './ui/mission-section';

export function LandingPageComponent() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Linux Section */}
      <WhyLinuxSection />

      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Blog Section */}
      <BlogSection />

      {/* Mission Section */}
      <MissionSection />

      {/* CTA Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  )
}