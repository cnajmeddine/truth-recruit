/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['media.licdn.com', 'logo.clearbit.com'],
  },
}

module.exports = nextConfig