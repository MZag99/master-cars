import type { ReactNode } from 'react';
import type { icons } from '../Icon/Icon';

import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Button.module.scss';

type ButtonProps = {
    variant: 'light' | 'dark' | 'accent' | 'outline';
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    interactive?: boolean;
    link?: string;
    big?: boolean;
    icon?: keyof typeof icons;
    className?: string;
};

const Button = ({ link, ...props }: ButtonProps): JSX.Element => {
    return link ? <LinkButton link={link} {...props} /> : <RegularButton {...props} />;
};


const RegularButton = ({ variant, big, icon, children, onClick, disabled, interactive = true, className }: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                className,
                styles.wrapper,
                disabled && styles['is-disabled'],
                !interactive && styles['is-not-interactive'],
                `radius-${big ? 34 : 17}`,
                `font-size-${big ? 23 : 16}`,
                styles[`is-${variant}`],
                styles[`is-${big ? 'big' : 'small'}`]
            )}
        >
            <span className={styles.text}>{children}</span>
            {icon && <Icon className={styles.icon} name={icon} />}
        </button>
    );
};


const LinkButton = ({ variant, big, icon, children, link, disabled, interactive = true, className }: ButtonProps): JSX.Element => {
    return (
        <a
            href={link}
            target='_blank'
            className={classNames(
                className,
                styles.wrapper,
                disabled && styles['is-disabled'],
                !interactive && styles['is-not-interactive'],
                `radius-${big ? 34 : 17}`,
                `font-size-${big ? 23 : 16}`,
                styles[`is-${variant}`],
                styles[`is-${big ? 'big' : 'small'}`]
            )}
        >
            <span className={styles.text}>{children}</span>
            {icon && <Icon className={styles.icon} name={icon} />}
        </a>
    );
};

export default Button;