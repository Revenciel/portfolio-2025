import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath: string, slug?: string) {
    const folder = basePath + '/'

    if (slug) {
        const filePath = `${folder}${slug}.mdx`
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`)
        }

        const fileContents = fs.readFileSync(filePath, 'utf8')
        const matterResult = matter(fileContents)

        return [{ //this is an array so that the function always returns an array type
            title: matterResult.data.title,
            image: matterResult.data.image,
            imageAltText: matterResult.data.imageAltText,
            date: matterResult.data.date,
            keyword1: matterResult.data.keyword1,
            keyword2: matterResult.data.keyword2,
            keyword3: matterResult.data.keyword3,
            summary: matterResult.data.summary,
            ctaLabel: matterResult.data.ctaLabel,
            slug
        }]
    }

    const files = fs.readdirSync(folder)
    const mdxPosts = files.filter(file => file.endsWith('.mdx'))

    // get the file data
    const posts = mdxPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            image: matterResult.data.image,
            imageAltText: matterResult.data.imageAltText,
            date: matterResult.data.date,
            keyword1: matterResult.data.keyword1,
            keyword2: matterResult.data.keyword2,
            keyword3: matterResult.data.keyword3,
            summary: matterResult.data.summary,
            ctaLabel: matterResult.data.ctaLabel,
            slug: filename.replace('.mdx', '')
        }
    })
    return posts
}