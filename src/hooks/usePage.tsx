import { gsap } from 'gsap';
import { useEffect } from 'react';

import { useIsTouch } from '@/store/useBrowserStore';
import { useGlobalStoreActions } from '@/store/useGlobalStore';

export default function usePage() {
    const isTouch = useIsTouch();
    const { setIsPageLoaded } = useGlobalStoreActions();

    /**
     *  Set isPageLoaded to true when initial route is loaded
     *  This only runs on mount.
     */
    useEffect(() => {
        setIsPageLoaded(true);

        if (typeof window !== 'undefined') {
            document.body.classList.add('is-loaded');
            !isTouch && document.body.classList.add('no-touchevents');
        }
    }, [setIsPageLoaded, isTouch]);

    /**
     *  Scroll to top of the page when page is loaded
     */
    useEffect(() => {
        const url = new URL(location.href);

        if (url.hash) {
            const element = document.querySelector(url.hash);

            element &&
                gsap.to(window, {
                    scrollTo: {
                        y: element,
                        x: 0
                    },
                    duration: 0
                });
        }
    }, []);

}
