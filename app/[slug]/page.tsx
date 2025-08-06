import React from 'react'
import { getProjectMdxBySlug, getAllProjectSlugs } from '@/utils/getProjectMdx'
import { mdxComponents } from '@/components/MDXComponents/MDXComponents'
import ProjectHero from '@/components/ProjectHero/ProjectHero'

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



export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { content, metadata } = getProjectMdxBySlug(params.slug)

  const MdxContent = require(`@/projects/${params.slug}.mdx`).default

  return (
    <main className="project-page">
      <ProjectHero slug={params.slug}/>
      <article className='band'>
        <div className='wrapper'>
          <MdxContent components={mdxComponents} />
        </div>
      </article>
    </main>
  )
}
