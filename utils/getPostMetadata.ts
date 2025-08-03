import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath: string) {
    const folder = basePath + '/'
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
            //other metadata here
            slug: filename.replace('.mdx', '')
        }
    })
    return posts
}