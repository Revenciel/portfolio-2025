import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import React from 'react'
//import { notFound } from 'next/navigation'
import getPostMetadata from '../../utils/getPostMetadata'

//import Image from "next/image";

function getPostContent(slug: string) {
  const folder = 'projects/'
  const file = folder + `${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

// This generates pages statically (i.e. at build time) for every project, using getPostMetadata to get the slugs of the mdx files.
export const generateStaticParams = async () => {
  const post = getPostMetadata('projects')
  return post.map((post: any) => ({ slug: post.slug }) //fix type here
  )
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string> | undefined;
}) {

  const post = getPostContent(params.slug)
  return {
    title: `Case Study: ${post.data.title} | Clarkybox Design`,
    // description: post.data.description || 'Project description',
    // openGraph: {
    //   title: post.data.title || 'Project',
    //   description: post.data.description || 'Project description',
    //   images: [
    //     {
    //       url: post.data.image || '/images/logo.png',
    //       alt: post.data['image-alt-text'] || 'Project Image'
    //     }
    //   ]
    // }
  }
}

export default function ProjectPage(props: { params: { slug: string } }) {
  const post = getPostContent(props.params.slug)
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
        <p>At Home Solutions, a small team of devs and one designer (that’s me!) manages marketing landing pages for over a dozen brands. We have to work quickly to keep up with partner requests while continuously testing changes to improve conversion rates. But working so fast came at a cost: inconsistencies forced devs to recreate similar designs from scratch every time we made a new site. Content editors frequently violated accessibility guidelines because there weren’t enough guardrails for them in the CMS. And our sites didn’t look trustworthy, because our piecemeal approach to improvements resulted in a lack of internal consistency. In short, we had a mess on our hands.

When our engineering director announced we were going to migrate to a new CMS, I proposed standardizing all our sites with a multi-brand design system. Since we were going to re-code our websites anyways, the team was receptive when I explained how a design system would drastically accelerate launching new sites, streamline implementing CRO wins across brands, bake accessibility into the process.
</p>
      </article>
    </main>
  );
}
