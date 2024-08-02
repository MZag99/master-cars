import Link from 'next/link';

import styles from './LinkListItem.module.scss';

const LinkListItem = ({ href, children }: { href: string; children: string }): JSX.Element => {
    return (
        <li className={styles['wrapper']}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default LinkListItem;