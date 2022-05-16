/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
