import getPostMetadata from "@/utils/getPostMetadata";
//import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";


export default function Home() {

  // remove 'temp' once I've solved bug with metadata appearing in post body, and delete the temp folder
  const postMetadata = getPostMetadata('projects/temp')

  return (
    <main id="home">
      <Hero />
      <section id='projects'>
        <div className='wrapper'>
          <h2>Projects</h2>
          <div className="project-list">
            {postMetadata.map((post) => {
              return (
                <ProjectCard
                  key={post.slug}
                  post={post}
                />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
