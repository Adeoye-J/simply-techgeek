import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import { stats } from '../../data/content';

export default function Stats() {
    return (
        <Section topless>
            <Container className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4.5">
                {stats.map((stat) => (
                    <Reveal key={stat.value} className="rounded-2xl border border-line bg-panel p-6.5 text-left">
                        <b className="block bg-grad bg-clip-text font-display text-[2.4rem] font-bold text-transparent">
                            {stat.value}
                        </b>
                        <span className="text-[.95rem] text-dim">{stat.label}</span>
                    </Reveal>
                ))}
            </Container>
        </Section>
    );
}