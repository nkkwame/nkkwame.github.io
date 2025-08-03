/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
        unoptimized: true,
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
}

module.exports = nextConfig
