/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ik.imagekit.io',
        },
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  