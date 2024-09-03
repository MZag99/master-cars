import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { Lightbox } from '@/types/universal';

/**
 * Global Store:
 * - isPageLoaded: this gets set to true on initial mount inside withPage HOC
 * - isMapLoaded: this should be set to true when the map is loaded (for data-less)
 *   or when the map data is loaded (for maps with data), universally this should
 *   work with the 'idle' event, all Intro, Curtain etc logic is based on this
 *   to avoid other unnecessary flags
 */
export type GlobalStore = {
    isPageLoaded: boolean;
    isMenuOpen: boolean;
    lightbox: Lightbox | null;
    actions: {
        setIsPageLoaded: (isPageLoaded: boolean) => void;
        setIsMenuOpen: (isMenuOpen: boolean) => void;
        setLightbox: (lightbox: Lightbox | null) => void;
    }
}

export const useGlobalStore = create<GlobalStore>()(
    devtools(
        set => ({
            isPageLoaded: false,
            isMenuOpen: false,
            lightbox: null,
            actions: {
                setIsPageLoaded: isPageLoaded => set(() => ({ isPageLoaded })),
                setIsMenuOpen: isMenuOpen => set(() => ({ isMenuOpen })),
                setLightbox: lightbox => set(() => ({ lightbox }))
            }
        }),
        { name: 'Global Store' }
    )
);

export const useIsPageLoaded = () => useGlobalStore(state => state.isPageLoaded);
export const useIsMenuOpen = () => useGlobalStore(state => state.isMenuOpen);
export const useLightbox = () => useGlobalStore(state => state.lightbox);
export const useGlobalStoreActions = () => useGlobalStore(state => state.actions);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Global Store', useGlobalStore);
}
