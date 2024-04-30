/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      // Cache-Control header configuration for different routes
      {
        source: '/apps',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache content for 1 hour
          },
        ],
      },
      {
        source: '/login',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache content for 1 hour
          },
        ],
      },
      {
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache content for 1 hour
          },
        ],
      },
      {
        source: '/why-us',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache content for 1 hour
          },
        ],
      },
      {
        source: '/pricing',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache content for 1 hour
          },
        ],
      },
      // Add more entries for other pages as needed
    ];
  },
};

module.exports = nextConfig;
