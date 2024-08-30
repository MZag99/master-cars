'use client';

import classNames from 'classnames';

import { useIsPageLoaded } from '@/store/useGlobalStore';

import styles from './Loader.module.scss';

const Loader = (): JSX.Element => {

    const isPageLoaded = useIsPageLoaded();

    return (
        <div className={classNames(styles.wrapper, isPageLoaded && styles['is-hidden'])}>
        </div>
    );
};

export default Loader;