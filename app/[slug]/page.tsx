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
    <main className='project'>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
