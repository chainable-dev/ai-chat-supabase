/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 'your-image-domain.com'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
}

module.exports = nextConfig; 