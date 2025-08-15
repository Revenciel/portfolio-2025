import React from 'react'
import { getProjectMdxBySlug, getAllProjectSlugs } from '@/utils/getProjectMdx'
import { mdxComponents } from '@/components/MDXComponents/MDXComponents'
import ProjectHero from '@/components/ProjectHero/ProjectHero'

// This generates pages statically (i.e. at build time) for every project, using getPostMetadata to get the slugs of the mdx files.
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { metadata } = getProjectMdxBySlug(slug)
  return {
    title: `Case Study: ${metadata.title} | Clarkybox Design`,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const MdxContent = require(`@/projects/${slug}.mdx`).default

  return (
    <main className="project-page">
      <ProjectHero slug={slug}/>
      <article>
          <MdxContent components={mdxComponents} />
      </article>
    </main>
  )
}

