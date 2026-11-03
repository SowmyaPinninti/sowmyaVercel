/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/case-studies/rapido-pro', destination: '/case-studies/rapido-pro.html' },
      { source: '/case-studies/feedback-dashboard', destination: '/case-studies/feedback-dashboard.html' },
      { source: '/case-studies/coming-soon', destination: '/case-studies/coming-soon.html' },
    ]
  },
}

export default nextConfig
