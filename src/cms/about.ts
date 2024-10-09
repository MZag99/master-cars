import type { TextProps } from '@/components/organisms/Text/Text';

// Fotki do modułu Showcase w sekcji Stats:
import { SOCIAL_LINKS } from '@/static/constants';

import HeroImage from '@/assets/images/hero-image.jpg';
// ściezka do fotek aut: '@/assets/images/cars/[NAZWA_PLIKU]'
import CamaroImage from '@/assets/images/cars/camaro-2012.jpg';
import MustangImage from '@/assets/images/cars/ford-mustang-2018.jpg';
import DodgeImage from '@/assets/images/cars/dodge-challenger-2015.jpg';

export const CMS = {
    HERO: {
        title: 'Sprowadzimy dla Ciebie Twoje <strong>wymarzone auto</strong>', // tag <strong> oznacza pogrubienie tekstu i pokolorowanie na czerowno.
        subtitle: 'Import samochodów ze Stanów Zjednoczonych w korzystnych cenach.',
        image: HeroImage
    },


    ABOUT_TEXT_MODULE: {
        id: 'about',
        heading: {
            title: 'Czym się<br/>zajmujemy?', // tag <br/> oznacza złamanie tekstu do nowej linii.
            button: {
                children: 'Proces',
                link: '/proces',
                variant: 'accent'
            }
        },
        items: [
            {
                type: 'text',
                text: 'Nasza firma <strong>od 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.</strong> Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. <br/><br/>Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. <br/><br/>Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            }
        ],
        isDark: true
    } as TextProps,


    /**
     * Wzór do dodawania nowego samochoód do sekcji Showcase w sekcji Stats:
     * {
            year: 2012,
            carName: 'Chevrolet Camaro Chevrolet Camaro Chevrolet Camaro',
            horsepower: 400,
            description: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec econsequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libervitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.',
            countryOrigin: 'USA',
            overallCostPln: 120000,
            pictures: [
                CamaroImage,
                CamaroImage,
                CamaroImage,
                CamaroImage
            ]
        },
     */
    STATS: {
        numberItems: [
            {
                label: 'Lat na rynku',
                value: '11'
            },
            {
                label: 'Wygranych aukcji',
                value: '2000'
            },
            {
                label: 'Taniej kupując u nas',
                value: '20',
                suffix: '%'
            }
        ],
        showcaseItems: [
            {
                year: 2012,
                carName: 'Chevrolet Camaro Chevrolet Camaro Chevrolet Camaro',
                horsepower: 400,
                description: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.',
                countryOrigin: 'USA',
                overallCostPln: 120000,
                pictures: [
                    CamaroImage,
                    CamaroImage,
                    CamaroImage,
                    CamaroImage
                ]
            },
            {
                year: 2015,
                carName: 'Dodge Challenger',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 150000,
                pictures: [
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage
                ]
            },
            {
                year: 2018,
                carName: 'Ford Mustang',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 180000,
                pictures: [
                    MustangImage,
                    MustangImage,
                    MustangImage
                ]
            },
            {
                year: 2012,
                carName: 'Chevrolet Camaro',
                horsepower: 400,
                description: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec econsequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libervitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.',
                countryOrigin: 'USA / Kalifornia',
                overallCostPln: 220000,
                pictures: [
                    CamaroImage,
                    CamaroImage
                ]
            },
            {
                year: 2015,
                carName: 'Dodge Challenger',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 150000,
                pictures: [
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage
                ]
            },
            {
                year: 2015,
                carName: 'Dodge Challenger',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 150000,
                pictures: [
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage
                ]
            },
            {
                year: 2015,
                carName: 'Dodge Challenger',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 150000,
                pictures: [
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage
                ]
            },
            {
                year: 2015,
                carName: 'Dodge Challenger',
                horsepower: 400,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 150000,
                pictures: [
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage,
                    DodgeImage
                ]
            }
        ],
        /**
         * Tag <a> oznacza link do zewnętrznej strony, pod href podaj adres tej strony, a target="_blank" oznacza otwarcie nowego okna w przeglądarce.
         */
        disclaimers: [
            `Całą naszą ofertę znajdziesz<br/> na naszym profilu <a href=${SOCIAL_LINKS.OTOMOTO} target="_blank">OTOMOTO</a>.`, 
            `Zapraszamy take na nasza grupę <a href=${SOCIAL_LINKS.WHATSAPP} target="_blank">WhatsApp</a>.`
        ]
    },


    TRACKING_TEXT_MODULE: {
        heading: {
            title: 'Czekasz na<br/>swoje auto?',
            button: {
                children: 'Tracking',
                link: '/tracking',
                variant: 'accent'
            }
        },
        items: [
            {
                type: 'text',
                text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.'
            }
        ],
        button: {
            children: 'Kalkulator',
            variant: 'accent',
            link: '/kalkulator',
            disclaimer: 'Sprawdź ile moesz zaoszczędzić kupując u nas',
            big: true,
            icon: 'arrowUp'
        }
    } as TextProps
};