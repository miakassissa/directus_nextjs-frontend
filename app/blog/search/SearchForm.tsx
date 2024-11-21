'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconSearch } from "@tabler/icons-react"

export default function SearchForm({ initialQuery = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/blog/search?query=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="mb-20 flex justify-center">
      <div className="relative max-w-md w-full">
        <Input
          type="text"
          placeholder="Search for blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-12"
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          <IconSearch size={20} />
        </Button>
      </div>
    </form>
  )
}