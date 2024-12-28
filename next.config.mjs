import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: "/tailwind",
  assetPrefix: "/tailwind",
  redirects: async () => [
    {
      source: "/",
      destination: "/tailwind",
      basePath: false,
      permanent: true,
    },
  ],
}

export default withMDX(config)
