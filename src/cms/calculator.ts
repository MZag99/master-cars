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
                            { minValue: 0, maxValue: 49.99, stepValue: 27.50 },
                            { minValue: 50.00, maxValue: 99.99, stepValue: 50.00 },
                            { minValue: 100.00, maxValue: 199.99, stepValue: 90.00 },
                            { minValue: 200.00, maxValue: 299.99, stepValue: 135.00 },
                            { minValue: 300.00, maxValue: 349.99, stepValue: 137.50 },
                            { minValue: 350.00, maxValue: 399.99, stepValue: 140.00 },
                            { minValue: 400.00, maxValue: 449.99, stepValue: 182.50 },
                            { minValue: 450.00, maxValue: 499.99, stepValue: 185.00 },
                            { minValue: 500.00, maxValue: 549.99, stepValue: 212.50 },
                            { minValue: 550.00, maxValue: 599.99, stepValue: 215.00 },
                            { minValue: 600.00, maxValue: 699.99, stepValue: 245.00 },
                            { minValue: 700.00, maxValue: 799.99, stepValue: 270.00 },
                            { minValue: 800.00, maxValue: 899.99, stepValue: 295.00 },
                            { minValue: 900.00, maxValue: 999.99, stepValue: 325.00 },
                            { minValue: 1000.00, maxValue: 1199.99, stepValue: 385.00 },
                            { minValue: 1200.00, maxValue: 1299.99, stepValue: 415.00 },
                            { minValue: 1300.00, maxValue: 1399.99, stepValue: 435.00 },
                            { minValue: 1400.00, maxValue: 1499.99, stepValue: 455.00 },
                            { minValue: 1500.00, maxValue: 1599.99, stepValue: 470.00 },
                            { minValue: 1600.00, maxValue: 1699.99, stepValue: 495.00 },
                            { minValue: 1700.00, maxValue: 1799.99, stepValue: 510.00 },
                            { minValue: 1800.00, maxValue: 1999.99, stepValue: 540.00 },
                            { minValue: 2000.00, maxValue: 2399.99, stepValue: 590.00 },
                            { minValue: 2400.00, maxValue: 2499.99, stepValue: 605.00 },
                            { minValue: 2500.00, maxValue: 2999.99, stepValue: 650.00 },
                            { minValue: 3000.00, maxValue: 3499.99, stepValue: 775.00 },
                            { minValue: 3500.00, maxValue: 4499.99, stepValue: 935.00 },
                            { minValue: 4500.00, maxValue: 5999.99, stepValue: 1000.00 },
                            { minValue: 6000.00, maxValue: 7499.99, stepValue: 1050.00 },
                            { minValue: 7500.00, maxValue: 9999.99, stepValue: 1090.00 },
                            { minValue: 10000.00, maxValue: 14999.99, stepValue: 1200.00 },
                            { minValue: 15000.00, maxValue: 'infinity', isRelative: true, stepValue: 0.1225 }
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
                            { name: 'Abilene TX', value: 1705 },
                            { name: 'ACE - Carson CA', value: 2200 },
                            { name: 'ACE - Perris CA', value: 2215 },
                            { name: 'Adelanto CA', value: 2260 },
                            { name: 'Akron-Canton OH', value: 1530 },
                            { name: 'Albany NY', value: 1425 },
                            { name: 'Albuquerque, NM', value: 1870 },
                            { name: 'Altoona', value: 1505 },
                            { name: 'Amarillo TX', value: 1830 },
                            { name: 'Anaheim CA', value: 2230 },
                            { name: 'Appleton WI', value: 1575 },
                            { name: 'Andrews', value: 1690 },
                            { name: 'Arizona', value: 2000 },
                            { name: 'Antelope', value: 2230 },
                            { name: 'Ashland KY', value: 1850 },
                            { name: 'Asheville NC', value: 1540 },
                            { name: 'Atlanta GA', value: 1490 },
                            { name: 'Atlanta East GA', value: 1485 },
                            { name: 'Atlanta North GA', value: 1500 },
                            { name: 'Austin TX', value: 1530 },
                            { name: 'Avenel NJ', value: 1270 },
                            { name: 'Bakersfield CA', value: 2395 },
                            { name: 'Baltimore MD', value: 1455 },
                            { name: 'Baton Rouge LA', value: 1660 },
                            { name: 'Birmingham AL', value: 1595 },
                            { name: 'Boise ID', value: 2650 },
                            { name: 'Boston', value: 1460 },
                            { name: 'Boston - Shirley MA', value: 1495 },
                            { name: 'Bowling Green KY', value: 1700 },
                            { name: 'Bridgeport PA', value: 1355 },
                            { name: 'Brighton MO', value: 1625 },
                            { name: 'Buckhannon WV', value: 1780 },
                            { name: 'Buffalo NY', value: 1720 },
                            { name: 'Burlington', value: 1660 },
                            { name: 'Candia NH', value: 1490 },
                            { name: 'Catersville', value: 1520 },
                            { name: 'Central New Jersey', value: 1315 },
                            { name: 'Chambersburg PA', value: 1485 },
                            { name: 'Charleston SC', value: 1405 },
                            { name: 'Charleston WV', value: 1695 },
                            { name: 'Charlotte NC', value: 1535 },
                            { name: 'Chattanoga TN', value: 1665 },
                            { name: 'Chicago', value: 1625 },
                            { name: 'China Grove NC', value: 1530 },
                            { name: 'Cicero IN', value: 1750 },
                            { name: 'Cincinnati', value: 1400 },
                            { name: 'Clearwater FL', value: 1450 },
                            { name: 'Cleveland', value: 1750 },
                            { name: 'Colorado Springs CO', value: 2030 },
                            { name: 'Colton CA', value: 2230 },
                            { name: 'Columbia MO', value: 1790 },
                            { name: 'Columbia SC', value: 1420 },
                            { name: 'Columbus OH', value: 1550 },
                            { name: 'Concord MA', value: 1740 },
                            { name: 'Concord NC', value: 1500 },
                            { name: 'Corpus Christi TX', value: 1580 },
                            { name: 'Crashedtoys Dallas', value: 1540 },
                            { name: 'Crashedtoys Bethel MN', value: 1925 },
                            { name: 'Crashedtoys Eldridge', value: 1700 },
                            { name: 'Crashedtoys Minneapolis', value: 1950 },
                            { name: 'Culpeper VA', value: 1505 },
                            { name: 'Dallas TX', value: 1600 },
                            { name: 'Dallas/Ft. Worth TX', value: 1555 },
                            { name: 'Danville VA', value: 1725 },
                            { name: 'Dayton OH', value: 1590 },
                            { name: 'Darlington', value: 1460 },
                            { name: 'Davenport', value: 2065 },
                            { name: 'Denver CO', value: 2035 },
                            { name: 'Des Moines IA', value: 1855 },
                            { name: 'Detroit MI', value: 1775 },
                            { name: 'Dothan AL.', value: 1535 },
                            { name: 'Dundalk MD', value: 1445 },
                            { name: 'Dyer IN', value: 1625 },
                            { name: 'Earlington KY', value: 1690 },
                            { name: 'East Bay', value: 2300 },
                            { name: 'El Paso TX', value: 1805 },
                            { name: 'Englishtown NJ', value: 1270 },
                            { name: 'Erie PA', value: 1775 },
                            { name: 'Eugene OR', value: 2565 },
                            { name: 'Exeter RI', value: 1400 },
                            { name: 'Fairburn GA', value: 1475 },
                            { name: 'Fayetteville AR', value: 1930 },
                            { name: 'Flint Mi', value: 1710 },
                            { name: 'Fontana CA', value: 2240 },
                            { name: 'Fort Wayne IN', value: 1775 },
                            { name: 'Frederick MD', value: 1455 },
                            { name: 'Frederickburg VA', value: 1495 },
                            { name: 'Fremont CA', value: 2255 },
                            { name: 'Fresno CA', value: 2360 },
                            { name: 'Ft. Pierce FL', value: 1410 },
                            { name: 'Ft. Worth TX', value: 1590 },
                            { name: 'Ft.Lauderdale FL', value: 1325 },
                            { name: 'Glassboro NJ', value: 1365 },
                            { name: 'Golden Gate', value: 2075 },
                            { name: 'Graham WA', value: 2325 },
                            { name: 'Great Lakes', value: 1775 },
                            { name: 'Grand Rapids', value: 1695 },
                            { name: 'Greensboro NC', value: 1530 },
                            { name: 'Greenville SC', value: 1495 },
                            { name: 'Greer SC', value: 1470 },
                            { name: 'Grenada MS', value: 1805 },
                            { name: 'Gulf Coast MS', value: 1730 },
                            { name: 'Hammond IN', value: 1680 },
                            { name: 'Hampton VA', value: 1610 },
                            { name: 'Harrisburg PA', value: 1550 },
                            { name: 'Harrisonburg VA', value: 1580 },
                            { name: 'Hartford', value: 1530 },
                            { name: 'Hartford Springfield', value: 1530 },
                            { name: 'Hayward CA', value: 2240 },
                            { name: 'High Deser', value: 2240 },
                            { name: 'Houston TX', value: 1440 },
                            { name: 'Huntsville', value: 1585 },
                            { name: 'Indianapolis IN', value: 1680 },
                            { name: 'Ionia MI', value: 1715 },
                            { name: 'Jackson MS', value: 1760 },
                            { name: 'Jacksonville FL', value: 1410 },
                            { name: 'Kansas City KS', value: 1880 },
                            { name: 'Keystone Pennsylvania', value: 1395 },
                            { name: 'Kincheloe MI', value: 2125 },
                            { name: 'Knoxville TN', value: 1625 },
                            { name: 'Lafayette LA', value: 1700 },
                            { name: 'Lakeland FL', value: 1565 },
                            { name: 'Lansing MI', value: 1880 },
                            { name: 'Las Vegas NV', value: 2400 },
                            { name: 'Laurel MD', value: 1445 },
                            { name: 'Lexington KY', value: 1700 },
                            { name: 'Lincoln IL', value: 1840 },
                            { name: 'Lincoln NE', value: 1725 },
                            { name: 'Little Rock AR', value: 1770 },
                            { name: 'Livingston LA', value: 1605 },
                            { name: 'Long Beach CA', value: 2220 },
                            { name: 'Long Island NY', value: 1485 },
                            { name: 'Longview TX', value: 1760 },
                            { name: 'Los Angeles CA', value: 2275 },
                            { name: 'Los Banos CA', value: 2335 },
                            { name: 'Louisville KY', value: 1660 },
                            { name: 'Lubbock TX', value: 1820 },
                            { name: 'Lumberton NC', value: 1400 },
                            { name: 'Lynchburg VA', value: 1555 },
                            { name: 'Macon GA', value: 1450 },
                            { name: 'Madison WI', value: 1655 },
                            { name: 'Manchester NH', value: 1460 },
                            { name: 'Mansfield OH', value: 1570 },
                            { name: 'McAllen TX', value: 1640 },
                            { name: 'McMinnville', value: 1670 },
                            { name: 'Medford OR', value: 2425 },
                            { name: 'Memphis TN', value: 1710 },
                            { name: 'Miami FL', value: 1325 },
                            { name: 'Miami North FL', value: 1395 },
                            { name: 'Milan IL', value: 1715 },
                            { name: 'Milton FL', value: 1465 },
                            { name: 'Milwaukee WI', value: 1630 },
                            { name: 'Minneapolis MN', value: 1810 },
                            { name: 'Mississippi', value: 1580 },
                            { name: 'Mobile AL', value: 1665 },
                            { name: 'Monroe LA', value: 1600 },
                            { name: 'Montgomery AL', value: 1550 },
                            { name: 'Myrtle Beach SC', value: 1465 },
                            { name: 'Nashville TN', value: 1560 },
                            { name: 'New Hampshire', value: 1430 },
                            { name: 'New Jersey', value: 1315 },
                            { name: 'New Orleans LA', value: 1665 },
                            { name: 'Newburgh', value: 1475 },
                            { name: 'Newnan', value: 1450 },
                            { name: 'Nashua NH', value: 1455 },
                            { name: 'Norfolk VA', value: 1475 },
                            { name: 'North MS', value: 1600 },
                            { name: 'North Seattle WA', value: 2365 },
                            { name: 'Oklahoma City OK', value: 1810 },
                            { name: 'Orlando FL', value: 1475 },
                            { name: 'Paducah KY', value: 1790 },
                            { name: 'Palm Springs CA', value: 2395 },
                            { name: 'Panama City FL', value: 1510 },
                            { name: 'Pasco WA', value: 2635 },
                            { name: 'Pensacola FL', value: 1505 },
                            { name: 'Philadelphia PA', value: 1335 },
                            { name: 'Phoenix AZ', value: 2300 },
                            { name: 'Phoenix East Valley', value: 2300 },
                            { name: 'Phoenix West', value: 2270 },
                            { name: 'Pittsburgh PA', value: 1605 },
                            { name: 'Pocatello ID', value: 2570 },
                            { name: 'Portland OR', value: 2395 },
                            { name: 'Prescott AZ', value: 2300 },
                            { name: 'Providence RI', value: 1425 },
                            { name: 'Raleigh NC', value: 1445 },
                            { name: 'Reno NV', value: 2355 },
                            { name: 'Rochester NY', value: 1445 },
                            { name: 'Rochester MN', value: 1885 },
                            { name: 'Rogersville TN', value: 1620 },
                            { name: 'Rock Hill SC', value: 1460 },
                            { name: 'Rockford IL', value: 1585 },
                            { name: 'Sacramento CA', value: 2385 },
                            { name: 'Salt Lake City UT', value: 2470 },
                            { name: 'San Antonio TX', value: 1605 },
                            { name: 'San Diego CA', value: 2315 },
                            { name: 'San Francisco CA', value: 2380 },
                            { name: 'Santa Ana CA', value: 2300 },
                            { name: 'Santa Fe NM', value: 1965 },
                            { name: 'Savannah GA', value: 1355 },
                            { name: 'Seattle WA', value: 2435 },
                            { name: 'Seattle North WA', value: 2350 },
                            { name: 'Shady Spring WV', value: 1675 }
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
