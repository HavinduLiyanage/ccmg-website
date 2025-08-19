/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comment this out for development
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
}

module.exports = nextConfig 