/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'resizing.flixster.com'
            },
            {
                hostname: 'm.media-amazon.com'
            }
        ]
    }
   
}

module.exports = nextConfig
