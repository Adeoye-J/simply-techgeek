import Reveal from '../ui/Reveal';
import ProjectVisual from './ProjectVisual';
import StatusPill from './StatusPill';

export default function ProjectCard({ project, onOpen }) {
    const { title, status, summary, meta, cta, visual } = project;

    return (
        <Reveal className="h-full">
            <article className="h-full overflow-hidden rounded-2xl border border-line bg-panel transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_26px_50px_-28px_rgba(11,16,32,.4)]">
                <ProjectVisual visual={visual} />

                <div className="p-[22px]">
                    <StatusPill tone={status.tone}>{status.label}</StatusPill>
                    <h3 className="mb-2 mt-3 text-[1.45rem]">{title}</h3>
                    <p className="mb-3.5 text-[.96rem] text-dim">{summary}</p>
                    <div className="mb-4 text-[.84rem] text-ink-2">{meta}</div>
                    <button
                        type="button"
                        aria-haspopup="dialog"
                        onClick={() => onOpen(project)}
                        className="cursor-pointer bg-transparent p-0 text-left font-semibold text-c1 hover:underline"
                    >
                        {cta} →
                    </button>
                </div>
            </article>
        </Reveal>
    );
}