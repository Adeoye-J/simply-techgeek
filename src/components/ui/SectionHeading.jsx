import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-13 max-w-170 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="my-3.5 text-[clamp(2rem,4.4vw,3.2rem)] font-bold">{title}</h2>
      {description && <p className="text-[1.08rem] text-dim">{description}</p>}
    </Reveal>
  );
}