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
    assetPrefix: process.env.NODE_ENV === 'production' ? '/nkkwame' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/nkkwame' : '',
}

module.exports = nextConfig
