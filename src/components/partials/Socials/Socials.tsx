'use client';

import type { IconProps } from '@/components/atoms/Icon/Icon';

import classNames from 'classnames';
import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import useFooterInView from '@/hooks/useFooterInView';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Socials.module.scss';

export type SocialsProps = {
    items: {
        name: IconProps['name'];
        link: string;
    }[];
    isHiding?: boolean;
    className?: string;
};

const Socials = ({ items, isHiding, className }: SocialsProps): JSX.Element => {
    const isFooterInView = useFooterInView();
    const pathname = usePathname();

    const shouldHide = useMemo(() => {
        return pathname !== '/' || (isHiding && isFooterInView);
    }, [pathname, isHiding, isFooterInView]);

    useEffect(() => {
        console.log(shouldHide);
    }, [shouldHide]);

    return (
        <ul className={classNames(className ?? styles.wrapper, shouldHide && styles['is-hidden'], 'radius-17')}>
            {items && items.map((item, i) =>
                <li key={i}>
                    <a href={item.link} target='_blank'><Icon name={item.name} /></a>
                </li>
            )}
        </ul>
    );
};

export default Socials;