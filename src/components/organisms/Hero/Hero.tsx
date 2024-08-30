'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@/components/atoms/Button/Button';
import Scroll from '@/components/atoms/Scroll/Scroll';
import { Heading, Subtitle, Title } from '@/components/molecules/Heading/Heading';
import { CheckboxInput } from '@/components/atoms/CalculatorInputs/CalculatorInputs';

import styles from './Hero.module.scss';

export type HeroProps = {
    title: string;
    subtitle: string;
    image: StaticImageData;
}

const SCROLL_TIMEOUT = 3000;

const Hero = ({ title, subtitle, image }: HeroProps): JSX.Element => {

    const [scrollVisible, setScrollVisible] = useState<boolean>(false);
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
        <div className={classNames(styles.wrapper, 'module-wrapper')}>

            <div className={styles.image}>
                <Image fill src={image} alt='Hero image' />
            </div>

            <Heading className={styles.text}>

                <Title size='extra-large'>{title}</Title>

                <Subtitle>{subtitle}</Subtitle>

                <div className={styles.buttons}>
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