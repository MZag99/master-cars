import type { TextProps } from '@/components/organisms/Text/Text';
import type { HeaderProps } from '@/components/partials/Header/Header';
import type { FooterProps } from '@/components/partials/Footer/Footer';

import HeroImage from '@/assets/images/hero-image.png';
import CamaroImage from '@/assets/images/cars/camaro-2012.jpg';
import MustangImage from '@/assets/images/cars/ford-mustang-2018.jpg';
import DodgeImage from '@/assets/images/cars/dodge-challenger-2015.jpg';

export const CMS = {
    HEADER: {
        items: [
            {
                button: {
                    variant: 'outline',
                    icon: 'otomoto'
                },
                link: '/otomoto',
                name: 'Oferta'
            },
            {
                link: '/',
                name: 'O nas'
            },
            {
                link: '/proces',
                name: 'Proces'
            },
            {
                link: '/kalkulator',
                name: 'Kalkulator'
            },
            {
                link: '/tracking',
                name: 'Tracking'
            }
        ]
    } as HeaderProps,
    HERO: {
        title: 'Sprowadzimy dla Ciebie Twoje <strong>wymarzone auto</strong>',
        subtitle: 'Import samochodów ze Stanów Zjednoczonych w korzystnych cenach.',
        image: HeroImage
    },
    ABOUT: {
        heading: {
            title: 'Czym się zajmujemy?'
        },
        text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.  Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit. In non fermentum nunc. Donec sit amet dictum arcu. In hac habitasse platea dictumst. Sed nec leo risus. Integer quis sapien euismod, dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus. dapibus libero vitae, viverra justo. Quisque ac condimentum nisi, et porttitor sem. Duis facilisis tincidunt cursus.',
        button: {
            children: 'Proces',
            variant: 'light',
            big: true,
            disclaimer: 'Zapoznaj się z naszym procesem importu',
            icon: 'arrowUp'
        },
        isDark: true
    } as TextProps,
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
                value: '20%'
            }
        ],
        showcaseItems: [
            {
                year: 2012,
                carName: 'Chevrolet Camaro',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus ut dolor.',
                countryOrigin: 'USA',
                overallCostPln: 180000,
                pictures: [
                    MustangImage,
                    MustangImage,
                    MustangImage
                ]
            }
        ],
        disclaimers: [
            'Całą naszą ofertę znajdziesz na naszym profilu <a href="https://www.facebook.com/" target="_blank">OTOMOTO</a>.',
            'Zapraszamy take na nasza grupę <a href="https://www.facebook.com/" target="_blank">WhatsApp</a>.'
        ]
    },
    TRACKING: {
        heading: {
            title: 'Czekasz na<br/>swoje auto?',
            button: {
                children: 'Tracking',
                variant: 'accent'
            }
        },
        text: 'Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.<br/><br/>Mauris id tortor nec ex consequat suscipit. Mauris id tortor nec ex consequat suscipit et eget elit.In non fermentum nunc.Donec sit amet dictum arcu.In hac habitasse platea dictumst.Sed nec leo risus.Integer quis sapien euismod, dapibus libero vitae, viverra justo.Quisque ac condimentum nisi, et porttitor sem.Duis facilisis tincidunt cursus.<br/><br/>Nasza firma do 2000 roku zajmuje się importem i sprzedażą aut ze Stanów Zjednoczonych i Kanady.Mauris id tortor nec ex consequat suscipit.',
        button: {
            children: 'Kalkulator',
            variant: 'accent',
            disclaimer: 'Sprawdź ile moesz zaoszczędzić kupując u nas',
            big: true,
            icon: 'arrowUp'
        }
    } as TextProps,
    SOCIALS: {
        items: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'whatsapp',
                link: 'https://www.whatsapp.com/'
            }
        ] as const
    },
    FOOTER: {
        copyright: '<span>©</span>Copyright 2024',
        items: [
            {
                name: 'Proces',
                link: '/proces'
            },
            {
                name: 'Kalkulator',
                link: '/kalkulator'
            },
            {
                name: 'Tracking',
                link: '/tracking'
            },
            {
                name: 'Polityka prywatności',
                link: '/polityka-prywatnosci'
            }
        ]
    } as FooterProps
};