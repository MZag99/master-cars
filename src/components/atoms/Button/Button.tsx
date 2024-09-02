import type { ReactNode } from 'react';
import type { icons } from '../Icon/Icon';

import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Button.module.scss';

export type ButtonProps = {
    children?: ReactNode;
    variant?: 'light' | 'dark' | 'accent' | 'outline';
    onClick?: () => void;
    disabled?: boolean;
    interactive?: boolean;
    disclaimer?: string;
    link?: string;
    big?: boolean;
    icon?: keyof typeof icons;
    className?: string;
};


const Button = ({ link, disclaimer, children, ...props }: ButtonProps): JSX.Element => {
    return link ?
        <LinkButton link={link} {...props}>{children}{disclaimer && <span className={classNames(styles.disclaimer, 'font-size-10')}>{disclaimer}</span>}</LinkButton> :
        <RegularButton {...props}>{children}{disclaimer && <span className={classNames(styles.disclaimer, 'font-size-10')}>{disclaimer}</span>}</RegularButton>;
};


const RegularButton = ({ variant = 'light', big, icon, children, onClick, disabled, interactive = true, className }: ButtonProps): JSX.Element => {
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


const LinkButton = ({ variant = 'light', big, icon, children, link, disabled, interactive = true, className }: ButtonProps): JSX.Element => {
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