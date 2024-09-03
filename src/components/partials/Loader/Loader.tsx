'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { useIsPageLoaded } from '@/store/useGlobalStore';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Loader.module.scss';

const variants = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: 0
    },
    exit: {
        x: '100%'
    },
    transition: {
        duration: 0.3,
        ease: [0.5, 0, 0.1, 1]
    }
};

const Loader = (): JSX.Element => {

    const isPageLoaded = useIsPageLoaded();

    return (
        <AnimatePresence initial={false}>
            {!isPageLoaded &&
                <motion.div key='loader' {...variants} className={classNames(styles.wrapper)}>
                    <Icon name='logo' />
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default Loader;