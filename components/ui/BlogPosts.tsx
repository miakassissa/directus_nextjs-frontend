'use client'

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  slug: string
  featured_image?: {
    id: string
  }
  excerpt: string
}

interface BlogPostsProps {
  posts: BlogPost[]
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  const getImageUrl = (imageId: string) => {
    return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${imageId}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <CardHeader className="p-0">
            <a href={`/blog/${post.slug}`} className="text-black font-bold hover:text-[#1c5448] transition-colors duration-300">
              <Image
                src={post.featured_image?.id ? getImageUrl(post.featured_image.id) : '/assets/fallback-image.webp'}
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
            <a
              href={`/blog/${post.slug}`}
              className="text-black font-bold hover:text-[#1c5448] transition-colors duration-300"
            >
              Read More →
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}