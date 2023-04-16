/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/aplicaciones',
        destination: '/aplicaciones',
        permanent: true,
      },
      {
        source: '/aprende',
        destination: '/aprende',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/aplicaciones',
        destination: '/aplicaciones',
      },
      {
        source: '/aprende',
        destination: '/aprende',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/aplicaciones',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/aprende',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;