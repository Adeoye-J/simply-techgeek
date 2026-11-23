import { useEffect, useId } from 'react';
import Button from '../ui/Button';
import ProjectVisual from './ProjectVisual';
import StatusPill from './StatusPill';
import { modal } from '../../data/content';

function ModalBlock({ title, children }) {
    return (
        <div className="mt-7">
            <h4 className="mb-2.5 text-[.8rem] font-bold uppercase tracking-[.08em] text-c1">{title}</h4>
            {children}
        </div>
    );
}

export default function ProjectModal({ project, onClose }) {
    const titleId = useId();

    useEffect(() => {
        if (!project) return undefined;

        const handleKey = (event) => {
            if (event.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;

        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [project, onClose]);

    if (!project) return null;

    const { title, status, meta, summary, visual, links = {}, details = {} } = project;
    const { problem, solution, features = [], outcomes = [], stack = [] } = details;

    // Clicking the dim area outside the dialog closes it.
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 animate-fade-in bg-[rgba(11,16,32,.6)] backdrop-blur-sm"
            />

            <div onClick={handleBackdropClick} className="relative flex min-h-full items-center justify-center p-4">
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    className="relative w-full max-w-180 animate-modal-in overflow-hidden rounded-[22px] border border-line bg-panel shadow-[0_40px_80px_-30px_rgba(11,16,32,.6)]"
                >
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close project details"
                        className="absolute right-3.5 top-3.5 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-ink text-lg leading-none text-paper transition-opacity hover:opacity-80"
                    >
                        ×
                    </button>

                    <ProjectVisual visual={visual} height="h-[200px]" />

                    <div className="p-6 sm:p-8">
                        <StatusPill tone={status.tone}>{status.label}</StatusPill>
                        <h2 id={titleId} className="mb-2 mt-3 text-[2rem] font-bold">
                            {title}
                        </h2>
                        <p className="mb-4 text-[.9rem] text-ink-2">{meta}</p>
                        <p className="text-dim">{summary}</p>

                        {problem && (
                            <ModalBlock title={modal.problemTitle}>
                                <p className="text-dim">{problem}</p>
                            </ModalBlock>
                        )}

                        {solution && (
                            <ModalBlock title={modal.solutionTitle}>
                                <p className="text-dim">{solution}</p>
                            </ModalBlock>
                        )}

                        {features.length > 0 && (
                            <ModalBlock title={modal.featuresTitle}>
                                <ul className="grid gap-2 text-ink-2">
                                    {features.map((feature) => (
                                        <li key={feature} className="before:font-bold before:text-c1 before:content-['→_']">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ModalBlock>
                        )}

                        {outcomes.length > 0 && (
                            <ModalBlock title={modal.outcomesTitle}>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                                    {outcomes.map((outcome) => (
                                        <div key={outcome.label} className="rounded-[14px] border border-line bg-paper p-4">
                                            <b className="block bg-grad bg-clip-text font-display text-[1.8rem] font-bold text-transparent">
                                                {outcome.value}
                                            </b>
                                            <span className="text-[.9rem] text-dim">{outcome.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </ModalBlock>
                        )}

                        {stack.length > 0 && (
                            <ModalBlock title={modal.stackTitle}>
                                <div className="flex flex-wrap gap-2">
                                    {stack.map((item) => (
                                        <span key={item} className="rounded-full border border-line px-3 py-1 text-[.82rem] text-ink-2">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </ModalBlock>
                        )}

                        <div className="mt-8 flex flex-wrap gap-3">
                            {links.live && (
                                <Button variant="grad" size="sm" href={links.live} target="_blank" rel="noopener">
                                    {modal.liveLabel}
                                </Button>
                            )}
                            {links.repo && (
                                <Button variant="ghost" size="sm" href={links.repo} target="_blank" rel="noopener">
                                    {modal.repoLabel}
                                </Button>
                            )}
                            <Button variant="ghost" size="sm" href="#contact" onClick={onClose}>
                                {modal.discussLabel}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}