import type { CurrencyObject } from '@/types/universal';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export type ControlsStore = {
    currencies: CurrencyObject[] | null;
    actions: {
        setCurrencies: (currencies: CurrencyObject[]) => void;
    }
}

export const useControlsStore = create<ControlsStore>()(
    devtools(
        set => ({
            currencies: null,
            actions: {
                setCurrencies: (currencies: CurrencyObject[]) => set({ currencies })
            }
        }),
        { name: 'Controls Store' }
    )
);

export const useLoadedCurrencies = () => useControlsStore(state => state.currencies);
export const useControlsStoreActions = () => useControlsStore(state => state.actions);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Controls Store', useControlsStore);
}
