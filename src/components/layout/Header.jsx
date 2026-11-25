import { useState } from 'react';
import Button from '../ui/Button';
import { Container } from '../ui/Section';
import { CONFIG, externalProps } from '../../config/site';

const links = [
    { href: '/#services', label: 'Services' },
    // { href: '/#work', label: 'Work' },
    { href: '/#process', label: 'Process' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    const navClass = [
        'hidden min-[761px]:flex items-center gap-6 text-[.95rem]',
        open &&
        'max-[760px]:flex max-[760px]:flex-col max-[760px]:absolute max-[760px]:top-[66px] max-[760px]:left-0 max-[760px]:right-0 max-[760px]:items-stretch max-[760px]:gap-4 max-[760px]:border-b max-[760px]:border-line max-[760px]:bg-paper max-[760px]:px-[22px] max-[760px]:py-5',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <header className="sticky top-[env(safe-area-inset-top,0px)] z-15 border-b border-line bg-paper/85 backdrop-blur-md backdrop-saturate-[1.4]">
            <Container className="flex h-16.5 items-center justify-between gap-4">
                {/* <a
                    href="#top"
                    aria-label="TechGeek home"
                    className="flex items-center gap-2.5 font-display text-[1.3rem] font-bold no-underline"
                >
                    <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-grad text-[.95rem] font-bold text-white">
                        TG
                    </span>
                    TechGeek
                </a> */}
                <a
                    href="/#top"
                    aria-label="TechGeek home"
                    className="flex items-center gap-2.5 font-display text-[1.3rem] font-bold no-underline"
                >
                    <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-grad text-[.95rem] font-bold text-white">
                        <img
                            src={CONFIG.logo}
                            alt="TechGeek Logo"
                            className="h-full w-full object-cover"
                        />
                    </span>
                    <span>Tech{""}<span className="grad-text">Geek</span></span>

                </a>

                <nav id="navLinks" aria-label="Primary" className={navClass}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className="text-dim no-underline transition-colors duration-200 hover:text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button size="sm" data-book onClick={close} {...externalProps(CONFIG.booking)}>
                        Book a call
                    </Button>
                </nav>

                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls="navLinks"
                    onClick={() => setOpen((o) => !o)}
                    className="hidden cursor-pointer rounded-[10px] border border-line bg-transparent px-3 py-2 font-body text-ink max-[760px]:inline-block"
                >
                    Menu
                </button>
            </Container>
        </header>
    );
}