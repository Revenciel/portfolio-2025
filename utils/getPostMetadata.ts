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
            date: matterResult.data.date,
            role: matterResult.data.role,
            task: matterResult.data.task,
            solution: matterResult.data.solution || null,
            //other metadata here
            slug: filename.replace('.mdx', '')
        }
    })
    return posts
}