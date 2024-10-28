'use client';

import type { NavigationItem } from '@/types/universal';

import { useEffect } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import { useGlobalStoreActions, useIsMenuOpen, useIsPageLoaded } from '@/store/useGlobalStore';

import Button from '@/components/atoms/Button/Button';
import LinkListItem from '@/components/molecules/LinkListItem/LinkListItem';

import styles from './MobileMenu.module.scss';

export type MobileMenuProps = {
    items: NavigationItem[];
};

const MobileMenu = ({ items }: MobileMenuProps): JSX.Element => {

    const pathname = usePathname();
    const isMenuOpen = useIsMenuOpen();
    const isPageLoaded = useIsPageLoaded();
    const { setIsMenuOpen } = useGlobalStoreActions();

    useEffect(() => {
        !isPageLoaded && isMenuOpen && setIsMenuOpen(false);
    }, [isPageLoaded, isMenuOpen, setIsMenuOpen]);

    return (
        <aside className={classNames(styles.wrapper, isMenuOpen && styles['is-open'])}>
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

            <LinkListItem className={classNames(styles.policy, 'font-size-14')} href='/polityka-prywatnosci' isActive={pathname === '/polityka-prywatnosci'}>
                Polityka prywatności
            </LinkListItem>
        </aside>
    );
};

export default MobileMenu;
