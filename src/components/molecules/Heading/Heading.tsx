import type { ButtonProps } from '@/components/atoms/Button/Button';

import classNames from 'classnames';
import { forwardRef, useMemo, type ReactNode } from 'react';

import styles from './Heading.module.scss';

type HeadingProps = {
    children: ReactNode;
    className?: string;
};

export type TitleSizes = 'small' | 'medium' | 'large' | 'extra-large';

type TitleProps = {
    children: ReactNode;
    size?: TitleSizes;
};

export type HeadingType = {
    title: string;
    size?: TitleSizes;
    subtitle?: string;
    button?: ButtonProps & { children: string }
}


export const Heading = ({ children, className }: HeadingProps): JSX.Element => {
    return <div className={className}>{children}</div>;
};


export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ size = 'medium', children }, ref): JSX.Element => {

    const data = useMemo(() => {
        switch (size) {
        case 'small':
            return { level: 4, fontSize: 'font-size-40' };
        case 'medium':
            return { level: 3, fontSize: 'font-size-60' };
        case 'large':
            return { level: 2, fontSize: 'font-size-76' };
        case 'extra-large':
            return { level: 2, fontSize: 'font-size-90' };
        default:
            return { level: 3, fontSize: 'font-size-60' };
        }
    }, [size]);

    const Tag = `h${data.level}` as 'h2' | 'h3' | 'h4';

    return <Tag ref={ref} className={classNames(styles.title, data.fontSize)} dangerouslySetInnerHTML={{ __html: children?.toString() || '' }}></Tag>;
});


type SubtitleProps = {
    children: string;
};

export const Subtitle = forwardRef<HTMLSpanElement, SubtitleProps>(({ children }, ref) => {
    return <span ref={ref} className={classNames(styles.subtitle, 'font-size-16')}>{children}</span>;
});

Title.displayName = 'Title';
Subtitle.displayName = 'Subtitle';