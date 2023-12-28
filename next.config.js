/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/resize:fit:2400/1*AFABlTwUYwBJNYGTURmfXw.jpeg',
      },
    ],
  },
}

module.exports = nextConfig
