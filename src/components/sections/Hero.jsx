import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import { Container } from '../ui/Section';
import Portrait from './Portrait';
import { CONFIG, externalProps } from '../../config/site';
import { trustPoints } from '../../data/content';

export default function Hero() {
    return (
        <div className="relative overflow-hidden pb-20 pt-18 max-[760px]:pt-11">
            {/* Background blobs */}
            <div className="pointer-events-none absolute -left-30 -top-30 -z-10 h-105 w-105 animate-float rounded-full bg-c1 opacity-[.55] blur-[70px]" />
            <div className="pointer-events-none absolute -right-30 top-10 -z-10 h-95 w-95 animate-float rounded-full bg-c3 opacity-[.55] blur-[70px] [animation-delay:-5s]" />
            <div className="pointer-events-none absolute -bottom-30 left-[35%] -z-10 h-75 w-75 animate-float rounded-full bg-c2 opacity-[.55] blur-[70px] [animation-delay:-9s]" />

            <Container className="grid items-center gap-12 min-[901px]:grid-cols-[1.15fr_.85fr]">
                <div>
                    <Eyebrow live>Now taking on new business projects</Eyebrow>

                    <h1 className="mb-4.5 mt-5 text-[clamp(2.6rem,6.2vw,4.8rem)] font-bold">
                        Software that turns <span className="grad-text">leads</span> into{' '}
                        <span className="grad-text">customers.</span>
                    </h1>

                    <p className="max-w-[50ch] text-[1.15rem] text-ink-2">
                        TechGeek designs and builds websites, web systems, SaaS products and AI tools for businesses
                        that are losing time and money to scattered chats, spreadsheets and manual follow-up.
                    </p>

                    <div className="mt-7.5 flex flex-wrap gap-3">
                        <Button variant="grad" data-book {...externalProps(CONFIG.booking)}>
                            Book a free 20-min call →
                        </Button>
                        <Button variant="ghost" href="#work">
                            See my work
                        </Button>
                    </div>

                    <div className="mt-8.5 flex flex-wrap gap-4.5 text-[.9rem] text-dim">
                        {trustPoints.map((point) => (
                            <span key={point}>
                                <span className="mr-1 font-bold text-c5">✓</span>
                                {point}
                            </span>
                        ))}
                    </div>
                </div>

                <Portrait />
            </Container>
        </div>
    );
}