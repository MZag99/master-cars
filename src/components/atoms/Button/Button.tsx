import type { icons } from '../Icon/Icon';
import type { LegacyRef, ReactNode } from 'react';

import classNames from 'classnames';
import React, { forwardRef } from 'react';

import Icon from '../Icon/Icon';
import { useBreakpoints } from '@/store/useBrowserStore';

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


const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ link, disclaimer, children, ...props }, ref): JSX.Element => {
    return link ?
        <LinkButton ref={ref as LegacyRef<HTMLAnchorElement>} link={link} {...props}>
            {children}
            {disclaimer &&
                <span className={classNames(styles.disclaimer, 'font-size-12')}>
                    {disclaimer}
                </span>
            }
        </LinkButton> :
        <RegularButton ref={ref as LegacyRef<HTMLButtonElement>} {...props}>
            {children}
            {disclaimer &&
                <span className={classNames(styles.disclaimer, 'font-size-12')}>
                    {disclaimer}
                </span>
            }
        </RegularButton>;
});


const RegularButton = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'light', big, icon, children, onClick, disabled, interactive = true, className }, ref): JSX.Element => {
    
    const breakpoint = useBreakpoints();

    return (
        <button
            ref={ref}
            onClick={onClick}
            className={classNames(
                styles.wrapper,
                disabled && styles['is-disabled'],
                !interactive && styles['is-not-interactive'],
                `radius-${big ? 34 : 17}`,
                `font-size-${!breakpoint?.desktop ? 16 : (big ? 23 : 16)}`,
                styles[`is-${variant}`],
                styles[`is-${big ? 'big' : 'small'}`],
                className
            )}
        >
            <span className={styles.text}>{children}</span>
            {icon && <Icon className={styles.icon} name={icon} />}
        </button>
    );
});


const LinkButton = forwardRef<HTMLAnchorElement, ButtonProps>(({ variant = 'light', big, icon, children, link, disabled, interactive = true, className }, ref): JSX.Element => {
    
    const breakpoint = useBreakpoints();
    
    return (
        <a
            ref={ref}
            href={link}
            target='_blank'
            className={classNames(
                styles.wrapper,
                disabled && styles['is-disabled'],
                !interactive && styles['is-not-interactive'],
                `radius-${big ? 34 : 17}`,
                `font-size-${!breakpoint?.desktop ? 16 : (big ? 23 : 18)}`,
                styles[`is-${variant}`],
                styles[`is-${big ? 'big' : 'small'}`],
                className
            )}
        >
            <span className={styles.text}>{children}</span>
            {icon && <Icon className={styles.icon} name={icon} />}
        </a>
    );
});


Button.displayName = 'Button';
RegularButton.displayName = 'RegularButton';
LinkButton.displayName = 'LinkButton';

export default Button;