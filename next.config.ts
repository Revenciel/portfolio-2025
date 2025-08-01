import createMDX from '@next/mdx'

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/, //allow .md in addition to .mdx
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
