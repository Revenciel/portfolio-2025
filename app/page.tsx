import getPostMetadata from "@/utils/getPostMetadata";
//import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// import styles from "./page.module.css";
// use styles.classname if using the css module

export default function Home() {

  const postMetadata = getPostMetadata('projects')

  return (
    <main>
      <Hero />
      <section>
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
      </section>
    </main>
  );
}
