import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import { CONFIG, externalProps } from '../../config/site';

export default function About() {
    return (
        <Section id="about">
            <Container className="grid items-center gap-12 min-[901px]:grid-cols-2">
                <Reveal>
                    <Eyebrow>About the founder</Eyebrow>
                    <h2 className="mb-4 mt-3.5 text-[clamp(2rem,4vw,2.9rem)] font-bold">
                        Hi, I’m <span className="grad-text">Jeremiah.</span>
                    </h2>
                    <p className="mb-3.5 text-[1.02rem] text-dim">
                        I’m a software engineer building TechGeek to help businesses stop losing customers to messy
                        systems. I write the code myself, so you talk to the person who builds your product.
                    </p>
                    <p className="mb-3.5 text-[1.02rem] text-dim">
                        I also document the whole journey publicly: what I ship, what breaks, and what I learn about AI,
                        software and building a business.
                    </p>
                    <div className="mt-7.5 flex flex-wrap gap-3">
                        <Button variant="ghost" size="sm" {...externalProps(CONFIG.social.linkedin, '#')}>
                            Connect on LinkedIn →
                        </Button>
                        <Button variant="ghost" size="sm" href="#contact">
                            Work with me
                        </Button>
                    </div>
                </Reveal>

                <Reveal className="relative overflow-hidden rounded-[22px] bg-line p-8.5 text-paper">
                    <div className="pointer-events-none absolute -bottom-27.5 -right-22.5 h-65 w-65 rounded-full bg-grad opacity-35 blur-[20px]" />
                    <p className="relative mb-4.5 font-display text-white text-[1.35rem] leading-[1.35]">
                        “Clients don’t need more software. They need the right system that their team will actually use.”
                    </p>
                    <small className="relative grad-text">Jeremiah Bankole · Founder, TechGeek</small>
                </Reveal>
            </Container>
        </Section>
    );
}