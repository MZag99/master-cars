import type { Metadata } from 'next';

import classNames from 'classnames';

import fonts from '@/utils/fonts';

import Header from '@/components/partials/Header/Header';
import Lightbox from '@/components/partials/Lightbox/Lightbox';

import '@/styles/main.scss';

export const metadata: Metadata = {
    title: 'Master Cars',
    description: 'Master Cars - import aut z USA'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pl">
            <body className={classNames(fonts.SFPro.variable, fonts.Stolzl.variable)}>
                <h1 className='sr-only'>Master Cars - import aut z USA</h1>
                <Header />
                {children}
                <Lightbox />
            </body>
        </html>
    );
}
