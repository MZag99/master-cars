import type { CurrencyObjectRaw } from '@/types/universal';

import { useState, useEffect } from 'react';

const useCurrencies = (codes: string[]) => {

    const [currencies, setCurrencies] = useState<{ code: string, rate: number }[]>([]);

    const fetchCurrency = async (currencyCode: string) => {
        try {
            const response = await fetch(process.env.CURRENCIES_API_URL + currencyCode + '?format=json');
            if (!response.ok) {
                throw new Error('Failed to fetch currencies');
            }

            const data: CurrencyObjectRaw = await response.json();

            setCurrencies([...currencies, { code: data.code, rate: data.rates[0].mid }]);

        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    useEffect(() => {
        codes.forEach(code => fetchCurrency(code));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return currencies;
};

export default useCurrencies;