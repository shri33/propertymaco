/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for deployment to cPanel
  images: {
    unoptimized: true, // Allows images to work without Next.js optimization
  },
};

module.exports = nextConfig;
