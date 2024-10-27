import { useMemo } from 'react';

import { useBreakpoints } from '@/store/useBrowserStore';

/**
 * Returns a font size based on the current breakpoint.
 * Convenient when using different font sizes for different devices.
 * 
 * [0] - desktop
 * [1] - mobile
 * [2] - tablet
 */

const useFontSize = (fontSizes: [number, number] | [number, number, number]): string => {
    const breakpoint = useBreakpoints();

    const fontSize = useMemo(() => {
        switch (true) {
        case breakpoint?.desktop:
            return fontSizes[0];
        case breakpoint?.phone:
            return fontSizes[1];
        case breakpoint?.tablet:
            return fontSizes[2] ?? fontSizes[1];
        }
    }, [breakpoint, fontSizes]);

    return `font-size-${fontSize}`;
};

export default useFontSize;