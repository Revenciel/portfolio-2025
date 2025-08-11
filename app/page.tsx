import getPostMetadata from '@/utils/getPostMetadata'
import Hero from '@/components/Hero/Hero'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { IllustrationCarousel } from '@/components/Carousel/Carousel'
import ContactForm from '@/components/ContactForm/ContactForm'



export default function Home() {

  // remove 'temp' once I've solved bug with metadata appearing in post body, and delete the temp folder. Don't forget to update getProjectMdx as well (remove temp to get title metadata)
  const postMetadata = getPostMetadata('projects/temp')

  return (
    <main id="home">
      <Hero />
      <section id='projects' className='band'>
        <div className='wrapper'>
          <h2>Projects</h2>
          <div className="project-list">
            {postMetadata
              .slice() // make a copy so we don't mutate the original array
              .sort((a, b) => a.order - b.order)
              .map((post) => (
                <ProjectCard
                  key={post.slug}
                  post={post}
                />
              ))}
          </div>
        </div>
      </section>
      <section id='illustration' className='band'>
        <div className='wrapper'>
          <h2>Illustration</h2>
          <IllustrationCarousel />
        </div>
      </section>
      <section id='contact' className='band'>
        <div className='wrapper'>
          <h2>Contact</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
