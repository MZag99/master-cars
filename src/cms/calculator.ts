import type { HeadingType } from '@/components/molecules/Heading/Heading';
import type { CalculatorFragmentProps, CalculatorRowProps } from '@/components/molecules/CalculatorFragment/CalculatorFragment';

import { SOCIAL_LINKS } from '@/static/constants';

export const CMS = {

    
    CALCULATOR_MAIN: {
        HEADING: {
            size: 'medium',
            title: 'Oblicz cenę<br/>swojego<br/>zamówienia',
            subtitle: 'Wprowadź informacje dotyczące interesującego Cię auta i sprawdź w jakiej cenie je u nas dostaniesz.'
        } as HeadingType,

        /**
         * typy inputów: 'text', 'value', 'dropdown', 'checkbox', 'no-choice', 'relative'
         */
        BASE_CALCULATOR_ITEMS: [
            {
                label: 'Planowana cena pojazdu (USD)',
                input: {
                    type: 'text',
                    props: {
                        currency: 'USD',
                        placeholder: '0'
                    }
                }
            },
            {
                label: 'Koszty aukcyjne (około)',
                input: {
                    type: 'relative-stepped',
                    props: {
                        steps: [
                            {
                                minValue: 1,
                                maxValue: 1000,
                                stepValue: 105
                            },
                            {
                                minValue: 1001,
                                maxValue: 2000,
                                stepValue: 150
                            },
                            {
                                minValue: 2001,
                                maxValue: 'infinity',
                                isRelative: true,
                                stepValue: 0.5
                            }
                        ],
                        currency: 'USD'
                    }
                }
            },
            {
                label: 'Stan (region), w którym znajduje się Twój pojazd',
                input: {
                    type: 'dropdown',
                    props: {
                        currency: 'USD',
                        options: [
                            { name: 'Alaska (Al)', value: '3000' },
                            { name: 'Kalifornia (CA)', value: '1000' },
                            { name: 'Kalifornia (CA)', value: '1000' }
                        ]
                    }
                }
            },
            {
                label: 'Broker',
                input: {
                    type: 'hidden',
                    props: {
                        value: 300,
                        currency: 'USD'
                    }
                }
            },
            {
                label: 'Koszty transportu do portu w Europie',
                noSetValue: true,
                input: {
                    type: 'relative',
                    props: {
                        relativeRow: 2,
                        relativeMultiplier: 1,
                        currency: 'USD'
                    }
                }
            }
        ] as CalculatorFragmentProps['items'],


        BASE_SUMMARY_ROW: {
            label: 'Cena bez odprawy celnej',
            caption: 'Tą kwotę należy przelać do Stanów Zjednoczonych maksymalnie do 3 dni od wygrania aukcji. Ceny transportów lądowych oraz fracht morski dotyczy pojazdów osobowych. Przy samochodach typu Pick-Up lub SUV ceny mogą ulec zmianie.',
            input: {
                type: 'value',
                props: {
                    value: 0,
                    currency: 'USD'
                }
            },
            variant: 'accent',
            className: 'radius-34'
        } as CalculatorRowProps,


        SEPARATOR_TEXT: 'Odprawa celna',


        TOLL_CALCULATOR_ITEMS: [
            {
                label: 'Cło',
                input: {
                    type: 'relative',
                    props: {
                        relativeRow: 0,
                        relativeMultiplier: 0.1,
                        currency: 'EUR'
                    }
                }
            },
            {
                label: 'Vat (19%)',
                input: {
                    type: 'relative',
                    props: {
                        relativeRow: 0,
                        relativeMultiplier: 0.19,
                        currency: 'EUR'
                    }
                }
            },
            {
                label: 'Agencja celna i rozładunek',
                input: {
                    type: 'value',
                    props: {
                        currency: 'EUR',
                        value: 450
                    }
                }
            }
        ] as CalculatorFragmentProps['items'],


        TOLL_SUMMARY_ROW: {
            label: 'Koszt odprawy celnej',
            caption: 'Gdy samochód dopłynie do Europy i zostanie rozładowany oraz oclony tą kwotę wpłacamy na podstawie faktury do Agencji Celnej.',
            input: {
                type: 'value',
                props: {
                    value: 0,
                    currency: 'USD'
                }
            },
            variant: 'accent',
            className: 'radius-34'
        } as CalculatorRowProps
    },


    CALCULATOR_BONUS: {

        SEPARATOR_TEXT: 'Usługi dodatkowe',


        BONUS_CALCULATOR_ITEMS: [
            {
                label: 'Transport pod dom',
                caption: '(Koszt transportu ustalany jest indywidualnie)',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 2100,
                        label: 'od 2100',
                        currency: 'PLN'
                    }
                }
            },
            {
                label: 'Tłumaczenie dokumentów',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 400,
                        currency: 'PLN'
                    }
                }
            },
            {
                label: 'Opinia rzeczoznawcy',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 300,
                        currency: 'PLN'
                    }
                }
            },
            {
                label: 'Zgłoszenie akcyzy',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 500,
                        currency: 'PLN'
                    }
                }
            },
            {
                label: 'Prowizja (netto)',
                input: {
                    type: 'no-choice',
                    props: {
                        value: 3000,
                        currency: 'PLN'
                    }
                }
            }
        ] as CalculatorFragmentProps['items'],


        SUMMARY: 'Podsumowanie',


        SUMMARY_ROW: {
            label: 'Łączny koszt',
            input: {
                type: 'value',
                props: {
                    value: 0,
                    currency: 'PLN'
                }
            },
            variant: 'outline'
        } as CalculatorRowProps
    },


    CURRENCY_WIDGET_COPY: 'Kursy walut',


    UNIVERSAL: {
        DOCUMENTS_TITLE: 'Dokumenty do pobrania',
        DOCUMENTS_ITEMS: [
            { name: 'Umowa zlecenia sprowadzenia samochodu', downloadName: 'Master Cars - umowa zlecenia sprowadzenia samochodu', path: '/pdf/sample.pdf' },
            { name: 'Procedura zakupu samochodu z USA', path: '/pdf/sample.pdf' }
        ],

        SOCIALS: {
            facebook: SOCIAL_LINKS.FACEBOOK,
            instagram: SOCIAL_LINKS.INSTAGRAM,
            whatsapp: SOCIAL_LINKS.WHATSAPP
        }
    }
};
