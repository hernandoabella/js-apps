const fetch = require('node-fetch'); // Import node-fetch to polyfill the Headers object

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const headers = new fetch.Headers(); // Create a new Headers object

    // Add headers for specific routes
    const routeHeaders = [
      {
        source: '/apps',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/login',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/pricing',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      // Add more entries for other pages as needed
    ];

    // Add the routeHeaders to the headers object
    routeHeaders.forEach(({ source, headers: routeHeaders }) => {
      routeHeaders.forEach(({ key, value }) => {
        headers.append(key, value);
      });
    });

    return [
      {
        source: '/(.*)',
        headers: [...headers], // Convert Headers object to array
      },
    ];
  },
};

module.exports = nextConfig;
