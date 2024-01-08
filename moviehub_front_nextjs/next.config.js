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
    },
        env: {
            BASE_LOCALHOST_URL: 'http://localhost:3000/',

            BASE_API_URL: 'http://localhost:8080'
        },
      
   
}

module.exports = nextConfig
