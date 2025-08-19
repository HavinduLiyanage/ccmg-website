/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
}

module.exports = nextConfig 