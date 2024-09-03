import Link from 'next/link';
import classNames from 'classnames';

import styles from './LinkListItem.module.scss';

type LinkListItemProps = { href: string; children: string; isActive: boolean };

const LinkListItem = ({ href, children, isActive }: LinkListItemProps): JSX.Element => {
    return (
        <li className={classNames(styles['wrapper'], isActive && styles['is-active'])}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default LinkListItem;