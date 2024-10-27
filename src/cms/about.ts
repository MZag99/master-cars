import type { TextProps } from '@/components/organisms/Text/Text';

// Fotki do modułu Showcase w sekcji Stats:
import { SOCIAL_LINKS } from '@/static/constants';

import HeroImage from '@/assets/images/hero-image.jpg';
// ściezka do fotek aut: '@/assets/images/cars/[NAZWA_PLIKU]'
import BMWImage1 from '@/assets/images/cars/bmw/DSC_0212-min.jpg';
import BMWImage2 from '@/assets/images/cars/bmw/DSC_0215-min.jpg';
import BMWImage3 from '@/assets/images/cars/bmw/DSC_0218-min.jpg';
import BMWImage4 from '@/assets/images/cars/bmw/DSC_0225-min.jpg';
import BMWImage5 from '@/assets/images/cars/bmw/DSC_0227-min.jpg';

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
                text: 'Zajmujemy się kompleksową obsługą importu samochodów z USA, oferując wsparcie na każdym etapie – od wyszukiwania pojazdu, przez jego zakup, aż po transport i dostarczenie do klienta. Dzięki naszej współpracy z zaufanymi partnerami w Stanach Zjednoczonych gwarantujemy pewność i bezpieczeństwo transakcji. Zapewniamy również pomoc w załatwieniu wszelkich formalności celnych oraz technicznych, by samochód trafił do Ciebie bez zbędnych komplikacji.'
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
                value: '5'
            },
            {
                label: 'Wygranych aukcji',
                value: '1000+'
            },
            {
                label: 'Taniej kupując u nas',
                value: '30',
                suffix: '%'
            }
        ],
        showcaseItems: [
            {
                year: 2015,
                carName: 'BMW M4',
                horsepower: 550,
                description: 'Po więcej informacji zapraszamy do kontaktu',
                countryOrigin: 'USA',
                overallCostPln: 180000,
                pictures: [
                    BMWImage1,
                    BMWImage2,
                    BMWImage3,
                    BMWImage4,
                    BMWImage5
                ]
            }
        ],
        /**
         * Tag <a> oznacza link do zewnętrznej strony, pod href podaj adres tej strony, a target="_blank" oznacza otwarcie nowego okna w przeglądarce.
         */
        disclaimers: [
            `Całą naszą ofertę znajdziesz na naszym profilu <a href=${SOCIAL_LINKS.OTOMOTO} target="_blank">OTOMOTO</a>.`, 
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