import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { processSteps } from '../../data/content';

export default function Process() {
    return (
        <Section id="process" className="border-y border-line bg-panel">
            <Container>
                <SectionHeading
                    eyebrow="How it works"
                    title={
                        <>
                            From problem to <span className="grad-text">launch</span> in four steps
                        </>
                    }
                />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4.5">
                    {processSteps.map((step, i) => (
                        <Reveal key={step.title} className="rounded-2xl border border-line bg-panel p-6">
                            <div className="mb-2.5 bg-grad bg-clip-text font-display text-[2rem] font-bold text-transparent">
                                0{i + 1}
                            </div>
                            <h3 className="mb-2 text-[1.2rem]">{step.title}</h3>
                            <p className="text-[.95rem] text-dim">{step.description}</p>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
}