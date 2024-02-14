/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.animeswatch.com', "cdn.getbio.me"],
  },
}

module.exports = nextConfig
