import Image from 'next/image';
import CTA from '../CTA/CTA';

export default function ProjectCard(props: { post: any }) { //fix type here
  const { post } = props
  return (
    <div className='project-card'>
      <Image src='/images/semi-transparent.png' alt='placeholder' width={400} height={400} className='thumbnail'/>
      {/* <Image src={post.image} alt='placeholder' width={400} height={400} /> */}
      <div className='content'>
        <div className='header'>
          <div className='tags'>
            <span>{post.keyword1}</span>
            <span>{post.keyword2}</span>
            <span>{post.keyword3}</span>
          </div>
          <span>{post.date}</span>
        </div>
        <p className='summary'>{post.summary}</p>
        <CTA label={post.ctaLabel} href={`/${post.slug}`} />
      </div>
    </div>
  );
}