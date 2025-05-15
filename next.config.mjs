/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable server components to avoid hydration issues
  experimental: {
    serverComponents: false,
  },
}

export default nextConfig
