import classNames from 'classnames';

import styles from './Scroll.module.scss';

type ScrollProps = {
    className?: string;
}

const Scroll = ({ className }: ScrollProps): JSX.Element => {

    return (
        <button className={classNames(styles.wrapper, className)}>
            <span className={styles.bar}>
                <span className={styles.fill}></span>
            </span>
            <span className={styles.text}>Scroll</span>
        </button>
    );
};

export default Scroll;