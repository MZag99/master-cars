'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import useAnimation from '@/hooks/useAnimation';
import { useIsPageLoaded } from '@/store/useGlobalStore';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './Loader.module.scss';

type stageType = 'left' | 'middle' | 'right';

const STAGES = ['left', 'middle', 'right'];


const Loader = (): JSX.Element => {

    const [stage, setStage] = useState<'left' | 'middle' | 'right'>('middle');

    const ref = useRef<HTMLDivElement>(null);

    const isPageLoaded = useIsPageLoaded();

    useAnimation(ref, { name: 'slideUp', options: { duration: 0.5, delay: 0.4, ease: 'power3.out' } }, [stage === 'left']);

    useEffect(() => {
        if (isPageLoaded) {
            setStage(STAGES[2] as stageType);
            setTimeout(() => setStage(STAGES[0] as stageType), 500);
        } else {
            setStage(STAGES[1] as stageType);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded]);

    return (
        <div className={classNames(styles.wrapper, styles[`is-${stage}`])}>
            <div className={styles['text-wrapper']}>
                <div ref={ref}>
                    <Icon name='logo' />
                </div>
            </div>
        </div>
    );
};

export default Loader;