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
};
