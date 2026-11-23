import { CONFIG, externalProps } from '../../config/site';

// Channels are only rendered when they are configured.
const channels = [
    {
        show: !!CONFIG.booking,
        props: externalProps(CONFIG.booking),
        icon: '📅',
        iconClass: 'bg-c1',
        title: 'Book a 20-min call',
        description: 'Pick a time that works for you',
    },
    {
        show: !!CONFIG.whatsapp,
        props: externalProps(CONFIG.whatsapp),
        icon: 'W',
        iconClass: 'bg-[#25D366]',
        title: 'WhatsApp',
        description: 'Quick questions, fast replies',
    },
    {
        show: !!CONFIG.email,
        props: { href: `mailto:${CONFIG.email}` },
        icon: '@',
        iconClass: 'bg-c3',
        title: 'Email',
        description: 'For detailed briefs and files',
    },
    {
        show: !!CONFIG.social.linkedin,
        props: externalProps(CONFIG.social.linkedin, '#'),
        icon: 'in',
        iconClass: 'bg-[#0A66C2]',
        title: 'LinkedIn',
        description: 'Connect and follow the build',
    },
    {
        show: !!CONFIG.social.youtube,
        props: externalProps(CONFIG.social.youtube, '#'),
        icon: '▶',
        iconClass: 'bg-[#FF0000]',
        title: 'YouTube',
        description: 'Tech, AI and build logs',
    },
].filter((channel) => channel.show);

export default function ContactChannels() {
    return (
        <div className="mt-6 grid gap-3">
            {channels.map((channel) => (
                <a
                    key={channel.title}
                    {...channel.props}
                    className="flex items-center gap-3.5 rounded-[14px] border border-line bg-panel px-4 py-3.5 no-underline transition-[transform,border-color] duration-200 hover:translate-x-1.5 hover:border-c1"
                >
                    <span
                        className={`grid h-10 w-10 flex-none place-items-center rounded-[11px] font-bold text-white ${channel.iconClass}`}
                    >
                        {channel.icon}
                    </span>
                    <div>
                        <strong className="block font-display">{channel.title}</strong>
                        <small className="text-dim">{channel.description}</small>
                    </div>
                </a>
            ))}
        </div>
    );
}