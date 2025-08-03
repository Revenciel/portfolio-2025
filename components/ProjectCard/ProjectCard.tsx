import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props: { post: any }) { //fix type here
  const { post } = props
  return (
    <div className='project-card'>
      <Image src='/images/semi-transparent.png' alt='placeholder' width={400} height={400} />
      {/* <Image src={post.image} alt='placeholder' width={400} height={400} /> */}
      <div className='text'>
        <div className='heading'>
          <p>{post.keyword1}</p>
          <p>{post.keyword2}</p>
          <p>{post.keyword3}</p>
          <p>{post.date}</p>
        </div>
        <p>{post.summary}</p>
        <Link href={`/${post.slug}`}>{post.ctaLabel}</Link>
      </div>
    </div>
  );
}