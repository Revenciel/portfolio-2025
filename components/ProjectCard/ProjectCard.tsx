import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props: { post: any }) { //fix type here
  const { post } = props
  return (
    <div className='project-card'>
      <Image src='/images/semi-transparent.png' alt='placeholder' width={400} height={400} />
      {/* <Image src={post.image} alt='placeholder' width={400} height={400} /> */}
      <div className='text'>
        <p className='date'>{post.date}</p>
        <h3>Role</h3>
        <p>{post.role}</p>
        <h3>Task</h3>
        <p>{post.task}</p>
        <Link href={`/${post.slug}`}>CALL TO ACTION</Link>
      </div>
    </div>
  );
}