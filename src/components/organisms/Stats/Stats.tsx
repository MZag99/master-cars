'use client';

import type { NumbersItem } from '@/components/molecules/Numbers/Numbers';
import type { ShowcaseItem } from '@/components/molecules/Showcase/Showcase';

import { useRef } from 'react';
import classNames from 'classnames';

import useAnimation from '@/hooks/useAnimation';

import Numbers from '@/components/molecules/Numbers/Numbers';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import Showcase from '@/components/molecules/Showcase/Showcase';

import styles from './Stats.module.scss';

type StatsProps = {
    numberItems: NumbersItem[];
    showcaseItems: ShowcaseItem[];
    disclaimers: string[];
}

const Stats = ({ showcaseItems, numberItems, disclaimers }: StatsProps) => {

    const disclaimersRef = useRef<HTMLDivElement>(null);

    useAnimation(disclaimersRef, { name: 'splitUp', options: { duration: 1, delay: 0.3, ease: 'power3.out', stagger: 0.002 } });

    return (
        <div className={classNames(styles.wrapper, 'module-wrapper', 'padding-block')}>

            <Numbers items={numberItems} />
            <Showcase items={showcaseItems} />

            <div ref={disclaimersRef} className={styles.disclaimers}>
                {disclaimers.map((disclaimer, index) => (
                    <Paragraph key={index} className={styles.disclaimer}>{disclaimer}</Paragraph>
                ))}
            </div>
        </div>
    );
};

export default Stats;