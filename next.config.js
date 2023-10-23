/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/"
  },
};

module.exports = nextConfig;
