import { Suspense } from 'react'
import { readItems } from "@directus/sdk"
import directus from "@/lib/directus"
import SearchResults from './SearchResults'
import SearchForm from './SearchForm'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

interface SearchPageProps {
  searchParams: { query?: string; page?: string }
}

interface BlogPost {
  id: number
  title: string
  slug: string
  featured_image?: {
    id: string
  }
  excerpt: string
}

interface CountResult {
  count: {
    id: number
  }
}

async function getSearchResults(query: string, page: number) {
  const postsPerPage = 10
  const offset = (page - 1) * postsPerPage

  try {
    const [posts, totalCountResult] = await Promise.all([
      directus.request<BlogPost[]>(
        readItems("blog_posts", {
          fields: ["id", "title", "slug", "featured_image.id", "excerpt"],
          filter: {
            _and: [
              { status: { _eq: "published" } },
              {
                _or: [
                  { title: { _contains: query } },
                  { excerpt: { _contains: query } }
                ]
              }
            ]
          },
          sort: ["-date_created"],
          limit: postsPerPage,
          offset: offset,
        })
      ),
      directus.request<CountResult[]>(
        readItems("blog_posts", {
          aggregate: { count: "id" },
          filter: {
            _and: [
              { status: { _eq: "published" } },
              {
                _or: [
                  { title: { _contains: query } },
                  { excerpt: { _contains: query } }
                ]
              }
            ]
          },
        })
      )
    ])

    const totalCount = totalCountResult[0]?.count?.id || 0

    return { posts, totalCount }
  } catch (error) {
    console.error("Error fetching search results:", error)
    return { posts: undefined, totalCount: 0 }
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query || ''
  const page = parseInt(searchParams.page || '1', 10)
  const { posts, totalCount } = await getSearchResults(query, page)

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 text-gray-800 m-0 p-0 min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-4 flex-grow">
        <h1 className="text-4xl font-bold mb-4 text-center mt-12">Search Results</h1>
        
        <Suspense fallback={<div>Loading search form...</div>}>
          <SearchForm initialQuery={query} />
        </Suspense>

        <Suspense fallback={<div>Loading search results...</div>}>
          <SearchResults 
            posts={posts} 
            totalCount={totalCount} 
            currentPage={page} 
            query={query} 
          />
        </Suspense>
      </main>
      <Footer className="mt-0" />
    </section>
  )
}