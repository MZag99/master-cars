import type { Metadata } from 'next';

import classNames from 'classnames';

import fonts from '@/utils/fonts';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Header from '@/components/partials/Header/Header';
import Loader from '@/components/partials/Loader/Loader';
import Footer from '@/components/partials/Footer/Footer';
import Contact from '@/components/organisms/Contact/Contact';
import Lightbox from '@/components/partials/Lightbox/Lightbox';
import MobileMenu from '@/components/partials/MobileMenu/MobileMenu';

import '@/styles/main.scss';

export const metadata: Metadata = {
    title: 'US Auto',
    description: 'US Auto - import aut z USA',
    manifest: '/site.webmanifest',
    icons: [
        {
            rel: 'icon',
            url: '/favicons/favicon-48x48.png',
            type: 'image/png',
            sizes: '48x48'
        },
        {
            rel: 'icon',
            url: '/favicons/favicon.svg',
            type: 'image/svg+xml'
        },
        {
            rel: 'shortcut icon',
            url: '/favicons/favicon.ico'
        },
        {
            rel: 'apple-touch-icon',
            url: '/favicons/apple-touch-icon.png',
            sizes: '180x180'
        }
    ],
    appleWebApp: {
        title: 'US Auto'
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang='pl'>
            <body className={classNames(fonts.SFPro.variable, fonts.Stolzl.variable)}>
                <h1 className='sr-only'>Master Cars - import aut z USA</h1>

                <Header {...CMS_UNIVERSAL.HEADER} />

                {children}

                <MobileMenu {...CMS_UNIVERSAL.HEADER} />

                <Lightbox />

                <Loader />

                <Contact id='contact' {...CMS_UNIVERSAL.CONTACT} />

                <Footer {...CMS_UNIVERSAL.FOOTER} />

            </body>
        </html>
    );
}
