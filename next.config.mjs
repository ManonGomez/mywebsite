import mdx from "@next/mdx";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid workspace-root inference issues (multiple lockfiles)
  turbopack: {
    root: __dirname,
  },
  // Static export (outputs to /out)
  output: "export",
  // Better compatibility with static hosts (GitHub Pages, Netlify static, etc.)
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    // Required for static export (no Image Optimization API)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
