// import Image from "next/image";
import Link from "next/link";
import getPostMetadata from "@/utils/getPostMetadata";

export default function ProjectHero({ slug }: { slug: string }) {

    const metadata = getPostMetadata('projects/temp', slug);

    return (
        <section className='band hero'>
            <div className='wrapper'>
                <hgroup>
                    <span className='eyebrow'>{metadata[0].type}</span>
                    <h1>{metadata[0].title}</h1>
                </hgroup>
                <Link className='back' href='/#projects'>

                    Back to Projects
                    <img src="/images/icon-back.svg" className="icon" aria-hidden="true" alt='' />
                </Link>
            </div>
        </section>
    );
}