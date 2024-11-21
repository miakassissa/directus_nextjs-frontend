/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/api/:path*`,
      },
    ];
  },
  /* I had to add this for the BlogSearch feature to work */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055', // Specify the Directus server port
        pathname: '/assets/**', // Match all asset paths
      },
    ],
  },
};

export default nextConfig;
