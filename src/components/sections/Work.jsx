// import Reveal from '../ui/Reveal';
// import Section, { Container } from '../ui/Section';
// import SectionHeading from '../ui/SectionHeading';
// import { CONFIG, externalProps } from '../../config/site';
// import { projects } from '../../data/content';

// function ProjectCard({ project }) {
//     const { id, title, description, meta, status, statusClass, visualClass, shapes } = project;

//     return (
//         <Reveal className="h-full">
//             <article className="h-full overflow-hidden rounded-2xl border border-line bg-panel transition-[transform,box-shadow] duration-300 hover:-translate-y-1.25 hover:shadow-[0_26px_50px_-28px_rgba(11,16,32,.4)]">
//                 <div className={`relative h-45 overflow-hidden ${visualClass}`}>
//                     {shapes.map((shape) => (
//                         <div key={shape} className={`absolute rounded-2xl ${shape}`} />
//                     ))}
//                 </div>

//                 <div className="p-5.5">
//                     <span className={`mb-3 inline-block rounded-full px-2.5 py-1 text-[.76rem] font-bold ${statusClass}`}>
//                         {status}
//                     </span>
//                     <h3 className="mb-2 text-[1.45rem]">{title}</h3>
//                     <p className="mb-3.5 text-[.96rem] text-dim">{description}</p>
//                     <div className="mb-4 text-[.84rem] text-ink-2">{meta}</div>
//                     <a
//                         {...externalProps(CONFIG.projects[id])}
//                         className="font-semibold text-c1 no-underline hover:underline"
//                     >
//                         {status === 'In progress' ? 'Follow the build' : 'View case study'} →
//                     </a>
//                 </div>
//             </article>
//         </Reveal>
//     );
// }

// export default function Work() {
//     return (
//         <Section id="work">
//             <Container>
                // <SectionHeading
                //     eyebrow="Selected work"
                //     title={
                //         <>
                //             Products I’ve <span className="grad-text">actually shipped</span>
                //         </>
                //     }
                //     description="Real software, built end to end. Click through to see what each one solves."
                // />
//                 <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5.5">
//                     {projects.map((project) => (
//                         <ProjectCard key={project.id} project={project} />
//                     ))}
//                 </div>
//             </Container>
//         </Section>
//     );
// }




import { useCallback, useState } from 'react';
import Section, { Container } from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projects } from '../../data/content';

export default function Work() {
    const [activeProject, setActiveProject] = useState(null);
    const closeProject = useCallback(() => setActiveProject(null), []);

    return (
        <Section id="work">
            <Container>
                <SectionHeading
                    eyebrow="Selected work"
                    title={
                        <>
                            Products I’ve <span className="grad-text">actually shipped</span>
                        </>
                    }
                    description="Real software, built end to end. Click through to see what each one solves."
                />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5.5">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
                    ))}
                </div>
            </Container>

            <ProjectModal project={activeProject} onClose={closeProject} />
        </Section>
    );
}