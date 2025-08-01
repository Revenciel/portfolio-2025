import React from 'react'
//import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { getProjectMdxBySlug, getAllProjectSlugs } from '@/utils/getProjectMdx'
import dynamic from 'next/dynamic'

// This generates pages statically (i.e. at build time) for every project, using getPostMetadata to get the slugs of the mdx files.
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = getProjectMdxBySlug(params.slug)
  return {
    title: `Case Study: ${metadata.title} | Clarkybox Design`,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { metadata } = getProjectMdxBySlug(slug)

  // MDX is compiled at build time, so you import it statically:
  const MdxComponent = dynamic(() => import(`@/projects/${slug}.mdx`), {
    ssr: true,
  })

  return (
    <main className="project">
      <article>
        <MdxComponent />
      </article>
    </main>
  )
}
