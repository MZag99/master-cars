import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeUp: AnimationType = (element: HTMLElement | HTMLElement[], options: GSAPTweenVars = { duration: 0.5, ease: 'power3.out' }) => {

    const isArray = Array.isArray(element);

    ((isArray && element.length) || (!isArray && element)) && gsap.fromTo(element,
        {
            opacity: 0,
            y: 20
        },
        {
            scrollTrigger: {
                trigger: element,
                start: 'top+=10% bottom'
            },
            opacity: 0,
            y: 20,
            ...options
        }
    );
};