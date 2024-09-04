'use client';

import type { icons } from '@/components/atoms/Icon/Icon';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import useAnimation from '@/hooks/useAnimation';
import { useIsPageLoaded } from '@/store/useGlobalStore';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Vendors.module.scss';

export type VendorsProps = {
    items: {
        logo: string;
        url: string;
    }[];
};

const Vendors = ({ items }: VendorsProps) => {

    const isPageLoaded = useIsPageLoaded();

    const wrapperRef = useRef<HTMLUListElement>(null);
    const childrenRef = useRef<HTMLLIElement[]>([]);

    useEffect(() => {
        if (!wrapperRef.current) return;
        childrenRef.current = Array.from(wrapperRef.current.children) as HTMLLIElement[];
    }, []);

    useAnimation(childrenRef, { name: 'fadeUp', joined: true, options: { delay: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' } }, [isPageLoaded]);

    return (
        <div className='module-wrapper'>
            <div></div>

            <ul ref={wrapperRef} className={styles.list}>
                {items.map((item, index) =>
                    <li className={classNames(styles.item, 'radius-17')} key={index}>
                        <a className='full' href={item.url} target='_blank' rel='noreferrer'>
                            <Icon name={item.logo as keyof typeof icons} />
                        </a>
                    </li>
                )}
            </ul>

            <div></div>
        </div>
    );
};

export default Vendors;