'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-4 px-8 md:px-16 lg:px-24 bg-black">
        <a href="/"><img src="/assets/nyotah_logo.png" alt="NYOTAH Logo" className="h-20" /></a>
        <div className="hidden md:flex space-x-4 text-white">
          <a href="/blog" className="hover:text-[#5ce2e6]">Blog</a>
          <a href="#benefits" className="hover:text-[#5ce2e6]">Who We Are</a>
          <a href="#blog" className="hover:text-[#5ce2e6]">Contact Us</a>
          <a href="/get-access" className="hover:text-[#5ce2e6]">Get Started!</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black p-4">
          <a href="/blog" className="block py-2 hover:text-[#5ce2e6]">Blog</a>
          <a href="#benefits" className="block py-2 hover:text-[#5ce2e6]">Who We Are</a>
          <a href="#blog" className="block py-2 hover:text-[#5ce2e6]">Contact Us</a>
          <a href="/get-access" className="block py-2 hover:text-[#5ce2e6]">Get Started!</a>
        </div>
      )}
    </>
  );
};

export default NavBar;