import { gsap } from 'gsap';
import { useEffect } from 'react';

import { useIsTouch } from '@/store/useBrowserStore';
import { useGlobalStoreActions, useLightbox } from '@/store/useGlobalStore';

export default function usePage() {

    const isTouch = useIsTouch();
    const lightbox = useLightbox();
    const { setIsPageLoaded } = useGlobalStoreActions();

    /**
     *  Set isPageLoaded to true when initial route is loaded
     *  This only runs on mount.
     */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            !isTouch && document.body.classList.add('no-touchevents');
        }
    }, [isTouch]);

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


    useEffect(() => {
        const LOADED_DELAY = 1500;

        setTimeout(() => {
            setIsPageLoaded(true);
            document.body.classList.add('is-loaded');
        }, LOADED_DELAY);

        return () => {
            setIsPageLoaded(false);
            document.body.classList.remove('is-loaded');
        };
    }, [setIsPageLoaded]);


    useEffect(() => {
        document.body.classList.toggle('is-scrolling-disabled', !!lightbox);
    }, [lightbox]);
}
