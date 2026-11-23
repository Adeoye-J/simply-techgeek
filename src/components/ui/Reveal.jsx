import { useEffect, useRef, useState } from 'react';

/**
 * Fades and lifts its children into view the first time they scroll into view.
 * Respects prefers-reduced-motion via Tailwind's motion-reduce variants.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (!('IntersectionObserver' in window)) {
            setVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        // Observer above is the same as
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         const entry = entries[0]
        //         if (entry.isIntersecting) {
        //             setVisible(true);
        //             observer.disconnect();
        //         }
        //     },
        //     { threshold: 0.15 },
        // );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const state = visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0';

    return (
        <Tag
            ref={ref}
            className={`transition-[opacity,transform] duration-800 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${state} ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
}