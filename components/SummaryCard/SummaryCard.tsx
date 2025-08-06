import getPostMetadata from '@/utils/getPostMetadata'

export default function SummaryCard({ slug }: { slug: string }) {

    // remove 'temp' once I've solved bug with metadata appearing in post body, and delete the temp folder
    const metadata=getPostMetadata('projects/temp', slug)

  return (
    <section className='summary-card'>
      <h2 className='visually-hidden'>Project Summary</h2>
      <h3>Challenge</h3>
      <p>blah</p>
      <h3>Solution</h3>
      <p>blah</p>
      <h3>Outcomes</h3>
      <p></p>
    </section>
  )
}