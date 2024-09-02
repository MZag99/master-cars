export type Currency = 'pln' | 'dollar';

export type CurrencyObjectRaw = {
    code: string;
    currency: string;
    rates: [
        {
            no: string;
            effectiveDate: string;
            mid: number;
        }
    ];
    table: string;
}

export type CurrencyObject = {
    code: string;
    rate: number;
}