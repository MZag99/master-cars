import type { ButtonProps } from '@/components/atoms/Button/Button';
import type { ShowcaseItem } from '@/components/molecules/Showcase/Showcase';

export type Currency = 'PLN' | 'USD' | 'EUR';

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

export type Lightbox = ShowcaseItem;

export type ReceiverData = {
    serviceId: string;
    templateId: string;
    userId: string;
};

export type AnimationType = (el: HTMLElement | HTMLElement[], options?: GSAPTweenVars) => void;

export type NavigationItem = {
    button?: Omit<ButtonProps, 'children'>;
    link: string;
    name: string;
}