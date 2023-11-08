/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['drive.google.com', 'localhost'], // Tambahkan domain drive.google.com ke sini
  },
};

module.exports = nextConfig;
