/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["solotechnopark.id", "localhost"],
    domains: ["solotechnopark.id", "api.solotechnopark.id", "localhost"],
  },
  sitemap: {},
};

module.exports = nextConfig;
