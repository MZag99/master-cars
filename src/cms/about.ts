import type { TextProps } from '@/components/organisms/Text/Text';

// Fotki do modułu Showcase w sekcji Stats:
import { SOCIAL_LINKS } from '@/static/constants';

import HeroImage from '@/assets/images/hero-image.jpg';
// ściezka do fotek aut: '@/assets/images/cars/[NAZWA_PLIKU]'
import BMW2Image10 from '@/assets/images/cars/bmw2/DSC_0250.jpg';
import BMW2Image11 from '@/assets/images/cars/bmw2/DSC_0251.jpg';
import BMW2Image13 from '@/assets/images/cars/bmw2/DSC_0256.jpg';
//M4
import BMWImage1 from '@/assets/images/cars/bmw/DSC_0212-min.jpg';
import BMWImage2 from '@/assets/images/cars/bmw/DSC_0215-min.jpg';
import BMWImage3 from '@/assets/images/cars/bmw/DSC_0218-min.jpg';
import BMWImage4 from '@/assets/images/cars/bmw/DSC_0225-min.jpg';
import BMWImage5 from '@/assets/images/cars/bmw/DSC_0227-min.jpg';
//F30 1
import BMW2Image1 from '@/assets/images/cars/bmw2/DSC_0234 (1).jpg';
import BMW2Image2 from '@/assets/images/cars/bmw2/DSC_0235 (2).jpg';
import BMW2Image3 from '@/assets/images/cars/bmw2/DSC_0238 (2).jpg';
import BMW2Image4 from '@/assets/images/cars/bmw2/DSC_0239 (1).jpg';
import BMW2Image5 from '@/assets/images/cars/bmw2/DSC_0240 (4).jpg';
import BMW2Image6 from '@/assets/images/cars/bmw2/DSC_0241 (3).jpg';
import BMW2Image7 from '@/assets/images/cars/bmw2/DSC_0242 (1).jpg';
import BMW2Image8 from '@/assets/images/cars/bmw2/DSC_0245 (2).jpg';
import BMW2Image9 from '@/assets/images/cars/bmw2/DSC_0247 (2).jpg';
// Tucson
import TucsonImage1 from '@/assets/images/cars/tucson/DSC_0190.jpg';
import TucsonImage2 from '@/assets/images/cars/tucson/DSC_0193.jpg';
import TucsonImage3 from '@/assets/images/cars/tucson/DSC_0204.jpg';
import TucsonImage5 from '@/assets/images/cars/tucson/DSC_0206.jpg';
import TucsonImage6 from '@/assets/images/cars/tucson/DSC_0207.jpg';
import TucsonImage7 from '@/assets/images/cars/tucson/DSC_0208.jpg';
import BMW2Image12 from '@/assets/images/cars/bmw2/DSC_0254 (1).jpg';
import TucsonImage4 from '@/assets/images/cars/tucson/DSC_0205 (1).jpg';
import TucsonImage8 from '@/assets/images/cars/tucson/DSC_0210 (1).jpg';


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
                mileage: 105000,
                overallCostPln: 180000,
                pictures: [
                    BMWImage1,
                    BMWImage2,
                    BMWImage3,
                    BMWImage4,
                    BMWImage5
                ]
            },
            {
                year: 2017,
                carName: 'BMW F30 320',
                horsepower: 190,
                description: 'Po więcej informacji zapraszamy do kontaktu',
                mileage: 95000,
                overallCostPln: 70000,
                pictures: [
                    BMW2Image1,
                    BMW2Image2,
                    BMW2Image3,
                    BMW2Image4,
                    BMW2Image5,
                    BMW2Image6,
                    BMW2Image7,
                    BMW2Image8,
                    BMW2Image9,
                    BMW2Image10,
                    BMW2Image11,
                    BMW2Image12,
                    BMW2Image13
                ]
            },
            {
                year: 2017,
                carName: 'Hyundai Tucson',
                horsepower: 164,
                mileage: 98000,
                overallCostPln: 64500,
                description: 'Po więcej informacji zapraszamy do kontaktu',
                pictures: [
                    TucsonImage1,
                    TucsonImage2,
                    TucsonImage3,
                    TucsonImage4,
                    TucsonImage5,
                    TucsonImage6,
                    TucsonImage7,
                    TucsonImage8
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
                text: ''
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