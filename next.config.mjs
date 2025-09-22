/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  rewrites: async () => {
    return [
      {
        source: "/directus-api/:path*",
        destination: `${process.env["NEXT_PUBLIC_DIRECTUS_URL"]}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env["NEXT_PUBLIC_API_URL"]}/:path*`,
      },
    ];
  },
};

export default nextConfig;
