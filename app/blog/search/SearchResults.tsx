'use client'

import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface BlogPost {
  id: number
  title: string
  slug: string
  featured_image?: {
    id: string
  }
  excerpt: string
}

interface SearchResultsProps {
  posts: BlogPost[] | undefined
  totalCount: number
  currentPage: number
  query: string
}

export default function SearchResults({ posts, totalCount, currentPage, query }: SearchResultsProps) {
  const router = useRouter()
  const postsPerPage = 10
  const totalPages = Math.ceil(totalCount / postsPerPage)

  const handlePageChange = (page: number) => {
    router.push(`/blog/search?query=${encodeURIComponent(query)}&page=${page}`)
  }

  const getImageUrl = (imageId: string) => {
    return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${imageId}`
  }

  if (!posts) {
    return <p className="text-center">Error loading search results. Please try again.</p>
  }

  return (
    <>
      {posts.length === 0 ? (
        <p className="text-center">No results found for "{query}"</p>
      ) : (
        <>
          <p className="text-center mb-8">Results for: "{query}"</p>
          <div className="grid grid-cols-1 ml-40 mr-40 mb-20 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <CardHeader className="p-0">
                  <a href={`/blog/${post.slug}`} className="text-black font-bold hover:text-[#1c5448] transition-colors duration-300">
                    <Image
                      src={post.featured_image?.id ? getImageUrl(post.featured_image.id) : "/assets/fallback-image.webp"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold mb-3">
                    <a href={`/blog/${post.slug}`} className="text-black font-bold hover:text-[#1c5448] transition-colors duration-300">
                      {post.title}
                    </a>
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="text-black font-bold hover:text-[#1c5448] transition-colors duration-300">
                    Read More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalCount > postsPerPage && (
            <div className="flex justify-center mt-8 items-center space-x-4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-1 ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-black"}`}
              >
                Previous
              </Button>
              <span className="text-black font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-1 ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-black"}`}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}