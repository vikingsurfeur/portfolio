/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio.osc-fr1.scalingo.io',
            port: '',
            pathname: '**',
          }
        ]
    },
};

module.exports = nextConfig;
