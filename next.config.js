/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["connect-statics-astech-io.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
