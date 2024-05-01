const fetch = require('node-fetch');

const nextConfig = {
    reactStrictMode: true,
};

global.Headers = fetch.Headers;

module.exports = nextConfig;
