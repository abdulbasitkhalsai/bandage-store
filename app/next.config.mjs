import 'dotenv/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', 'lh3.googleusercontent.com'], // Add other domains if needed
      },
      env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    },
};

export default nextConfig;
