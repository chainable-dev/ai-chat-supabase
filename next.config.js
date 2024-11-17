/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true // Enable PPR since you're using canary features
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
}

module.exports = nextConfig 