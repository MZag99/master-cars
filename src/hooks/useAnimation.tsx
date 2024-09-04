import type { RefObject } from 'react';

import gsap from 'gsap/dist/gsap';

import { animations } from '@/animations/all';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export type Animation = {
    name: keyof typeof animations;
    joined?: boolean;
    options?: GSAPTweenVars;
}

const useAnimation = (ref: RefObject<HTMLElement | HTMLElement[]>, animation: Animation, deps: unknown[] = []) => {

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const animCallback = animations[animation.name];
            const el = ref.current;

            const isArray = Array.isArray(el);

            if (isArray && !animation.joined) {
                el.forEach(el => {
                    animation && el && animCallback(el, animation.options ?? {});
                });
            } else {
                animation && el && animCallback(el, animation.options ?? {});
            }

        }, [ref]);

        return () => {
            ctx.revert();
        };
    }, [...deps]);

    return null;
};

export default useAnimation;