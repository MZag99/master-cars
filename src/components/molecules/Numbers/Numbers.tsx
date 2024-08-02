
import classNames from 'classnames';

import styles from './Numbers.module.scss';

export type NumbersProps = {
    items: NumbersItem[];
};

export type NumbersItem = {
    value: number | string;
    label: string;
};

const Numbers = ({ items }: NumbersProps): JSX.Element => {
    return (
        <ul className={styles.wrapper}>
            {items.map((item, i) =>
                <li key={i}>
                    <span className={classNames(styles.value, 'font-size-60')}>{item.value}</span>
                    <span className={classNames(styles.label, 'font-size-30')}>{item.label}</span>
                </li>
            )}
        </ul>
    );
};
export default Numbers;
