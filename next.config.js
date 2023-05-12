/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['cdn.sanity.io'] },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  },
};

module.exports = nextConfig;
