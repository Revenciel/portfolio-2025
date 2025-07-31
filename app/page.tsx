import getPostMetadata from "@/utils/getPostMetadata";
//import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";


export default function Home() {

  const postMetadata = getPostMetadata('projects')

  return (
    <main>
      <Hero />
      <section>
        <div className="wrapper">
          <h2>Projects</h2>
          <div className="project-list">
            {postMetadata.map((post) => {
              return (
                <ProjectCard
                  key={post.slug}
                  post={post}
                // slug={post.slug} 
                // date={post.date} 
                // role={post.role} 
                // task={post.task} 
                // solution={post.solution} 
                />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
