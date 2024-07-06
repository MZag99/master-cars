import type { ReactNode } from 'react';
import type { icons } from '../Icon/Icon';

import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Button.module.scss';

type ButtonProps = {
    variant: 'light' | 'dark' | 'accent' | 'outline';
    big?: boolean;
    icon?: keyof typeof icons;
    children: ReactNode;
};

const Button = ({ variant, big, icon, children }: ButtonProps): JSX.Element => {
    return (
        <button className={classNames(`radius-${big ? 34 : 17}`, `font-size-${big ? 23 : 16}`, styles[`is-${variant}`], styles[`is-${big ? 'big' : 'small'}`])}>
            <span className={styles.text}>{children}</span>
            {icon && <Icon className={styles.icon} name={icon} />}
        </button>
    );
};

export default Button;