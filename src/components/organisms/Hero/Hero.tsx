'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useAnimation from '@/hooks/useAnimation';

import Button from '@/components/atoms/Button/Button';
import Scroll from '@/components/atoms/Scroll/Scroll';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';

import styles from './Hero.module.scss';

export type HeroProps = {
    title: string;
    subtitle: string;
    image: StaticImageData;
}

const SCROLL_TIMEOUT = 3000;

const Hero = ({ title, subtitle, image }: HeroProps): JSX.Element => {

    const [scrollVisible, setScrollVisible] = useState<boolean>(false);

    const buttonsRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const carRef = useRef<HTMLImageElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useAnimation(carRef, { name: 'parallax' });
    useAnimation(buttonsRef, { name: 'fadeUp', options: { delay: 3, duration: 1, ease: 'power3.out' } });
    useAnimation(titleRef, { name: 'splitUp', options: { delay: 2.3, duration: 0.8, ease: 'power3.out', stagger: 0.01 } });
    useAnimation(subtitleRef, { name: 'splitUp', options: { delay: 2.5, duration: 0.8, ease: 'power3.out', stagger: 0.01 } });

    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        scrollTimeout.current && clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            setScrollVisible(true);
        }, SCROLL_TIMEOUT);

        return () => {
            scrollTimeout.current && clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={classNames(styles.wrapper, 'module-wrapper')}>

            <div className={classNames(styles.image, 'radius-34')}>
                <Image ref={carRef} fill src={image} alt='Hero image' />
            </div>

            <Heading className={styles.text}>

                <Title ref={titleRef} size='large'>{title}</Title>

                <Subtitle ref={subtitleRef}>{subtitle}</Subtitle>

                <div ref={buttonsRef} className={styles.buttons}>
                    <Button variant='accent'>O nas</Button>
                    <Button variant='outline' icon='otomoto' link='https://www.otomoto.pl/'>Oferta</Button>
                </div>
            </Heading>

            <AnimatePresence>
                {scrollVisible &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <Scroll className={styles.scroll} />
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    );
};

export default Hero;