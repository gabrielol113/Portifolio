/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com'
            },
            {
                protocol: 'https',
                hostname: 'www.ntaskmanager.com'
            }
        ]
    }
}

module.exports = nextConfig
