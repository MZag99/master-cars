import localFont from 'next/font/local';

const Stolzl = localFont({
    src: [
        {
            path: '../assets/fonts/Stolzl/Stolzl.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../assets/fonts/Stolzl/Stolzl500.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../assets/fonts/Stolzl/Stolzl600.woff2',
            weight: '600',
            style: 'normal'
        },
    ],
    variable: '--font-primary',
    fallback: ['Arial', 'Helvetica', 'ui-sans-serif']
});

const SFPro = localFont({
    src: [
        {
            path: '../assets/fonts/SFPro/SFPro.woff2',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-secondary',
    fallback: ['Arial', 'Helvetica', 'ui-sans-serif']
});

const fonts = {
    Stolzl,
    SFPro
};

export default fonts;
