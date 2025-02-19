import Link from 'next/link';
import classNames from 'classnames';

import useFontSize from '@/hooks/useFontSize';

import styles from './LinkListItem.module.scss';

type LinkListItemProps = { href: string; children: string; isActive: boolean, className?: string };

const LinkListItem = ({ href, children, isActive, className }: LinkListItemProps): JSX.Element => {
    return (
        <li className={classNames(styles['wrapper'], isActive && styles['is-active'], className, useFontSize([18, 20]))}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default LinkListItem;