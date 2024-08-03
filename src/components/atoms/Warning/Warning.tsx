import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Warning.module.scss';

export type WarningProps = {
    text: string;
}

const Warning = ({ text }: WarningProps): JSX.Element => {
    return (
        <div className={classNames(styles.wrapper, 'radius-17', 'font-size-12')}>
            <Icon name='warning' />
            <span className={styles.text}>{text}</span>
        </div>
    );
};

export default Warning;