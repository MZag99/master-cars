import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeLeft: AnimationType = (element: HTMLElement, options: GSAPTweenVars = { duration: 0.5, ease: 'power3.out' }) => {
    gsap.fromTo(element,
        {
            opacity: 0,
            x: 20
        },
        {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom'
            },
            opacity: 1,
            x: 0,
            ...options
        }
    );
};