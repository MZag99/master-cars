'use client';

import type { IconProps } from '@/components/atoms/Icon/Icon';

import classNames from 'classnames';

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

    return (
        <ul className={classNames(className ?? styles.wrapper, isHiding && isFooterInView && styles['is-hidden'], 'radius-17')}>
            {items && items.map((item, i) =>
                <li key={i}>
                    <a href={item.link} target='_blank'><Icon name={item.name} /></a>
                </li>
            )}
        </ul>
    );
};

export default Socials;