'use client';

import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

import { useLightbox } from '@/store/useGlobalStore';

import ShowcaseModal from '@/components/molecules/ShowcaseModal/ShowcaseModal';

import styles from './Lightbox.module.scss';

const Lightbox = (): JSX.Element => {

    const lightboxData = useLightbox();

    return (
        <div className={classNames(styles.wrapper, lightboxData && styles['is-open'])}>
            <AnimatePresence>
                <ShowcaseModal />
            </AnimatePresence>
        </div>
    );
};

export default Lightbox;