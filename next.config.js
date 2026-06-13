const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the file-tracing root to this project so Next doesn't mis-infer the
  // workspace root when sibling folders contain their own lockfiles.
  outputFileTracingRoot: path.join(__dirname),
  // All images ship in /public/assets/ — no remote image domains needed.
  // Add a remotePatterns entry here if you later host imagery on a CDN.
};

module.exports = nextConfig;
