/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.addressguru.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
