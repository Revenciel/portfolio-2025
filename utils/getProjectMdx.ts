import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllProjectSlugs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'projects'))
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getProjectMdxBySlug(slug: string) {
  const filepath = path.join(process.cwd(), 'projects', `${slug}.mdx`)
  const source = fs.readFileSync(filepath, 'utf8')
  const { data } = matter(source)
  return {
    slug,
    metadata: data,
    componentPath: `@/mdx/${slug}.mdx`,
  }
}
