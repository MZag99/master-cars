'use client';

import Button from '@/components/atoms/Button/Button';
import styles from './Lightbox.module.scss';
import { useGlobalStoreActions, useLightbox } from '@/store/useGlobalStore';
import classNames from 'classnames';
import ShowcaseModal from '@/components/molecules/ShowcaseModal/ShowcaseModal';
import { AnimatePresence } from 'framer-motion';

const Lightbox = (): JSX.Element => {

    const lightboxData = useLightbox();
    const { setLightbox } = useGlobalStoreActions();

    return (
        <div className={classNames(styles.wrapper, lightboxData && styles['is-open'])}>
            <AnimatePresence>
                <ShowcaseModal />
            </AnimatePresence>
        </div>
    );
};

export default Lightbox;