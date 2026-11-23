import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import ContactChannels from '../contact/ContactChannels';
import EnquiryForm from '../contact/EnquiryForm';

export default function Contact() {
    return (
        <Section id="contact">
            <Container className="grid items-start gap-10 min-[901px]:grid-cols-[1fr_1.1fr]">
                <Reveal>
                    <Eyebrow>Let’s talk</Eyebrow>
                    <h2 className="mb-3.5 mt-3.5 text-[clamp(2rem,4vw,2.9rem)] font-bold">
                        Start with a <span className="grad-text">conversation.</span>
                    </h2>
                    <p className="text-dim">Pick whichever channel suits you. Replies usually land within one working day.</p>
                    <ContactChannels />
                </Reveal>

                <EnquiryForm />
            </Container>
        </Section>
    );
}