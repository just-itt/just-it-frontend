/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["i.pinimg.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
