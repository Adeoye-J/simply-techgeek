const tones = {
    violet: 'bg-c1/15 text-c1',
    pink: 'bg-c3/15 text-[#E0467A]',
    mint: 'bg-c5/[.18] text-[#119669]',
};

export default function StatusPill({ tone = 'violet', children }) {
    return (
        <span
            className={`inline-block rounded-full px-2.5 py-1 text-[.76rem] font-bold ${tones[tone] ?? tones.violet}`}
        >
            {children}
        </span>
    );
}