'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import RetroGrid from "@/components/ui/retro-grid";
import Link from 'next/link'

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
}

export default function GetAccess() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsapp: '',
  });

  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwMvu2dwknRt-BLQROVLILpM2tDyc77pz-2mPg_80H_C1eQh4AIaEmNwskGe6hoqD4/exec';
  const REDIRECT_URL = 'https://miakassissa.com';

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`Input changed: ${name} = ${value}`);
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true);

    console.log('Form data at submission:', formData);

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setFormData({ fullName: '', email: '', whatsapp: '' });
      
      window.open(REDIRECT_URL, '_blank');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData])

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-4 px-8 md:px-16 lg:px-24 bg-black">
        <div className="flex justify-center w-full">
          <Link href="/">
            <img src="/assets/nyotah_logo.png" alt="NYOTAH Logo" className="h-20 cursor-pointer" />
          </Link>
        </div>
      </nav>

      <section className="py-32 min-h-screen text-center relative">
        <RetroGrid className="absolute inset-0" />
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Get Access to Nyotah's Linux Cloud</h4>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              />
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="WhatsApp Number (e.g. +242 05 678 65 24)"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              />
              <button
                type="submit"
                className="w-full bg-[#5ce2e6] text-black hover:bg-[#4ac2c6] py-2 rounded-md"
              >
                {isSubmitting ? 'Submitting...' : 'Start Practicing'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}