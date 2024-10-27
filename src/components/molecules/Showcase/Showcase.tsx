'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import useAnimation from '@/hooks/useAnimation';
import { useBreakpoints } from '@/store/useBrowserStore';
import { useGlobalStoreActions } from '@/store/useGlobalStore';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Showcase.module.scss';

export type ShowcaseProps = {
    items: ShowcaseItem[];
};

export type ShowcaseItem = {
    year: number;
    carName: string;
    description: string;
    countryOrigin: string;
    horsepower: number;
    overallCostPln: number;
    pictures: StaticImageData[];
};

export type ShowcaseLabelProps = {
    text: string;
    image?: boolean;
    className?: string;
};

const Showcase = ({ items }: ShowcaseProps): JSX.Element => {

    const { setLightbox } = useGlobalStoreActions();

    const listRef = useRef<HTMLUListElement>(null);
    const listItemsRef = useRef<HTMLLIElement[]>([]);

    const breakpoint = useBreakpoints();

    useEffect(() => {
        if (!listRef.current) return;
        listItemsRef.current = Array.from(listRef.current.children) as HTMLLIElement[];
    }, []);

    useAnimation(listItemsRef, { name: 'fade', joined: true, options: { delay: 0.3, duration: 0.5, stagger: 0.1, ease: 'power3.out' } });

    return (
        <ul ref={listRef} className={styles.list}>
            {items.map((item, index) =>
                <li key={index} className={classNames(styles['item-wrapper'], breakpoint?.desktop ? 'radius-34' : 'radius-17')}>

                    <div className={styles['item-image']}>
                        <Image src={item.pictures[0].src} alt={item.carName} width={item.pictures[0].width} height={item.pictures[0].height} />
                    </div>

                    <ShowcaseLabel text={item.pictures.length.toString()} className={styles['image-label']} image />
                    <ShowcaseLabel text={item.carName} className={styles['name-label']} />

                    <button className={classNames(styles.button, 'full')} onClick={() => setLightbox(item)} />
                </li>
            )}
        </ul>
    );
};

const ShowcaseLabel = ({ text, image, className }: ShowcaseLabelProps) => {

    const breakpoint = useBreakpoints();
    const fontSize = breakpoint?.desktop ? 16 : 12;

    return (
        <span className={classNames(styles['showcase-label'], 'radius-17', `font-size-${fontSize}`, className)}>
            {text}
            {image && <Icon name='picture'/>}
        </span>
    );
};

export default Showcase;
