/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["rickandmortyapi.com"],
  },
};

export default nextConfig;
