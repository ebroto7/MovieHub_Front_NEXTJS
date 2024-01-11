/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'resizing.flixster.com'
            },
            {
                hostname: 'm.media-amazon.com'
            },
            {
                hostname: 'lh3.googleusercontent.com'
            },
        ]
    },
    env: {
        BASE_LOCALHOST_URL: 'http://localhost:3000/',
        BASE_API_URL: 'http://localhost:8081'
    },


}

module.exports = nextConfig
