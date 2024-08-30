import type { HeadingType } from '@/components/molecules/Heading/Heading';
import type { CalculatorFragmentProps, CalculatorRowProps } from '@/components/molecules/CalculatorFragment/CalculatorFragment';

export const CMS = {

    
    CALCULATOR_MAIN: {
        HEADING: {
            size: 'medium',
            title: 'Oblicz cenę<br/>swojego<br/>zamówienia',
            subtitle: 'Wprowadź informacje dotyczące interesującego Cię auta i sprawdź w jakiej cenie je u nas dostaniesz.'
        } as HeadingType,


        BASE_CALCULATOR_ITEMS: [
            {
                label: 'Planowana cena pojazdu (USD)',
                input: {
                    type: 'text',
                    props: {
                        currency: '$',
                        placeholder: '0'
                    }
                }
            },
            {
                label: 'Koszty aukcyjne (około)',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Stan (region), w którym znajduje się Twój pojazd',
                input: {
                    type: 'dropdown',
                    props: {
                        currency: '$',
                        options: [
                            { name: 'Kalifornia (CA)', value: '1000' },
                            { name: 'Kalifornia (CA)', value: '1000' },
                            { name: 'Kalifornia (CA)', value: '1000' }
                        ]
                    }
                }
            },
            {
                label: 'Koszty transportu do portu w USA',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Frach morski do Europy',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Broker',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
        ] as CalculatorFragmentProps['items'],


        BASE_SUMMARY_ROW: {
            label: 'Cena bez odprawy celnej',
            caption: 'Tą kwotę należy przelać do Stanów Zjednoczonych maksymalnie do 3 dni od wygrania aukcji. Ceny transportów lądowych oraz fracht morski dotyczy pojazdów osobowych. Przy samochodach typu Pick-Up lub SUV ceny mogą ulec zmianie.',
            input: {
                type: 'value',
                props: {
                    value: 0,
                    currency: 'dollar'
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
                    type: 'text',
                    props: {
                        currency: '$',
                        placeholder: '0'
                    }
                }
            },
            {
                label: 'Vat (19%)',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Stan (region), w którym znajduje się Twój pojazd',
                input: {
                    type: 'dropdown',
                    props: {
                        options: [
                            { name: 'Kalifornia (CA)', value: '1000' },
                            { name: 'Kalifornia (CA)', value: '1000' },
                            { name: 'Kalifornia (CA)', value: '1000' }
                        ]
                    }
                }
            },
            {
                label: 'Koszty transportu do portu w USA',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Frach morski do Europy',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
                    }
                }
            },
            {
                label: 'Broker',
                input: {
                    type: 'value',
                    props: {
                        value: 936,
                        currency: 'dollar'
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
                    currency: 'dollar'
                }
            },
            variant: 'accent',
            className: 'radius-34'
        } as CalculatorRowProps
    },


    CALCULATOR_BONUS: {
        HEADING: {
            size: 'small',
            title: 'Skontaktuj się z nami w celu<br/>otrzymania szczegółowej<br/>wyceny!',
            button: {
                variant: 'accent',
                children: 'Kontakt',
                icon: 'phone'
            }
        } as HeadingType,


        SEPARATOR_TEXT: 'Usługi dodatkowe',


        BONUS_CALCULATOR_ITEMS: [
            {
                label: 'Transport pod dom',
                caption: '(W zależności od wielkości i stanu samochodu)',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 3000,
                        currency: 'pln'
                    }
                }
            },
            {
                label: 'Tłumaczenie dokumentów',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 500,
                        currency: 'pln'
                    }
                }
            },
            {
                label: 'Opinia rzeczoznawcy',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 500,
                        currency: 'pln'
                    }
                }
            },
            {
                label: 'Zgłoszenie akcyzy',
                input: {
                    type: 'checkbox',
                    props: {
                        value: 500,
                        currency: 'pln'
                    }
                }
            },
            {
                label: 'Prowizja (netto)',
                input: {
                    type: 'no-choice',
                    props: {
                        value: 3000,
                        currency: 'pln'
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
                    currency: 'pln'
                }
            },
            variant: 'outline'
        } as CalculatorRowProps
    },


    UNIVERSAL: {
        SOCIALS: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://www.linkedin.com/',
            twitter: 'https://www.twitter.com/'
        }
    }
};
