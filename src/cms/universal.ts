import type { FooterProps } from '@/components/partials/Footer/Footer';
import type { HeaderProps } from '@/components/partials/Header/Header';
import type { SocialsProps } from '@/components/partials/Socials/Socials';

import { SOCIAL_LINKS } from '@/static/constants';

export const CMS_UNIVERSAL = {
    HEADER: {
        items: [
            {
                button: {
                    variant: 'outline',
                    icon: 'otomoto'
                },
                link: SOCIAL_LINKS.OTOMOTO,
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
                name: 'instagram',
                link: SOCIAL_LINKS.INSTAGRAM
            },
            {
                name: 'whatsapp',
                link: SOCIAL_LINKS.WHATSAPP
            }
        ]
    } as SocialsProps,


    CONTACT: {
        receiverData: {
            serviceId: 'service_j32kch9',
            templateId: 'template_f8g0uep',
            userId: 'T4LlAKopzKbik7ItK'
        },
        emailButton: {
            email: 'mailto:zagojski.michal.99@gmail.com',
            copy: 'Napisz do nas'
        },
        contactItems: [
            {
                name: 'Maciej',
                phoneNumber: '+48 507 515 404',
                email: 'kontakt@usauto.com.pl',
                otherInfo: 'Pon - Pt: 9:00 - 17:00'
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
            }
        ]
    } as FooterProps
};