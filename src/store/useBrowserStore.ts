import type { BreakpointName } from '@/hooks/useBrowser';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export type Breakpoints = Record<BreakpointName, boolean> | undefined;

type BrowserStore = {
    breakpoints: Breakpoints;
    isTouch: boolean;
    splits: SplitText[];
    actions: {
        setBreakpoints: (breakpoint: Breakpoints) => void;
        setIsTouch: (isTouch: boolean) => void;
        setSplits: (splits: SplitText[]) => void;
        resetSplits: () => void;
    };
};

const useBrowserStore = create<BrowserStore>()(
    devtools(
        (set, get) => ({
            breakpoints: undefined,
            isTouch: false,
            splits: [],
            actions: {
                setBreakpoints: breakpoints => set(() => ({ breakpoints })),
                setIsTouch: isTouch => set(() => ({ isTouch })),
                setSplits: newSplits => {
                    const splits = get().splits;

                    set(() => ({
                        splits: [...splits, ...newSplits]
                    }));
                },
                resetSplits: () => set({ splits: [] })
            }
        }),
        {
            name: 'BrowserStore'
        }
    )
);

export const useBreakpoints = () => useBrowserStore(state => state.breakpoints);
export const useIsTouch = () => useBrowserStore(state => state.isTouch);
export const useSplits = () => useBrowserStore(state => state.splits);
export const useBrowserStoreActions = () => useBrowserStore(state => state.actions);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('BrowserStore', useBrowserStore);
}
