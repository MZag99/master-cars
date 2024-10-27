'use client';

import { useRef } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import Socials from '../Socials/Socials';
import { CMS_UNIVERSAL } from '@/cms/universal';
import useCssVariable from '@/hooks/useCssVariable';
import { useBreakpoints } from '@/store/useBrowserStore';

import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

import styles from './Footer.module.scss';

export type FooterProps = {
    copyright: string;
    items: {
        link: string;
        name: string;
    }[];
};

const Footer = ({ copyright, items }: FooterProps): JSX.Element => {

    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);

    const breakpoint = useBreakpoints();

    useCssVariable(ref, '--footer-height', 'clientHeight');

    return (
        <footer ref={ref} className={classNames(styles.wrapper, 'module-wrapper', breakpoint?.desktop ? 'font-size-18' : 'font-size-14')}>
            <span className={styles.copyright} dangerouslySetInnerHTML={{ __html: copyright }}></span>

            <ul className={styles.list}>
                {items.map((item, i) =>
                    <LinkListItem key={i} href={item.link} isActive={pathname === item.link}>{item.name}</LinkListItem>
                )}
            </ul>

            <Socials {...CMS_UNIVERSAL.SOCIALS} className={styles.socials} />
        </footer>
    );
};


export default Footer;