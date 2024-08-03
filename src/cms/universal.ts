import type { FooterProps } from '@/components/partials/Footer/Footer';
import type { HeaderProps } from '@/components/partials/Header/Header';
import type { SocialsProps } from '@/components/partials/Socials/Socials';

export const CMS_UNIVERSAL = {
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
        ]
    } as SocialsProps,
    CONTACT: {
        info: 'ul. Pana Balcera 8/110<br/>20-631, Lublin<br/>NIP 7121575499<br/>Regon 1283726619283981',
        emailButton: {
            email: 'mailto:zagojski.michal.99@gmail.com',
            copy: 'Napisz do nas'
        },
        contactItems: [
            {
                name: 'Jan Kowalski',
                phoneNumber: '+48 123 456 789',
                email: 'zagojski.michal.99@gmail.com'
            },
            {
                name: 'Jan Kowalski',
                phoneNumber: '+48 123 456 789',
                email: 'zagojski.michal.99@gmail.com'
            }
        ]
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