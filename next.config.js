/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: ".",
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "styled.ts"],
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
