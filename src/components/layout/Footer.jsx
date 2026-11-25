import { Container } from '../ui/Section';
import { CONFIG, externalProps } from '../../config/site';

const links = [
    { href: '/#services', label: 'Services' },
    // { href: '/#work', label: 'Work' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
];

const linkClass = 'no-underline hover:text-ink transition-colors duration-200';

export default function Footer() {
    return (
        <footer className="border-t border-line py-10 pb-12 text-[.92rem] text-dim">
            <Container className="flex flex-wrap items-center justify-between gap-4">
                <span>© 2026 TechGeek · Built by Jeremiah Bankole</span>
                <nav className="flex flex-wrap gap-4.5">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className={linkClass}>
                            {link.label}
                        </a>
                    ))}
                    {CONFIG.social.linkedin && (
                        <a {...externalProps(CONFIG.social.linkedin, '#')} className={linkClass}>
                            LinkedIn
                        </a>
                    )}
                    {CONFIG.social.youtube && (
                        <a {...externalProps(CONFIG.social.youtube, '#')} className={linkClass}>
                            YouTube
                        </a>
                    )}
                </nav>
            </Container>
        </footer>
    );
}