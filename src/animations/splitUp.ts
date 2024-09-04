import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export const splitUp: AnimationType = (element: HTMLElement | HTMLElement[], options: GSAPTweenVars = { duration: 0.5, stagger: 0.3, ease: 'power3.out' }) => {
    const splitText = new SplitText(element, { type: 'words, lines', linesClass: 'lines-overflow-wrapper'  });
    const words = splitText.words || [];

    gsap.set(element, { opacity: 1 });

    words && gsap.fromTo(
        words,
        {
            y: '110%'
        },
        {
            scrollTrigger: {
                trigger: element,
                start: 'top+=10% bottom'
            },
            y: 0,
            ...options
        });
};