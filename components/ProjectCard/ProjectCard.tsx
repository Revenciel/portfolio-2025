import Image from 'next/image';
import CTA from '../CTA/CTA';

export default function ProjectCard(props: { post: any }) { //fix type here
  const { post } = props
  return (
    <div className='project-card'>
      <div className='thumbnail'>
        <Image src={post.image} alt={post.imageAltText} fill={true} objectFit='cover'/>
      </div>

      <div className='content'>
        <div className='header'>
          <div className='tags'>
            <span>{post.keyword1}</span>
            <span>{post.keyword2}</span>
            <span>{post.keyword3}</span>
          </div>
          <span className='date'>{post.date}</span>
        </div>
        <p className='summary'>{post.summary}</p>
        <CTA label={post.ctaLabel} href={`/${post.slug}`} />
      </div>
    </div>
  );
}