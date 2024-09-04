'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import useAnimation from '@/hooks/useAnimation';
import { useIsPageLoaded } from '@/store/useGlobalStore';

import styles from './Loader.module.scss';

type stageType = 'left' | 'middle' | 'right';

const STAGES = ['left', 'middle', 'right'];


const Loader = (): JSX.Element => {

    const [stage, setStage] = useState<'left' | 'middle' | 'right'>('middle');

    const ref = useRef<HTMLDivElement>(null);

    const isPageLoaded = useIsPageLoaded();

    useAnimation(ref, { name: 'splitUp', options: { duration: 0.5, delay: 0.4, stagger: 0.1, ease: 'power3.out' } }, [stage === 'left']);

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
            <div ref={ref} className={styles['text-wrapper']}>
                <span className='font-size-30 font-weight-600'>
                    Master.
                    <strong>cars</strong>
                </span>
            </div>
        </div>
    );
};

export default Loader;