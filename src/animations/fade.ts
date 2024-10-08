import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fade: AnimationType = (element: HTMLElement | HTMLElement[], options: GSAPTweenVars = { duration: 0.5, ease: 'power3.out' }) => {

    const isArray = Array.isArray(element);

    ((isArray && element.length) || (!isArray && element)) && gsap.fromTo(element,
        {
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: element,
                start: 'top+=10% bottom'
            },
            opacity: 1,
            ...options
        }
    );
};