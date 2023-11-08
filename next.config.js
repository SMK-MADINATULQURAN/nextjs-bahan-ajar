/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['drive.google.com'], // Tambahkan domain drive.google.com ke sini
  },
};

module.exports = nextConfig;
