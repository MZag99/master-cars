'use client';
import type { ButtonProps } from '@/components/atoms/Button/Button';

import Link from 'next/link';
import { useMemo } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import useScrollDirection from '@/hooks/useScrollDirection';

import Icon from '@/components/atoms/Icon/Icon';
import Button from '@/components/atoms/Button/Button';
import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

import styles from './Header.module.scss';

export type HeaderProps = {
    items: {
        button?: Omit<ButtonProps, 'children'>;
        link: string;
        name: string;
    }[]
}

const Header = ({ items }: HeaderProps): JSX.Element => {

    const pathname = usePathname();
    const { down } = useScrollDirection();
    
    const isHidden = useMemo(() => down, [down]);

    return (
        <header className={classNames(styles.wrapper, isHidden && styles['is-hidden'])}>

            <div className={styles.logo}>
                <Link href='/'>
                    <Icon name='logo' />
                </Link>
            </div>

            <nav className={styles.nav}>
                <ul>
                    {items.map((item, i) => {
                        return item.button ?
                            <li key={i}>
                                <Button variant={item.button.variant} icon={item.button.icon} link={item.link}>{item.name}</Button>
                            </li> :
                            <LinkListItem key={i} href={item.link} isActive={pathname === item.link}>
                                {item.name}
                            </LinkListItem>;
                    })}
                </ul>
            </nav>

            <nav className={styles['aside-nav']}>
                <ul>
                    <li>
                        <Button variant='accent' icon='phone'>Kontakt</Button>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
