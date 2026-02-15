/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tailkit.com',
      },
    ],
  },
  
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
  },
}

module.exports = nextConfig
