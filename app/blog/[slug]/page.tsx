import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import NavBar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Link, LinkedinIcon, Twitter, Facebook, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Head from 'next/head';

const getImageUrl = (imageId: string) => {
    return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${imageId}`;
};

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date_created: string;
    blog_posts_categories: {
        categories_id: {
            id: string;
            name: string;
        };
    }[];
    featured_image: {
        id: string;
        description: string;
    };
    author: {
        first_name: string;
        last_name: string;
        description: string;
        linkedin_link: string;
        avatar: {
            id: string;
        };
    };
}

async function getBlogPost(slug: string): Promise<BlogPost> {
    try {
        const response = await directus.request(
            readItems('blog_posts', {
                fields: [
                    'id',
                    'title',
                    'excerpt',
                    'content',
                    'date_created',
                    { featured_image: ['id', 'description'] },
                    { author: ['first_name', 'last_name', 'linkedin_link', 'description', { avatar: ['id'] }] },
                    {
                        blog_posts_categories: {
                            fields: ['categories_id.id', 'categories_id.name']
                        },
                    },
                ],
                filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
                limit: 1,
            })
        );

        const blog_post = response?.[0];
        if (!blog_post) {
            notFound();
        }

        return blog_post as BlogPost;

    } catch (error) {
        console.error('Failed to fetch blog post:', error);
        throw error;
    }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    let blogPost: BlogPost;

    try {
        blogPost = await getBlogPost(params.slug);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        notFound();
    }

    // Calculate read time (assuming average reading speed of 200 words per minute)
    const wordCount = blogPost.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    // Format date
    const formattedDate = new Date(blogPost.date_created).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return (
        <>
        <Head>
            <title>{blogPost.title} | Nyotah Blog</title>
            <meta name="description" content={blogPost.excerpt || 'Read more about this topic'} />
            <meta property="og:title" content={blogPost.title} />
            <meta property="og:description" content={blogPost.excerpt || 'Learn more here'} />
            <meta property="og:image" content={getImageUrl(blogPost.featured_image?.id || '/assets/fallback-image.webp')} />
            <meta property="og:type" content="article" />
      </Head>
        <div className="min-h-screen bg-[#0B1121] text-white">
            <NavBar />
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm mb-6 text-gray-400 mt-12">
                    <a href="/blog" className="hover:text-white">Blog</a>
                    <span>›</span>
                    {blogPost.blog_posts_categories && blogPost.blog_posts_categories.length > 0 ? (
                        blogPost.blog_posts_categories.map((relation) => (
                        <span key={relation.categories_id.id}>{relation.categories_id.name}</span>
                    ))
                     ) : (
                    <span>No categories</span>
                    )}
                </div>

                {/* Title Section */}
                <div className="max-w-4xl mx-auto mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {blogPost.title}
                    </h1>

                    {/* Author and Meta Information */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                            {blogPost.author?.avatar?.id && (
                                <Image
                                    src={getImageUrl(blogPost.author.avatar.id)}
                                    alt={`${blogPost.author.first_name} ${blogPost.author.last_name}`}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            )}
                            <div>
                                <p className="font-medium">
                                    <a href={blogPost.author.linkedin_link} target='_blank'>{blogPost.author.first_name} {blogPost.author.last_name}</a>
                                </p>
                                <p className="text-sm text-gray-400">
                                    {formattedDate} · {readTime} min read
                                </p>
                            </div>
                        </div>

                        {/* Social Share Buttons */}
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="hover:text-black">
                                <Link className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black">
                                <LinkedinIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black">
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden">
                        <Image
                            src={blogPost.featured_image?.id ? getImageUrl(blogPost.featured_image.id) : '/assets/fallback-image.webp'}
                            alt={blogPost.featured_image?.description || blogPost.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content Section */}
                <article className="max-w-2xl mx-auto">
                    <div
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        className="
                            prose prose-lg
                            prose-invert
                            max-w-none 
                            prose-headings:font-bold 
                            prose-h2:text-3xl
                            prose-h2:mt-12 
                            prose-h2:mb-8
                            prose-h3:text-2xl
                            prose-h3:mt-10 
                            prose-h3:mb-6
                            prose-h4:text-xl
                            prose-h4:mt-8
                            prose-h4:mb-4
                            prose-p:text-gray-300
                            prose-p:leading-8 
                            prose-p:mb-8
                            prose-li:text-gray-300
                            prose-li:leading-7
                            prose-li:mb-4
                            prose-blockquote:text-gray-400
                            prose-blockquote:italic
                            prose-blockquote:border-l-4
                            prose-blockquote:border-gray-700
                            prose-blockquote:pl-6
                            prose-blockquote:mb-10
                            prose-img:rounded-lg
                            prose-img:my-10 /* Margin for images */
                            mb-24" /* Space after content */
                    />

                    {/* Share Section */}
                    <div className="mt-16 pt-8 text-center">
                        <p className="text-sm text-gray-400 mb-4">Share this post</p>
                        <div className="flex justify-center flex gap-4">
                            <Button variant="ghost" size="icon" className="hover:text-black rounded-full">
                                <Copy className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black rounded-full">
                                <LinkedinIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black rounded-full">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-black rounded-full">
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </div>
                        
                        {/* Tags 
                        <div className="flex gap-2 mt-4">
                            {blogPost.tags?.map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div> */}
                    </div>

                    {/* Author Section */}
                    <div className="mt-16 border-t border-gray-800 text-center mb-12">
                        {blogPost.author?.avatar?.id && (
                            <Image
                                src={getImageUrl(blogPost.author.avatar.id)}
                                alt={`${blogPost.author.first_name} ${blogPost.author.last_name}`}
                                width={80}
                                height={80}
                                className="rounded-full mx-auto mb-4 mt-12"
                            />
                        )}
                        <h3 className="text-xl font-semibold mb-2">
                            {blogPost.author.first_name} {blogPost.author.last_name}
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-4">
                            {blogPost.author.description}
                        </p>
                        <a
                            href={blogPost.author.linkedin_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            LinkedIn Profile
                        </a>
                    </div>

                    {/* Related Posts Section */}
                    

                </article>
            </main>
            <Footer />
        </div>
    </>
    );
}