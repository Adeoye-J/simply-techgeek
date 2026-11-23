import Reveal from '../ui/Reveal';
import Section, { Container } from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { CONFIG, externalProps } from '../../config/site';
import { services } from '../../data/content';

function ServiceCard({ icon, color, title, description, items, cta }) {
    return (
        <Reveal className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-30px_rgba(109,93,252,.45)]">
                <div className="pointer-events-none absolute inset-0 bg-grad opacity-0 transition-opacity duration-300 group-hover:opacity-[.07]" />

                <div className="relative">
                    <div className={`mb-4.5 grid h-13 w-13 place-items-center rounded-[14px] text-2xl text-white ${color}`}>
                        {icon}
                    </div>
                    <h3 className="mb-2.5 text-[1.35rem]">{title}</h3>
                    <p className="mb-4 text-[.98rem] text-dim">{description}</p>
                    <ul className="mb-4.5 grid gap-1.75 text-[.92rem] text-ink-2">
                        {items.map((item) => (
                            <li key={item} className="before:mr-0 before:font-bold before:text-c1 before:content-['→_']">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        {...externalProps(CONFIG.booking)}
                        data-book
                        className="font-semibold text-c1 no-underline hover:underline"
                    >
                        {cta} →
                    </a>
                </div>
            </article>
        </Reveal>
    );
}

export default function Services() {
    return (
        <Section id="services">
            <Container>
                <SectionHeading
                    eyebrow="What I build"
                    title={
                        <>
                            Systems that work <span className="grad-text">as hard as you do</span>
                        </>
                    }
                    description="Pick the level that matches where your business is today. Every project starts with a conversation, not a sales pitch."
                />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}