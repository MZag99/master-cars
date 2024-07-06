import { gsap } from 'gsap';
import { flow, pipe } from 'fp-ts/lib/function';

import { useBrowserStoreActions } from '@/store/useBrowserStore';
import { useIsomorphicLayoutEffect as useLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

export type BreakpointName = 'desktop' | 'tablet' | 'phone';

const BREAKPOINTS = Object.freeze({
    desktop: '(min-width: 1024px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    phone: '(max-width: 767px)'
});

type BreakpointConfig = Record<BreakpointName, string>;

export default function useBrowser() {
    const { setBreakpoints, setIsTouch } = useBrowserStoreActions();

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        const onResize = () => {
            flow(detectTouchDevice, setIsTouch);
            pipe(BREAKPOINTS, detectBreakpoints, setBreakpoints);
        };

        // Initial detection
        onResize();

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [setBreakpoints, setIsTouch]);
}

function detectBreakpoints(config: BreakpointConfig): Record<BreakpointName, boolean> {
    const matchMedia = gsap.matchMedia();

    const breakpoints = Object.entries(config).reduce(
        (accumulator, [name, media]) => {
            matchMedia.add(media, () => {
                accumulator[name as BreakpointName] = true;
            });

            return accumulator;
        },
        {
            desktop: false,
            tablet: false,
            phone: false
        }
    );

    return breakpoints;
}

function detectTouchDevice() {
    if (typeof window === 'undefined') return false;

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
