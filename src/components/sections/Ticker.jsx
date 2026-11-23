import { tickerItems } from '../../data/content';

export default function Ticker() {
    // Duplicated so the scroll loop is seamless.
    const items = [...tickerItems, ...tickerItems];

    return (
        <div aria-hidden="true" className="overflow-hidden border-y border-line bg-panel py-4">
            <div className="flex w-max animate-scroll gap-10.5 font-display text-[1.05rem] font-semibold text-dim">
                {items.map((item, i) => (
                    <span key={`${item}-${i}`} className="inline-flex items-center gap-10.5 whitespace-nowrap">
                        {item}
                        <span className="text-c3">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}