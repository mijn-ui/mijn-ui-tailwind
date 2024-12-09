import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: "/tailwind",
  assetPrefix: "/tailwind",
}

export default withMDX(config)
