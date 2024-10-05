import type { TextProps } from '@/components/organisms/Text/Text';

/**
 * DO UZUPEŁNIENIA! Mozna skorzystać z generatora online na stronie cyberfolks.pl
 */
export const CMS = {
    PROCESS_TEXT_MODULE: {
        heading: {
            title: 'Polityka prywatności',
            subtitle: 'Jak zarządzamy danymi osobowymi naszych klientów'
        },
        items: [
            {
                type: 'text',
                text: '<strong>1. Informacje ogólne</strong>'
            },
            {
                type: 'text',
                text: '<br/> 1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: Nazwa strony<br/>2.Operatorem serwisu oraz Administratorem danych osobowych jest: Michał Zagojski Pana Balcera, 20-631, Lublin<br/>3. Adres kontaktowy poczty elektronicznej operatora: zagojski.michal.99@gmail.com'
            }
        ]
    } as TextProps
};