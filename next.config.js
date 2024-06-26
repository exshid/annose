const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
