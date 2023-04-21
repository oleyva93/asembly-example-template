/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/site",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/site",
        permanent: true,
        basePath: false,
      },
    ];
  },
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
