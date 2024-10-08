import type { Currency, CurrencyObject, CurrencyObjectRaw } from '@/types/universal';

import { useState, useEffect, useCallback, useRef } from 'react';

const useCurrencies = (codes: Currency[]) => {

    const [currencies, setCurrencies] = useState<{ code: string, rate: number }[]>([]);
    const loadedRef = useRef<CurrencyObject[]>([]);

    const fetchCurrency = useCallback(async (currencyCode: string) => {
        try {
            const response = await fetch(process.env.CURRENCIES_API_URL + currencyCode + '?format=json');
            if (!response.ok) {
                throw new Error('Failed to fetch currencies');
            }

            const data: CurrencyObjectRaw = await response.json();
            const currency: CurrencyObject = { code: data.code, rate: data.rates[0].mid };

            !loadedRef.current.find(item => item.code === currency.code) && loadedRef.current.push(currency);

            setCurrencies([...loadedRef.current]);

        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }, [loadedRef, setCurrencies]);

    useEffect(() => {
        codes.forEach(code => fetchCurrency(code));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return currencies;
};

export default useCurrencies;