/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint errors during build
  },
  experimental: {
    appDir: true, // Ensure Next.js recognizes the custom structure
  },
  async redirects() {
    return [
      {
        source: "http://:path*", // Redirect HTTP to HTTPS
        destination: "https://www.fantasymmadness.com/:path*",
        permanent: true,
      },
      {
        source: "https://fantasymmadness.com/:path*", // Redirect non-www to www
        destination: "https://www.fantasymmadness.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
