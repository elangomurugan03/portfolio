/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ali-ch-portfolio.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
