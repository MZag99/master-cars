
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import useAnimation from '@/hooks/useAnimation';

import styles from './Numbers.module.scss';

export type NumbersProps = {
    items: NumbersItem[];
};

export type NumbersItem = {
    value: number | string;
    label: string;
    suffix?: string;
};

const Numbers = ({ items }: NumbersProps): JSX.Element => {

    const ref = useRef<HTMLUListElement>(null);
    const childrenRef = useRef<HTMLLIElement[]>([]);

    useEffect(() => {
        if (!ref.current) return;
        childrenRef.current = Array.from(ref.current.children) as HTMLLIElement[];
    }, []);

    useAnimation(childrenRef, { name: 'fadeUp', joined: true, options: { delay: 0.3, duration: 1, stagger: 0.1, ease: 'power3.out' } });
    useAnimation(ref, { name: 'count', joined: true });

    return (
        <ul ref={ref} className={styles.wrapper}>
            {items.map((item, i) =>
                <li key={i}>
                    <span className={classNames(styles.value, 'font-size-90')}>
                        <span className='js-number'>{item.value}</span>
                        {item.suffix && <span>{item.suffix}</span>}
                    </span>
                    <span className={classNames(styles.label, 'font-size-30')}>{item.label}</span>
                </li>
            )}
        </ul>
    );
};
export default Numbers;
