/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    formats: [
      'image/avif', 'image/webp'
    ],
    remotePatterns: []
  }
}

module.exports = nextConfig
