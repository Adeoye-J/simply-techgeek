import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import { CONFIG, externalProps } from '../../config/site';

export default function CtaBand() {
    return (
        <Section topless>
            <Container>
                <Reveal className="relative overflow-hidden rounded-[28px] bg-ghost px-10 py-14 text-center text-white max-[760px]:px-6 max-[760px]:py-10">
                    <div className="pointer-events-none absolute inset-[-40%] animate-spin-slow bg-[radial-gradient(circle,rgba(255,255,255,.18)_0,transparent_60%)]" />

                    <div className="relative">
                        <h2 className="mb-3 text-[clamp(2rem,4.4vw,3.1rem)] font-bold">Ready to <span className="grad-text">stop losing leads?</span></h2>
                        <p className="mx-auto mb-6.5 max-w-[56ch] text-[1.08rem] opacity-90">
                            Book a free 20-minute call. Tell me what’s broken, and I’ll tell you honestly whether software can
                            fix it.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button variant="grad" data-book {...externalProps(CONFIG.booking)}>
                                Book a free call
                            </Button>
                            <Button variant="outline" href="#contact">
                                Send an enquiry
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}