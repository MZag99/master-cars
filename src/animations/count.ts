import type { AnimationType } from '@/types/universal';

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const count: AnimationType = (element: HTMLElement | HTMLElement[]) => {
    if (Array.isArray(element)) return;

    const items = element.querySelectorAll('.js-number');

    gsap.from(items, {
        scrollTrigger: {
            trigger: element,
            start: 'top+=10% bottom'
        },
        textContent: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
        snap: { textContent: 1 },
        stagger: {
            each: 0.3,
            onUpdate: function () {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (this as any).targets()[0].innerHTML = (this as any).targets()[0].textContent;
            }
        }
    });
};