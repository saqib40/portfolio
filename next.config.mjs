/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // <=== Generates an 'out' folder with static HTML
  basePath: "/portfolio", // <=== Needed for links/styles to work on gh-pages
  images: {
    unoptimized: true,    // <=== Disables image optimization service (not supported on GH Pages)
  },
};

export default nextConfig;