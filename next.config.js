/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/:path*", // Match any path under /api
                destination: "https://api.football-data.org/v4/:path*", // Proxy to the API
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'crests.football-data.org',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'flagsapi.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
};
