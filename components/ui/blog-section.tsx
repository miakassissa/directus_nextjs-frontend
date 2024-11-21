import { Suspense } from 'react'
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'
import BlogPosts from './BlogPosts'
import ShimmerButton from './shimmer-button'

interface BlogPost {
  id: number
  title: string
  slug: string
  featured_image?: {
    id: string
  }
  excerpt: string
}

async function getBlogPosts() {
  try {
    const posts = await directus.request<BlogPost[]>(
      readItems('blog_posts', {
        fields: ['id', 'title', 'slug', 'featured_image.id', 'excerpt'],
        filter: {
          status: { _eq: 'published' },
        },
        sort: ['-date_created'],
        limit: 3,
      })
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogSection() {
  const blogPosts = await getBlogPosts()

  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-center">
          Latest Blogs & Tutorials
        </h2>
        <Suspense fallback={<div>Loading blog posts...</div>}>
          <BlogPosts posts={blogPosts} />
        </Suspense>
        <div className="mt-12 flex justify-center">
          <a href="/blog">
            <ShimmerButton
              shimmerColor="#5ce2e6"
              background="black"
              className="font-semibold py-3 px-6"
            >
              View All Articles
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  )
}