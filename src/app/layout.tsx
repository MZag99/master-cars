import type { Metadata } from 'next';

import classNames from 'classnames';

import fonts from '@/utils/fonts';
import { CMS_UNIVERSAL } from '@/cms/universal';

import Header from '@/components/partials/Header/Header';
import Loader from '@/components/partials/Loader/Loader';
import Footer from '@/components/partials/Footer/Footer';
import Contact from '@/components/organisms/Contact/Contact';
import Lightbox from '@/components/partials/Lightbox/Lightbox';

import '@/styles/main.scss';

export const metadata: Metadata = {
    title: 'Master Cars',
    description: 'Master Cars - import aut z USA'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang='pl'>
            <body className={classNames(fonts.SFPro.variable, fonts.Stolzl.variable)}>

                <h1 className='sr-only'>Master Cars - import aut z USA</h1>

                <Header {...CMS_UNIVERSAL.HEADER} />

                {children}

                <Lightbox />

                <Loader />

                <Contact {...CMS_UNIVERSAL.CONTACT} />

                <Footer {...CMS_UNIVERSAL.FOOTER} />

            </body>
        </html>
    );
}
