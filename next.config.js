/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
  },
}

module.exports = nextConfig
