import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'ibs-industriebodensanierung.de' },
    ],
  },
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/startseite', destination: '/', permanent: true },
      { source: '/epoxidharzbeschichtung', destination: '/beschichtung/', permanent: true },
      { source: '/sanierung', destination: '/versiegelungen/', permanent: true },
      { source: '/sanierungen', destination: '/versiegelungen/', permanent: true },
      { source: '/steinteppich', destination: '/dekorbelaege/', permanent: true },
      { source: '/designboden', destination: '/betonoptik/', permanent: true },
      { source: '/balkonsanierung', destination: '/balkon/', permanent: true },
    ]
  },
}
export default nextConfig
