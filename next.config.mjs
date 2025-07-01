/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "admin.pebblesdevries.nl",
      },
      {
        protocol: "https",
        hostname: "strapi.pebblesdevries.nl",
      },
    ],
  },
};

export default nextConfig;
