import type { TextProps } from '@/components/organisms/Text/Text';


export const CMS = {
    PROCESS_TEXT_MODULE: {
        heading: {
            title: 'Śledź swoje<br/>zamówienie',
            subtitle: 'Sprawdź gdzie aktualnie znajduje się Twoja przesyłka.'
        },
        items: [
            {
                type: 'text',
                text: 'Aby śledzić swoje zamówienie, wejdź na stronę, dostawcy przejdź do zakładki “Tracking” i wpisz otrzymany od nas kod.'
            }
        ]
    } as TextProps,

    VENDORS_MODULE: {
        items: [
            {
                logo: 'searates',
                url: 'https://www.searates.com/'
            }
        ]
    }
};