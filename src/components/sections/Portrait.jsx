import { CONFIG } from '../../config/site';

export default function Portrait() {
    return (
        <div className="relative w-full max-w-95 justify-self-center max-[900px]:order-first max-[900px]:max-w-[320px]">
            <div className="relative aspect-4/5 animate-tilt rounded-[28px] bg-grad p-1">
                <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-3xl bg-panel">
                    {CONFIG.headshot ? (
                        <img
                            src={CONFIG.headshot}
                            alt="Jeremiah Bankole, founder of TechGeek"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div
                            aria-label="Headshot placeholder"
                            className="grad-text font-display text-[5rem] font-bold"
                        >
                            JB
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute -right-3 top-6 animate-bob-reverse rounded-2xl bg-ink px-3.5 py-2.5 text-[.85rem] text-paper max-[900px]:right-2">
                <b className="block font-display text-[1.2rem]">Built in public</b>
                Real products, real process
            </div>

            <div className="absolute bottom-7 -left-3.5 flex animate-bob items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 shadow-[0_20px_40px_-20px_rgba(11,16,32,.35)] max-[900px]:left-2">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#0A66C2] font-display font-bold text-white" aria-hidden="true">
                    in
                </span>
                <div>
                    <strong className="block font-display text-base">Jeremiah Bankole</strong>
                    <small className="text-[.82rem] text-dim">Founder, TechGeek</small>
                </div>
            </div>
        </div>
    );
}