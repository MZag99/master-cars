import classNames from 'classnames';
import { useMemo, type ReactNode } from 'react';

import styles from './Heading.module.scss';

type HeadingProps = {
    children: ReactNode;
    className?: string;
};

export const Heading = ({ children, className }: HeadingProps): JSX.Element => {
    return <div className={className}>{children}</div>;
};


type TitleProps = {
    children: string;
    size?: 'small' | 'medium' | 'large' | 'extra-large';
};

export const Title = ({ size = 'medium', children }: TitleProps): JSX.Element => {

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

    return <Tag className={classNames(styles.title, data.fontSize)} dangerouslySetInnerHTML={{ __html: children }}></Tag>;
};


type SubtitleProps = {
    children: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return <span className={classNames(styles.subtitle, 'font-size-16')}>{children}</span>;
};