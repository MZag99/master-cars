import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const parallax: AnimationType = (element, options = { duration: 0.5, ease: 'power3.out' }) => {

    const isArray = Array.isArray(element);
    const elPos = isArray ? element[0].getBoundingClientRect() : element.getBoundingClientRect();
    const topPos = elPos.top + document.documentElement.scrollTop;

    const start = topPos > window.innerHeight ? 'top bottom' : `top ${topPos}`;

    ((isArray && element.length) || (!isArray && element)) && gsap.fromTo(element,
        {
            yPercent: -10
        },
        {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start
            },
            ease: 'none',
            yPercent: 10,
            ...options
        }
    );
};